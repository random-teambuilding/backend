module.exports = (Sequelize, sequelize) => {
  const interest = sequelize.define('interest', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    interest: {//관심 주제
      type: Sequelize.STRING(10),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  interest.sync();
  return interest;
};