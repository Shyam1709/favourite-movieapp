import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './../../services/tmdb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[TmdbApiService]
})
export class HomeComponent implements OnInit {
 public popularData: any=[];
 public baseUrl="http://image.tmdb.org/t/p/w185/";
  constructor(private tmdbApiService : TmdbApiService) { }

  ngOnInit() {
     this.getInfo();
  }
  getInfo(){
    this.tmdbApiService.getPopular().subscribe(data=>{
      this.popularData=data.results;
        },(error:any)=>{
          console.log(error)
        })
  }
}
