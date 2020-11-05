module.exports = (Sequelize, sequelize) => {
  const teamPosition = sequelize.define('teamPosition', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    team: {//이름(닉네임)
      type: Sequelize.UUID,
      allowNull: false
    },

    position: {//소개
      type: Sequelize.STRING(10),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  teamPosition.sync();
  return teamPosition;
};