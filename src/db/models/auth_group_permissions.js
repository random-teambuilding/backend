module.exports = function(sequlize, DataTypes){
    const auth_group_permissions = sequlize.define('Auth_group_permissions',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
    });

    return auth_group_permissions ;
}