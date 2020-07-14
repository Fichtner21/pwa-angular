import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  public LAST_COMMIT = "https://api.github.com/repos/Fichtner21/pwa-angular/commits";

  constructor(private _http: HttpClient) { }

  lastCommit(): Observable<any>{
    return this._http.get(this.LAST_COMMIT).pipe(
      map((result) => result)
    )
  }
}
