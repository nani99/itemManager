import {Component, OnInit} from '@angular/core'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
    selector:'item-create',
    templateUrl: './item-create.component.html',
    styleUrls: []
})

export class ItemCreateComponent{
    itemForm: FormGroup;
    private specs:any =[];
    constructor(private router:Router,private fb: FormBuilder){
        this.itemForm = fb.group({
            specifications: this.fb.array([]),            
        });
    }

    specifications(): FormArray{
        //console.log('inside specifications form array. specifications lenght'+this.specifications.length);
        return this.itemForm.get("specifications") as FormArray
    }

    newSpecs(): FormGroup{
        return this.fb.group({
            specName: '' ,
            specValue: '' ,
        })
    }

    onAddSpecs(){
        this.router.navigate(['/addSpecs']);
    }

    addSpec(){
      this.specifications().push(this.newSpecs());    
    }

    removeSpec(i:number){
        this.specifications().removeAt(i);
    }

    onSubmit(){
        console.log(this.itemForm.value);
        //this.specs = <Spec>this.itemForm.value;
        //this.itemService.addSpec(this.specs)
        console.log('printing model' + this.specs); 
    }
    
}