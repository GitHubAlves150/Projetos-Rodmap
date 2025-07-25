import express from 'express'
//errado =>import { PrismaClient } from './generated/prisma'
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const app = express();
app.use(express.json());

//================POST======================================
app.post('/usuarios', async(req, res)=>{
   await prisma.user.create({
    data:{
        name: req.body.nome,
        age:req.body.idade,
        email: req.body.email,

    }
   })
    //res.send('Ok post bahh');
});
//================PUT======================================
app.put('/usuarios/:id', async(req, res)=>{
   await prisma.user.update({
    where:
    {
      id: req.params.id
    },
    data:{
        name: req.body.name,
        age:req.body.age,
        email: req.body.email,
    }
   })
        res.send('Ok post bahh');
});
//================GET======================================
app.get('/usuarios', async(req, res)=>{
   let users=[]
   if(req.query)
   {
        users= await prisma.user.findMany({
            where:
            {
                name:req.query.name,
                email: req.query.email,
                age : req.query.age

            }
        })
   }
   else{
         users= await prisma.user.findMany();

   }

    //res.json(users);
    res.status(200).json(users);
});
//================DELETE======================================
app.delete('/usuarios/:id', async(req, res)=>{
     await prisma.user.delete({
        where:
        {
            id: req.params.id
        }
     })
    res.status(200).json({message: 'usuario deletado'});
});
//======================================================

app.listen(3000);
//app.put('/usuarios');
//app.delete('/usuarios');
//app.get('/usuarios');

/**
 * 1) tipo de rota /Método HTTP 
 * 2) Endereço
 * 3) 
 * 4)
 */

/*
        Criar nossa API de usuario
    - Criar um novo usuário
    - Listar todos os usuarios
    - Editar um usuario
    - Deletar um usuario
*/
//lucasvidalramos305
//j0zKjC87JgvzoNPo
//ou userlucas   b8aou3zQ14NR4SMR (Quick start)