import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HomeComponent } from './pages/home/home.component';
import { IndiaRegionComponent } from './pages/india-region/india-region.component';
import { WeatherInfoComponent } from './pages/weather-info/weather-info.component';

const routes: Routes = [
 { path: 'calculator', component: CalculatorComponent},
 {path:'home',component:HomeComponent},
 {path:'india-region',component:IndiaRegionComponent},
 {path:'weather-info',component:WeatherInfoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
