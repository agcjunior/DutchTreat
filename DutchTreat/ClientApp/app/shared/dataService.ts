import { HttpClient } from "@angular/common/http";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product";
import { Order, OrderItem } from './order';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) {
    }

    public products = [];
    public order: Order = new Order();

    public loadProducts() : Observable<Product[]> {
        return this.http.get("/api/products")
            .map((result: Response) => this.products = result.json());            
    } 

    public AddToOrder(product: Product) {
        
        let item = new OrderItem;
        item.productId = product.id;
        item.productArtist = product.artist;
        item.productCategory = product.category;
        item.productArtId = product.artId;
        item.productTitle = product.title;
        item.productSize = product.size;
        item.unitPrice = product.price;
        item.quantity = 1;

        this.order.items.push(item);
        
    }
}