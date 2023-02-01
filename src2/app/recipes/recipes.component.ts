import { Component, OnInit, Input } from '@angular/core';
import { recipes } from '../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipe:any;
  constructor(){}
  ngOnInit() {
    console.log("component has been initialized!")
    // console.log(recipes)
  }
  recipe_ingredient:any = [
    {id:1, recipeId:1, ingredient: ["Waffles", "Strawberies"]},
    {id:2, recipeId:2, ingredient: ["Cereal", "Water", "Oatmeals"]},
    {id:3, recipeId:3, ingredient: ["Apple", "Water", "Milk"]},
    {id:4, recipeId:4, ingredient: ["Water", "Orange", "Juice"]},
  ]
  navigatePage(){
    
  }
}
