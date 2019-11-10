import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BTC} from '../services/bitcoin.service';
import { ETH} from '../services/etherium.service';
import { LTC } from '../services/lite.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  fiat = 'USD';
  crypto :'crypto';
  bitcoin$: Observable<Crypto>;
  ether$: Observable<Crypto>;
  Lite$: Observable<Crypto>;
  
  constructor(private Prov: LTC) {}

  ngOnInit() {
    this.getBitcoinPrice();
   
  }

  getBitcoinPrice() {
    this.bitcoin$= this.Prov.getBitoinPrice(this.fiat);
  }

 
}
