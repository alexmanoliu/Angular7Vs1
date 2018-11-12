import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stop-training-component',
  templateUrl: './stop-training-component.component.html',
  styleUrls: ['./stop-training-component.component.scss']
})
export class StopTrainingComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }

  ngOnInit() {
  }

}
