import { Component } from '@angular/core';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';
import {BehaviorSubject, filter, interval, map, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-band-list',
  templateUrl: 'band-list.component.html'
})
export class BandListComponent {
  bandList$: Observable<Band[]>;

  //subject-ul e un observable care poate fi controlat
  refreshDataClickSubject = new Subject();

  constructor(private bandDataService: BandDataService) {
    this.bandList$ = this.bandDataService.getBands();

    const refreshDataClick$= this.refreshDataClickSubject.asObservable();
    refreshDataClick$.subscribe(() => console.log("click"))
  }
}
