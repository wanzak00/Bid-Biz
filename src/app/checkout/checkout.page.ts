import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  topUp(){
    this.router.navigate(['/top-up']);
  }

  pay(){
    this.router.navigate(['/pay']);
  }

}
