import { Component, OnInit } from '@angular/core';
import { LyricsService } from './lyrics.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {  
  artistName: String;
  topSongs: String;
  topInDe: String;

  panelOpenState = false;

  constructor(private _lyrcis: LyricsService) { }

  ngOnInit(): void {
    this._lyrcis.getTop3Artists().subscribe(res => {
      this.artistName = res.message.body['artist_list'].map(res => res.artist.artist_name);            
    })

    this._lyrcis.getTop5SongsIt().subscribe(res => {
      this.topSongs = res.message.body['track_list'].map(res => res.track);     
    })

    this._lyrcis.getTop3inDE().subscribe(res => {
      this.topInDe = res.message.body['artist_list'].map(res => res.artist.artist_name);
    })
  }
}

 
  
