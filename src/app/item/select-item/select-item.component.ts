import {Component,OnInit} from '@angular/core';
import { Routes } from '@angular/router';
import {Item} from '../item.model';
import { ItemConsolidatedService } from '../item-consoldated-service';

@Component({
    selector :'select-item',
    templateUrl : './select-item.component.html',
    styleUrls : []
    
})

export class SelectItemComponent implements OnInit{
    selectItem:string
    items:Item[]
    item:Item
    itemSelected:boolean = false

    constructor(public itemService:ItemConsolidatedService){

    }

    ngOnInit(){
        this.items = this.itemService.getItemsList()
    }

    getItemNames(){

    }

    onItemSelected(val:any){
        console.log('selected item is '+val);
        this.itemSelected = true;   
        this.item = this.itemService.getItem(val); 
    }

}