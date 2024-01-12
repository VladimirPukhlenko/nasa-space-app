import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IImageCollectionItem } from 'src/app/types/imageCollection.interface';
import { style } from '@angular/animations';

@Component({
  selector: 'app-card-details-modal',
  templateUrl: './card-details-modal.component.html',
})
export class CardDetailsModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public cardData: IImageCollectionItem,
    private matDialogRef: MatDialogRef<CardDetailsModalComponent>
  ) {}

  ngOnInit() {}
  closeModal() {
    this.matDialogRef.close();
  }
}
