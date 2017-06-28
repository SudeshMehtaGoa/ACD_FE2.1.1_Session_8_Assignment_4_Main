import { Component } from '@angular/core';
import { MathServiceService } from 'app/service/math-service.service';
import { DropDownService } from 'app/service/drop-down.service';
import { LogService } from 'app/service/log.service';
/* First Service and dependent logservice is introduced in @Component */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MathServiceService, LogService]
})
//Second service is introduced in @NgModule
export class AppComponent {
  title: string = 'Log Service Exercise';
  newNumber: number;
  numberArray: number[] = [];
  dropDownList: string[] = [];

  constructor(private _mathsService: MathServiceService, private _dropDownService: DropDownService) {
    /* Consuming Service 2 */
    this.dropDownList = this._dropDownService.getdropDownList();
  }

  /* Consuming Service 1 */
  addNumber() {
    this._mathsService.addNumberToarray(this.newNumber);
    this.numberArray = this._mathsService.getNumberArray();
  }
}

