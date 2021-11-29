import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-wish-spot',
  templateUrl: './home-wish-spot.component.html',
  styleUrls: ['./home-wish-spot.component.scss']
})
export class HomeWishSpotComponent implements OnInit {

  public titulo: string;
  public subtitulo: string;

  constructor() {
    this.titulo="W I S H - S P O T";
    this.subtitulo="Eres maravillos@ tal como eres... Eres #ICONICA";
   }

  ngOnInit(): void {
  }

}
