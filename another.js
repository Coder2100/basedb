
//creating user model
const User = sequelize.define('User', {
      firstName: {
            type: DataTypes.STRING,
            allowNull: false
      },
      lastName: {
            type: DataTypes.STRING
            //AllowNull default to true
      }
}, {
      //other model options
      age: {
            type: DataTypes.INTEGER
      }
});
console.log(User === sequelize.models.User);
User.sync({ force: true }).then(function () {
      //Table created
      return User.create({
            firstName: 'Zukile',
            lastName: 'Mtotso',
            age: 29
      });
});

var Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})

var Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
})