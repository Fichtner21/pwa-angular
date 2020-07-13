import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  public API_URL_3_CHART = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=it&apikey=6bc8e4e006c6670df9b11cdeea097920";  

  public API_URL_5_TOP_SONGS_IT = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=6bc8e4e006c6670df9b11cdeea097920";

  constructor(private _http: HttpClient) { }

  getTop3Artists(){
    return this._http.get(this.API_URL_3_CHART).pipe(
      map((result) => result)
    )
  }

  getTop5SongsIt(){
    return this._http.get(this.API_URL_5_TOP_SONGS_IT).pipe(
      map((result) => result)
    )
  }
}
