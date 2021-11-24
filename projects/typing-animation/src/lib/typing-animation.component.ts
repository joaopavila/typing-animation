import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingAnimationComponent {
  @HostBinding('style.--text-color') textAndBorderColor: string;

  @Input() set textColor(cursorColor: string) {
    this.textAndBorderColor = cursorColor;
  }

  @Input() cursor: boolean;
  @Input() text: string;
}
