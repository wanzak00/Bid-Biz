import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-post-dummy1',
  templateUrl: './post-dummy1.page.html',
  styleUrls: ['./post-dummy1.page.scss'],
})
export class PostDummy1Page implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create(
      {
        cssClass: 'my-custom-class',
        buttons: [
          
          {
            text: 'Download',
            icon: 'Download',
            handler: () => {
              console.log('Document clicked');
            }
          },  
          
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      }
    );
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

}
