const Product = require('../models/product');
const {verifica} = require('../models/application');

module.exports = {
    async info(req, res) {
        try {
            if (!req.IsAuth) throw {message: 'permission danied', status: 401};
        
            const { id } = verifica(req.params, ['id']);

            const product = await Product.findByPk(id);

            if (!product) return res.status(204).send();

            return res.status(200).send(product);

        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async list(req, res) {
        try {
            if (!req.IsAuth) throw {message: 'permission danied', status: 401};
        
            const products = await Product.findAll();

            return res.status(200).send(products);
 
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async create(req, res) {
        try {
            if (!req.IsAuth) throw {message: 'permission danied', status: 401};
        
            const { name, price } = verifica(req.body, ['name', 'price']);
            const { characteristics } = req.body;

            const product = await Product.create({name, price, characteristics});

            return res.status(201).send(product);

        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async modify(req, res) {
        try {
            if (!req.IsAuth) throw {message: 'permission danied', status: 401};
            
            const { id } = verifica(req.params, ['id']);
            const {name, price} = verifica(req.body, ['name', 'price']);
            const { characteristics } = req.body;

            const product = await Product.findByPk(id);

            if (!product) throw {message: "product not found", status: '404'};

            await product.update({name, price, characteristics});

            return res.status(200).send(product);
             
        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    },

    async delete(req, res) {
        try {
            if (!req.IsAuth) throw {message: 'permission danied', status: 401};
        
            const { id } = verifica(req.params, ['id']);

            const product = await Product.findByPk(id);

            if (!product) return res.status(204).send();

            await product.destroy();

            return res.status(200).send();

        } catch(err) {
            return res.status(err.status || 500).send({
                error: {
                    message: err.message,
                    status: err.status || 500
                }
            });
        }
    }
};

