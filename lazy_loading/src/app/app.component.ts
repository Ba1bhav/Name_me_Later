import { Component, OnInit } from '@angular/core';
import { result } from './auth.guard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lazy_loading';
  ngOnInit(){
    sessionStorage.setItem('item','true')
    console.log('called app-component')
    
  }
  test=result;
  deactivateLink(){
    this.test[0]='false'
  }
  activateLink()
  {
    this.test[0]='true'
  }
}
