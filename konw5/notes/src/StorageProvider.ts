import { MainStorage } from './MainStorage';

export class StorageProvider {
    saveData(data: MainStorage) {
        localStorage.setItem('SiteData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('SiteData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}