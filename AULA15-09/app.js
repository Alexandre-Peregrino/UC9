const express = require('express');
const bcrypt  = require('bcryptjs');
const app = express();
const port = 3000;
const users = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello word!')
})

app.post('/criarUser', async(req, res)=>{

    const {username, senha} = req.body;
    if(users.find(user=> username === username)){
        return res.status(400).json({message: 'User já existe'})
    }
    const hashedSenha = await bcrypt.hash(senha, 10);
    // const hashedUser = await bcrypt.hash(username, 10)
    const user = {username, senha: hashedSenha};
    console.log(user)
    users.push(user);
    res.status(201).json(user);
})

app.post('/login', async (req, res) =>{
    const {username, senha} = req.body;
    const user = users.find(user => user.username === username);
    if(!user){
        return res.status(400).json({message: 'User não existe!'});
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    console.log(isPasswordValid);
    if(!isPasswordValid){
        return res.status(400).json({message: 'Senha incorreta'});
    }

    res.status(200).json({message: 'Login bem sucedido'});
})

app.listen(port, () =>{

    console.log(`http://localhost:${port}`);

})