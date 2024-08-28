import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Property } from '../../models/property.model';
import { selectPropertyById } from '../../store/selectors/property.selector';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.property$ = this.store.select(selectPropertyById(id));
  }

  property$: Observable<Property>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    const propertyId = this.route.snapshot.paramMap.get('id');
    this.property$ = this.store.select(selectPropertyById(propertyId));
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.property$ = this.store.select(selectPropertyById(id));
  // }

  goBack(): void {
    this.router.navigate(['/properties']);
  }
}