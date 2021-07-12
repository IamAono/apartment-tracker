import { Injectable } from '@angular/core';
import { Apartment } from './apartment';
import { APARTMENTS } from './mock-apartments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor() { }

  getApartments(): Observable<Apartment[]> {
    const Apartments = of(APARTMENTS);
    return Apartments;
  }

  getApartment(id: number): Observable<Apartment> {
    const apartment = APARTMENTS.find(h => h.id === id)!;
    return of(apartment);
  }
}
