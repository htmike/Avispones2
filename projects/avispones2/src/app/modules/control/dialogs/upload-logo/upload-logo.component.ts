import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-upload-logo',
  templateUrl: './upload-logo.component.html',
  styleUrls: ['./upload-logo.component.sass']
})
export class UploadLogoComponent implements OnInit {

  constructor( private ref: MatDialogRef<any> ) { }

  ngOnInit() {
  }

  close() {
    this.ref.close();
  }

}
