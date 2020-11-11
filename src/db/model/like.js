module.exports = (Sequelize, sequelize) => {
  const like = sequelize.define('like', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    want: {//스킬셋
      type: Sequelize.STRING(30),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  like.sync();
  return like;
};