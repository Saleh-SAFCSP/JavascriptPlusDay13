/* HTTTP Request methods ( REST ) !

What is REST ?
REST created to guide and devine the architecture for the interaction between the clinet and server

2- REST Methods :
    1- GET : get data from the server
    2- POST : send data to the server
    3- PUT : update data in the server
    4- DELETE : delete data from the server

3- endpoint architecture
    1. Singleton and Collection Resources
    2- Collection and Sub-collection Resources
    3- using - between words

exmaple :
    /users/1/account
    /users/5/account/2/price/3
    /users/reset-password


*/

const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/v1/users', require('./router/usersRoute'));

app.listen(5000, () => {
  console.log('Server is running in port 5000');
});
