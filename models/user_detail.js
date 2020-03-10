module.exports = function(sequlize, DataTypes){
    const user_detail = sequlize.define('User_detail',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        n_giveup:{
            type: DataTypes.INTEGER
        },
        n_reported:{
            type: DataTypes.INTEGER
        },
        is_blacked:{
            type: DataTypes.INTEGER
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        unwanted:{
            type: DataTypes.STRING,
        },
        channel:{
            type: DataTypes.STRING,
        }
    }, { underscored: true }
    );
    user_detail.associate=function(models){
        models.User_detail.belongsTo(models.User);       
    }
    return user_detail ;
}