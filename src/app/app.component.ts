import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PollsService } from './polls.service';
import { JsonDiologueComponent } from './json-diologue/json-diologue.component';

export interface PeriodicElement {
  title: string;
  url: number;
  created_at: number;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ai-test-dhaval';
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource: any;
  timer: number;

  constructor(public polls: PollsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
    this.setPollsInterval();
  }

  getData() {
    this.polls.getData().subscribe((data: {}) => {
      this.dataSource = new MatTableDataSource(data['hits']);
      console.log(this.dataSource);
    });
  }

  setPollsInterval() {
    this.timer = setInterval(() => { this.getData(); }, 10000);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(row) {
    const dialogRef = this.dialog.open(JsonDiologueComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
