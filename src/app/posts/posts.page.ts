import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newPost(){
    this.router.navigate(['/new-post']);
  }

  post1(){
    this.router.navigate(['/post-dummy1']);
  }

  post2(){
    this.router.navigate(['/post-dummy2']);
  }

  post3(){
    this.router.navigate(['/post-dummy3']);
  }

}
