import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //Variables
  URI:String = '';
  API_KEY = '7f3de10c808132e1ac0cc43282206843';

  //Constructor
  constructor(private http:HttpClient) { 
    this.URI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }

  //Método para conseguir el clima en función del país y de la ciudad
  getWeather(cityName:string, countryCode:string){
    return this.http.get(this.URI + cityName +','+ countryCode +'&appid='+ this.API_KEY);
  }
}
