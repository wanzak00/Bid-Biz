import { Component,ViewChild,OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  logScrollStart(event) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  dummyBuyer(){
    this.router.navigate(['/dummy-buyer']);
  }

  dummy(){
    this.router.navigate(['/dummy']);
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }
}
