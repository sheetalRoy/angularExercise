import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  countries:any = ["Australia", "Japan", "Brazil", "England", "India"];
  personData:any;
  contactForm = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    gender: [''],
    isMarried: [''],
    address: this.formBuilder.group({
      country: [''],
      city: [''],
      street: [''],
      pincode: [''],
    }),
    notes: new FormArray([
      new FormControl([])
    ])
  });
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    // const countryList = ["Australia", "Japan", "Brazil", "England", "India"];
    // countryList.forEach((elem:any) => {
    //   console.log(elem)
    //   this.countries.push(elem);
    // });
    // this.notes().push(this.formBuilder.group({
    //   noteInput: new FormControl([''])
    // }))
    // console.log(this.notes())
  }

  notes(): FormArray {
    return this.contactForm.get('notes') as FormArray
  }
  addNotes() {
    const controls = new FormControl(['']);
    this.notes().push(controls)
  }
  deleteNotes(){
    console.log(this.notes())
  }
  savesNotes(){
    console.log(this.notes().controls[0].value);
  }

  onSubmit(){
   // console.log(this.contactForm.value)
    this.personData = this.contactForm.value;
  }

}
