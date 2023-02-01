import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { recipes } from '../recipes';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit, AfterContentInit{
  recipeId:any='';
  recipe_ingredient:any = [
    {id:1, recipeId:1, ingredient: ["Waffles", "Strawberies"]},
    {id:2, recipeId:2, ingredient: ["Cereal", "Water", "Oatmeals"]},
    {id:3, recipeId:3, ingredient: ["Apple", "Water", "Milk"]},
    {id:4, recipeId:4, ingredient: ["Water", "Orange", "Juice"]},
  ]
  recipesDetail:any;
  ingredientForm!:FormGroup
  constructor(private activateRoute: ActivatedRoute){}
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.recipeId =  params.get('id');
      console.log(params.get('id'));   
      this.getRecipe();  
    });
    this.ingredientForm = new FormGroup({
      name: new FormControl(['']),
      email: new FormControl(['']),
      hobbiesArr:new FormGroup({
        hobbies: new FormArray([
        ])
       })
      
    })
    
  }
  ngAfterViewInit(){
    console.log("after view init")
  }
  ngAfterContentInit() {
    console.log("onChange")
  }
  getRecipe(){
    // c
    recipes.filter( item => {
      if(item.id == this.recipeId){
        // console.log(item)
        this.recipesDetail = item
      }
    })
    this.recipe_ingredient.filter((ing:any) => {
      if(ing.recipeId == this.recipeId){
        this.recipesDetail['ingredients'] = ing.ingredient
      }
     // 
    })
    console.log(this.recipesDetail)
  }
  getHobbies() {
    return (this.ingredientForm.get('hobbiesArr')?.get('hobbies') as FormArray).controls;
  }
  
  addHobbies(){
    const hobby = new FormControl([]);
    this.getHobbies().push(hobby);
    console.log(this.getHobbies())
  }

  onSubmit(){
    console.log(this.ingredientForm)
  }
}
