const fetch = require('node-fetch');
const assets = require('../local-information/assets')

class Cielo {
    static buy(params) {
        const body = params;

        fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 
                'Content-Type': 'application/json',
                'MerchantId': assets.cieloCredentials.MerchantId,
                'MerchantKey': assets.cieloCredentials.MerchantKey
             }
        })
        .then(res => res.json())
        .then(json => console.log(json));
        
    }
}

module.exports = Cielo;