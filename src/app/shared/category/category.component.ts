import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category:string;
  @Input() count:number;
  @Input() highlight:boolean;

  @Output() onCatSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onCatSelect.emit(this.category);
  }
}   
     