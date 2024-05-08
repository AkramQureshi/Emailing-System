"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userName = "Akram Qureshi";
var emailID = "akram.qureshi@aku.edu";
var date = new Date();
// console.log(date.toLocaleDateString())
//  console.log(date.toLocaleTimeString())
var emailArrays_1 = require("./emailArrays");
var emailArrays_2 = require("./emailArrays");
console.log("");
console.log("From: ", emailID, "                                                                                              ", date.toLocaleDateString(), date.toLocaleTimeString());
console.log("");
console.log("To: ", emailArrays_1.arremailto[0], ";", emailArrays_1.arremailto[1]),
    console.log("");
console.log("cc: ", emailArrays_2.arremailcc[0], emailArrays_2.arremailcc[1], emailArrays_2.arremailcc[2], emailArrays_2.arremailcc[3], emailArrays_2.arremailcc[4], emailArrays_2.arremailcc[5]),
    console.log("");
console.log("");
console.log("_______________________________________________________________________________________________________");
var subject = "Thank You Governor Sindh Mr. Kamran Tessori for Taking Innitiative of Generative AI";
console.log("");
console.log("Subject : ", subject);
console.log("");
console.log("_______________________________________________________________________________________________________");
console.log("");
console.log("Dear Governor Sindh Mr. Kamran Tessori,");
var emailBody_1 = require("./emailBody");
if (emailBody_1.allbody.length < 1165) {
}
else {
}
