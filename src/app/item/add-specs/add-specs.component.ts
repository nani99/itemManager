import {Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Spec } from '../specs.model' 

@Component({
    selector:'add-specs',
    templateUrl:'./add-specs.component.html',
    styleUrls:[]
})

export class AddSpecsComponent{
    specForm: FormGroup;
    private specs:any =[];
    constructor(private fb: FormBuilder){
        this.specForm = fb.group({
            specifications: this.fb.array([1]),            
        });
    }

    specifications(): FormArray{
        console.log('inside specifications form array. specifications lenght'+this.specifications.length);
        return this.specForm.get("specifications") as FormArray
    }

    newSpecs(): FormGroup{
        return this.fb.group({
            specName: '' ,
            specValue: '' ,
        })
    }

    addSpec(){
      console.log('in add spec')  
      this.specifications().push(this.newSpecs());    
    }

    removeSpec(i:number){
        this.specifications().removeAt(i);
    }

     onSubmit(form:NgForm){
        console.log(this.specForm.value);
        this.specs = <Spec>form.value;
        //this.itemService.addSpec(this.specs)
        console.log('printing model in AddSpecsComponent' + this.specs); 
    }
    
    

}