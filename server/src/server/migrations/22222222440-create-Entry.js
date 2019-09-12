'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entries', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        contestId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Contests',
            },
        },
        media: {
            type: Sequelize.TEXT,
            allowNull: true,
            defaultValue:null,
        },
        prospectiveName: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:null,
        },
        prospectiveSlogan: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:null,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entries');
  }
};