import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button  nbButton hero status="primary" *ngIf="!value">{{ value }}</button>
    <button  nbButton hero  status="danger" *ngIf="value == 'O'">{{ value }}</button>
    <button  nbButton hero  status="info" *ngIf="value == 'X'">{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent{

  @Input() value: 'X' | 'O' | undefined;

}

