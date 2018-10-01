import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { HomechildComponent } from './homechild/homechild.component';
import { ShadowboxDirective } from './shadowbox.directive';
import { UcaseDirective } from './ucase.directive';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainareaComponent,
    FooterComponent,
    HomeComponent,
    StudentlistComponent,
    StudentdetailsComponent,
    HomechildComponent,
    ShadowboxDirective,
    UcaseDirective,
    ContactComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'students',
        component:StudentlistComponent
      },
      {
        path:'studentdetails',
        component:StudentdetailsComponent
      },
      {
        path:'manumits-contact',
        component:ContactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
