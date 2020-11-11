module.exports = (Sequelize, sequelize) => {
  const banned = sequelize.define('banned', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    reason: {//사유
      type: Sequelize.STRING(50),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  banned.sync();
  return banned;
};