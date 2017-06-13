import {Component} from '@angular/core';

@Component({
  selector: 'app-maintenance-item-list',
  templateUrl: './maintenance-item-list.component.html'
})
export class MaintenanceItemListComponent {
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