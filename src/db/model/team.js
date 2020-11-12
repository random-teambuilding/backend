module.exports = (Sequelize, sequelize) => {
  const team = sequelize.define('team', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    name: {//이름(닉네임)
      type: Sequelize.STRING(30),
      unique: true,
      allowNull: false
    },

    leader: {//고유 번호
      type: Sequelize.STRING(36),
      unique: true,
      allowNull: false
    },

    subject: {//비밀번호
      type: Sequelize.TEXT,
      allowNull: false
    },

    desc: {//소개
      type: Sequelize.STRING(50),
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  team.sync();
  return team;
};