import './main.scss';
import { ApiProvider } from './ApiProvider';

export class App {
    provider: ApiProvider
    
    constructor() {
        this.provider = new ApiProvider();
        this.bindInputEvents();
    }

    bindInputEvents() {
     let cityName = (document.getElementById("city") as HTMLInputElement).value;   
     document.getElementById("check").addEventListener("click", () => this.provider.getCityInfo('Kraków'));
     
    }
}