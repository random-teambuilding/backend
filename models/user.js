module.exports = function(sequlize, DataTypes){
    const user = sequlize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        pwd:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:true,
                notEmpty:true
            }
        },
        lst_login_date:{
            type: DataTypes.DATE
        },
        sign_date:{
            type: DataTypes.DATE
        },
        pwd_edit_date:{
            type: DataTypes.DATE
        },
        is_active:{
            type: DataTypes.INTEGER
        },
        is_admin:{
            type: DataTypes.INTEGER
        }
    }, { underscored: true }
    );

    user.associate=function(models){
        models.User.hasMany(models.User_datail,{foreignKey:'id',sourceKey:'user_id'});       
    }
    return user ;
}