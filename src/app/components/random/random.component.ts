import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy-service.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  randomGif: any;

  constructor(private servive: GiphyService) { }

  ngOnInit(): void {
    this.servive.randomGif()
    .subscribe(response => {
      this.randomGif = response['data'];
    });
  }

}
