import { Component } from '@angular/core';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';
import {filter, interval, map} from "rxjs";

@Component({
  selector: 'app-band-list',
  templateUrl: 'band-list.component.html'
})
export class BandListComponent {
  bandList: Band[] = [];

  //observable-urile sunt chestii care ne vor fi date in viitor
  //stream-uri de evenimente

  constructor(private bandDataService: BandDataService) {
    const o = interval(1000).pipe(
      map(value => value * value),
      filter(value => value % 2 === 0)
    )
    o.subscribe(
      (value) => console.log(value)
    );

    this.bandDataService.getBands().subscribe(bands => {
      this.bandList = bands;
    });
  }
}
