import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Product } from "../shared/product";

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})
export class ProductList {

    constructor(private data: DataService) {
        
    }

    ngOnInit(): void {
        this.data.loadProducts()
            .subscribe(() => this.products = this.data.products);
    }

    public products: Product[];

    addProduct(product: Product) {
        this.data.AddToOrder(product);
    }
}