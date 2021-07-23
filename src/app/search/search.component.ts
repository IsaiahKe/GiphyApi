import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GifService } from '../api/services/gif-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gifService:GifService) { }

  ngOnInit(): void {
  }
search(term:string){
  if(term!==''){
    this.gifService.findGif(term);
  }
}
}
