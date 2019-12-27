import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-json-diologue',
  templateUrl: './json-diologue.component.html',
  styleUrls: ['./json-diologue.component.css']
})
export class JsonDiologueComponent implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<JsonDiologueComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
