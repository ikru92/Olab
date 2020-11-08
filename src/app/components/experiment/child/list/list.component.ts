import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service'

interface IComponent {
  id: string,
  name: string,
  quantityUsed: string
}

interface IExperiment {
  id: string,
  startDate: string,
  name: string,
  componentUsed: IComponent[],
  procedure: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  expts: IExperiment[]
  successFlag = false;
  errorFlag = false;

  constructor(public httpSvc: HttpService) { }
  ngOnInit(): void {
    this.getComponents();
  }
  getComponents(): void {
    this.httpSvc.getAll('experiment')
      .subscribe(
        data => {
          this.expts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  removeExperiment(i, id): void {
    this.httpSvc.delete('experiment', id)
      .subscribe(
        data => {
          this.expts.splice(i, 1);
          this.successFlag = true;
          setTimeout(() => {
            this.successFlag = false;
          }, 3000);
        },
        error => {
          this.errorFlag = true;
          setTimeout(() => {
            this.errorFlag = false;
          }, 3000);
        });
  }
}

