'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      teamName: {
        type: Sequelize.STRING(100),
        field: 'team_name',
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('teams')
  }
};
