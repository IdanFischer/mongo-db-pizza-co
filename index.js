import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const client = new MongoClient(process.env.URI)

const db = client.db(process.env.DB_NAME)
const collection = db.collection(process.env.COLLECTION_NAME)

const pizza1 = {
    type: "Cheese",
    size: "large",
    newYorkStyle: true,
    slices: 16,
    cookStyle: "wood oven",
    price: 18.99
}

const pizza2 = {
    type: "Hawaiian",
    size: "small",
    newYorkStyle: false,
    slices: 4,
    cookStyle: "pan",
    price: 5.99
}

const pizza3 = {
    type: "Veggie",
    size: "medium",
    newYorkStyle: true,
    slices: 8,
    cookStyle: "deep dish",
    price: 12.99
}

const cust1 = {
    firstName: "Richard",
    lastName: "Young",
    address: "627 glades road Boca Raton FL 33322",
    phone: "834-234-3432",
    loyal: true,
 
}

const cust2 = {
    firstName: 'Yves',
    lastName: 'Saint Laurent',
    address: "8432 Champs Elysse Paris 36s32",
    phone: "834-244-3432",
    loyal: false,
}

const richardID = '63cae5b597071a2122b379dd'
const yvesID = '63cae5bbd7906580be0dbcf7'
 

const order2 = {
    customerID: cust1, //richard
    pizzas: {...pizza1},
    secondPizza: {...pizza2},
    thirdPizza: {...pizza3},
    //['63cae3ae7d4650c5e00ba99a', '63cae3e37cf32b1428f42981', '63cae3e7210607e75cf8b092'],
    //secondPizza: {...}
    subtotal: "$60.00",
    tax: "$4.2",
    total: "$64.2"
}

// CREATE
// const createPizza = async thisPizza => {
//     const result = await collection.insertOne(thisPizza)
//     const resultId = result.insertedId
//     console.log(`inserted item -> ${resultId}`)//return resultId

// }

const createOrder = async thisOrder => {
    const result = await collection.insertOne(thisOrder)
    const resultId = result.insertedId
    console.log(`inserted item -> ${resultId}`)//return resultId

}

// READ

const readDb = async (queryParam, queryLimit) => {
    const result = await collection.find(queryParam).limit(queryLimit).toArray()
    console.dir(result)
}

// await createPizza(pizza3)
// await createCust(cust2)
// await createOrder(order2)
await readDb({}, 0)

client.close()
