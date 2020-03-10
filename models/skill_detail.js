module.exports = function(sequlize, DataTypes){
    const skill_detail = sequlize.define('Skill_detail',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return skill_detail ;
}