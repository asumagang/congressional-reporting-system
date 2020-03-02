import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../_services/program.service';
import { ProvinceService } from '../_services/province.service';
import { Program } from '../_models/program';
import { Province } from '../_models/province';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  programs:Program[];
  provinces:Province[];
  constructor(
    private programService:ProgramService,
    private provinceService:ProvinceService
  ) { }

  ngOnInit() {
    this.LoadProvinces();
    this.LoadPrograms();
  }
  reloadPage() {
    window.location.reload();
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
