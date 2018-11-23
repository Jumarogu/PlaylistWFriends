import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-join-success',
  templateUrl: './join-success.component.html',
  styleUrls: ['./join-success.component.css']
})
export class JoinSuccessComponent implements OnInit {

  public playlistCode;
  public access_token;
  private user_info;
  constructor(route: ActivatedRoute, private cookieService: CookieService, private dataService: DataService){
    
    this.playlistCode = this.cookieService.get('playlistCode');
    this.cookieService.deleteAll();
    let fragment = route.snapshot.fragment;
    if(fragment != null) {

      let response = fragment.split('&');
      response = response[0].split('=');

      if(response[0] === 'access_token'){

        this.access_token = response[1];
        console.log(this.access_token);
        this.dataService.joinPlaylist(this.access_token, this.playlistCode).subscribe(response => {
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
