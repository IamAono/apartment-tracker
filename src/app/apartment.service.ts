import { Injectable } from '@angular/core';
import { Apartment } from './apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  index = "1";
  apartments : Apartment[] = [];
  constructor() { }

  getApartments(): Apartment[] {
    this.apartments = []
    for(var key in localStorage) {
      if(key == "index" || key == "length" || key == "getItem" || key == "clear" || key == "removeItem" || key == "key" ||
        key == "setItem") {
        continue;
      }
      this.apartments.push(JSON.parse(localStorage.getItem(key)!.toString()));
    }
    return this.apartments;
  }

  getApartment(id: number): Apartment {
    const apartment = this.apartments.find(h => h.id === id)!;
    return apartment;
  }

  addApartment(apartment: Apartment): void {
    if(localStorage.getItem("index") != undefined) {
      this.index = localStorage.getItem("index")!.toString();
    }
    else {
      localStorage.setItem("index", "1");
    }
    this.apartments.push(apartment);
    localStorage.setItem(this.index, JSON.stringify(apartment));
    var y: number = +this.index;
    y++;
    this.index = y.toString();
    localStorage.setItem("index", this.index);
  }

  updateApartment(apartment: Apartment): void {
    localStorage.setItem(apartment.id.toString(), JSON.stringify(apartment));
  }

  deleteApartment(apartment: Apartment): void {
    localStorage.removeItem(apartment.id.toString())
  }
}
