const express = require("express");
const {config} = require("dotenv")
config();
const PORT = process.env.PORT ;
const app = express();
const mongoose = require("mongoose");
const dbo = require("../config/connection")
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
dbo.connectToServer(function (err) {
	if (err) { 
	  console.error(err);
	  return ;
	}
	
  });
