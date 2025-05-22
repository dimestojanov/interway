
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {AppComponent} from './app/app.component';
import {provideHttpClient} from '@angular/common/http'; // or wherever your routes live

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()// any other providers like HttpClientModule, etc.
  ]
});

