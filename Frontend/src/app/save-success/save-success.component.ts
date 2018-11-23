import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-save-success',
  templateUrl: './save-success.component.html',
  styleUrls: ['./save-success.component.css']
})
export class SaveSuccessComponent implements OnInit {

  public playlist_info = {
    playlistCode: '',
    playlistName: ''
  };
  private access_token;

  constructor(route: ActivatedRoute, private cookieService: CookieService, private dataService: DataService) { 

    this.playlist_info.playlistCode = this.cookieService.get('playlistCode');
    this.playlist_info.playlistName = this.cookieService.get('playlistName');

    this.cookieService.deleteAll();

    let fragment = route.snapshot.fragment;
    if(fragment != null) {

      let response = fragment.split('&');
      response = response[0].split('=');

      if(response[0] === 'access_token'){

        this.access_token = response[1];
        console.log(this.access_token);
        this.dataService.savePlaylist(this.access_token, this.playlist_info.playlistCode, this.playlist_info.playlistName).subscribe(response => {
          if(response.err === null) {
            //redirect to error page
          }
          console.log(response);
          
        });
      }
    }

  }

  ngOnInit() {
  }

}
