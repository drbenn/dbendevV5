import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderOneComponent } from './design-dark-one/three/render-one/render-one.component';
import { FooterComponent } from './design-dark-one/footer/footer.component';
import { IntroComponent } from './design-dark-one/intro/intro.component';
import { NavComponent } from './design-dark-one/nav/nav.component';
import { ProjectsComponent } from './design-dark-one/projects/projects.component';
import { SkillsComponent } from './design-dark-one/skills/skills.component';
import { RenderTwoComponent } from './design-dark-one/three/render-two/render-two.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingComponent } from './design-dark-one/scrolling/scrolling.component';
import { RenderThreeComponent } from './design-dark-one/three/render-three/render-three.component';
import { ObserveElementDirective } from './directives/observe-element.directive';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import { DesignDarkOneComponent } from './design-dark-one/design-dark-one.component';
import { AboutComponent } from './design-dark-one/about/about.component';
import { ContactComponent } from './design-dark-one/contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    RenderOneComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    IntroComponent,
    NavComponent,
    ProjectsComponent,
    SkillsComponent,
    RenderTwoComponent,
    ScrollingComponent,
    RenderThreeComponent,
    ObserveElementDirective,
    DesignDarkOneComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DialogModule,
    ButtonModule, 
    BrowserAnimationsModule,
    CardModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
