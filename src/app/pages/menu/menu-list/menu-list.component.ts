import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Items } from '../menu.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit{
  menu: Observable<Map<string, Items>>;
  selected: Items = [];
  selectedCat: string;

  constructor(route: ActivatedRoute) {
    this.menu = route.data.pipe(pluck('menu'));
  }

  ngOnInit(): void {
    this.catSelect();
  }    
 
  catSelect(cat?:string){
    this.menu.pipe(
      tap((map) => {cat ? this.selectedCat = cat : this.selectedCat = map.keys().next().value;}),
      map((map) => {return cat ? map.get(cat) : map.values().next().value;})
    ).subscribe((arr) => {this.selected = arr;});
  } 
   
}  
          