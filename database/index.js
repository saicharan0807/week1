"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Main {
    static main() {
        Main.find();
    }
    static find() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'mongodb://localhost://27017';
            const client = yield mongodb_1.MongoClient.connect(url); //conect the server
            const db = client.db('cdac'); //connecting to the database
            const docs = yield db.collection('task').find().toArray();
            /*for (let i=0;i<docs.length;i++){
                let item = docs[i];
                console.log(item);
            }*/
            docs.forEach(item => console.log(item));
            client.close();
        });
    }
    static delete() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'mongodb://localhost://27017';
            const client = yield mongodb_1.MongoClient.connect(url); //conect the server
            const db = client.db('cdac'); //connecting to the database
            const output = yield db.collection('task').deleteMany({ todo: 'HELLO MONGO' });
            console.log(output);
            client.close();
        });
    }
    static update() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'mongodb://localhost://27017';
            const client = yield mongodb_1.MongoClient.connect(url); //conect the server
            const db = client.db('cdac'); //connecting to the database
            const output = yield db.collection('task').updateOne({ todo: 'HELLO MONGO' }, { $set: { todo: "CHARAN" } });
            console.log(output);
            client.close();
        });
    }
    static insert() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'mongodb://localhost://27017';
            const client = yield mongodb_1.MongoClient.connect(url); //conect the server
            const db = client.db('cdac'); //connecting to the database
            const output = yield db.collection('task').insertOne({ todo: 'HELLO MONGO' });
            console.log(output);
            client.close();
        });
    }
}
Main.main();
