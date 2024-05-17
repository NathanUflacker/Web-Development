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

const openai = new OpenAI({
    organization:"org-tJ2D862cp5HJyT0Vqs62D95B",
    apiKey:"sk-proj-THl6dE2LaqatRbI8570eT3BlbkFJwPrsQzu4kBPvqRILVjBQ"
    // 
});

// Criar o projeto back end a partir daqui...

const app = express();
const port = 3000;

app.use(bodyParser.json)
app.use(cors)

// Criando END point para enviar mensagens a API do chatGPT
app.post("/sendMessage", async (req, res)=>{
    const { messages } = req.body; // O que veio do front
    
    // Aqui é pra trocar pela API do gemini
    const chatCompletion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[{
            "role":"system", "content":"Você será o John Wick"},
            ...messages
        ]
    })
    console.log(chatCompletion.choices[0].message);
    
    // Resposta que vou retornar para o front
    // Isso só é possível graças ao método post
    
    res.json({
        chat_completion: chatCompletion.choices[0]
    });
});




app.listen(port, () => {
    console.log(`Server aberto executando em http://localhost:${port}/`);
});



