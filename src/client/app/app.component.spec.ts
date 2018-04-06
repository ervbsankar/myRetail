import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ItemService} from "./service/item.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StarDirective} from "./directive/star.directive";
import {By} from "@angular/platform-browser";

describe("AppComponent", () => {
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                StarDirective
            ],
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [ItemService]
        });
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    }));
    it("should create the app", async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`item in cart should be zero when initialized`, async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app.cart).toEqual(0);
    }));
    it("title should be defined", async(() => {
        const el = fixture.debugElement.query(By.css("#title")).nativeElement;
        expect(el.textContent).toBeDefined();
    }));

    it("quantity should add 1 when clicked + button when quantity is 1", async(() => {
        fixture.componentInstance.upQuantity();
        expect(fixture.componentInstance.quantity).toEqual(2);
    }));

    it("quantity should not be Zero when clicked - button when quantity is 1", async(() => {
        fixture.componentInstance.downQuantity();
        expect(fixture.componentInstance.quantity).toEqual(1);
    }));

    it("quantity should reduce to 1 when clicked - button when quantity is 4", async(() => {
        fixture.componentInstance.upQuantity();
        fixture.componentInstance.upQuantity();
        fixture.componentInstance.upQuantity();
        fixture.componentInstance.downQuantity();
        expect(fixture.componentInstance.quantity).toEqual(3);
    }));
    it("Pick up in store button available when condition is true", async(() => {
        spyOn(fixture.debugElement.componentInstance, "isPickInStore").and.returnValue(true);
        fixture.debugElement.componentInstance.isPickInStore();
        fixture.detectChanges();
        const el = fixture.debugElement.query(By.css("#pickup"));
        console.log(el);
        expect(el.nativeElement.innerHTML.trim()).toEqual("PICK UP IN STORE");
    }));
});
