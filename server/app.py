from flask import Flask
from flask_cors import CORS
from waitress import serve

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Import and register the routes from the api folder
from api.test import testing
from api.cards import get_random_fixtures

@app.route('/')
def home():
    return "Hello, Flask with Waitress!"

if __name__ == '__main__':
    serve(app, host='0.0.0.0', port=5001)