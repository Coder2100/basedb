'use strict';
/*
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
      TaskItem.associate = (models) => {
        TodoItem.belongsTo(models.TodoItem, {
          foreignKey: 'taskId',
          type: DataTypes.INTEGER,
          onDelete: 'CASCADE',
        });
      }
    }
  };
  TodoItem.init({
    //models
    content: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
    {
    sequelize,
    modelName: 'TodoItem',
  });
  return TodoItem;
};

//sequelize model:create --name TodoItem --attributes content:string,complete:boolean

module.exports = (sequelize, DataTypes) => {
  const TaskItem = sequelize.define('', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  TaskItem.associate = (models) => {
    TodoItem.belongsTo(models.Task, {
      foreignKey: 'taskId',
      onDelete: 'CASCADE',
    });
  };

  return TaskItem;
};
*/

module.exports = (sequelize, DataTypes) => {
  const TaskItem = sequelize.define('TaskItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  TaskItem.associate = (models) => {
    TaskItem.belongsTo(models.Task, {
      foreignKey: 'taskId',
      onDelete: 'CASCADE',
    });
  };

  return TaskItem;
};