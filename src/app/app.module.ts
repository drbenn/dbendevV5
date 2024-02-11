import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderOneComponent } from './design-dark-one/three/render-one/render-one.component';
import { FooterComponent } from './sections/footer/footer.component';
import { IntroComponent } from './design-dark-one/intro/intro.component';
import { NavComponent } from './design-dark-one/nav/nav.component';
import { ProjectsComponent } from './design-dark-one/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { RenderTwoComponent } from './sections/contact/render-two/render-two.component';
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
import { ContactComponent } from './sections/contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HelloComponent } from './sections/hello/hello.component';
import { FeaturedProjectsComponent } from './sections/featured-projects/featured-projects.component';
import { PastProjectsComponent } from './sections/past-projects/past-projects.component';
import { MyStoryComponent } from './sections/my-story/my-story.component';
import {TooltipModule} from 'primeng/tooltip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

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
    NavigationComponent,
    HelloComponent,
    FeaturedProjectsComponent,
    PastProjectsComponent,
    MyStoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DialogModule,
    ButtonModule, 
    BrowserAnimationsModule,
    CardModule,
    SidebarModule,
    TooltipModule,
    AnimateOnScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
