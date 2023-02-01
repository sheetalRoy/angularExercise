import { Component } from '@angular/core';
import { recipes } from './recipes'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularP';
  recipesArr:any = recipes
  
  constructor(private router: Router) {}

  newRecipe(){
    this.router.navigate(['/new-recipe']);
  }
}
