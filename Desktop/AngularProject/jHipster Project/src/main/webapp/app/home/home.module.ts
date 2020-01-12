import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SimpleProSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SimpleProSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class SimpleProHomeModule {}
