import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export type Item = {
    category: string;
    name: string;
    price: number;
    orders: number;
    revenue: number;
}

export type Items = Item[];

export interface Actions {
    list(): Observable<Map<string, Items>>;    
    add(i: Item): Observable<Item>;
}

@Injectable()
export class Menu implements Actions {

    menu: Map<string, Items>;

    constructor() {
        this.menu = new Map<string, Items>();
    }

    list(): Observable<Map<string, Items>> {
        return of(this.menu);
    }

    add(i: Item): Observable<Item> {
        const item: Item = { ...i };
        
        if(!this.menu.has(item.category)){
            this.menu.set(item.category, []);
        }
        this.menu.get(item.category)!.push(item);
        
        return of(i);
    }        
}