import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  MyProfile(){
    this.router.navigate(['/my-profile']);
  }

  MyAddress(){
    this.router.navigate(['/my-address']);
  }

  MyWallet(){
    this.router.navigate(['/my-wallet']);
  }

  Post(){
    this.router.navigate(['/posts']);
  }

  About(){
    this.router.navigate(['/about']);
  }

  Help(){
    this.router.navigate(['/help']);
  }

  feedback(){
    this.router.navigate(['/give-feedback']);
  }
  
  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }
}
