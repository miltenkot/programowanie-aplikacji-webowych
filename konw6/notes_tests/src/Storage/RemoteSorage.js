"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("firebase");
const config_1 = require("../Configuration/config");
const firebaseApp = firebase_1.default.initializeApp(config_1.firebaseConfig);
const db = firebaseApp.firestore();
class RemoteStorage {
    constructor() { }
    addFire(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield db.collection('notes').add(note);
        });
    }
    ;
    deleteNoteBy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield db.collection('notes').doc(id).delete();
        });
    }
    updateNoteBy(id, note) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield db.collection('notes').doc(id).update(note);
        });
    }
    getNoteBy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return db.collection('notes').doc(id).get().then(res => ({ id: res.id, data: res.data() }));
        });
    }
    getNotesCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield db.collection('notes').get().then(res => ({
                data: res.docs.map((res) => ({
                    data: res.data(),
                    id: res.id
                }))
            }));
            const data = res.data.map((note) => (Object.assign(Object.assign({}, note.data), { id: note.id })));
            return Promise.resolve(data);
        });
    }
}
const remoteStorage = new RemoteStorage();
exports.default = remoteStorage;
//# sourceMappingURL=RemoteSorage.js.map