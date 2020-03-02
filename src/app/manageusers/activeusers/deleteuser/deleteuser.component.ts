import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  @Input()
  user: User;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  delete() {
    this.activeModal.close(this.user.id);
  }

}
