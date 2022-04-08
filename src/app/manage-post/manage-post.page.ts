import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.page.html',
  styleUrls: ['./manage-post.page.scss'],
})
export class ManagePostPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  postManage(){
    this.router.navigate(['/post-manage-dummy']);
  }


}
