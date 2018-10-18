import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  public code = '';
  private client_id = 'be2a413e2bbd402db45432d7ccdf0199';
  private scope = 'user-top-read';
  large = 'large';
  
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  redirect() {

    this.cookieService.set('playlistCode', this.code);
    var params = {
      client_id: this.client_id,
      redirect_uri: 'http://localhost:4200/join-success',
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
