import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BTC} from '../services/bitcoin.service';
import { ETH} from '../services/etherium.service';
import { LTC } from '../services/lite.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  fiat = 'USD';
  crypto :'crypto';
  bitcoin$: Observable<Crypto>;
  ether$: Observable<Crypto>;
  Lite$: Observable<Crypto>;
  
  constructor(private Prov: ETH) {}

  ngOnInit() {
    this.getBitcoinPrice();
   
  }

  getBitcoinPrice() {
    this.bitcoin$= this.Prov.getBitoinPrice(this.fiat);
  }

 
}
