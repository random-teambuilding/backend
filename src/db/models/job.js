module.exports = function(sequlize, DataTypes){
    const job = sequlize.define('Job',{
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { underscored: true }
    );
    job.associate=function(models){
        models.Job.hasOne(models.User_detail,{onDelete:'cascade'});
    }
    return job ;
}