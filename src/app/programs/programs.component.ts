import { Component, OnInit } from '@angular/core';
import { Program } from '../_models/program';
import { ProgramService } from '../_services/program.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Page } from '../_models/page';

import { ToastrService } from 'ngx-toastr';
import { AddProgramComponent } from '../add-program/add-program.component';
import { ProgramDeleteComponent } from '../program-delete/program-delete.component';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  programsData: Program[];
    //initializing p to one
    p: number = 1;
  constructor(
    private programService: ProgramService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
   this.LoadPrograms();
  }

  LoadPrograms(){
    this.programService.getAllPrograms().subscribe(data => {
      this.programsData = data;
    });
  }


  openProgramForm(program: Program) {
    const modalRef = this.modalService.open(AddProgramComponent,{ size: 'lg',centered: true});
    modalRef.componentInstance.program = program;
    modalRef.result.then(result => {
      if (!result) return;
      if (program) {
        //Edit
        this.programService.updateProgram(result).subscribe(
          (response: Program) => {
            if (response) {
              this.LoadPrograms();
              this.toastr.success("Update Success.")
            }
          },
          () => this.toastr.error("Update Failed.")
        );
      } else {
        //Create
        this.programService.addProgram(result).subscribe(
          (response: Program) => {
            if (response) {
              this.LoadPrograms();
              this.toastr.success("Program Added Successfully.")
            }
          },
          () => this.toastr.error("Program Creation Failed.")
        );
      }
    });
  }
  onDelete(program: Program) {
    const modalRef = this.modalService.open(ProgramDeleteComponent);
    modalRef.componentInstance.program = program;
    modalRef.result.then(result => {
      if(!result) return null;
      this.programService.deleteProgram(result).subscribe(
        response => {
          if (response) {
            this.LoadPrograms();
            this.toastr.success("Delete Success");
          }
        },
        () => this.toastr.error("Delete Failed")
      );
    });
  }

}
