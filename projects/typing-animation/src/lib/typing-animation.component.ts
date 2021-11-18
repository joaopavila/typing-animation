import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.scss'],
})
export class TypingAnimationComponent implements OnInit {
  @HostBinding('style.--text-color') textAndBorderColor: string;

  @Input() set textColor(cursorColor: string) {
    this.textAndBorderColor = cursorColor;
  }

  @Input() cursor: boolean;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {
    console.log('cursor - ', this.cursor);
    console.log('text - ', this.text);
    console.log('hostBinding - ', this.textAndBorderColor);
  }
}
