import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.page.html',
  styleUrls: ['./dummy.page.scss'],
})
export class DummyPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create(
      {
        cssClass: 'my-custom-class',
        buttons: [
          
          {
            text: 'Files',
            icon: 'document',
            handler: () => {
              console.log('Document clicked');
            }
          },  
          
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              console.log('Delete clicked');
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
