module.exports = function(sequlize, DataTypes){
    const tool = sequlize.define('Tool',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, { underscored: true }
    );
    return tool ;
}