from flask import Blueprint, jsonify, request
from auth.firebase_utils import firebase_auth_required
from app import app

@app.route('/api/test', methods=["GET","POST"])
@firebase_auth_required
def testing():
    print(f"request is {request}")
    user_id = request.decoded_token.get("uid")
    print(request)
    return user_id