import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private routes :ActivatedRoute) { }

  ngOnInit() {
    this.user ={
      id:this.routes.snapshot.params['id'],
      name:this.routes.snapshot.params['name']
    }
  }

}
