import firebase_admin
from firebase_admin import credentials, auth
from flask import request, jsonify
from functools import wraps


# Initialize the Firebase Admin SDK
cred = credentials.Certificate('auth/firebase_admin_sdk.json')
firebase_admin.initialize_app(cred)

def firebase_auth_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print("Checking authorization header...")
        authorization_header = request.headers.get('Authorization')
        if not authorization_header:
            print("No Authorization header found")
            return jsonify({'message': 'No Authorization header found'}), 401
        
        try:
            print("Authorization header found, verifying token...")
            token = authorization_header.split('Bearer ')[1]
            decoded_token = auth.verify_id_token(token)
            print(f"Token verified. User ID: {decoded_token['uid']}")
            request.decoded_token = decoded_token
        except Exception as e:
            print(f"Token verification failed: {str(e)}")
            return jsonify({'message': 'Invalid token provided'}), 401

        return f(*args, **kwargs)
    return decorated_function
