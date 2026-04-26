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
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij4JPHBhdGgKCQlkPSJNMi41IDAuNVYwSDMuNVYwLjVDMy41IDEuNjA0NTcgNC4zOTU0MyAyLjUgNS41IDIuNUg2VjNWMy41SDUuNUM0LjM5NTQzIDMuNSAzLjUgNC4zOTU0MyAzLjUgNS41VjZIM0gyLjVWNS41QzIuNSA0LjM5NTQzIDEuNjA0NTcgMy41IDAuNSAzLjVIMFYzVjIuNUgwLjVDMS42MDQ1NyAyLjUgMi41IDEuNjA0NTcgMi41IDAuNVoiCgkJZmlsbD0iY3VycmVudENvbG9yIgoJLz4KCTxwYXRoCgkJZD0iTTE0LjUgNC41VjVIMTMuNVY0LjVDMTMuNSAzLjk0NzcyIDEzLjA1MjMgMy41IDEyLjUgMy41SDEyVjNWMi41SDEyLjVDMTMuMDUyMyAyLjUgMTMuNSAyLjA1MjI4IDEzLjUgMS41VjFIMTRIMTQuNVYxLjVDMTQuNSAyLjA1MjI4IDE0Ljk0NzcgMi41IDE1LjUgMi41SDE2VjNWMy41SDE1LjVDMTQuOTQ3NyAzLjUgMTQuNSAzLjk0NzcyIDE0LjUgNC41WiIKCQlmaWxsPSJjdXJyZW50Q29sb3IiCgkvPgoJPHBhdGgKCQlkPSJNOC40MDcwNiA0LjkyOTM5TDguNSA0SDkuNUw5LjU5Mjk0IDQuOTI5MzlDOS44Mjk3MyA3LjI5NzM0IDExLjcwMjcgOS4xNzAyNyAxNC4wNzA2IDkuNDA3MDZMMTUgOS41VjEwLjVMMTQuMDcwNiAxMC41OTI5QzExLjcwMjcgMTAuODI5NyA5LjgyOTczIDEyLjcwMjcgOS41OTI5NCAxNS4wNzA2TDkuNSAxNkg4LjVMOC40MDcwNiAxNS4wNzA2QzguMTcwMjcgMTIuNzAyNyA2LjI5NzM0IDEwLjgyOTcgMy45MjkzOSAxMC41OTI5TDMgMTAuNVY5LjVMMy45MjkzOSA5LjQwNzA2QzYuMjk3MzQgOS4xNzAyNyA4LjE3MDI3IDcuMjk3MzQgOC40MDcwNiA0LjkyOTM5WiIKCQlmaWxsPSJjdXJyZW50Q29sb3IiCgkvPgo8L3N2Zz4=) - https://Nahida.dev/icons/sparkles
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
  xmlns: 'http://www.w3.org/2000/svg',
});

export default Sparkles;
