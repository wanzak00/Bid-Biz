import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  adminProfile(){
    this.router.navigate(['/admin-profile']);
  }

  manageProfile(){
    this.router.navigate(['/manage-profile']);
  }

  managePost(){
    this.router.navigate(['/manage-post']);
  }

  manageFeedback(){
    this.router.navigate(['/manage-feedback']);
  }

  manageReports(){
    this.router.navigate(['/manage-reports']);
  }
  
  logout(){
    this.router.navigate(['/login']);
  }

}
