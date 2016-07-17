var express = require("express");
var router = express.Router();

router.get("/backbone",function(req,res,next){
	res.render('backbone/todolist',{
		title:'backbone todolist'
	})
})

module.exports = router;