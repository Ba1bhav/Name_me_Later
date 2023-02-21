import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compotwo',
  templateUrl: './compotwo.component.html',
  styleUrls: ['./compotwo.component.css']
})
export class CompotwoComponent implements OnInit,OnDestroy {
  public tenants!: { id: number; name: string; };
  constructor(private route:ActivatedRoute){}
  subscription=new Subscription();
  public ref:any;
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((value:Params)=>{console.log(value['key'])})
    this.tenants={id:this.route.snapshot.params['id'],name:this.route.snapshot.params['name']}
    this.route.params.subscribe((param:Params)=>{console.log('subscribe!');this.tenants.id=param['id'];this.tenants.name=param['name']})
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }
}
