import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { ItemService } from '../item.sevice';
import { AddSpecsComponent } from '../add-specs/add-specs.component';

@Component({
    selector: 'item-create',
    templateUrl: './item-create.component.html',
    styleUrls: []
})

export class ItemCreateComponent {
    itemForm: FormGroup;
    private specs: any = [];
    

    constructor(private fb: FormBuilder,public itemService:ItemService,public addSpecComponent:AddSpecsComponent,private router:Router) {
        this.itemForm = fb.group({
            specifications: this.fb.array([]),
        });
        
    }

    specifications(): FormArray {
        //console.log('inside specifications form array. specifications lenght'+this.specifications.length);
        return this.itemForm.get("specifications") as FormArray
    }

    /**newSpecs(): FormGroup {
        return this.fb.group({
            specName: '',
            specValue: '',
        })
    }**/

    /**onAddSpecs() {
        this.router.navigate(['/addSpecs']);
    }**/

    /**addSpec() {
        this.specifications().push(this.newSpecs());
    }

    removeSpec(i: number) {
        this.specifications().removeAt(i);
    }**/

    onSubmit(form:NgForm) {
        console.log('in onSubmit');
        //this.specs = <Spec>this.itemForm.value;
        //const value = this.itemForm.value;
        const value = form.value;
        this.itemService.addItem(value.itemName,value.itemBrand,value.itemDesc)
        
        console.log('printing model' + this.specs);
        this.router.navigate(['/savedItem']);
    }

}