import { Observable } from 'rxjs';
import { DataSourceManagerService } from './../../_services/data-source-manager.service';
import { Component, OnInit, HostListener, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';
import { GeneratedStyles } from '../../../../assets/animate';
import { trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'agd-icon-status',
  templateUrl: './icon-status.component.html',
  styleUrls: ['./icon-status.component.scss'],
  animations: [
    trigger('fade', [
      transition(`:leave`, [
        animate('0.5s ease', GeneratedStyles.Animations.fadeOut)
      ]),

      transition(`:enter`, [
        animate('0.5s ease', GeneratedStyles.Animations.fadeIn)
      ]),


    ]),
    trigger('fadeHorizontal', [
      transition(`:leave`, [
        animate('0.5s ease', GeneratedStyles.Animations.fadeOutRight)
      ]),

      transition(`:enter`, [
        animate('0.5s ease', GeneratedStyles.Animations.fadeInLeft)
      ]),

      transition(`:increment`, [
        animate('0.5s ease', GeneratedStyles.Animations.fadeOutRight),
        animate('0.5s 0.5s ease', GeneratedStyles.Animations.fadeInLeft)
      ]),

      transition(`:decrement`, [
        animate('0.5s ease', GeneratedStyles.Animations.fadeOutRight),
        animate('0.5s 0.5s ease', GeneratedStyles.Animations.fadeInLeft)
      ]),
    ])
  ]
})
export class IconStatusComponent implements OnInit {

  @Input() dataSource: string;
  @Input() firebaseRef: string;
  // @Input() who: "who";
  // @Input() icon: "icon";
  // @Input() text: "text";
  // @Input() status: "good";
  @Output() loadingComplete: EventEmitter<void> = new EventEmitter();

  contextAsync: Observable<any>;

  constructor(private dsms: DataSourceManagerService) {
  }

  ngOnInit() {
    if (this.firebaseRef) {
      this.contextAsync = this.dsms.trackFirebase(this.firebaseRef);
      this.contextAsync.subscribe((res) => {
        console.log(res);
      });
    }
  }

  ngAfterViewInit() {
    this.loadingComplete.emit();
  }
}
