import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy-service.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trendingGifs: any;
  constructor(private service: GiphyService) { }

  ngOnInit(): void {
    this.service.trendingGifs()
    .subscribe(response => {
      this.trendingGifs = response['data'];
    });
  }

}
