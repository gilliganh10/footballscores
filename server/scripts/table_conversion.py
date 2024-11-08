import pandas as pd

df = pd.read_csv('../data/tables/prem_table_08112024.csv')

print(df.head())
print(df.dtypes)


json_df = df.to_json('../data/tables/cleaned/prem_table_08112024.json',orient='records',compression='infer')
print(json_df)