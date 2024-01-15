import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EarthAnimationComponent } from './components/earth-animation/earth-animation.component';
import { PicOfTheDayComponent } from './pages/pic-of-the-day/pic-of-the-day.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { CardDetailsModalComponent } from './components/card-details-modal/card-details-modal.component';
import { TruncateTextPipe } from './pipes/truncateText.pipe';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { BrightnessEstimatePipe } from './pipes/brightnessEstimate.pipe';
import { AverageSizePipe } from './pipes/averageSize.pipe';
import { ToFixedPipe } from './pipes/toFixed.pipe';
import { AsteroidCardComponent } from './components/asteroid-card/asteroid-card.component';
import { SizeSpeedColorizerPipe } from './pipes/sizeSpeedColorizer.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomePageComponent,
    EarthAnimationComponent,
    PicOfTheDayComponent,
    ImageCardComponent,
    CardDetailsModalComponent,
    TruncateTextPipe,
    BrightnessEstimatePipe,
    LoaderComponent,
    AsteroidsComponent,
    DatePickerComponent,
    AverageSizePipe,
    ToFixedPipe,
    AsteroidCardComponent,
    SizeSpeedColorizerPipe,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,

    LottieModule.forRoot({
      player: function () {
        return player;
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
