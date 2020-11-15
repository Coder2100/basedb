'use strict';
/*
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
   
    static associate(models) {
      // define association here
      Task.hasMany(models.TaskItem, {
        foreignKey: 'taskId',
        as: 'taskItems',
      })
    }
  };
  Task.init({
    title: DataTypes.STRING,
    allowNull: false
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};

//sequelize model:create --name Todo --attributes title:string

  */
 module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Task.associate = (models) => {
    Task.hasMany(models.TaskItem, {
      foreignKey: 'taskId',
      as: 'taskItems',
    });
  };

  return Task;
};