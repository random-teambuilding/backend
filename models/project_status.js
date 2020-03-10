module.exports = function(sequlize, DataTypes){
    const project_status = sequlize.define('Project_status',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return project_status ;
}