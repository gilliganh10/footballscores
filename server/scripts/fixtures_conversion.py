import pandas as pd
import numpy as np

# import the data for the table
df = pd.read_csv("../data/fixtures/fixtures_and_results.csv")

print(df)


print(df["Result"])

# Split the result column into two at the '-' delimiter
temp_column = df["Result"].str.split("-", n=1, expand=True)

# Change results to null for future fixtures
df["Result"] = df["Result"].replace({np.nan: None})

# Add Home team /Away team FTG:
df["Home Team Goals"] = temp_column[0].str.strip().fillna(0).astype(int)
df["Away Team Goals"] = temp_column[1].str.strip().fillna(0).astype(int)

# Split the date time into date and time
date_split = df["Date"].str.split(" ", n=1, expand=True)

# Split the date column into date and time and convert to date time objects
df["Date"] = pd.to_datetime(date_split[0]).dt.strftime(
    "%Y-%m-%d"
)  # Convert to 'YYYY-MM-DD' string format
df["Time"] = pd.to_datetime(date_split[1]).dt.strftime(
    "%H:%M:%S"
)  # Convert to 'HH:MM:SS' string format
print(df.head())

# Group the matches by Round Number, with each round containing 10 matches
grouped = (
    df.groupby("Round Number")
    .apply(lambda x: x.to_dict(orient="records"))
    .to_dict()
)
# Convert dataframe to JSON
json_df = df.to_json(
    "../data/fixtures/cleaned/2425_fixtures.json", orient="records", compression="infer"
)
# Save to JSON with the structure of 38 rounds, each containing 10 matches
import json
with open("../data/fixtures/cleaned/2425_fixtures_grouped.json", "w") as f:
    json.dump(grouped, f, indent=2)

print("JSON data saved with 38 rounds, each containing 10 matches.")
