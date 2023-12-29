import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderOneComponent } from './three/render-one/render-one.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { RenderTwoComponent } from './three/render-two/render-two.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { RenderThreeComponent } from './three/render-three/render-three.component';
import { ObserveElementDirective } from './directives/observe-element.directive';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';


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
    ObserveElementDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
