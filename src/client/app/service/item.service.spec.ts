import {async, TestBed} from "@angular/core/testing";
import {ItemService} from "./item.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

describe("ItemService", () => {
    let service;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [ItemService],
            imports: [HttpClientTestingModule]
        });
        service = TestBed.get(ItemService);
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    }));

    it("should use ItemService", () => {
        expect(service).toBeDefined();
    });

    it("can test ItemService get", () => {
        const testData = {name: "Test Data"};
        service.getItemData().subscribe(
            res => {
                expect(res).toEqual(testData);
            }
        );

        const req = httpTestingController.expectOne("api/item");
        expect(req.request.method).toEqual("GET");
        req.flush(testData);
        httpTestingController.verify();

    });

    it("can test for 404 error", () => {
        const errMsg = "404 err";

        service.getItemData().subscribe(
            res => {
                expect(res).toBeUndefined();
            },
            (err: HttpErrorResponse) => {
                expect(err.status).toEqual(404, "status");
                expect(err.error).toEqual(errMsg, "message");
            }
        );

        const req = httpTestingController.expectOne("api/item");
        expect(req.request.method).toEqual("GET");
        req.flush(errMsg, {status: 404, statusText: "Not found"});
    });
});
