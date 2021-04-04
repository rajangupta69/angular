import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu, Item } from '../menu.model';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

  form: FormGroup;
  
  constructor(private svc: Menu, private router: Router) { }

  ngOnInit(): void {   
    this.form = new FormGroup({
      category: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required]),
      price: new FormControl(0),
      orders: new FormControl(0),
      revenue: new FormControl(0)
    }); 
  } 

  onSubmit() {
    const item: Item = this.toItem();    
    this.svc.add(item).subscribe(() => {this.router.navigate(["/menu/list"]);}); 
  }
 
  private toItem(): Item {
    return {      
      category: this.form.get(['category'])!.value,
      name: this.form.get(['name'])!.value,
      price: this.form.get(['price'])!.value,
      orders: this.form.get(['orders'])!.value,
      revenue: this.form.get(['revenue'])!.value
    };
  }

  get category() { return this.form.get('category'); }
  get name() { return this.form.get('name'); }
  get price() { return this.form.get('price'); }
  get orders() { return this.form.get('orders'); }
  get revenue() { return this.form.get('revenue'); }
}
