import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
