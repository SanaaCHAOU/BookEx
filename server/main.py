from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from datetime import datetime

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://127.0.0.1:27017/bookex?compressors=disabled"

mongo = PyMongo(app)

@app.route('/home')
def hello_world():
    return '<h1>Hello, World!</h1>'

@app.route('/users')
def get_all_users():
    # get users' data from mongo
    users = mongo.db.users.find()
    return jsonify({
        "data": users
        })

@app.route('/add/users', methods =['POST'])
def add_user():
    u = dict(request.form)
    # insert new user into users' collection in mongo
    inserted = mongo.db.users.insert(u)
    return jsonify({
        "message": "Inserted"
        })

@app.route('/users/<username>')
def get_user(username):
    # get users' data from mongo
    user = mongo.db.users.find_one({ "username" : username})
    user["_id"] = str(user["_id"])
    return jsonify({
        "data": user
        })

@app.route('/user/<username>/addbook', methods=['POST'])
def add_book(username):
    # récuperer les données du nouveau livre à partir de la requetes utilisateur
    book = dict(request.form)
    if '_id' not in book:
        # le livre n'existe pas dans la base il faut l'ajouter
        book_inserted = mongo.db.books.insert_one(book) 

    # Ajouter le livre dans les livres de l utilisateur
    update_statement = { "$push": { "books": {
            "isbn": book["isbn"],
            "status": "Available", 
            "availableOn": datetime.today().strftime('%Y-%m-%d')
        }} }
    user_books_updated = mongo.db.users.update({"username": username}, update_statement)

    return jsonify({
        "message": "Inserted"
        })

def objectId_to_str(item):
    # les elements utiliser par mongo sont des Dictionnaire immutable (on peut pas les changer)
    # il faut créer un dictionnaire à partir de ça avant de changer la valeur
    editable_item = dict(item)
    editable_item["_id"] = str(editable_item["_id"])
    return editable_item

@app.route('/books')
def get_books():
    # get users' data from mongo
    books = list(mongo.db.books.find())
    # Pour chaque livre dans la liste boosks convertir le _id de ObjectId à str (pour qu'il soit json serialisable)
    books = list(map(objectId_to_str, books)) ## apllique la fonction objectId_to_str sur tous les elements de la liste books 
    
    return jsonify({
        "data": books
        })

# decorator
@app.route('/request/<username>', methods=['POST'])
def create_request(username):
    #create request
    request_data = dict(request.form)
    request_data['from'] = username
    request_data['time'] = datetime.now()
    request_data['status'] = 'Pending'
    # insert new user into users' collection in mongo
    inserted = mongo.db.requests.insert_one(request_data)
    print("\n".join(dir(inserted)))
    return jsonify({
        "message": "Inserted"
        })

@app.route('/incoming/requests/<username>')
def get_incoming_requests(username):
    requests_data = mongo.db.requests.find({ "to" : username})
    requests = list(map(objectId_to_str, requests_data))
    return jsonify({
            "data" : requests 
        })


@app.route('/outgoing/requests/<username>')
def get_outgoing_requests(username):
    requests_data = mongo.db.requests.find({ "from" : username})
    requests = list(map(objectId_to_str, requests_data))
    return jsonify({
            "data" : requests 
        })

if __name__ == '__main__':
    # main function
    app.run(debug=True)

