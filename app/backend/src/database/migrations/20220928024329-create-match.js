'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('matches', {
      homeTeam: {
        type: Sequelize.INTEGER,

      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,

      },
      awayTeam: {
        type: Sequelize.INTEGER,

      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,

      },
      inProgress: {
        type: Sequelize.BOOLEAN,

      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('matches');
  }
};
