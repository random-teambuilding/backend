module.exports = function(sequlize, DataTypes){
    const auth_group = sequlize.define('Auth_group',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return auth_group ;
}