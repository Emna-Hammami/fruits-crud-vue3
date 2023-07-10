import firebase from "../firebase";

const db = firebase.collection("/fruits");

class FruitsDataService {
  getAll() {
    return db;
  }

  create(fruit) {
    return db.add(fruit);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new FruitsDataService();