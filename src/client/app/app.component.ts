import {Component} from "@angular/core";
import {AppItemService} from "./service/app.item.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    cart = 0;
    title = "app";
    itemData: any;
    offerPrice: {};
    images: any;
    promotions: any;
    quantity = 1;
    legalCopy: any;
    productHighlights: any;
    customerReviews: {};
    overallRating: any;

    constructor(private appItemService: AppItemService) {
        this.getItemData();
    }

    getItemData() {
        this.appItemService.getItemData()
            .subscribe((data) => {
                    this.itemData = data["CatalogEntryView"][0];
                    this.getItemPrice();
                    this.getItemImages();
                    this.getPromotions();
                    this.getReturnPolicy();
                    this.getProductHighlights();
                    this.getCustomerReview();
                },
                (err: HttpErrorResponse) => {
                    console.log(err.message);
                })
        ;
    }

    getItemPrice() {
        this.offerPrice = this.itemData.Offers[0].OfferPrice[0];
    }

    getItemImages() {
        this.images = this.itemData.Images;
    }

    getPromotions() {
        this.promotions = this.itemData.Promotions;
    }

    updateQty(_val) {
        if (_val === "minus") {
            this.quantity = this.quantity - 1;
        } else {
            this.quantity = this.quantity + 1;
        }
        if (this.quantity < 1) { this.quantity = 1; }
    }

    getReturnPolicy() {
        this.legalCopy = this.itemData.ReturnPolicy[0].legalCopy;
    }

    getProductHighlights() {
        this.productHighlights = this.itemData.ItemDescription[0].features;
    }

    getCustomerReview() {
        this.customerReviews = this.itemData.CustomerReview[0];
        this.overallRating = {};
        this.overallRating["nonEmpty"] = [];
        this.overallRating["empty"] = [];
        for (let i = 0; i < this.customerReviews["consolidatedOverallRating"]; i++) {
            this.overallRating.nonEmpty.push(i);
        }
        const diff = 5 - this.customerReviews["consolidatedOverallRating"];
        for (let i = 0; i < diff; i++) {
            this.overallRating.empty.push(i);
        }
    }

}
