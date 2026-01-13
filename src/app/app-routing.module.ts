import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';
import { Project4Component } from './projects/project4/project4.component';
import { Project5Component } from './projects/project5/project5.component';
import { Project6Component } from './projects/project6/project6.component';
import { Project7Component } from './projects/project7/project7.component';
import { Project8Component } from './projects/project8/project8.component';
import { Project9Component } from './projects/project9/project9.component';
import { Project10Component } from './projects/project10/project10.component';
import { Project11Component } from './projects/project11/project11.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'projects/project1', component: Project1Component },
  { path: 'projects/project2', component: Project2Component },
  { path: 'projects/project3', component: Project3Component },
  { path: 'projects/project4', component: Project4Component },
  { path: 'projects/project5', component: Project5Component },
  { path: 'projects/project6', component: Project6Component },
  { path: 'projects/project7', component: Project7Component },
  { path: 'projects/project8', component: Project8Component },
  { path: 'projects/project9', component: Project9Component },
  { path: 'projects/project10', component: Project10Component },
  { path: 'projects/project11', component: Project11Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
