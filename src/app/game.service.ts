import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<any[]> {
    return new Observable(observer => {
      this.http.get(`https://www.scorebat.com/video-api/v1/`).subscribe(
        (games: any[]) => {
          observer.next(games);
        },
        error => {
          observer.error('Could not get games');
        }
      );
    });
  }
}
