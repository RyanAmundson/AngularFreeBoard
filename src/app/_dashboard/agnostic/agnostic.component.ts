import { OpenIssueCounterComponent } from './../widgets/open-issue-counter/open-issue-counter.component';
import { IconStatusComponent } from './../widgets/icon-status/icon-status.component';
import { TileComponent } from '../tile/tile.component';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { CdkPortal, ComponentPortal, PortalOutlet } from '@angular/cdk/portal';
import * as sampleBoard from './data/sample-board.json';

@Component({
  selector: 'shd-agnostic',
  templateUrl: './agnostic.component.html',
  styleUrls: ['./agnostic.component.scss']
})
export class AgnosticComponent implements OnInit {
  IconStatusComponent = IconStatusComponent;
  portals: ComponentPortal<any>[] = [];
  portalOutlets: PortalOutlet[] = [];
  tiles: any[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.tiles = sampleBoard.tiles
      .map(tile => this.enrichTile(tile));
    console.log(this.tiles)

  }

  ngOnInit() {
  }

  portalAttached(event) {
    console.log(event)
  }

  generateClasses({ x, y, w, h }) {
    return [`start-${x}x${y}`, `end-${x + w}x${y + h}`];
  }

  enrichTile(tile) {
    tile.resolvedComponentType = this.resolveType(tile.component);
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory();
    // componentFactory.create(this.in)
    // tile.portal = new ComponentPortal(IconStatusComponent);
    tile.gridPositionClasses = this.generateClasses(tile.gridPosition).join(' ');
    // console.log(tile.portal.isAttached);
    // tile.attach();

    return tile;
  }

  resolveType(compName: string) {
    let map = {
      "IconStatusComponent": IconStatusComponent,
      "OpenIssueCounter": OpenIssueCounterComponent
    }
    return map[compName];
  }

  updatePosition(event:DragEvent) {
    console.log(event)
  }

}
