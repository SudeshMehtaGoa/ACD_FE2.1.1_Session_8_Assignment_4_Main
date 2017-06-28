/* logservice used in mathservice */
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  log(){
    console.log("New number inserted.")
  }
  info(){
    console.log("Data retrived")
  }


}
