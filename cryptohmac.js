var crypto = require("crypto");
var secret = "shdhdbvf";
const hash = crypto.createHmac('sha256',secret)
                              .update("Bhavana")
                              .digest("hex");
console.log(hash);