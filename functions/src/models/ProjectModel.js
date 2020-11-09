const admin = require('firebase-admin');
const db = admin.firestore();

class Project {
    constructor(title, description, claps) {
        this.title = title;
        this.description = description;
        this.claps = claps;
    }

}

function getProjectsList() {
    const projectsQuerySnapshot = db.collection('projects').get();
    const projectsList = [];
    projectsQuerySnapshot

        .then((result) => {
            result.forEach((doc) => {
                    projectsList.push({
                        id: doc.id,
                        data: doc.data()
                    });
                }
            );
            return projectsList;
        })
        .catch((error) => {
            return error;
        });
}

module.exports = {
    Project,
    getProjectsList
};