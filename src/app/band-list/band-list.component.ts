import { Component } from '@angular/core';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';
import {BehaviorSubject, filter, interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-band-list',
  templateUrl: 'band-list.component.html'
})
export class BandListComponent {
  bandList$: Observable<Band[]>;

  constructor(private bandDataService: BandDataService) {
    this.bandList$ = this.bandDataService.getBands();
  }
}
