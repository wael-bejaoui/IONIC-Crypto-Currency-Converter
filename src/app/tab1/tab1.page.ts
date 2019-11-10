import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BTC} from '../services/bitcoin.service';
import { ETH} from '../services/etherium.service';
import { LTC } from '../services/lite.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  fiat = 'USD';
  crypto :'crypto';
  bitcoin$: Observable<Crypto>;
  ether$: Observable<Crypto>;
  Lite$: Observable<Crypto>;
  result$:number=10;
  constructor(private Prov: BTC) {}

  ngOnInit() {
    this.getBitcoinPrice();
   
  }

  getBitcoinPrice() {
    this.bitcoin$= this.Prov.getBitoinPrice(this.fiat);
  }

  result() {
    this.bitcoin$= this.Prov.getBitoinPrice(this.fiat);
  }
 
}
