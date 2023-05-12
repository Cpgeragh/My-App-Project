import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Scroll to the previous hotel
  scrollPrev() {
    const scrollContainer = document.querySelector('.hotel-grid');
    if (scrollContainer instanceof HTMLElement) {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  // Scroll to the next hotel
  scrollNext() {
    const scrollContainer = document.querySelector('.hotel-grid');
    if (scrollContainer instanceof HTMLElement) {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  long:any="";
  lat:any="";
  
  async getGPS() { 
  const coordinates = await Geolocation.getCurrentPosition();
  this.long = coordinates.coords.longitude;
  this.lat = coordinates.coords.latitude;
  }
}
