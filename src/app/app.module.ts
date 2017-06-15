import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MaintenanceItemComponent } from './maintenance/maintenance-item.component';
import { MaintenanceItemListComponent } from './maintenance/maintenance-item-list.component';
import { MaintenanceItemFormComponent } from './maintenance/maintenance-item-form.component';
import { MaintenanceItemService } from './maintenance/maintenance-item.service';

@NgModule({
  //used to make components, directives, and pipes available to your module that don't come from another module
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    MaintenanceItemComponent,
    MaintenanceItemListComponent,
    MaintenanceItemFormComponent
  ],
  //used to bring in other angular modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  //make services available
  providers: [
    GithubService,
    MaintenanceItemService
  ],
  //used for root module, and let's angular know the entry point for the app code
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
