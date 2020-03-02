import { Component, OnInit , Input } from '@angular/core';
import { Program } from '../_models/program';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-program-delete',
  templateUrl: './program-delete.component.html',
  styleUrls: ['./program-delete.component.css']
})
export class ProgramDeleteComponent implements OnInit {
  @Input()
  program: Program;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  delete() {
    this.activeModal.close(this.program.id);
  }
}
