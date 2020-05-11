import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../../services/app-services.service'

@Component({
  selector: 'app-cos-nlu',
  templateUrl: './cos-nlu.component.html',
  styleUrls: ['./cos-nlu.component.css']
})
export class CosNluComponent implements OnInit {

  res_text
  getFile(file: HTMLInputElement){  

    this.tweetService.getFile(file.value)
    .toPromise()
    .then( data =>{
        this.res_text = data
        console.log(data)
      })  
  }

  res_file
  analyzeFile(){
    console.log(this.res_text)
    this.tweetService.analyzeText(this.res_text)
    .subscribe(res =>{
      this.res_file = res
      console.log(this.res_file)
    })
  }

  ngOnInit() {
  }

  constructor( private tweetService: AppServicesService ) { }


}
