//import { Spec } from './item.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spec } from './specs.model';
import { Item } from './item.model';

@Injectable({providedIn:'root'})
export class ItemService{
    private specs:Spec[]=[];
    private items:Item[]=[];
    //private specList:SpecList = new SpecList(this.specs); 
    private updateSpecList = new Subject<Spec[]>();
    item:Item;
    

    constructor() {
        console.log('ItemService Consturctor')
    }

    getSpecs(){
        return this.specs;
    }

    addItem(itemName:string,itemBrand:string,itemDesc:string){
        console.log('addItem called. itemName-'+itemName+'-itemBrand-'+itemBrand+'-itemDescription'+itemDesc);
        this.item.itemName = itemName;
        this.item.itemBrand = itemBrand;
        this.item.itemDesc = itemDesc
    }

    addSpec(specList:any){
        console.log('adding specs in service');
        this.specs =specList.specifications;
        //this.specs = specList;
        //this.updateSpecList.next([...this.specs]);
        console.log('adding specs in service'+JSON. stringify(this.specs));

    }

    addItemToItems(item:Item){
        this.items.push(item)
    }


}
