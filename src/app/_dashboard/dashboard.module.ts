
import { TileComponent } from './tile/tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardStaticComponent } from './static/dashboard-static.component';
import { SharedModule } from '../_shared/shared.module';
import { EditorComponent } from './editor/editor.component';

import { AgnosticComponent } from './agnostic/agnostic.component';
import { PortalModule } from '@angular/cdk/portal';
import { IconStatusComponent } from './widgets/icon-status/icon-status.component';
import { DynamicModule } from 'ng-dynamic-component';
import { WidgetBaseComponent } from './widgets/widget-base/widget-base.component';
import { OpenIssueCounterComponent } from './widgets/open-issue-counter/open-issue-counter.component';

@NgModule({
  declarations: [
    DashboardStaticComponent,
    EditorComponent,
    AgnosticComponent,
    TileComponent,
    IconStatusComponent,
    WidgetBaseComponent,
    OpenIssueCounterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DynamicModule.withComponents([TileComponent, OpenIssueCounterComponent,
      IconStatusComponent]),
    SharedModule,
    PortalModule,
  ],
  entryComponents: [
    TileComponent,
    IconStatusComponent,
    OpenIssueCounterComponent
  ]
})
export class DashboardModule { }
