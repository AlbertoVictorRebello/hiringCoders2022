"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
//Defining server's address/URI
const hostName = '127.0.0.1'; //localhost
const port = 5000;
// Defining the business rules 
const server = (0, http_1.createServer)((req, res) => {
    let answer;
    const urlParse = url.parse(req.url ? req.url : '');
    //To receive user's information
    const params = (0, query_string_1.parse)(urlParse.search ? urlParse.search : '');
    if (urlParse.pathname == '/create-update-user') {
        // Create User and Update User
        // http://localhost:5000/create-update-user?name=Alberto%20Rebello%20PMP&age=49&id=1             
        // To save information
        (0, fs_1.writeFile)('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Yehhh!');
            answer = 'User created/updated with success!';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(answer);
        });
    }
    else if (urlParse.pathname == '/read-user') {
        // Read User
        // http://localhost:3000/read-user?id=1
        (0, fs_1.readFile)(`users/${params.id}.txt`, function (err, data) {
            answer = err ? 'User not found' : data;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(answer);
        });
    }
    else if (urlParse.pathname == '/delete-user') {
        // Delete User
        // http://localhost:3000/delete-user?id=1
        (0, fs_1.unlink)(`users/${params.id}.txt`, function (err) {
            answer = err ? 'User not found' : 'User deleted with success!';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(answer);
        });
    }
    else {
        answer = 'Please, verify the URI';
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(answer);
    }
});
//Running the server
server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`);
});
