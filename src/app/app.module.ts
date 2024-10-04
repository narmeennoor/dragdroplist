import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { DragDropModule } from '@angular/cdk/drag-drop'; // Import DragDropModule
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'carousel-page', component: CarouselComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CarouselComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
