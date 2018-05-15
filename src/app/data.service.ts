import { Injectable } from '@angular/core';


@Injectable()
export class DataService {


  private type: String;
  private latitude: number;
  private longitude: number;

  constructor() { }

  SaveType(_type){
    this.type = _type;
  }

  SaveGPS(_latitude, _longitude){
    this.latitude = _latitude;
    this.longitude = _longitude;
  }

  GetType(){
    return this.type;
  }

  GetLatitude(){
    return this.latitude;
  }
  GetLongitude(){
    return this.longitude;
  }
}
