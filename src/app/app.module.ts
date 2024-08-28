import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { TenantListComponent } from './components/tenant-list/tenant-list.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { propertyReducer } from './store/reducers/property.reducer';
import { PropertyEffects } from './store/effects/property.effects';
// not sure why the one below was needed but build fails without it 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    TenantListComponent,
    PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ property: propertyReducer }),
    EffectsModule.forRoot([PropertyEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    BrowserAnimationsModule, // logOnly: true will only log errors. // 25 means keep 25 states,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
