from flask import Blueprint, jsonify, request
from auth.firebase_utils import firebase_auth_required
from app import app
import random

# List of Premier League teams for the 2023/2024 season
premier_league_teams = [
    "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", 
    "Burnley", "Chelsea", "Crystal Palace", "Everton", "Fulham", 
    "Liverpool", "Luton Town", "Manchester City", "Manchester United", 
    "Newcastle United", "Nottingham Forest", "Sheffield United", 
    "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"
]

def generate_random_fixtures(num_fixtures=10):
    fixtures = []
    for _ in range(num_fixtures):
        home_team, away_team = random.sample(premier_league_teams, 2)
        fixtures.append({
            "home_team": home_team,
            "away_team": away_team
        })
    return fixtures

@app.route('/api/cards', methods=["GET","POST"])
@firebase_auth_required
def get_random_fixtures():
    user_id = request.decoded_token.get("uid")
    fixtures = generate_random_fixtures()
    
    response = {
        "user_id": user_id,
        "fixtures": fixtures
    }
    
    return jsonify(response), 200