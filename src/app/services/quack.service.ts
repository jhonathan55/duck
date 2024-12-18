import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


interface QuackI {
  message: string;
  url: string;
}

export interface QuackListResponseI {
  gif_count:   number;
  gifs:        string[];
  http:        string[];
  image_count: number;
  images:      string[];
}
@Injectable({
  providedIn: 'root'
})
export class QuackService {
  private _url:string=environment.baseUrl;
  private _http=inject(HttpClient);
  constructor() { }

  getRandonQuack():Observable<QuackI>{
    
    return this._http.get<QuackI>(this._url+'quack');
  }

  getListQuack():Observable<QuackListResponseI>{
    
    return this._http.get<QuackListResponseI>(this._url+'quack/list');
  }
}
