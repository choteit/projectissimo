const admin = require('firebase-admin');
const db = admin.firestore();

class Project {
    constructor(id, title, description, claps, creator) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.claps = claps;
        this.creator = creator;
    }
}

function create(data, callback) {
    let project = new Project();
    project.title = data.title;
    project.description = data.description;
    project.creator =  data.creator;

    const projectQuerySnapshot = db.collection('projects').add({project})
        .then((doc) => {
            callback(doc.id);
        })
        .catch((error) => {
            return error;
        })
}

function getList(callback) {
    const projectQuerySnapshot = db.collection('projects').get();
    const projectsList = [];
    projectQuerySnapshot
        .then((result) => {
            result.forEach((doc) => {
                let data = doc.data();
                let project = new Project(doc.id, data.title, data.description, data.claps,data.creator);
                projectsList.push({project});
                }
            );
            callback(projectsList);
        })
        .catch((error) => {
            return error;
        });
}

function like(projectId, callback) {
    const increment = admin.firestore.FieldValue.increment(1);
    const projectRef = db.collection('projects').doc(projectId);
    projectRef.update({
            claps: increment
        }
    ).then((doc) => {
        callback(doc);
        }
    ).catch((error) => {
        return error;
    });
}

function update(projectId, data, callback) {
    let project = new Project();
    project.title = data.title;
    project.description = data.description;

    const projectRef = db.collection('projects').doc(projectId);
    projectRef.set({project},
        {merge: true}
    ).then((doc) => {
            callback(doc)
        }
    ).catch((error) => {
        return error;
    });
}

module.exports = {
    Project,
    getList,
    like,
    create,
    update
};