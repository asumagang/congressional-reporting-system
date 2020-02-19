import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from 'src/app/_models/program';
import { ProgramService } from 'src/app/_services/program.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  programs: Program[];

  constructor(private router:Router,private programService:ProgramService) { }

  ngOnInit() {
    this.programService.getAllPrograms().subscribe(
      data => {
        this.programs = data;
      }
    );
  }
  openinsertdataform(){
    this.router.navigate( ["/insertdataform"] );
  }
}
