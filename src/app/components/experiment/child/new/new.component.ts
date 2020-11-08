import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service'
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


interface IComponent {
    id: string,
    name: string,
    quantityLeft: number,
    dealer: string
}

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    cmpts: IComponent;
    successFlag = false;
    experiment;

    experimentForm = this.fb.group({
        name: [''],
        procedure: [''],
        startDate: [new Date],
        componentUsed: this.fb.array([
            this.addFormgroup()
        ])
    })

    constructor(public httpSvc: HttpService,
        private fb: FormBuilder,
        private ngbDateParserFormatter: NgbDateParserFormatter) { }

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
    addFormgroup(): FormGroup {
        return this.fb.group({
            id: [''],
            quantityUsed: [0]
        });
    }
    addWidget(): void {
        (<FormArray>this.experimentForm.get('componentUsed')).push(this.addFormgroup());
    }
    removeWidget(indexToRemove): void {
        (<FormArray>this.experimentForm.get('componentUsed')).removeAt(indexToRemove);
    }

    saveExperiment(): void {
        this.experimentForm.value.startDate = this.ngbDateParserFormatter.format(this.experimentForm.value.startDate);
        console.log(this.experimentForm.value);
        this.httpSvc.create("experiment", this.experimentForm.value)
            .subscribe(
                response => {
                    this.successFlag = true;
                    this.experimentForm = this.fb.group({
                        name: [''],
                        procedure: [''],
                        startDate: [new Date],
                        componentUsed: this.fb.array([
                            this.fb.group({
                                id: [''],
                                quantityUsed: [0]
                            })
                        ])
                    });
                    setTimeout(() => {
                        this.successFlag = false;
                    }, 3000);
                },
                error => {
                    console.log(error);
                });
    }
}

