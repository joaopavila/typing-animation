import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TypingAnimationModule } from 'ng-typing-animation';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TypingAnimationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
