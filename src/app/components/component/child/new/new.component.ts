import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service'


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  show = false;
  cmpt = {
    name: "",
    quantityLeft: 0,
    dealer: "",
  }
  constructor(public httpsvc: HttpService) { }
  ngOnInit(): void {
  }
  saveComponent(cmpt): void {
    this.httpsvc.create("component", cmpt)
      .subscribe(
        response => {
          this.show = true;
          this.cmpt = {
            name: "",
            quantityLeft: 0,
            dealer: "",
          }
          setTimeout(() => {
            this.show = false;
          }, 3000);
        },
        error => {
          console.log(error);
        });
  }
}
