import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-reports',
  templateUrl: './manage-reports.page.html',
  styleUrls: ['./manage-reports.page.scss'],
})
export class ManageReportsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewReports(){
    this.router.navigate(['/report-dummy']);
  }
}
