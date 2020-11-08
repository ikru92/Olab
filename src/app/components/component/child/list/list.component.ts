import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service'

interface IComponent {
  id: string,
  name: string,
  quantityLeft: number,
  dealer: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  cmpts: IComponent[]

  constructor(public httpSvc: HttpService) { }
  ngOnInit(): void {
    this.getComponents();
  }
  getComponents(): void {
    this.httpSvc.getAll('component')
      .subscribe(
        data => {
          this.cmpts = data;
        },
        error => {
          console.log(error);
        });
  }
  removeComponent(i, id): void {
    this.httpSvc.delete('component', id)
      .subscribe(
        data => {
          this.cmpts.splice(i, 1);
        },
        error => {
          console.log(error);
        });
  }
}

