//Abstract model which role is to give a base Model
//and generic attributes to models inheriting from it
class AbstractModel {
    constructor(props, id = null) {
        if(id){
            this.id = id;
        } else {
            this.id = data.id;
        }
        this.enabled = data.enabled;
        this.createdAt = data.createdAt;
        this.modifiedAt = data.modifiedAt;
        this.createdBy = data.createdBy;
        this.modifiedBy = data.modifiedBy;
    }
}

module.exports = {
    AbstractModel
};