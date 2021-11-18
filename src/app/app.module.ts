import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TypingAnimationModule } from 'projects/typing-animation/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TypingAnimationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
