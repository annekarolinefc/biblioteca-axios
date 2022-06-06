//Importando a biblioteca
import axios from 'axios';
//import postsAPI from "./services/postApi"

//Informando a URL da API que será consumida
let res = await axios.get("https://jsonplaceholder.typicode.com/users");
//let res = await postsApi.get("/users");
console.log(res.data); //retorna os dados

//Retornar um usuario especifico
res = await axios.get(`https://jsonplaceholder.typicode.com/users/${1}`);
console.log(res.data); //retorna os dados

//Atualizar o primeiro usuario
/*
res = await axios.put("https://jsonplaceholder.typicode.com/posts", {
    userId: 1, 
    id: 1, 
    title: "Atualizando", 
    body: "Aqui temos um post atualizado."
})
console.log(res.data);
*/

//ADICIONAR NOVO ITEM
res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    userId: 1, 
    id: 1, 
    title: "Testando o post", 
    body: "Aqui temos um post incluido."
})

console.log(res.status) //CODIGO 201
console.log(res.data) //RETORNANDO O POST CRIADO

//DELETAR DADO
res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${101}`);
console.log(res.status) //CODIGO 200