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
  searchText: string;
  collectionSize: number;
  page: number;
  resultLength: number;
  pageSize = 5;
  errorMsg: string;

  constructor(
    private programService: ProgramService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const pageQ = params["page"];
      const searchQ = params["search"];
      this.page = pageQ ? parseInt(pageQ) : 1;
      this.searchText = searchQ ? searchQ : null;
      this.collectionSize = this.page * this.pageSize;
      this.onPageChange();
    });
  }
  onPageChange() {
    if (this.searchText) {
      this.router.navigate(["/programs"], {
        queryParams: { page: this.page, search: this.searchText }
      });
      this.loadProgramsDataFiltered();
    } else {
      this.router.navigate(["/programs"], { queryParams: { page: this.page } });
      this.loadProgramsData();
    }
  }

  onSearch() {
    this.onPageChange();
  }
  loadProgramsData() {
    this.programService.getPrograms(this.page, this.pageSize).subscribe(
      (response: Page<Program>) => {
        this.programsData = response.content;
        this.collectionSize =
          response.totalElements > 0 ? response.totalElements : 5;
          this.toastr.success("Server Running");
      },
      () =>this.toastr.error("Server Error.") 
    );
  }

  loadProgramsDataFiltered() {
    this.programService
      .getPrograms(this.page, this.pageSize, this.searchText)
      .subscribe(
        (response: Page<Program>) => {
          this.programsData = response.content;
          this.collectionSize =
            response.totalElements > 0 ? response.totalElements : 5;
          this.resultLength =
            response.totalElements > 0 ? this.collectionSize : 0;
        },
        () => this.toastr.error("Server Error.")
      );
  }
  openProgramForm(program: Program) {
    const modalRef = this.modalService.open(AddProgramComponent,{ size: 'lg',centered: true,});
    modalRef.componentInstance.program = program;
    modalRef.result.then(result => {
      if (!result) return;
      if (program) {
        //Edit
        this.programService.updateProgram(result).subscribe(
          (response: Program) => {
            if (response) {
              this.onPageChange();
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
              this.onPageChange();
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
            this.onPageChange();
            this.toastr.success("Delete Success");
          }
        },
        () => this.toastr.error("Delete Failed")
      );
    });
  }

}
