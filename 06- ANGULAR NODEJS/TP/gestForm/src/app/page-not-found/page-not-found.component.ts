import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <img src="/assets/img/angular-error.png">
      <h1>Page Introuvable</h1>
      <a routerLink="/formations" class="btn-flat blue">
        RETOUR AUX formations
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
