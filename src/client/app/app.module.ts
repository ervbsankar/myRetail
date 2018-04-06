import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ItemService} from "./service/item.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {StarDirective } from "./directive/star.directive";


@NgModule({
    declarations: [
        AppComponent,
        StarDirective
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [ItemService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
