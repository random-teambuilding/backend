module.exports = function(sequlize, DataTypes){
    const report_status = sequlize.define('Report_status',{
        status:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return report_status ;
}