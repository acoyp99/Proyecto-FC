import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../../services/app-services.service'

@Component({
  selector: 'app-text-nlu',
  templateUrl: './text-nlu.component.html',
  styleUrls: ['./text-nlu.component.css']
})
export class TextNluComponent implements OnInit {

  res_file
  constructor( private appService: AppServicesService ) { }

  ngOnInit(): void {
  }

  inputAnalize(input: HTMLInputElement){
    console.log(input.value)
    this.appService.inputAnalize(input.value)
    .subscribe(res =>{
      this.res_file = res
      console.log(this.res_file)
    })
  }

}
