import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service'
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


interface IComponent {
    id: string,
    names: string,
}

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    cmpts: IComponent[];
    successFlag = false;
    names: string[] = [];

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
            name: [''],
            quantityUsed: [0]
        });
    }
    addWidget(): void {
        (<FormArray>this.experimentForm.get('componentUsed')).push(this.addFormgroup());
    }
    removeWidget(indexToRemove): void {
        (<FormArray>this.experimentForm.get('componentUsed')).removeAt(indexToRemove);
    }

    updateComponentName(event, i): void {
        let name = event.target.options[event.target.options.selectedIndex].text;
        this.names[i] = name;
    }

    saveExperiment(): void {
        this.experimentForm.value.startDate = this.ngbDateParserFormatter.format(this.experimentForm.value.startDate);
        for (let i = 0; i < this.names.length; i++) {
            this.experimentForm.value.componentUsed[i].name = this.names[i];
        }
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
                                name: [''],
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

