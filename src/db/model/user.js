module.exports = (Sequelize, sequelize) => {
  const user = sequelize.define('user', {
    
    num: {//고유 번호
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },

    name: {//이름(닉네임)
      type: Sequelize.STRING(30),
      allowNull: false
    },

    email: {//이메일 주소
      type: Sequelize.STRING(30),
      allowNull: false
    },

    password: {//비밀번호
      type: Sequelize.TEXT,
      allowNull: false
    },

    desc: {//소개
      type: Sequelize.STRING(50),
      allowNull: false
    },

    cert: {//인증여부
      type: Sequelize.BOOLEAN,
      allowNull: false
    }

  }, 
  {freezeTableName: true});
 
  user.sync();
  return user;
};