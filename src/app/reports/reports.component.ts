import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../_services/program.service';
import { Program } from '../_models/program';
import { ProvinceService } from '../_services/province.service';
import { Province } from '../_models/province';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
programs:Program[];
provinces:Province[];
  constructor(
    private programService:ProgramService,
    private provinceService:ProvinceService
  ) { }

  ngOnInit() {
    this.LoadPrograms();
    this.LoadProvinces();
  }
  LoadPrograms(){
    this.programService.getAllPrograms().subscribe(data => {
      this.programs = data;
    });
  }
  LoadProvinces(){
    this.provinceService.getAllProvinces().subscribe(data => {
      this.provinces = data;
    });
  }
}
