import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude: number
  longitude: number
constructor(){}

 ngOnInit() {
    this.getUserLocation()
  }


private getUserLocation() {
this.latitude = 9.3383697
this.longitude = -83.7575296
}


}
