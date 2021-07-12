import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {
  @Input() apartment?: Apartment;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getApartment();
  }

  goBack(): void {
    this.location.back();
  }

  getApartment(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apartmentService.getApartment(id)
      .subscribe(apartment => this.apartment = apartment);
  }

}
