import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  public API_URL_3_CHART = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=pl&apikey=6bc8e4e006c6670df9b11cdeea097920";  

  public API_URL_5_TOP_SONGS_IT = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=pl&f_has_lyrics=1&apikey=6bc8e4e006c6670df9b11cdeea097920";

  public API_URL_TOP_3_DE = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=de&apikey=6bc8e4e006c6670df9b11cdeea097920";

  constructor(private _http: HttpClient) { }

  getTop3Artists(): Observable<any>{
    return this._http.get(this.API_URL_3_CHART).pipe(
      map((result) => result)
    )
  }

  getTop5SongsIt(): Observable<any>{
    return this._http.get(this.API_URL_5_TOP_SONGS_IT).pipe(
      map((result) => result)
    )
  }

  getTop3inDE(): Observable<any>{
    return this._http.get(this.API_URL_TOP_3_DE).pipe(
      map((result) => result)
    )
  }
}
