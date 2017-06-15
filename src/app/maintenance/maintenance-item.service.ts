import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MaintenanceItemService{

	constructor(private http: Http) {}
    get() {
        return this.http.get('maintenanceitems');
    }

    add(maintenanceItem) {
        this.maintenanceItems.push(maintenanceItem);
    }

    delete(maintenanceItem) {
        let index = this.maintenanceItems.indexOf(maintenanceItem);
        if (index >= 0) 
            this.maintenanceItems.splice(index,1);
    }

    maintenanceItems = [
		{
			title: "Work Order 1",
			date_submitted: "June 15, 2017",
			room: "Bedroom",
			entry_ok: true
		},
		{
			title: "Work Order 2",
			date_submitted: "June 16, 2017",
			room: "Bathroom",
			entry_ok: false
		}
	];
}