import {Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {SpecList} from '../itemList.model';
import {Spec} from '../specs.model';
import { ItemConsolidatedService } from '../item-consoldated-service';
import { Router } from '@angular/router';
import { Item } from '../item.model';
//import {ItemListComponent} from '../item-list/item-list.component';

@Component({
    selector: 'item-create',
    templateUrl: './item-consolidated-create.html',
    styleUrls: ['item-consolidated-create.css']
})

export class ItemCreateComponent1{
    itemForm: FormGroup;
    private specs:any =[];
    item:Item;
    itemName = new FormControl("",Validators.required);

    constructor(private fb: FormBuilder,public itemService:ItemConsolidatedService,private router:Router){
        
        this.itemForm = fb.group({
            "itemName": this.itemName,
            "itemBrand": ["",Validators.required],
            "itemDesc":["",Validators.required],
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

    addSpec(){
            this.specifications().push(this.newSpecs());    
    }

    removeSpec(i:number){
        this.specifications().removeAt(i);
    }

    onSubmit(){
        console.log('printing item details'+JSON.stringify(this.itemForm.value));
        this.specs = <Spec>this.itemForm.value;
        this.item = <Item>this.itemForm.value
        console.log('printing item model details'+JSON.stringify(this.item));
        this.itemService.addItem(this.item);
        this.itemService.addItemToItems(this.item);
        this.itemService.getItemsList();
        //this.itemService.addSpec(this.specs)
        console.log('printing model' + this.specs); 
        this.router.navigate(['/itemSaved']);
    }

}