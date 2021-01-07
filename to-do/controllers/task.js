const Task = require('../models/tasks');

exports.getHomepage = (req, res, next) => {
    Task.viewAll().then(
        ([tasks]) => {
            console.log(tasks);
            res.render('homepage', {
                tasks : tasks,
                path : '/',
                pageTitle : 'Task Page'

            });
        }
    ).catch(err => console.log(err));
};

exports.getAddTask = (req, res, next) => {
    res.render('add-task', {
        pageTitle : 'Add Task',
        path : '/add-task'
    });
};

exports.postAddTask = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    Task.save(title, content).then(() => {
        Task.viewAll().then(
        ([tasks]) => {
            console.log(tasks);
            res.render('homepage', {
                tasks : tasks,
                path : '/',
                pageTitle : 'Task Page'

            });
        }
    ).catch(err => console.log(err));
    }).catch(err => console.log(err));
};

exports.getEditTask = (req, res, next) => {
    const id__ = req.body.id;
    console.log("id__ = "+id__);
    Task.viewAll().then(([tasks]) => {
                 res.render('edit-task', {
                 tasks : tasks,
                 id : id__,
                 path : '/edit-task',
                 pageTitle : 'Edit Task'
           });
        })
    .catch(err => console.log(err));
    // console.log("task : "+task);
    //     if(task === null) {
    //         res.redirect('/');
    //     }
    //     else {
    //         res.render('edit-task', {
    //             task : task,
    //             path : '/edit-task',
    //             pageTitle : 'Edit Task'
    //         });
    //     }
};

exports.postEditTask = (req, res, next) => {
    console.log("inside postEditTask()");
    const id = req.body.id;
    const updatedTitle = req.body.title;
    const updatedContent = req.body.content;
    console.log("Updated title : "+updatedTitle);
    console.log("Updated content : "+updatedContent);
    Task.viewAll().then(([tasks]) => {
        for(task of tasks) {
        if(task.id == id) {
            console.log("matched id has title = "+task.title);
            return Task.edit(id, updatedTitle, updatedContent);
        }
        }
    }).then(result => {
        console.log("result="+result);
        console.log('Updated task');
        res.redirect('/');
    })   
    .catch(err => console.log(err));
};

exports.postDeleteTask = (req, res, next) => {
    const id = req.body.id;
    console.log("Inside controller for id= "+id);
    Task.delete(id).then(() => {
        console.log('Completed calling task.delete()');
     Task.viewAll().then(
        ([tasks]) => {
            console.log(tasks);
            res.render('homepage', {
                tasks : tasks,
                path : '/',
                pageTitle : 'Task Page'

            });
        }
    ).catch(err => console.log(err));
     }).catch(err => console.log(err));
    
    
};