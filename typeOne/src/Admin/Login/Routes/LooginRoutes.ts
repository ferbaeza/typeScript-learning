import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Hello Fer from Login');
})

export {router as loginRoutes};
