import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  @Input() Anuncio: object; 
  constructor() { }

  ngOnInit() {
  }

}
