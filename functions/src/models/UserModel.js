const admin = require('firebase-admin');
const db = admin.firestore();

class User {
    constructor(id, firstname, lastname, nickname, email, localisation, url,
                skills, interests, picture) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.nickname = nickname;
        this.email = email;
        this.localisation = localisation;
        this.url = url;
        this.skills = skills;
        this.interests = interests;
        this.picture = picture;
    }
}

function create(data, callback) {
    let user = new User();
    user.id = id;
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.nickname = data.nickname;
    user.email = data.email;
    user.localisation = data.localisation;
    user.url = data.url;
    user.skills = data.skills;
    user.interests = data.interests;
    user.picture = data.picture;

    const userQuerySnapshot = db.collection('users').add({user})
        .then((doc) => {
            callback(doc.id);
        })
        .catch((error) => {
            return error;
        })
}

function getList(callback) {
    const userQuerySnapshot = db.collection('users').get();
    const usersList = [];
    userQuerySnapshot
        .then((result) => {
            result.forEach((doc) => {
                    let data = doc.data();
                    let user = new User(doc.id, data.firstname, data.lastname, data.nickname, data.email,
                        data.localisation, data.url, data.skills, data.interests, data.picture);
                usersList.push({user});
                }
            );
            callback(usersList);
        })
        .catch((error) => {
            return error;
        });
}

function update(userId, data, callback) {
    let user = new User();
    user.id = userId;
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.nickname = data.nickname;
    user.email = data.email;
    user.localisation = data.localisation;
    user.url = data.url;
    user.skills = data.skills;
    user.interests = data.interests;
    user.picture = data.picture;

    const projectRef = db.collection('projects').doc(req.params.projectId);
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
    User,
    getList,
    create,
    update
};