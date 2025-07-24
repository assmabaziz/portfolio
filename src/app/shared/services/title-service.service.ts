import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleServiceService {
 private _title = new BehaviorSubject<string>('');
  public title$ = this._title.asObservable();
  constructor(private router: Router, private route: ActivatedRoute) {
     this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let currentRoute = this.route.root;
          while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
          }
          return currentRoute;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        if (data['title']) {
          this._title.next(data['title']);
        } else {
          this._title.next('');
        }
      });
  }
   }

