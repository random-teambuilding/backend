module.exports = function(sequlize, DataTypes){
    const auth_permission = sequlize.define('Auth_permission',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        grade:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return auth_permission ;
}