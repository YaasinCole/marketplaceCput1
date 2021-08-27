import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'catalogue',
    component: CatalogueComponent
  },
  {
    path:'aboutUs',
    component: AboutUsComponent
  },
  {
    path:'signUp',
    component: SignUpComponent
  },
  {
    path:'contactUs',
    component: ContactUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent,CatalogueComponent,AboutUsComponent,SignUpComponent,ContactUsComponent]
