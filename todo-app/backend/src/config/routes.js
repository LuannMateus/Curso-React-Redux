const express = require('express');

module.exports = (app) => {
    // API Routes
    const router = express.Router()
    app.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoServices');
    todoService.register(router, '/todos')
    
}