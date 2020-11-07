import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  amountLeft: number;
  dealer: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Iron',
    amountLeft: 17075200,
    dealer: 'NN Chemicals'
  },
  {
    name: 'Copper',
    amountLeft: 9976140,
    dealer: 'MN Chemicals'
  },
  {
    name: 'Sodium',
    amountLeft: 9629091,
    dealer: 'PN Chemicals'
  },
  {
    name: 'Zinc',
    amountLeft: 9596960,
    dealer: 'SN Chemicals'
  },
  {
    name: 'Sodium',
    amountLeft: 9629091,
    dealer: 'PN Chemicals'
  },
  {
    name: 'Zinc',
    amountLeft: 9596960,
    dealer: 'SN Chemicals'
  },
  {
    name: 'Sodium',
    amountLeft: 9629091,
    dealer: 'PN Chemicals'
  },
  {
    name: 'Zinc',
    amountLeft: 9596960,
    dealer: 'SN Chemicals'
  }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  countries = COUNTRIES;
}
