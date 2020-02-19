import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramService } from '../_services/program.service';
import { Program } from '../_models/program';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProvinceService } from '../_services/province.service';
import { Province } from '../_models/province';

@Component({
  selector: 'app-insertdataform',
  templateUrl: './insertdataform.component.html',
  styleUrls: ['./insertdataform.component.css']
})
export class InsertdataformComponent implements OnInit {
  programs:Program[];
  provinces:Province[];
  constructor(private router:Router,private programService:ProgramService,private toastr:ToastrService
    ,private provinceService:ProvinceService
    ) { }

  ngOnInit() {
    this.LoadData();
    
  }
  back(){
    this.router.navigate( ["/admin-layout/insertdata"] );
  }
  LoadData(){
    this.programService.getAllPrograms().subscribe(
      data => {
        this.programs = data;
      }
    );
    this.provinceService.getAllProvinces().subscribe(
      data => {
        this.provinces = data;
      }
    );
  }
  
}