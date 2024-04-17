import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kvts';
  showHeaderAndFooter = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.showHeaderAndFooter = !(
          event.urlAfterRedirects.includes('/login') ||
          event.urlAfterRedirects.includes('/registration') ||
          event.urlAfterRedirects.includes('/pageNotFound')
        );
      });
  }
}
