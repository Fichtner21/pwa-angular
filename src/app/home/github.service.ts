import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  public LAST_COMMIT = "https://api.github.com/repos/Fichtner21/pwa-angular/git/commits/26c71eceefbdb158aa5b3b3099eabde5a01d2c3b";

  constructor(private _http: HttpClient) { }

  lastCommit(): Observable<any>{
    return this._http.get(this.LAST_COMMIT).pipe(
      map((result) => result)
    )
  }
}
