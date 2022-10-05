//السورس الاساسي لـ اظهار رابط موقعك في ريبل ات 
const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
//https://ra3dstudio.com CopyRight Codes
