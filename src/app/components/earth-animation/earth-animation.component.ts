import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { Subscription, filter, take, tap } from 'rxjs';

@Component({
  selector: 'app-earth-animation',
  templateUrl: './earth-animation.component.html',
})
export class EarthAnimationComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}
  private subscription!: Subscription;

  private readonly earthAnimationPath = '../../../assets/animations/earth.json';
  private readonly asteroidsAnimationPath =
    '../../../assets/animations/asteroids.json';

  options = {
    path: '../../../assets/animations/earth.json',
  };

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => {
        if (res instanceof NavigationEnd && res.url === '/asteroids') {
          this.options = {
            ...this.options,
            path: this.asteroidsAnimationPath,
          };
        } else {
          if (this.options.path !== this.earthAnimationPath) {
            this.options = {
              ...this.options,
              path: this.earthAnimationPath,
            };
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
