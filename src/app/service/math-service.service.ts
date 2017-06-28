/* Service which adds number to array to gives array back */
/* Service is using log service */

import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class MathServiceService {
  private numberList: number[] = [];

  constructor(private _logService: LogService) {

  }
  /** Add number in the array List. */
  addNumberToarray(newNumber: number) {
    this.numberList.unshift(newNumber);
    this._logService.log();
  }

  /**Get the number list from the array. */
  getNumberArray(): number[] {
    this._logService.info();
    return this.numberList;
  }

}
