import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './components/component/component.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { TemplateComponent } from './components/template/template.component';
import { NewComponent } from './components/component/child/new/new.component';
import { EditComponent } from './components/component/child/edit/edit.component';
import { ListComponent } from './components/component/child/list/list.component';
import { NewComponent as NewExperiment } from './components/experiment/child/new/new.component';
import { EditComponent as EditExperiment } from './components/experiment/child/edit/edit.component';
import { ListComponent as ListExperiment } from './components/experiment/child/list/list.component';
import { NewComponent as NewTemplate } from './components/template/child/new/new.component';
import { EditComponent as EditTemplate } from './components/template/child/edit/edit.component';
import { ListComponent as ListTemplate } from './components/template/child/list/list.component';

const routes: Routes = [
  {
    path: 'experiment',
    component: ExperimentComponent,
    children: [
      {
        path: 'new',
        component: NewExperiment
      },
      {
        path: 'edit',
        component: EditExperiment
      },
      {
        path: '',
        component: ListExperiment
      },
    ]
  },
  {
    path: 'template',
    component: TemplateComponent,
    children: [
      {
        path: 'new',
        component: NewTemplate
      },
      {
        path: 'edit',
        component: EditTemplate
      },
      {
        path: '',
        component: ListTemplate
      },
    ]
  },
  {
    path: 'component',
    component: ComponentComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: '',
        component: ListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
