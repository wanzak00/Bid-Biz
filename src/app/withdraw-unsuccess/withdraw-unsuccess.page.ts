import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw-unsuccess',
  templateUrl: './withdraw-unsuccess.page.html',
  styleUrls: ['./withdraw-unsuccess.page.scss'],
})
export class WithdrawUnsuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToWallet(){
    this.router.navigate(['/my-wallet']);
  }

}
