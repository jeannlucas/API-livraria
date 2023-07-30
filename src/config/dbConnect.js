import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jeannlucas:Rafaelav24@livraria.mtgjyuc.mongodb.net/livraria");

let db = mongoose.connection;

export default db;

