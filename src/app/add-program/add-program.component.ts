import { Component, OnInit, Input } from '@angular/core';
import { Program } from '../_models/program';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {
  @Input()
  program: Program = {
    id: 1,
    name: "Pantawid Pamilya ",
    department: "Department 1",
    target: " 10000020",
    funds: "200300010"
  };
  newName: string;
  newDepartment: string;
  newTarget: string;
  newFunds: string;

  headTitle: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.headTitle = this.program ? "Edit program" : "Create program";
    this.newName = this.program ? this.program.name : "";
    this.newDepartment = this.program ? this.program.department : "";
    this.newTarget = this.program ? this.program.target : "";
    this.newFunds = this.program ? this.program.funds : "";
  }
  submit() {
    if (this.program) {
      //Update program
      const updateProgram: Program = {
        id: this.program.id,
        name: this.newName,
        department: this.newDepartment,
        target: this.newTarget,
        funds: this.newFunds
      };
      this.activeModal.close(updateProgram);
    } else {
      //Create User
      const newProgram: Program = {
        id:null ,
        name: this.newName,
        department: this.newDepartment,
        target: this.newTarget,
        funds: this.newFunds
      };
      this.activeModal.close(newProgram);
    }
  }

}
