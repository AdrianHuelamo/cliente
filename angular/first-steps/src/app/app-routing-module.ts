import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error } from './components/error/error';
import { Home } from './components/home/home';
import { Info } from './components/info/info';
import { Disney } from './components/disney/disney';
import { Valorant } from './components/valorant/valorant';
import { FinalSpace } from './components/final-space/final-space';
import { Dragonball } from './components/dragonball/dragonball';


const routes: Routes = [
  {
    path: 'home',
    component:Home
  },
  {
    path: 'info',
    component: Info
  },
  {
    path: 'disney',
    component: Disney
  },
  {
    path: 'valorant',
    component: Valorant
  },
  {
    path: 'final-space',
    component: FinalSpace
  },
  {
    path: 'dragonball',
    component: Dragonball
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: Error
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
