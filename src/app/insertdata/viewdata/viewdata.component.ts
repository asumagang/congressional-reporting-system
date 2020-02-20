import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from 'src/app/_models/program';
import { ProgramService } from 'src/app/_services/program.service';
import { ProvinceService } from 'src/app/_services/province.service';
import { Province } from 'src/app/_models/province';
import { DistrictService } from 'src/app/_services/district.service';
import { District } from 'src/app/_models/district';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  programs: Program[];
  provinces:Province[];
  districts:any;


  provId:number;

  constructor(
    private router:Router,
    private programService:ProgramService,
    private provinceService:ProvinceService,
    private districtService:DistrictService
    
    ) { }

  ngOnInit() {
    this.LoadPrograms();
    this.LoadProvinces();
    this.LoadDistricts();
  }
  openinsertdataform(){
    this.router.navigate( ["/insertdataform"] );
  }
  LoadProvinces(){
    this.provinceService.getAllProvinces().subscribe(
      data => {
        this.provinces = data;
      }
    );
  }
  LoadPrograms(){
    this.programService.getAllPrograms().subscribe(
      data => {
        this.programs = data;
      }
    );
  }
  LoadDistricts(){
    this.districtService.getAllDistricts().subscribe(
      data =>{
        this.districts = data;
      }
    );
  }
  selected(){
    console.log(this.provId)
  }
}
