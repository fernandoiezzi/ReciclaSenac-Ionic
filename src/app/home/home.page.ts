import { Component, ElementRef, ENVIRONMENT_INITIALIZER, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  template:`
  <capacitor-google-map #map></capacitor-google-map>
  <button (click)="createMap()">Create Map</button>
  `
  ,
})
export class HomePage {

  Enviar(){
    alert('Informações recebidas com sucesso');
  }
  
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: -22.91193282949598,
          lng: -43.17237027289816,
        },
        zoom: 8,
      },
    });
    const apiKey = 'AIzaSyAV-4WgdcJj3hx_QmPYubUvZbDj5KgbSY0';

const mapRef = document.getElementById('map');

const newMap = await GoogleMap.create({
  id: 'my-map', // Unique identifier for this map instance
  element: mapRef, // reference to the capacitor-google-map element
  apiKey: apiKey, // Your Google Maps API Key
  config: {
    center: {
      // The initial position to be rendered by the map
      lat: 33.6,
      lng: -117.9,
    },
    zoom: 15, // The initial zoom level to be rendered by the map
  },
});


  }
}



