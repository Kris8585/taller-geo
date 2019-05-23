import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';
import {AngularFireModule} from '@angular/fire';
import { environment} from 'src/environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { MapComponent } from './components/map/map.component';
import { GeoService } from './services/geo/geo.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey }),
    AngularFireDatabaseModule
    

  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
