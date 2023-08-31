import { Component } from '@angular/core';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';
import {BehaviorSubject, filter, interval, map, merge, mergeMap, Observable, startWith, Subject} from "rxjs";

@Component({
  selector: 'app-band-list',
  templateUrl: 'band-list.component.html'
})
export class BandListComponent {
  model$: Observable<{bands: Band[], isLoading: boolean}>;

  refreshDataClickSubject = new Subject();

  constructor(private bandDataService: BandDataService) {

    const refreshDataClick$= this.refreshDataClickSubject.asObservable();

    const refreshTrigger$ = refreshDataClick$.pipe(
      startWith(this.refreshDataClickSubject.next(null))
    );

    const bandList$ = refreshTrigger$.pipe(
      mergeMap(() => this.bandDataService.getBands())
    );

    this.model$ = merge(
      refreshTrigger$.pipe(map(() => ({bands: [], isLoading: true}) )),
      bandList$.pipe(map(bands => ({bands: bands, isLoading: false}) ))
    );

  }

  clickRefreshPage(){
    this.refreshDataClickSubject.next(null);
  }
}
