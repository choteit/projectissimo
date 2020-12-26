const admin = require('firebase-admin');
const db = admin.firestore();
const AbstractModel = require ('./AbstractModel');

class Project extends AbstractModel {
    constructor(data, id = null) {
        super(data,id);
        this.title = data.title;
        this.description = data.description;
        this.claps = data.claps;
        this.creator = data.creator;
    }
}

function create(data, callback) {
    let project = new Project(data);
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
                let project = new Project(data, doc.id);
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
    let project = new Project(data);
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