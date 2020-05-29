import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weather;

  constructor(private weatherService:WeatherService){}

  ngOnInit(){
 
  }

  getWeatherByPaisAndCiudad(cityName:string, countryCode:string){
    this.weatherService.getWeather(cityName,countryCode)
    .subscribe(
      res =>{ 
        this.weather = res,
        console.log(res)
      },
      err => console.error(err)
    )

  }

  //envía los datos de los dos campos del formulario
  enviarDatos(cityName, countryCode){
    this.getWeatherByPaisAndCiudad(cityName.value, countryCode.value);

    cityName.value = '';
    countryCode.value = '';
    cityName.focus();



    return false;

  }

  

}
