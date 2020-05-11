import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  private api = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  getTweet(word: string){
    const path = `${this.api}/tweets/${word}`
    
    return this.http.get<any>(path)
  }

  getFile(file: string): Observable<any>{
    const path = `${this.api}/list`
    var data = {
      "bucket": "ng-app",
      "name": file
    }
    const options = {responseType: 'text' as 'json'}
    return this.http.post(path, data, options)    
  }

  analyzeText(res_text: string) {
    const path = `${this.api}/upload-text`
    var text = {"text": res_text}
    console.log(text)
    return this.http.post<any>(path, text)

  }

  inputAnalize(input_text: string){
    const path = `${this.api}/upload-text`
    var text = {"text": input_text}
    console.log(text)
    return this.http.post<any>(path, text)
  }
}
