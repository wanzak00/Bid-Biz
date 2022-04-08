import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  viewHistory(){
    this.router.navigate(['/view-history']);
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }
}
