import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppComponentService } from './app.component.service';

export interface TagStoryModel {
  title: string;
  url: number;
  created_at: number;
  author: string;
}
@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal/data-modal.html',
  styleUrls: ['./data-modal/data-modal.css'],
})
export class DataDialogComponent {
  public data: any;
  constructor(
    public dialogRef: MatDialogRef<DataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public info: any) {
    this.data = info;
  }
  close(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  columns: string[] = ['title', 'url', 'created_at', 'author'];
  public storyDataSource = [];

  constructor(public storyModel: MatDialog, public appService: AppComponentService) { }

  getTableData() {
    this.appService.getTableData('story').subscribe(
      (response) => {
        this.storyDataSource = [...response.hits];
      },
      (error) => {
      }
    );
  }

  openDialog(data): void {
    const dialogRef = this.storyModel.open(DataDialogComponent, {
      width: '50%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  ngOnInit() {
    this.getTableData();
    setInterval(() => {
      this.getTableData();
    }, 10000
    );
  }

}
