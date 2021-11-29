import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sentimientos',
  templateUrl: './sentimientos.component.html',
  styleUrls: ['./sentimientos.component.scss']
})
export class SentimientosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cardViewClick = function () {
    this.router.navigateByUrl('personalidad');
  };

}
