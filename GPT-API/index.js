// part 1 que faz a requisição
// import OpenAI from "openai";


// const openai = new OpenAI({
//     organization:"",
//     apiKey:""
//     // 
// });

// const chatCompletion = await openai.chat.completions.create({
//     model:"gpt-3.5-turbo",
//     messages:[{"role":"user", "content":"Quem é você?"}]
// })

// console.log(chatCompletion.choices[0].message);

// Parte 2 - Criar back end completo com API local

import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Criar o projeto back end a partir daqui...


const openai = new OpenAI({
    organization:"",
    apiKey:""
    // 
});

const chatCompletion = await openai.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:[{"role":"user", "content":"Quem é você?"}]
})

console.log(chatCompletion.choices[0].message);
