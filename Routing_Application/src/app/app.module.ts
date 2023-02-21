import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { ComponeComponent } from './compone/compone.component';
import { CompotwoComponent } from './compotwo/compotwo.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ParentComponent } from './parent/parent.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmptyComponent } from './empty/empty.component';

const routes:Routes=[{path:'compone',component:ComponeComponent},
                     {path:'compotwo/:id/:name',component:CompotwoComponent },
                 
                     {path:'empty',component:EmptyComponent},
                     {path:'parent',component:ParentComponent,children:[{path:'childA',component:ChildAComponent},{path:'childB',component:ChildBComponent}]},
                     {path:'',redirectTo:'/empty',pathMatch:'full'},
                     {path:'**',component:ErrorPageComponent},
                     
                     
                     ]
@NgModule({
  declarations: [
    AppComponent,
    ComponeComponent,
    CompotwoComponent,
    ChildAComponent,
    ChildBComponent,
    ParentComponent,
    ErrorPageComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
