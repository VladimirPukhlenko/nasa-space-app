import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { NasaService } from 'src/app/services/nasa.service';
import { IImageCollectionItem } from 'src/app/types/imageCollection.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  constructor(public nasaService: NasaService) {}

  searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
  });
  searchResult$!: Observable<IImageCollectionItem[]>;

  ngOnInit() {}
  submitHandle() {
    if (this.searchForm.valid && this.searchForm.value.search?.trim()) {
      this.searchResult$ = this.nasaService.find(this.searchForm.value.search);
    }
  }
}
