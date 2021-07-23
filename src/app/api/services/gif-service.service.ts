import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { GifApi } from './api';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifService {
gifs= new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) { }
  getGif(){
    return this.http.get(`${environment.url}${environment.api_key}${environment.params}`)
    .subscribe((response:any)=>{this.gifs.next(response.data)});;
  }
  findGif(term:string){
    return this.http.get(`${environment.url}${environment.api_key}${term}`+'&limit=25&offset=5&rating=g&lang=en').subscribe((response:any)=>{this.gifs.next(response.data)});
  }
  getAllGifs(){
    return this.gifs.asObservable();
  }
}
