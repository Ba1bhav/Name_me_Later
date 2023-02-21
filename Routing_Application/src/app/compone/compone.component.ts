import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.css']
})
export class ComponeComponent implements OnInit{
ref: any;
constructor(private route:ActivatedRoute){}

ngOnInit(){
this.ref=this.route.snapshot.fragment;
}
}
