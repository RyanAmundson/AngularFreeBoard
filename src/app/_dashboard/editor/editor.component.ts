import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shd-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  expanded = true;

  constructor() { }

  ngOnInit() {
  }

}
