module.exports = function(sequlize, DataTypes){
    const service = sequlize.define('Service',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return service ;
}