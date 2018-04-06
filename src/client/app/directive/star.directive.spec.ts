import {StarDirective} from "./star.directive";
import {async, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";


@Component({
    template: `
        <div appStar="4" size="lg"></div>
        <div appStar="3" size="md"></div>
    `
})
class TestComponent {
}

describe("StarDirective", () => {
    let fixture;
    let dir;
    beforeEach(async(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [
                StarDirective
                , TestComponent
            ]
        }).createComponent(TestComponent);

        fixture.detectChanges();

        // all elements attached with directive
        dir = fixture.debugElement.queryAll(By.directive(StarDirective));
    }));

    it("should have 12 elements - 2 Parent + 10 child", () => {
        expect(dir.length).toBe(12);
    });

    it("should have 5 child nodes", () => {
        expect(dir[0].childNodes.length).toBe(5);
        expect(dir[0].queryAll(By.css("span")).length).toBe(5);
    });

    it("should have *-lg css class when size is lg", () => {
        dir[0].childNodes.forEach(el => {
            expect(el.nativeElement.className).toContain("-lg");
        });
    });

    it("should have *-md css class when size is md", () => {
        dir[6].childNodes.forEach(el => {
            expect(el.nativeElement.className).toContain("-md");
        });
    });

    it("should have red stars equal to value of rating attribute", () => {
        const baseRoot = dir[0];
        const size = parseInt(baseRoot.attributes.appStar, 10);
        let redStar = 0;
        baseRoot.childNodes.forEach(el => {
            if (el.nativeElement.className.includes("-red-star")) {
                redStar++;
            }
        });
        expect(redStar).toEqual(size);
    });

    it("should have white stars equal to 5 - value of rating", () => {
        const baseRoot = dir[6];
        const size = 5 - parseInt(baseRoot.attributes.appStar, 10);
        let whiteStar = 0;
        baseRoot.childNodes.forEach(el => {
            if (el.nativeElement.className.includes("-white-star")) {
                whiteStar++;
            }
        });
        expect(whiteStar).toEqual(size);
    });
});
