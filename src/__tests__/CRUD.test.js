import request from 'supertest';
import app from '../server.js';
import mongoose from "mongoose";

let server;
let currentPostId;
// const TEST_DB = process.env.TEST_DB;

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }


beforeAll( async () => {
//   server = app.listen(done);
  await mongoose.connect(process.env.TEST_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
//   console.log('connected with Success')
});
// afterAll((done) => {
//     server.close(done);
//   });

describe('Create a post ', ()=>{
    const newPost = {
        title:generateRandomString(8),
        content:generateRandomString(20),
        commentSection:[],
        imageUrl:generateRandomString(10),
        createdAt: Date.now
    }
    it('should create a new post', async ()=>{
        const res = await request(app)
        .post('/api/v1/CRUD')

        .send(newPost)
        // expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('data');
        // currentPostId.push(res.body.data._id);
        // res.body.data._id = currentPostId


    })

})
describe('Getting all the posts',()=>{
    it('should get all the posts', async ()=>{
        const res = await request(app)
        .get('/api/v1/CRUD/')
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
        
    })
})
describe('Getting a single post',()=>{
    it('should get a single post', async ()=>{
        const res = await request(app)
        .get('/api/v1/CRUD/6410ebed78d262b366c0fc4b ')
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
        expect(res.body.message).toEqual('Post found')
    })
})
describe('Updating a post',()=>{
    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
          var randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
        return result;
      }
    it('should update a post', async ()=>{
        // async function theOneToUpdate(){
        //     const res = await request(app)
        //     .get('/api/v1/CRUD/64144f82da93013e46a881cf')
        //     // expect(res.statusCode).toEqual(200);
        //     // expect(res.body).toHaveProperty('data');
        //     // expect(res.body.message).toEqual('Post found')
        //     return res.body.data._id
            
        // }
        
        setTimeout(async()=>{
            const res = await request(app)
            .put(`/api/v1/CRUD/64144f82da93013e46a881cf`)
            
            .send({
                title:generateRandomString(8),
                content:generateRandomString(20),
                // commentSection:[],
                imageUrl:generateRandomString(10),
                // createdAt: Date.now
            })
            // console.log(res)
            expect(res.statusCode).toEqual(404);
            // expect(res.body).toHaveProperty('data');
            // expect(res.body.message).toEqual('Post updated')
        },1000)
        
       

       
    })
}
)
describe(' Deleting a post that do not Exit',()=>{
    it('should return not found', async ()=>{

        
        // let deleteId=  await theOneToDelete()
        // console.log(deleteId)

        const res = await request(app)
         .delete(`/api/v1/CRUD/6410ec0178d262b366c0fc4d`)
         expect(res.statusCode).toEqual(404);
        
    },100000)
}
)
describe('Subscribing a user',()=>{
    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
          var randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
        return result;
      }


    it('should register a user', async()=>{
        const res = await request(app)
        .post('/api/v1/Signup')
        .send({
            // "username":"anita",
            // "email":"anita@gmail.com",
            // "password":"12345678"
            "username": generateRandomString(4),
            "email": generateRandomString(6)+"@gmail.com" ,
            "password": generateRandomString(6)

    })
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('isAdmin');
    expect(res.body.message).toEqual('New User successfully created')

})
})
describe('Logging in a user',()=>{
    it('Log a user ', async()=>{
        
        const res = await request(app)
        .post('/api/v1/Login')
        .send({
            "email": "anita@gmail.com",
            "password": "12345678"

    })
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    // expect(res.body.message).toEqual('User successfully logged in')
    })

})