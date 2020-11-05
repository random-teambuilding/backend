module.exports = (Sequelize, sequelize) => {
  const userPosition = sequelize.define('userPosition', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    position: {//포지션
      type: Sequelize.string(10),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  userPosition.sync();
  return userPosition;
};