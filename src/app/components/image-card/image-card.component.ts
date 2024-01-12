import { Component, Input, OnInit } from '@angular/core';
import { IImageCollectionItem } from 'src/app/types/imageCollection.interface';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailsModalComponent } from '../card-details-modal/card-details-modal.component';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
})
export class ImageCardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  @Input()
  item!: IImageCollectionItem;
  openModal() {
    this.dialog.open(CardDetailsModalComponent, {
      data: this.item,
      panelClass: ['modal', 'gradientBlur'],
      width: '80%',
      height: '90%',
    });
  }
  ngOnInit() {}
}
