import { Component, OnInit } from '@angular/core';
import { recipes } from '../recipes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesArr:any = recipes
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  newRecipe(){
    this.router.navigate(['/new-recipe']);
  }
}
