module.exports = function(sequlize, DataTypes){
    const log = sequlize.define('Log',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        ipaddr:{
            type: DataTypes.STRING
        },
        date:{
            type: DataTypes.DATE
        }
    }, { underscored: true }
    );
    log.associate=function(models){
        // models.Log.belongsTo(models.User,{foreignKey:'user_id' ,targetKey:'id',onDelete:'cas cade'});
        models.Log.belongsTo(models.User,{onDelete:'cascade'});
    };

    return log ;
};