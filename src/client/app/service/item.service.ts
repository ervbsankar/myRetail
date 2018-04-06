import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ItemService {
    constructor(private http: HttpClient) {
    }

    public getItemData() {
        return this.http.get("api/item");
    }
}
