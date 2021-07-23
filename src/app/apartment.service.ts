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
        key == "setItem" || key == "sort") {
        continue;
      }
      this.apartments.push(JSON.parse(localStorage.getItem(key)!.toString()));
    }
    if(localStorage.getItem("sort") != null) {
      var sort = localStorage.getItem("sort");
      if(sort!.toString() === "rent") {
        this.sortByRent();
      }
      else if(sort!.toString() === "rentDesc") {
        this.sortByRentDesc();
      }
      else if(sort!.toString() === "sqft") {
        this.sortBySqft();
      }
      else if(sort!.toString() === "sqftDesc") {
        this.sortBySqftDesc();
      }
      else if(sort!.toString() === "bed") {
        this.sortByBed();
      }
      else if(sort!.toString() === "bedDesc") {
        this.sortByBedDesc();
      }
      else if(sort!.toString() === "bath") {
        this.sortByBath();
      }
      else if(sort!.toString() === "bathDesc") {
        this.sortByBathDesc();
      }
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

  sortByRent(): void {
    this.apartments.sort((a,b) => a.monthlyRent < b.monthlyRent ? -1 : 1);
    localStorage.setItem("sort", "rent");
  }

  sortByRentDesc(): void {
    this.apartments.sort((a,b) => a.monthlyRent > b.monthlyRent ? -1 : 1);
    localStorage.setItem("sort", "rentDesc");
  }

  sortBySqft(): void {
    this.apartments.sort((a,b) => a.sqft < b.sqft ? -1 : 1);
    localStorage.setItem("sort", "sqft");
  }

  sortBySqftDesc(): void {
    this.apartments.sort((a,b) => a.sqft > b.sqft ? -1 : 1);
    localStorage.setItem("sort", "sqftDesc");
  }

  sortByBed(): void {
    this.apartments.sort((a,b) => a.bedrooms < b.bedrooms ? -1 : 1);
    localStorage.setItem("sort", "bed");
  }

  sortByBedDesc(): void {
    this.apartments.sort((a,b) => a.bedrooms > b.bedrooms ? -1 : 1);
    localStorage.setItem("sort", "bedDesc");
  }

  sortByBath(): void {
    this.apartments.sort((a,b) => a.bathrooms < b.bathrooms ? -1 : 1);
    localStorage.setItem("sort", "bath");
  }

  sortByBathDesc(): void {
    this.apartments.sort((a,b) => a.bathrooms > b.bathrooms ? -1 : 1);
    localStorage.setItem("sort", "bathDesc");
  }
}
