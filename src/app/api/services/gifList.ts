import { OnInit } from "@angular/core";
import { GifService } from "./gif-service.service";

export class GifList implements OnInit{
     gifs:any=[];
    constructor(private _gifService:GifService){}
    ngOnInit(){
        this._gifService.getGif().subscribe((reponse:any)=>{this.gifs=reponse});  
    }

}