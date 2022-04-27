
import { Router } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "src/environments/environment";
import { AngularFireModule, FirebaseApp } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { MatButtonModule } from "@angular/material/button";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { HttpClientModule } from "@angular/common/http";

import { PlatformModule } from '@angular/cdk/platform';
import { AuthModule } from './_authentication/authentication.module';
import { PageNotFoundComponent } from './_common/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    MatButtonModule,
    HttpClientModule,
    PlatformModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register("firebase-messaging-sw.js", { enabled: true })
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent],
})
export class AppModule {
}
