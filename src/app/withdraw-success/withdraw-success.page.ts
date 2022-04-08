import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw-success',
  templateUrl: './withdraw-success.page.html',
  styleUrls: ['./withdraw-success.page.scss'],
})
export class WithdrawSuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToWallet(){
    this.router.navigate(['/my-wallet']);
  }
}
