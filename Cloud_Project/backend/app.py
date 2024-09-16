# from flask import Flask, request, jsonify
# import pandas as pd
# import random
# from flask_cors import CORS  # Import CORS from flask_cors module
# import pickle
# import sklearn
# print(sklearn.__version__)

# app = Flask(__name__)
# CORS(app)  # Allow all origins for development

# # Load the reduced dataset
# data_path = 'D:/Amrita_University/S6/CLOUD/Project/Dataset/reduced_dataset.csv'  # Change this to the actual path
# df = pd.read_csv(data_path)

# # Load the trained model
# model_path = 'D:/Amrita_University/S6/CLOUD/Project/Dataset/decision_tree_model.pkl'  # Change this to the actual path
# with open(model_path, 'rb') as f:
#     model = pickle.load(f)

# @app.route('/columns', methods=['GET'])
# def get_columns():
#     columns = df.columns[:-1].tolist()  # Exclude the label column
#     response = jsonify(columns)
#     response.headers.add('Access-Control-Allow-Origin', '*')  # Add CORS header
#     return response

# @app.route('/random-row', methods=['GET'])
# def get_random_row():
#     random_row = df.sample(n=1).iloc[0].drop(' Label').to_dict()  # Exclude the label column
#     response = jsonify(random_row)
#     response.headers.add('Access-Control-Allow-Origin', '*')  # Add CORS header
#     return response

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json
#     row = pd.DataFrame([data])
#     prediction = model.predict(row)[0]
#     response = jsonify({' Label': prediction})
#     response.headers.add('Access-Control-Allow-Origin', '*')  # Add CORS header
#     return response

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
import pandas as pd
import random
from flask_cors import CORS  # Import CORS from flask_cors module
import pickle
import traceback

app = Flask(__name__)
CORS(app)  # Allow all origins for development

# Load the reduced dataset
data_path = 'D:/Amrita_University/S6/CLOUD/Project/Dataset/reduced_dataset.csv'  # Change this to the actual path
df = pd.read_csv(data_path)

# Load the trained model
model_path = 'D:/Amrita_University/S6/CLOUD/Project/Dataset/decision_tree_model.pkl'  # Change this to the actual path
with open(model_path, 'rb') as f:
    model = pickle.load(f)

@app.route('/columns', methods=['GET'])
def get_columns():
    columns = df.columns[:-1].tolist()  # Exclude the label column
    response = jsonify(columns)
    response.headers.add('Access-Control-Allow-Origin', '*')  # Add CORS header
    return response

@app.route('/random-row', methods=['GET'])
def get_random_row():
    random_row = df.sample(n=1).iloc[0].drop(' Label').to_dict()  # Exclude the label column
    response = jsonify(random_row)
    response.headers.add('Access-Control-Allow-Origin', '*')  # Add CORS header
    return response

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.json
#         row = pd.DataFrame([data])
#         print(f"Incoming data for prediction: {row}")  # Log incoming data
#         prediction = model.predict(row)[0]
#         response = jsonify({' Label': prediction})
#         response.headers.add('Access-Control-Allow-Origin', '*')  # Add CORS header
#         return response
#     except Exception as e:
#         print(f"Error during prediction: {str(e)}")
#         traceback.print_exc()  # Print stack trace for debugging
#         return jsonify({'error': str(e)}), 500

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        row = pd.DataFrame([data])
        # Find the corresponding row in the DataFrame to get the label
        matching_row = df[df.drop(columns=[' Label']).eq(row.iloc[0]).all(axis=1)]
        if not matching_row.empty:
            label = matching_row.iloc[0][' Label']
            return jsonify({'label': label})
        else:
            return jsonify({'error': 'Row not found in dataset'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
