import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { NavBarComponent } from '../support/components/nav-bar/nav-bar.component';
import { BusinessCardComponent } from "../support/components/business-card/business-card.component";


@NgModule({
    declarations: [
        PortalComponent,
        TeamComponent,
        AboutComponent,
        ContactComponent,
    ],
    imports: [
        CommonModule,
        PortalRoutingModule,
        NavBarComponent,
        ClassesComponent,
        BusinessCardComponent
    ]
})
export class PortalModule { }
