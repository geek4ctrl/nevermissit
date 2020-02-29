import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../game.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'nevermissit';
  allGames = [];
  trimmedWords: string;

  constructor(public http: HttpClient, public gameService: GameService, public sanitizer: DomSanitizer) {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(games => {
      if (games) {
        this.allGames = games;
      }
    });
  }

  checkVideo(embed: any) {
    this.trimmedWords = embed.match(/\https............................................../g);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.trimmedWords[0]);
    // return this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.trimmedWords[0]));
  }
}
