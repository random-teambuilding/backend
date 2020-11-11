module.exports = (Sequelize, sequelize) => {
  const skillSet = sequelize.define('skillSet', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    skilset: {//스킬셋
      type: Sequelize.STRING(20),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  skillSet.sync();
  return skillSet;
};