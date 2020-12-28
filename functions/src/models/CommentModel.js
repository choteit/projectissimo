const admin = require('firebase-admin');
const db = admin.firestore();
const AbstractModel = require ('./AbstractModel');

class Comment extends AbstractModel {
    constructor(data, id = null) {
        super(data,id);
        this.content = data.content;
        this.claps = data.claps;
        this.project = data.project;
    }
}

function create(data, callback) {
    let comment = new Comment(data);

    const commentQuerySnapshot = db.collection('comments').add({comment})
        .then((doc) => {
            callback(doc.id);
        })
        .catch((error) => {
            return error;
        })
}

function getListForProjects(callback) {
    const commentQuerySnapshot = db.collection('comments').get();
    const commentsList = [];
    commentQuerySnapshot
        .then((result) => {
            result.forEach((doc) => {
                let data = doc.data();
                let comment = new Comment(data);
                commentsList.push({comment});
                }
            );
            callback(commentsList);
        })
        .catch((error) => {
            return error;
        });
}

function update(commentId, data, callback) {
    let comment = new Comment(data, commentId);

    const commentRef = db.collection('comments').doc(commentId);
    commentRef.set({comment},
        {merge: true}
    ).then((doc) => {
            callback(doc)
        }
    ).catch((error) => {
        return error;
    });
}

function like(commentId, callback) {
    const increment = admin.firestore.FieldValue.increment(1);
    const commentRef = db.collection('comments').doc(commentId);
    commentRef.update({
            claps: increment
        }
    ).then((doc) => {
            callback(doc);
        }
    ).catch((error) => {
        return error;
    });
}

module.exports = {
    Comment,
    getListForProjects,
    create,
    update,
    like
};