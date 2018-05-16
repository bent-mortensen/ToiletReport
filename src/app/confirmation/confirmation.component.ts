import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  private type: String;
  private latitude: number;
  private longitude: number;

  constructor(
    private router: Router,
    private DataService: DataService
  ) { }

  ngOnInit() {
    this.type = this.DataService.GetType();
    this.latitude = this.DataService.GetLatitude();
    this.longitude = this.DataService.GetLongitude();
    //console.log(this.DataService.GetType());
  }

  GoToHome(){
    this.router.navigate(["/home"]);
  }
}
