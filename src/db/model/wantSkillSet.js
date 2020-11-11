module.exports = (Sequelize, sequelize) => {
  const wantSkillSet = sequelize.define('wantSkillSet', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    skill: {//소개
      type: Sequelize.STRING(10),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  wantSkillSet.sync();
  return wantSkillSet;
};