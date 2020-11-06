const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            characteristics: {
                type: DataTypes.STRING,
                allowNull: true
            },
        }, {
            sequelize,
        })
    }
 
}

module.exports = Product;
