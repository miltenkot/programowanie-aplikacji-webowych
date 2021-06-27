import './main.scss';
import { ApiProvider } from './ApiProvider';

export class App {
    provider: ApiProvider
    
    constructor() {
        this.provider = new ApiProvider();
    }
     bindInputEvents(cityName: String) {  
     document.getElementById("button").addEventListener("click", () => this.provider.getCityInfo(`${cityName}`));
     const data = this.provider.getData();
     this.addNewElement(data.name, data.weather[0].description, data.main.temp);
    }

    addNewElement(cityName: String, description: String, temp: String) {
        var li = document.createElement("li");
        var t = document.createTextNode(`${cityName} :  ${description} : ${temp}F `); 
        li.appendChild(t);
        if (cityName === '') {
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
    }
}