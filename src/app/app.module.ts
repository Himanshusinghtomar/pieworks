import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndiaRegionComponent } from './pages/india-region/india-region.component';
import { WeatherInfoComponent } from './pages/weather-info/weather-info.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogElementsExampleComponent } from './components/dialog-elements-example/dialog-elements-example.component';
import { DialogElementsExampleDialogComponent } from './components/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndiaRegionComponent,
    WeatherInfoComponent,
    CalculatorComponent,
    HomeComponent,
    DialogElementsExampleComponent,
    DialogElementsExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
