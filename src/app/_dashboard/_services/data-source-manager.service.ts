import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSourceManagerService {

  sources;

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  track(source) {
    // this.http.get
  }

  trackFirebase(ref) {
    return this.db.object(ref).valueChanges();
  }

}
