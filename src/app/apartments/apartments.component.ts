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
  }

}
