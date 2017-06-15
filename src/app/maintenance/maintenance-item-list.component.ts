import {Component} from '@angular/core';

import { MaintenanceItemService } from './maintenance-item.service';

@Component({
  selector: 'app-maintenance-item-list',
  templateUrl: './maintenance-item-list.component.html',
  styles: [`
    app-maintenance-item {
    	border: 1px solid red;
		display: block;
		width: 25%;
		float: left;
		margin-left: 5px;
		padding: 10px;
    }
	
  `]
})
export class MaintenanceItemListComponent {
	maintenanceItems;

	constructor(private maintenanceItemService: MaintenanceItemService) {}

	ngOnInit() {
		this.maintenanceItems = this.maintenanceItemService.get();
	}

	onMaintenanceItemDelete(maintenanceItem) {
		this.maintenanceItemService.delete(maintenanceItem);
	}
	
}