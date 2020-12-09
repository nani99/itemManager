import { Component, OnDestroy, OnInit } from '@angular/core';
import {Spec} from '../specs.model';
import {SpecList} from '../itemList.model';
import {ItemConsolidatedService} from '../item-consoldated-service';
import {Subject} from 'rxjs';
import { Item } from '../item.model';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit,OnDestroy {
  specs:Spec[]=[];
  //items:Item[] =[];
  item:Item;
  //specList:SpecList = new SpecList(this.specs);
  private specsUpdated = new Subject<SpecList>();

  constructor(public itemService:ItemConsolidatedService) {
    
   }

  ngOnInit() {
    console.log('in ngOnInit of ItemListComponent')
    //this.specs = this.itemService.getSpecs();
    this.item = this.itemService.getItems();
    console.log('after getting item in list component'+JSON.stringify(this.item));
  }

  getSpecs(){
    this.specs=this.itemService.getSpecs();
    console.log('got specs in list'+JSON. stringify(this.specs));

 } 

  ngOnDestroy(){
    
  }

}
