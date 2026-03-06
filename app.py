from flask import Flask, request, jsonify
from flask_cors import CORS  # Allows frontend to communicate with backend

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Predefined chatbot responses
responses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! What can I do for you?",
    "warranty": "Our watches come with a 2-year warranty.",
    "shipping": "We offer free shipping over the world!",
    "return policy": "You can return the watch within 30 days for a full refund.",
    "types of watches": "We have luxury, sports, and smartwatches.",
    "thank you": "You're welcome! Have a great day!",
    "bye": "Goodbye! Feel free to visit again."
}

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_message = data.get("message", "").lower()
    
    # Find response or use a default message
    bot_response = responses.get(user_message, "I'm not sure about that. Can you rephrase?")
    
    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True)
