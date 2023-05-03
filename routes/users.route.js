const { getUser, postUser, updateUser,deleteUser } = require("../controllers/users.controller");
const router = require("express").Router();


//* get 
router.get("/users",getUser);
//* post
router.post("/users",postUser);

//* update ===== put
router.put("/users/:id",updateUser);
//* delete
router.delete("/users/:id",deleteUser);
module.exports = router;