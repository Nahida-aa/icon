import createXaaIcon from '../createXaaIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
      key: 'vil7ei',
    },
  ],
];

/**
 * @component @name DocumentText
 * @description Xaa SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwkJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJCWZpbGw9Im5vbmUiCgkJdmlld0JveD0iMCAwIDI0IDI0IgoJCXN0cm9rZS13aWR0aD0iMS41IgoJCXN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKCQl3aWR0aD0iMjQiCgkJaGVpZ2h0PSIyNCIKCT4KCQk8cGF0aAoJCQlzdHJva2UtbGluZWNhcD0icm91bmQiCgkJCXN0cm9rZS1saW5lam9pbj0icm91bmQiCgkJCWQ9Ik0xOS41IDE0LjI1di0yLjYyNWEzLjM3NSAzLjM3NSAwIDAgMC0zLjM3NS0zLjM3NWgtMS41QTEuMTI1IDEuMTI1IDAgMCAxIDEzLjUgNy4xMjV2LTEuNWEzLjM3NSAzLjM3NSAwIDAgMC0zLjM3NS0zLjM3NUg4LjI1bTAgMTIuNzVoNy41bS03LjUgM0gxMk0xMC41IDIuMjVINS42MjVjLS42MjEgMC0xLjEyNS41MDQtMS4xMjUgMS4xMjV2MTcuMjVjMCAuNjIxLjUwNCAxLjEyNSAxLjEyNSAxLjEyNWgxMi43NWMuNjIxIDAgMS4xMjUtLjUwNCAxLjEyNS0xLjEyNVYxMS4yNWE5IDkgMCAwIDAtOS05WiIKCQkvPgoJPC9zdmc+) - https://Nahida.dev/icons/document-text
 * @see https://Nahida.dev/guide/react- Documentation
 *
 * @param {Object} props - Xaa icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const DocumentText = createXaaIcon('document-text', __iconNode);

export default DocumentText;
