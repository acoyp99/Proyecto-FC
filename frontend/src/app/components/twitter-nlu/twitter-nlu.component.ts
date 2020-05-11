import { Component, OnInit } from '@angular/core';
import {AppServicesService} from '../../services/app-services.service'

@Component({
  selector: 'app-twitter-nlu',
  templateUrl: './twitter-nlu.component.html',
  styleUrls: ['./twitter-nlu.component.css']
})
export class TwitterNluComponent implements OnInit {

  constructor( private appService: AppServicesService) { }

  ngOnInit(): void {
  }

  tweets

  getTweet(word: HTMLInputElement): boolean{
    
    this.appService.getTweet(word.value)
      .subscribe(
        res => {
          console.log(res)
          this.tweets = res;
        },
        error => {
          error.message;
        }
      );
      return false;
  }

}
