import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  large = 'large';
  public playlist_info = {
    playlistCode: '',
    name : ''
  }

  private client_id = 'be2a413e2bbd402db45432d7ccdf0199';
  private scope = 'playlist-modify-public';
  
  constructor(private cookieService: CookieService, private dataService: DataService) { }

  ngOnInit() {

  }

  printvars() {
    console.log(this.playlist_info);
  }

  redirect() {

    this.cookieService.set('playlistCode', this.playlist_info.playlistCode);
    this.cookieService.set('playlistName', this.playlist_info.name);
    var params = {
      client_id: this.client_id,
      redirect_uri: 'http://localhost:4200/save-success',
      scope: this.scope || '',
      response_type: 'token'
    };
    var authCompleted = false;
    var authUrl = 'https://accounts.spotify.com/authorize?' + this.toQueryString(params);
    window.location.href = authUrl;
  }

  private toQueryString(obj: Object): string {
    var parts = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    };
    return parts.join('&');
  };
}
