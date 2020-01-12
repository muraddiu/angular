import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SimpleProSharedModule } from 'app/shared/shared.module';
import { SimpleProCoreModule } from 'app/core/core.module';
import { SimpleProAppRoutingModule } from './app-routing.module';
import { SimpleProHomeModule } from './home/home.module';
import { SimpleProEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SimpleProSharedModule,
    SimpleProCoreModule,
    SimpleProHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SimpleProEntityModule,
    SimpleProAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SimpleProAppModule {}
