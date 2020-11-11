module.exports = (Sequelize, sequelize) => {
  const emailCheck = sequelize.define('emailCheck', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    code: {//코드
      type: Sequelize.STRING(10),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  emailCheck.sync();
  return emailCheck;
};