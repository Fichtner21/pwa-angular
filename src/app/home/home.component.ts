import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomNotificationComponent } from '../custom-notification/custom-notification.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  commitDate: String;
  commitMessage: String;
  public lang = new FormControl('en');

  constructor(private _github: GithubService, private title: Title, private translateService: TranslateService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._github.lastCommit().subscribe(res => {
      let authorDate = res['0'].commit.author.date;      
      this.commitDate = authorDate.slice(0,10);       
      this.commitMessage = res['0'].commit.message;        
    });
    this.lang.valueChanges.subscribe((lang) => {
      this.translateService.use(lang);
    });

    this.translateService.onLangChange.subscribe(lang => {
      // this.snackBar.open('Language has changed', null, {
      //   duration: 2000,
      // })
      this.snackBar.openFromComponent(CustomNotificationComponent,{
        data: `My data ${'noti.info' }`,
        duration: 2000
      });
    });
  }
}
