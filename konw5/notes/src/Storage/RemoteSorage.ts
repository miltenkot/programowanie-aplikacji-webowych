import firebase from 'firebase';
import { firebaseConfig } from'../Configuration/config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

class RemoteStorage {
    constructor(){}

    async addFire(note: any) {
        const res = await db.collection('notes').add(note)
    };
    
    async deleteNoteBy(id: string) {
        const res = await db.collection('notes').doc(id).delete();
    }
    
    async updateNoteBy(id: string, note: any) {
        const res = await db.collection('notes').doc(id).update(note);
    }
    
    //getNoteBy("KqoArpBz7HFvi2FDHvbz").then(res => console.log(res));
    
    async getNoteBy(id: string) {
        return db.collection('notes').doc(id).get().then(res => ({id: res.id, data: res.data()}));
    }
    
    async getNotesCollection() {
        const res = await db.collection('notes').get().then(res => ({
            data: res.docs.map((res) => ({
                data: res.data(),
                id: res.id
            }))
        }));
        const data = res.data.map((note) => ({
            ...note.data,
            id: note.id,
        }));
        return Promise.resolve(data);
    }
}

const remoteStorage = new RemoteStorage();

export default remoteStorage;