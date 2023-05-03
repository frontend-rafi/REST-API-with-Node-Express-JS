const users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");



//* get
exports.getUser = (req,res)=>{
    res.status(200).json({
     users
    })
     }
     //* post 
exports.postUser = (req,res)=>{
const newUser = {
    id:uuidv4(),
name:req.body.username,
email:req.body.email,
};
users.push(newUser);
res.status(201).json(users)
         }

              //* update 
exports.updateUser = (req,res)=>{
const id= req.params.id ;
const {username,email} =  req.body;
users.filter((user)=>(
    user.id === id
).map((selectedUser)=>{
selectedUser.username = username;
selectedUser.email = email;
})
)
    res.status(200).json({
      users
    })
             }

             //* delete user
    exports.deleteUser = (req,res)=>{
                const id= req.params.id ;
               
                const users = users.filter((user)=>{
                     user.id !== id;
                })
                    res.status(200).json({
                     users
                    })
                             }       