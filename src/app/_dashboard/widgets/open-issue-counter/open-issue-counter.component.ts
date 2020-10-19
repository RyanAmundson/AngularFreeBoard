import { DataSourceManagerService } from './../../_services/data-source-manager.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'agd-open-issue-counter',
  templateUrl: './open-issue-counter.component.html',
  styleUrls: ['./open-issue-counter.component.scss']
})
export class OpenIssueCounterComponent implements OnInit {
  @Input() dataSource: string;
  @Input() firebaseRef: string;


  contextAsync: Observable<any>;

  constructor(private dsms: DataSourceManagerService) {
  }

  ngOnInit() {
    this.contextAsync = this.dsms.trackFirebase(this.firebaseRef);
  }

}
