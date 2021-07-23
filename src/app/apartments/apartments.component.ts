import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments() : void {
    this.apartments = this.apartmentService.getApartments();
  }

  add(name: string, address: string, monthlyRent: string, sqft: string, bedrooms: string, bathrooms: string, comments: string): void {
    var index = "1";
    if(localStorage.getItem("index") != undefined) {
      index = localStorage.getItem("index")!.toString();
    }
    else {
      localStorage.setItem("index", "1");
    }
    var id :number = +index;
    var mr : number  = +monthlyRent;
    var s : number = +sqft;
    var bed : number = +bedrooms;
    var bath : number = +bathrooms;
    this.apartmentService.addApartment({id: id,name: name, address: address,
      monthlyRent: mr, sqft: s, bedrooms: bed,
      bathrooms: bath, comments: comments} as Apartment);
    alert("The apartment has been added, scroll up to the top to see it.")
  }

  sortByRent(): void {
    this.apartmentService.sortByRent();
  }

  sortByRentDesc(): void {
    this.apartmentService.sortByRentDesc();
  }

  sortBySqft(): void {
    this.apartmentService.sortBySqft();
  }

  sortBySqftDesc(): void {
    this.apartmentService.sortBySqftDesc();
  }

  sortByBed(): void {
    this.apartmentService.sortByBed();
  }

  sortByBedDesc(): void {
    this.apartmentService.sortByBedDesc();
  }

  sortByBath(): void {
    this.apartmentService.sortByBath();
  }

  sortByBathDesc(): void {
    this.apartmentService.sortByBathDesc();
  }


}
