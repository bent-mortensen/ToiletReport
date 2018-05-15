import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  public value: string;

  constructor(
    private router: Router,
    private DataService: DataService
  ) { }

  ngOnInit() {
  }

  GoToConfirmation(){
    this.DataService.SaveType(this.value);
    this.router.navigate(["/confirmation"]);
  }
  GoToHome(){
    this.router.navigate(["/home"]);
  }

}
