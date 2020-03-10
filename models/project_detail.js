module.exports = function(sequlize, DataTypes){
    const project_detail = sequlize.define('Project_detail',{
        
        start_date:{
            type: DataTypes.DATE
        },
        end_date:{
            type: DataTypes.DATE
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING
        },
        category:{
            type: DataTypes.STRING
        },
        goal:{
            type: DataTypes.STRING
        },
        memcount:{
            type: DataTypes.INTEGER
        },
        want:{
            type: DataTypes.STRING
        },
        want_reason:{
            type: DataTypes.STRING
        },
        like:{
            type: DataTypes.INTEGER
        },
        dislike:{
            type: DataTypes.INTEGER
        }
    });

    return project_detail ;
}