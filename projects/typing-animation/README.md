# TypingAnimation

## Install

Install npm:

```shell
npm install --save-dev ng-typing-animation
```

Install yarn

```shell
yarn add ng-typing-animation -D
```

Import in your module

```ts
import { TypingAnimationModule } from 'ng-typing-animation';

@NgModule({
  imports: [
    TypingAnimationModule
  ]
})
```

## Usage

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
