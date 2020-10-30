module.exports = function(sequlize, DataTypes){
    const report_type = sequlize.define('Report_type',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return report_type ;
}