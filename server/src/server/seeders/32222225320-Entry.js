const cvc = ''+Math.round(Math.random()*9)+''+Math.round(Math.random()*9)+''+Math.round(Math.random()*9)+'';
const twoNumber = ''+Math.round(Math.random()*9)+''+Math.round(Math.random()*9)+'';
const fourNumber = ''+twoNumber+''+twoNumber+'';
const number = ''+fourNumber+' '+fourNumber+' '+fourNumber+' '+fourNumber+'';
const expiry = twoNumber+'/'+twoNumber;

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Entries', [
          {
              contestId:1,
              prospectiveName:"axaxaxaxaxa",
              createdAt: new Date(),
              updatedAt: new Date(),
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};

/*

    {
          balance:150,
          cvc:cvc,
          number:number,
          expiry:expiry,
          createdAt: new Date(),
          updatedAt: new Date(),
      }

      {
          balance:10000,
          cvc:'777',
          number:'7777 7777 7777 7777',
          expiry:'77/77',
          createdAt: new Date(),
          updatedAt: new Date(),
      }

 */