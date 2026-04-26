import createXaaIcon from '../createXaaIcon';
import type { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z',
      fill: 'currentColor',
      key: '1z08za',
    },
  ],
  [
    'path',
    {
      d: 'M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z',
      fill: 'currentColor',
      key: 's74jks',
    },
  ],
  [
    'path',
    {
      d: 'M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z',
      fill: 'currentColor',
      key: '8btug5',
    },
  ],
];

/**
 * @component @name Sparkles
 * @description Xaa SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+CTxwYXRoCgkJZD0iTTIuNSAwLjVWMEgzLjVWMC41QzMuNSAxLjYwNDU3IDQuMzk1NDMgMi41IDUuNSAyLjVINlYzVjMuNUg1LjVDNC4zOTU0MyAzLjUgMy41IDQuMzk1NDMgMy41IDUuNVY2SDNIMi41VjUuNUMyLjUgNC4zOTU0MyAxLjYwNDU3IDMuNSAwLjUgMy41SDBWM1YyLjVIMC41QzEuNjA0NTcgMi41IDIuNSAxLjYwNDU3IDIuNSAwLjVaIgoJCWZpbGw9ImN1cnJlbnRDb2xvciIKCS8+Cgk8cGF0aAoJCWQ9Ik0xNC41IDQuNVY1SDEzLjVWNC41QzEzLjUgMy45NDc3MiAxMy4wNTIzIDMuNSAxMi41IDMuNUgxMlYzVjIuNUgxMi41QzEzLjA1MjMgMi41IDEzLjUgMi4wNTIyOCAxMy41IDEuNVYxSDE0SDE0LjVWMS41QzE0LjUgMi4wNTIyOCAxNC45NDc3IDIuNSAxNS41IDIuNUgxNlYzVjMuNUgxNS41QzE0Ljk0NzcgMy41IDE0LjUgMy45NDc3MiAxNC41IDQuNVoiCgkJZmlsbD0iY3VycmVudENvbG9yIgoJLz4KCTxwYXRoCgkJZD0iTTguNDA3MDYgNC45MjkzOUw4LjUgNEg5LjVMOS41OTI5NCA0LjkyOTM5QzkuODI5NzMgNy4yOTczNCAxMS43MDI3IDkuMTcwMjcgMTQuMDcwNiA5LjQwNzA2TDE1IDkuNVYxMC41TDE0LjA3MDYgMTAuNTkyOUMxMS43MDI3IDEwLjgyOTcgOS44Mjk3MyAxMi43MDI3IDkuNTkyOTQgMTUuMDcwNkw5LjUgMTZIOC41TDguNDA3MDYgMTUuMDcwNkM4LjE3MDI3IDEyLjcwMjcgNi4yOTczNCAxMC44Mjk3IDMuOTI5MzkgMTAuNTkyOUwzIDEwLjVWOS41TDMuOTI5MzkgOS40MDcwNkM2LjI5NzM0IDkuMTcwMjcgOC4xNzAyNyA3LjI5NzM0IDguNDA3MDYgNC45MjkzOVoiCgkJZmlsbD0iY3VycmVudENvbG9yIgoJLz4KPC9zdmc+) - https://Nahida.dev/icons/sparkles
 * @see https://Nahida.dev/guide/react- Documentation
 *
 * @param {Object} props - Xaa icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Sparkles = createXaaIcon('sparkles', __iconNode, {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  'stroke-linejoin': 'round',
});

export default Sparkles;
