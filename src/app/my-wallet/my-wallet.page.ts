import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.page.html',
  styleUrls: ['./my-wallet.page.scss'],
})
export class MyWalletPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  topUp(){
    this.router.navigate(['/top-up']);
  }

  withdraw(){
    this.router.navigate(['/withdraw'])
  }

}
