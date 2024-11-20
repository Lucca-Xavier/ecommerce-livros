const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: 'Preencha todos os campos' });
    }

    const userExists = await User.findOne({ where:  { email } })
    if(userExists) {
        return res.status(400).json({ error: "Email já registrado"})
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = new User({
        email,
        password: passwordHash,
        role: role || 'user'
    });

    try {
        await user.save();
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        const userRegistered = await User.findOne({ where: { email } });
        if (!userRegistered) {
            return res.status(400).json({ error: "Email não encontrado" });
        }

        const isValidPassword = await bcrypt.compare(password, userRegistered.password);

        if (!isValidPassword) {
            return res.status(400).json({ error: "Senha invalida" });
        }

        const token = jwt.sign(
            { id: userRegistered.id, role: userRegistered.role }, 
            'secret', 
            { expiresIn: '3h' }
        );

        res.status(200).json({ 
            token, 
            id: userRegistered.id, 
            role: userRegistered.role // Adicionando a role na resposta
        }); 
    } catch (error) {
        console.error('Erro ao logar', error.message);
        res.status(500).json({ error: 'Erro ao logar' });
    }
});


router.get('/users', async (req, res) => {
    try {
        // Buscar todos os usuários sem filtrar pelo email
        const users = await User.findAll();

        if (users.length === 0) {
            return res.status(404).json({ error: 'Nenhum usuário encontrado' });
        }

        // Retorna todos os usuários encontrados
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

module.exports = router;
