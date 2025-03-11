"use strict";

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments", [
      {
        text: "Прекрасная статья",
        articleId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Очень информативно",
        articleId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
