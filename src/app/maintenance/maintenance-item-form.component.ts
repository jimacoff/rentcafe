import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MaintenanceItemService } from './maintenance-item.service';

@Component({
    selector: 'rc-maintenance-item-form',
    templateUrl: './maintenance-item-form.component.html'
})
export class MaintenanceItemFormComponent {
    form;

    constructor(
        private formBuilder: FormBuilder,
        private maintenanceItemService: MaintenanceItemService) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(''),
            date_submitted: this.formBuilder.control(Date.now()),
            room: this.formBuilder.control('bedroom'),
            entry_ok: this.formBuilder.control('yes')
        });
    }
    onSubmit(maintenanceItem) {
        this.maintenanceItemService.add(maintenanceItem);
    }
}