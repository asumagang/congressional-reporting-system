import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProgramService } from "../_services/program.service";
import { Program } from "../_models/program";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { ProvinceService } from "../_services/province.service";
import { Province } from "../_models/province";
import { MunicipalityService } from '../_services/municipality.service';
import { Municipality } from '../_models/municipality';

@Component({
  selector: "app-insertdataform",
  templateUrl: "./insertdataform.component.html",
  styleUrls: ["./insertdataform.component.css"]
})
export class InsertdataformComponent implements OnInit {
  programs: Program[];
  provinces: Province[];
  municipalities:Municipality[];

  constructor(
    private router: Router,
    private programService: ProgramService,
    private toastr: ToastrService,
    private provinceService: ProvinceService,
    private municipalityService:MunicipalityService
  ) {}

  ngOnInit() {
    this.LoadData();
    this.LoadMunicipality();
  }
  back() {
    this.router.navigate(["/admin-layout/insertdata"]);
  }
  LoadData() {
    this.programService.getAllPrograms().subscribe(data => {
      this.programs = data;
    });
    this.provinceService.getAllProvinces().subscribe(data => {
      this.provinces = data;
    });
  }
  LoadMunicipality(){
    this.municipalityService.getAllMunicipalities().subscribe(data => {
      this.municipalities = data;
    });
  }
}
