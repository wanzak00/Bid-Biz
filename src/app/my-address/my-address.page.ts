import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editAddress(){
    this.router.navigate(['/edit-address']);
  }

}
