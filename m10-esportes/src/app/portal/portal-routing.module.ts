import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactComponent } from './contact/contact.component';
import { PortalComponent } from './portal.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'sobre',
        component: AboutComponent,
        data: { name: 'Nossa missão' },
      },
      {
        path: 'turmas',
        component: ClassesComponent,
        data: { name: 'Nossas turmas' },
      },
      {
        path: 'contato',
        component: ContactComponent,
        data: { name: 'Contato' },
      },
      {
        path: 'equipe',
        component: TeamComponent,
        data: { name: 'Nossa equipe' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
