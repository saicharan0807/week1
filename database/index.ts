import {MongoClient} from 'mongodb';
class Main{
    static main(){
        Main.find();
    }
    static async find(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);//conect the server
        const db = client.db('cdac');//connecting to the database

        const docs = await db.collection('task').find().toArray();
        /*for (let i=0;i<docs.length;i++){
            let item = docs[i];
            console.log(item);
        }*/
        docs.forEach(item => console.log(item));
        client.close();
    }
    static async delete(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);//conect the server
        const db = client.db('cdac');//connecting to the database

        const output = await db.collection('task').deleteMany({todo:'HELLO MONGO'});
        console.log(output);
        client.close();
    }
    static async update(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);//conect the server
        const db = client.db('cdac');//connecting to the database

        const output = await db.collection('task').updateOne({todo:'HELLO MONGO'},{$set:{todo: "CHARAN"}});
        console.log(output);
        client.close();
    }
    static async insert(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);//conect the server
        const db = client.db('cdac');//connecting to the database

        const output = await db.collection('task').insertOne({todo:'HELLO MONGO'});
        console.log(output);
        client.close();
    }
}

Main.main();
