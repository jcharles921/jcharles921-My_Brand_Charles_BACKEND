[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

![Test pass](https://github.com/jcharles921/jcharles921-My_Brand_Charles_BACKEND/actions/workflows/node.js.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/jcharles921/jcharles921-My_Brand_Charles_BACKEND/badge.svg?branch=main)](https://coveralls.io/github/jcharles921/jcharles921-My_Brand_Charles_BACKEND?branch=main)

[![Maintainability](https://api.codeclimate.com/v1/badges/11426be371884ef60a2d/maintainability)](https://codeclimate.com/github/jcharles921/jcharles921-My_Brand_Charles_BACKEND/maintainability)
# jcharles921-My_Brand_Charles_BACKEND
#### Cloning the Project

Go to the project repo on github and clone it to your local machine. Run the following scripts

- `npm i` to install the project dependencies.
- `touch .env` to create a dotenv file. Use the project .env.example to make sure all the environment variables are captured and used.
# NODE 18.13.0
#### Install the following packages
## dependencies
- "bcrypt": "^5.1.0",
- "body-parser": "^1.20.2",
- "cors": "^2.8.5",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "jsonwebtoken": "^9.0.0",
- "mongoose": "^6.10.0"

## devDependencies
- "morgan": "^1.10.0",
- "nodemon": "^2.0.20"
 

#### Running the server

Run `npm run dev` to start the server locally;



# API ENDPOINTS

#### Users

| HTTP Request | Endpoint               | Description                       |
| :----------- | :--------------------- | :-------------------------------- |
| `POST`       | `/api/v1/Signup`     | AllUsers signUp        |
| `POST`       | `/api/v1/Login`    | Allusers Signin   |

#### Article

| HTTP Request | Endpoint                 | Description                         |
| :----------- | :----------------------- | :---------------------------------- |
| `GET`        | `/api/v1/CRUD`          | Used to get all the Blogs articles available |
| `POST`       | `/api/v1/CRUD`          | Used to create a new article blog             |
| `GET`        | `/api/v1/CRUD/id` | Used to get a single article blog           |
| `PUT`        | `/api/v1/CRUD/id` | Used to update a blog article             |
| `DELETE`     | `/api/v1/CRUD/id` | Used to delete a blog  article             |

#### Comment

| HTTP Request | Endpoint               | Description                       |
| :----------- | :--------------------- | :-------------------------------- |
| `PATCH`       | `/api/v1/comment/articleId`     | Used to put a comment on article        |


#### Message

| HTTP Request | Endpoint                       | Description                       |
| :----------- | :----------------------------- | :-------------------------------- |
| `GET`        | `/api/v1/queries`             | Used to get all the messages sent |
| `POST`       | `/api/v1/queries`             | Used to send message        |
| `GET`        | `/api/v1/queries` | Used to get a single blog         |
| `DELETE`     | `/api/v1/queries` | Used to delete a message          |

  
