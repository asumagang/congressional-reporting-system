import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from 'src/app/_models/program';
import { ProgramService } from 'src/app/_services/program.service';
import { ProvinceService } from 'src/app/_services/province.service';
import { Province } from 'src/app/_models/province';
import { DistrictService } from 'src/app/_services/district.service';
import { District } from 'src/app/_models/district';
import { MunicipalityService } from '../../_services/municipality.service';
import { Municipality } from '../../_models/municipality';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  provinces:Province[];
districts:any;
programs:Program[];
municipalities:Municipality[];

provId: number = 1;
districtId:number = null;

  constructor(
    private router:Router,
    private provinceService:ProvinceService,
    private districtService:DistrictService,
    private programService: ProgramService,
    private municipalityService:MunicipalityService
  ) { }

  ngOnInit() {
    this.LoadProvinces();
    this.LoadPrograms();
  }
    
  selectOption(id: number) {
    //getted from event
    console.log(id);
    //getted from binding
    console.log(this.provId)
  }
getProvId(){
  this.districtService.findByProvinceId(this.provId).subscribe(
    data =>{
      this.districts = data;
      console.log(this.districts);
    }
  );
  }
  LoadProvinces(){
    this.provinceService.getAllProvinces().subscribe(
      data => {
        this.provinces = data;
 
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
  LoadPrograms(){
    this.programService.getAllPrograms().subscribe(data => {
      this.programs = data;
    });
  }

  openinsertdataform(){
    this.router.navigate( ["/insertdataform"] );
  }
  
  getDistrictId(){
    console.log(this.districtId);
    if(this.districtId==17){
      this.municipalityService.getAllMunicipalities().subscribe(
        data =>{
          this.municipalities = data;
        }
      );
    }else{
      this.municipalityService.findByDistrictId(this.districtId).subscribe(
        data =>{
          this.municipalities = data;
          console.log(this.municipalities);
        }
      )
    }
   
  }
}
