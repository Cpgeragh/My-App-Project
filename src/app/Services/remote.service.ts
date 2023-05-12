import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})

export class RemoteService {

  constructor(private http:HttpClient) { }

  GetMovieData():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=2c97c287&s=%27war%27');
    }
    

}
