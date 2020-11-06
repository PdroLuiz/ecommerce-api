const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/user');
const Salt = require('../models/salt');
const Token = require('../models/token');
const Product = require('../models/product');
const Stock = require('../models/stock');
const connection = new Sequelize(dbConfig);

User.init(connection);
Token.init(connection);
Salt.init(connection);
Product.init(connection);
Stock.init(connection);

User.associate(connection.models);

module.exports = connection;