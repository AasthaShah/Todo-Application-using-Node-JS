const db = require('../util/database');

module.exports = class Task {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    static save(title, content) {
        return db.execute('INSERT INTO tasks (title, content) VALUES (?, ? )',[title, content]);
    }

    static edit(id, title, content) {
        console.log("inside edit method");
        console.log(id);
        console.log(title);
        console.log(content);
        return db.execute('UPDATE tasks SET title = ? ,content = ? WHERE id = ? ',[title, content, id]);
    }

    static find(id) {
        console.log("id = "+id);
        Task.viewAll()
        .then(tasks => {
            console.log("tasks="+tasks);
            for(task of tasks) {
                console.log("task= "+task);
                if(task.id === id) {
                    return task;
                }
            }
            return null;
        })
        .catch(err => console.log(err));
    }

    static delete(id) {
        console.log('Inside delete for id = '+id);
        return db.execute('DELETE FROM tasks WHERE id = ?', [id]);
    }

    static viewAll() {
        return db.execute('SELECT * FROM tasks ORDER BY id DESC');
    }
}