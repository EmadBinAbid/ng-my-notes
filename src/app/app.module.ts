import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNotesAppComponent } from './components/my-notes-app/my-notes-app.component';
import { MyNotesListComponent } from './components/my-notes-list/my-notes-list.component';
import { MyNotesEditorComponent } from './components/my-notes-editor/my-notes-editor.component';
import { MyNotesHeaderComponent } from './components/my-notes-header/my-notes-header.component';
import { MyNotesFooterComponent } from './components/my-notes-footer/my-notes-footer.component';
import { MyNotesLoginComponent } from './components/my-notes-login/my-notes-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNotesAppComponent,
    MyNotesListComponent,
    MyNotesEditorComponent,
    MyNotesHeaderComponent,
    MyNotesFooterComponent,
    MyNotesLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
