import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../services/recipe.service';
import { recipes } from '../recipes';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  recipeForm = new FormGroup({
    recipeName: new FormControl(['']),
    ingredientsArr: new FormArray([])
  })
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    
  }

  ingredients(): FormArray {
    return this.recipeForm.get('ingredientsArr') as FormArray
  }
  addIngredient() {
    const controls = new FormControl(['']);
    this.ingredients().push(controls)
  }

  save(){
    console.log(this.ingredients());
    recipes.push({id:5, name:'Chicken briyani'});
    console.log(recipes);
    // const body = {
    //   "id": 4,
    //   "first_name": "Sheetal",
    //   "last_name": "Eschweiler",
    //   "email": "sheetal@codingthesmartway.com"
    // }
    // this.http.post('http://localhost:3000/employees', body).subscribe((res) => {
    //   console.log(res)
    // });
    
  }
}
