import {Component} from "@angular/core";
import {ItemService} from "./service/item.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    cart = 0;
    quantity = 1;
    // raw data from HTTP GET
    itemData: any;
    offerPrice: {};
    images: any;
    promotions: any;
    legalCopy: any;
    productHighlights: any;
    customerReviews: {};

    constructor(private appItemService: ItemService) {
        this.$getItemData();
    }

    $getItemData() {
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

    upQuantity() {
        this.quantity++;
    }

    downQuantity() {
        if (this.quantity !== 1) {
            this.quantity--;
        }
    }

    getReturnPolicy() {
        this.legalCopy = this.itemData.ReturnPolicy[0].legalCopy;
    }

    getProductHighlights() {
        this.productHighlights = this.itemData.ItemDescription[0].features;
    }

    getCustomerReview() {
        this.customerReviews = this.itemData.CustomerReview[0];
    }

    /*
       Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0 or 2.
     */
    isPickInStore() {
        if (this.itemData !== undefined) {
            const purchasingChannelCode = this.itemData.purchasingChannelCode;
            // const inventoryStatus = this.itemData.inventoryStatus;
            // && inventoryStatus === "InStore")
            return purchasingChannelCode === "0" || purchasingChannelCode === "2";
        }
    }

    /*
      Show the add to cart button only if the item is available online, purchasingChannelCode equals 0 or 1.
    */

    isAddToCart() {
        if (this.itemData !== undefined) {
            const purchasingChannelCode = this.itemData.purchasingChannelCode;
            // const inventoryStatus = this.itemData.inventoryStatus;
            // && inventoryStatus === "Online")
            return purchasingChannelCode === "0" || purchasingChannelCode === "1";
        }
    }

}
