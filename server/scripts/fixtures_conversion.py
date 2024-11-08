import pandas as pd
import numpy as np

# import the data for the table
df = pd.read_csv('../data/fixtures/fixtures_and_results.csv')

print(df)


print(df['Result'])

# Split the result column into two at the '-' delimiter
temp_column = df['Result'].str.split('-',n=1,expand=True)

# Add Home team /Away team FTG:
df['Home Team Goals'] = temp_column[0].str.strip().fillna(0).astype(int)
df['Away Team Goals'] = temp_column[1].str.strip().fillna(0).astype(int)

# Split the date time into date and time
date_split = df['Date'].str.split(' ',n=1,expand=True)

# Split the date column into date and time and convert to date time objects
df['Date'] = pd.to_datetime(date_split[0]).dt.strftime('%Y-%m-%d')  # Convert to 'YYYY-MM-DD' string format
df['Time'] = pd.to_datetime(date_split[1]).dt.strftime('%H:%M:%S')  # Convert to 'HH:MM:SS' string format
print(df.head())

"""
# create a dataframe with last round of fixtures
last_round_df = df[df['Round Number'] == 10]
# create a dataframe with next round of fixtures
next_round_df = df[df['Round Number'] == 11]
"""
# Convert dataframe to JSON
json_df = df.to_json('../data/fixtures/cleaned/2425_fixtures.json',orient='records', compression='infer')
print(json_df)