import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',  
  styleUrls: ['./custom-notification.component.scss']
})
export class CustomNotificationComponent implements OnInit {  

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
    
  }

}
