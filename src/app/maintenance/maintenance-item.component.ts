import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-maintenance-item',
  templateUrl: './maintenance-item.component.html',
})
export class MaintenanceItemComponent { 
  @Input() maintenanceItem;
  @Output() delete = new EventEmitter();

    onDelete() {
      console.log("deleted");
        this.delete.emit(this.maintenanceItem);
    }
}