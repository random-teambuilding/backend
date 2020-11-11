module.exports = (Sequelize, sequelize) => {
  const locate = sequelize.define('locate', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    locate: {//스킬셋
      type: Sequelize.STRING(30),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  locate.sync();
  return locate;
};