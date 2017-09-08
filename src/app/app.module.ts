import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DragDropDirectiveModule} from "angular4-drag-drop";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DragdropComponent
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot(),
    DragDropDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
