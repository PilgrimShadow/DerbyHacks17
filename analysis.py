import csv
import json

input_file = 'clean_data/clean_louisville_inspections_simple.csv'
output_file = 'clean_data/grouped_louisville_inspections.json'

def group_by_establishment(rows):
  groups = {}

  for row in rows:
    if row[0] in groups:
      groups[row[0]]['scores'].append([row[1], row[6], row[7]])
    else:
      groups[row[0]] = {'zip': row[2], 'lat': row[4], 'long': row[5], 'type': row[3], 'scores': [[row[1], row[6], row[7]]]}

  return groups

with open(input_file, 'r') as f:
  csv_reader = csv.reader(f)
  rows = [row for row in csv_reader]

groups = group_by_establishment(rows)

with open(output_file, 'w') as g:
  json.dump(groups, g)