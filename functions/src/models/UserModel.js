const admin = require('firebase-admin');
const db = admin.firestore();
const AbstractModel = require ('./AbstractModel');

class User extends AbstractModel {
    constructor(data, id = null) {
        super(data,id);
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.nickname = data.nickname;
        this.email = data.email;
        this.localisation = data.localisation;
        this.url = data.url;
        this.skills = data.skills;
        this.interests = data.interests;
        this.picture = data.picture;
    }
}

function create(data, callback) {
    let user = new User(data);

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
                    let user = new User(data);
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
    let user = new User(data, userId);

    const userRef = db.collection('users').doc(userId);
    userRef.set({user},
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