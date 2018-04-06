import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

/*
   value of rating will be passed to this directive as input("appStar")
   number of red color star will be created equivalent to rating value
   white color star will be created equivalent to 5 - rating value
 */

@Directive({
    selector: "[appStar]"
})
export class StarDirective {

    constructor(private el: ElementRef, private ren: Renderer2) {
    }

    @Input("size") size;

    @Input()
    set appStar(value) {
        if (value.toLocaleString() !== "") {
            const nonFillStar = 5 - value;
            for (let i = 0; i < value; i++) {
                const _span = this.ren.createElement("span");
                this.ren.addClass(_span, "fa");
                if (this.size === "lg") {
                    this.ren.addClass(_span, "fa-red-star-lg");
                }
                if (this.size === "md") {
                    this.ren.addClass(_span, "fa-red-star-md");
                }
                this.ren.appendChild(this.el.nativeElement, _span);
            }
            for (let i = 0; i < nonFillStar; i++) {
                const _span1 = this.ren.createElement("span");
                this.ren.addClass(_span1, "fa");
                if (this.size === "lg") {
                    this.ren.addClass(_span1, "fa-white-star-lg");
                }
                if (this.size === "md") {
                    this.ren.addClass(_span1, "fa-white-star-md");
                }
                this.ren.appendChild(this.el.nativeElement, _span1);
            }
        }

    }

}
