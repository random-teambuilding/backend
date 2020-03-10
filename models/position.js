module.exports = function(sequlize, DataTypes){
    const position = sequlize.define('Position',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { underscored: true }
    );
    position.associate=function(models){
        models.Position.hasOne(models.User_detail,{onDelete:'cascade'});
    }
    return position ;
}