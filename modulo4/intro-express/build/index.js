"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Exercicio1
app.get("/", (req, res) => {
    res.send("Hello World!! As I don't want jinx it!");
});
const user = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net"
    }
];
// Exercicio4 Construa um endpoint que retorne os usuários criados no exercício anterior.
app.get("/user", (req, res) => {
    console.log("usuario");
    res.send(user);
});
//  Exercicio 5  Acesse a API do JSONPlaceholder e observe os endpoints que buscam posts.
const post = {
    "id": "1",
    "title": "Post 1 do usuario 1 ",
    "body": "Body 1 do Usuario 1 ;fldskfl;dksfl;k dsdsff dskjgpejrpejrpijerkj",
    "userId": "1"
};
// Exercicio6  Crie um array de posts para incrementar a base de dados da nossa API. 
// Acredito que seja muito melhor cria-la fora do objeto em separado. 
// Podemos ate criar uma url propria para os posts sendo mais facil de 
// fazer manutencao troubleshooting e ate tb trabalhar com as propriedades 
// principais do usuario. 
const posts = [
    {
        "id": "1",
        "title": "Post 1 do usuario 1 ",
        "body": "Body 1 do Usuario 1 ;fldskfl;dksfl;k dsdsff dskjgpejrpejrpijerkj",
        "userId": "1"
    },
    {
        "id": "2",
        "title": "Post 2  do usuario 1 ",
        "body": "Body 2 do Usuario 1 fdgfdgdfgddfgdf;fldskfl;dksfl;k dsdsff dskjgpejrpejrpijerkj",
        "userId": "1"
    },
    {
        "id": "3",
        "title": "Post 3  do usuario 1 ",
        "body": "Body  3 do Usuario 1 fdgfdgdfgddfgdf;fldskfl;dksfl;k dsdsff dskjgpejrpejrpijerkj",
        "userId": "1"
    },
    {
        "id": "1",
        "title": "Post 1 do usuario 1 ",
        "body": "Body 1 do Usuario 2 ;fldskfl;dksfl;k dsdsff dskjgpejrpejrpijerkj",
        "userId": "2"
    },
    {
        "id": "2",
        "title": "Post 2  do usuario 2 ",
        "body": "Body 2 do Usuario 2 fdgfdgdfgddfgdf;fldskfl;dksfl;k dsdsff dskjgpejrpejrpijerkj",
        "userId": "1"
    },
    {
        "id": "3",
        "title": "Post 3  do usuario 2 ",
        "body": "Body  3 do Usuario 2 fdgfdgdfgddfgdf;fldskfl;dksfl;k dsdsff dskjgpejrpejrpijerkj",
        "userId": "1"
    }
];
// Exercicio7 Construa um endpoint que retorne os posts criados no exercício anterior.
app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});
// - Exercício 8
// Construa um endpoint que retorne os posts de um usuário em particular.
app.get("/posts/:id", (req, res) => {
    const { id } = (req.params);
    console.log("id", id);
    const postUser = posts.filter(item => item.userId === id);
    console.log("postUser", postUser);
    res.status(200).send(postUser);
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
