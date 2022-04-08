import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  withdrawSuccess(){
    this.router.navigate(['/withdraw-success']);
  }
}
