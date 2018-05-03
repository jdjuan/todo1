import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
  twitter: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  person: Person = {
    name: 'Juan',
    age: 24,
    twitter: '@jdjuan',
  };

  constructor() {}
}
