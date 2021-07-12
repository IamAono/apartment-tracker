import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment';
import { APARTMENTS } from '../mock-apartments';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  //apartments: Apartment[] = [];
  apartments = APARTMENTS;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments() : void {
    this.apartmentService.getApartments().
    subscribe(aparments => this.apartments = aparments);
  }

}
