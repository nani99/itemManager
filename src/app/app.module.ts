import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemCreateComponent1 } from './item/item-consolidated-create/item-consolidated-create';
import { AddSpecsComponent } from './item/add-specs/add-specs.component';
import { ItemService } from './item/item.sevice';
import { ItemConsolidatedService } from './item/item-consoldated-service';
import { ItemSavedComponent } from './item/item-save/item-saved.component';
import { ItemListComponent } from './item/item-list/item-list.component';

const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServerComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'addItem', component: ItemCreateComponent },
  { path: 'addItems', component: ItemCreateComponent1 },
  { path: 'addSpecs', component: AddSpecsComponent },
  { path: 'itemSaved', component: ItemSavedComponent },
  { path: 'itemList', component: ItemListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ItemCreateComponent,
    ItemCreateComponent1,
    AddSpecsComponent,
    ItemSavedComponent,
    ItemListComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService,ItemConsolidatedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
