import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { ComponentComponent } from './components/component/component.component';
import { TemplateComponent } from './components/template/template.component';
import { NewComponent } from './components/component/child/new/new.component';
import { EditComponent } from './components/component/child/edit/edit.component';
import { NewComponent as NewExperiment } from './components/experiment/child/new/new.component';
import { EditComponent as EditExperiment } from './components/experiment/child/edit/edit.component';
import { NewComponent as NewTemplate } from './components/template/child/new/new.component';
import { EditComponent as EditTemplate } from './components/template/child/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './components/root-nav/root-nav.component';
import { ListComponent } from './components/component/child/list/list.component';
import { ListComponent as ListExperiment } from './components/experiment/child/list/list.component';
import { ListComponent as ListTemplate } from './components/template/child/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    ExperimentComponent,
    ComponentComponent,
    TemplateComponent,
    NewComponent,
    EditComponent,
    ListComponent,
    NewExperiment,
    EditExperiment,
    ListExperiment,
    NewTemplate,
    EditTemplate,
    ListTemplate,
    RootNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDatepickerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
