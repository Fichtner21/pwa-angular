import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  commitDate: String;

  constructor(private _github: GithubService) { }

  ngOnInit(): void {
    this._github.lastCommit().subscribe(res => {
      let authorDate = res.author.date;
      this.commitDate = authorDate.slice(0,10);      
    })
  }

}
