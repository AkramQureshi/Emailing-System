"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
function login() {
    var userName = "Akram Qureshi";
    var emailID = "akram.qureshi@aku.edu";
    var password = "abcd1234";
    if (emailID === "akram.qureshi@aku.edu" && password === "abcd1234") {
        console.log("");
        console.log("");
        console.log("");
        console.log("Welcome", userName, "You have Successfully Login in Emailing System Project......");
        console.log("____________________________________________________________________________________________");
        console.log("");
        console.log("");
    }
    else {
        console.log("");
        console.log("");
        console.log("Invalid User ID or Password");
        console.log("");
        console.log("Please Try Again ..........");
        console.log("");
    }
}
exports.login = login;
login();
