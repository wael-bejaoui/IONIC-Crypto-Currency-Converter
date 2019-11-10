import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LTC {

  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC';
  constructor(private http: HttpClient) { }

  getBitoinPrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL}${fiat}`);
  }
}
