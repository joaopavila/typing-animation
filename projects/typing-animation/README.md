# TypingAnimation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Usage
Install via npm:
```shell
npm install --save-dev typing-animation
```

Import in your module

```ts
import { TypingAnimationModule } from 'typing-animation';

@NgModule({
  imports: [
    TypingAnimationModule
  ]
})
```

Usage

```html
<typing-animation
  text="The text comes here!!!"
  class="yourStyle"
  textColor="colorText"
  [cursor]="booleanValue"
></typing-animation>
```

```
text - your text
textColor - color text and color cursor blink
cursor - boolean value to show or not cursor
```

| inputs    | types   |
| --------- | ------- |
| text      | string  |
| textColor | string  |
| cursor    | boolean |
