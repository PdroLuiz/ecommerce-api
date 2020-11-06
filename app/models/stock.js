const { Model, DataTypes } = require('sequelize');

class Stock extends Model {
    static init(sequelize) {
        super.init({
            product_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'products',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        }, {
            sequelize,
            tableName: 'stock'
        })
    }

 
}

module.exports = Stock;
