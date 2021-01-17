const express = require('express');
const app = express();

const router = express.Router();

router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Time = ${Date.now() - init}`)
})

router.get('/produtos/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'Mia'
    })
})

router.get('/clientes/:id/:name', (req, res) => {
    res.json({
        id: req.params.id,
        name: req.params.name
    })
})

module.exports = router;