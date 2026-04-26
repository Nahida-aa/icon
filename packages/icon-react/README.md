# @xaa/icon-react

React SVG icon components built with [build-icons](https://github.com/Nahida-aa/build-icons).

## Installation

```bash
bun add @xaa/icon-react react
# or
npm install @xaa/icon-react react
```

## Usage

```tsx
import { XaaCheckCircleFill } from '@xaa/icon-react';

function App() {
  return <XaaCheckCircleFill />;
}
```

### With Size

```tsx
<XaaCheckCircleFill size={32} />
```

### With Color

```tsx
<XaaCheckCircleFill stroke="red" />
<XaaCheckCircleFill color="red" />
```

### With Class Name

```tsx
<XaaCheckCircleFill className="custom-class" />
```

## Available Icons

50+ icons available. View all icons at [icon.nahida-aa.workers.dev/icons](https://icon.nahida-aa.workers.dev/icons).

```tsx
import { icons } from '@xaa/icon-react';

// List all icon names
console.log(Object.keys(icons));
```

## API

### `<Icon />`

Base icon component.

```tsx
import { Icon } from '@xaa/icon-react';

<Icon
  node={[['path', { d: '...', fill: 'currentColor' }]]}
  size={24}
  stroke="currentColor"
  className="my-icon"
/>
```

### `createXaaIcon(name, node, defaults)`

Create a custom icon component.

```tsx
import { createXaaIcon } from '@xaa/icon-react';

const MyIcon = createXaaIcon('my-icon', [
  ['path', { d: 'M12 2L2 7l10 5 10-5L12 2z', fill: 'currentColor' }],
], {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
});
```

## TypeScript

Full TypeScript support included.