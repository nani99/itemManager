import { SpecList } from './itemList.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spec } from './specs.model';
import { Item } from './item.model';

@Injectable({providedIn:'root'})
export class ItemConsolidatedService{
    private specs:Spec[]=[];
    //private items:Item[] = [];
    item:Item;
    //private specList:SpecList = new SpecList(this.specs); 
    private updateSpecList = new Subject<Spec[]>();
    

    constructor() {

    }

    getSpecs(){
        return this.specs;
    }

    getItems(){
        return this.item;
    }

    addItem(itemToAdd:any){
        console.log('addItem called.');
        //this.items.push(itemToAdd);
        this.specs = itemToAdd.specifications
        this.item =itemToAdd;
        this.item.specs = this.specs;
    }

    addSpec(specList:any){
        console.log('adding specs in service');
        this.specs =specList.specifications;
        //this.specs = specList;
        //this.updateSpecList.next([...this.specs]);
        console.log('adding specs in service'+JSON. stringify(this.specs));

    }


}
