import { Component, OnInit,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { GifService } from '../api/services/gif-service.service';

@Component({
  selector: 'app-gif-area',
  templateUrl: './gif-area.component.html',
  styleUrls: ['./gif-area.component.css']
})
export class GifAreaComponent implements OnInit,OnDestroy {
gifs:any[]=[];
  subscription: Subscription = new Subscription;
  constructor(private gifService:GifService){}
  ngOnInit(): void {
    this.gifService.getGif();
    this.gifService.getAllGifs().subscribe((response:any)=>{this.gifs=response})
  }
   ngOnDestroy():void{
     this.subscription.unsubscribe();
   }

}


