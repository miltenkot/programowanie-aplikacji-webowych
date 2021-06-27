import './main.scss';
import { ApiProvider } from './ApiProvider';

export class App {
    provider: ApiProvider
    
    constructor() {
        this.provider = new ApiProvider();
        // this.bindInputEvents();
    }
//
    bindInputEvents(cityName: String) {  
     document.getElementById("button").addEventListener("click", () => this.provider.getCityInfo(`${cityName}`));
     this.addNewElement(cityName);
    }

    addNewElement(text: String) {
        var li = document.createElement("li");
        var t = document.createTextNode(`${text}`); 
        li.appendChild(t);
        if (text === '') {
            alert("You must write something!");
          } else {
            document.getElementById("myUL").appendChild(li);
          }
          (document.getElementById("city") as HTMLInputElement).value = "";
          var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);


        //this.bindInputEvents(inputValue);
    }
}