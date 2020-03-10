module.exports = function(sequlize, DataTypes){
    const report_detail = sequlize.define('Report_detail',{
        
        sign_date:{
            type: DataTypes.DATE
        },
        content:{
            type: DataTypes.STRING
        }
    });

    return report_detail ;
}