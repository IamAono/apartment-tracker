import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment';
import { APARTMENTS } from '../mock-apartments';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  //apartments: Apartment[] = [];
  apartments = APARTMENTS;

  constructor() { }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments() : void {

  }

}
