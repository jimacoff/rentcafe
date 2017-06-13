import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-maintenance-item',
  templateUrl: './maintenance-item.component.html'
})
export class MaintenanceItemComponent { 
@Input() maintenanceItem;
}