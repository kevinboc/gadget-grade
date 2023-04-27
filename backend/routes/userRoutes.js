const express = require('express')
const router = express.Router()
var controller = require('../controllers/userController.js');
  
router.route("")
    .get(controller.getAllUsers)
    .post(controller.addUser);

router.route("/:_id")
    .get(controller.getUser)
    .put(controller.updateUser);

router.route("/login")
    .post(controller.verifyLogin);

router.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = router