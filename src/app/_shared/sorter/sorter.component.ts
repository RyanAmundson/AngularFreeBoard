import { Chore } from './../../_models/models';
import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  Input,
  ChangeDetectorRef,
  ViewChild
} from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, distinctUntilChanged, distinctUntilKeyChanged, flatMap, tap, bufferCount, toArray } from "rxjs/operators";
import { GeneratedStyles } from "../../../assets/animate";
import { trigger, transition, animate } from "@angular/animations";
import { UtilityService } from "../../_services/utility.service";
import { ChoreStatus } from "../../_models/models";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "shd-sorter",
  templateUrl: "./sorter.component.html",
  styleUrls: ["./sorter.component.scss"],
  animations: [
    trigger("fade", [
      transition(`:leave`, [
        animate("0.5s ease", GeneratedStyles.Animations.fadeOut)
      ]),

      transition(`:enter`, [
        animate("0.5s ease", GeneratedStyles.Animations.fadeIn)
      ])
    ]),
    trigger("fadeHorizontal", [
      transition(`:leave`, [
        animate("0.5s ease", GeneratedStyles.Animations.fadeOutRight)
      ]),

      transition(`:enter`, [
        animate("0.5s ease", GeneratedStyles.Animations.fadeInLeft)
      ]),

      transition(`:increment`, [
        animate("0.5s ease", GeneratedStyles.Animations.fadeOutRight),
        animate("0.5s 0.5s ease", GeneratedStyles.Animations.fadeInLeft)
      ]),

      transition(`:decrement`, [
        animate("0.5s ease", GeneratedStyles.Animations.fadeOutRight),
        animate("0.5s 0.5s ease", GeneratedStyles.Animations.fadeInLeft)
      ])
    ])
  ]
})
export class SorterComponent {
  ChoreStatus = ChoreStatus; // required to use enums in template
  listFromFB; // used to check for equivalence only
  @Input() iconsOnly = false;
  @Input() showCritical = false;
  @Output() loadingComplete: EventEmitter<void> = new EventEmitter();
  @ViewChild('warning', { static: false }) warningList;
  choreStream: Observable<any>;
  good;
  warning;
  critical;

  goodAsync;
  warningAsync;
  criticalAsync;
  listLength;

  constructor(
  ) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadingComplete.emit();
  }

  sorting(event) {
    console.log(event)
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

