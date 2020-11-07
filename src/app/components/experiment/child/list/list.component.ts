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
  expts: IExperiment

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
}

