import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaskServiceService {

  constructor() { }

  dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  phoneMask = ['(',/\d/, /\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
}
