import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  constructor(route: ActivatedRoute) {
    route.data.subscribe(resp => {
      console.log('HomePage!', resp);
    });
    
  }


}

