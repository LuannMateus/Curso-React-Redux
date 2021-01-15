const express = require('express');
const auth = require('./auth.js');


module.exports = function (server) {
    /*
        * Rotas protegidas por Token JWT
    */

    const protectedApi = express.Router();
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const BillingCycle = require('../../src/api/billingCycle/billingCycleService.js');
    BillingCycle.register(protectedApi, '/billingCycles')

    /*
        * Rotas abertas
    */
    const openApi = express.Router()
    server.use('oapi', openApi)

    const AuthService = require('../api/user/authService.js')
    openApi.post('/login', AuthService.login)
    openApi.post('/singup', AuthService.singup)
    openApi.post('/validateToken', AuthService.validateToken)
} 