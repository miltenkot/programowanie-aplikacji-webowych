import './main.scss';
import { ApiProvider } from './ApiProvider';

export class App {
    provider: ApiProvider
    
    constructor() {
        this.provider = new ApiProvider();
        this.bindInputEvents();
    }

    bindInputEvents() {
     
    }
}