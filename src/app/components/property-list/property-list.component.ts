import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => {
      this.properties = data;
    });
  }

  viewProperty(id: string): void {
    this.router.navigate(['/properties', id]);
  }
}
