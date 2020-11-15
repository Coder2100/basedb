const tasksController = require('../controllers').tasks;
const taskItemsController = require('../controllers').taskItems;


module.exports = (app) => {
      app.get('api', (req, res) => res.status(200).send({
            message: 'Welcome to Clients daily deliverables!',
            
      }));
      app.post('/api/tasks', tasksController.create);
       // app.get('/api/tasks', tasksController.list);
   //   http://localhost:8000/api/todos/1
     
};