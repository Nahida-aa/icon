import createXaaIcon from '../createXaaIcon';
import type { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z',
      key: 'x802r9',
    },
  ],
];

/**
 * @component @name Sparkles
 * @description Xaa SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwkJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJCWZpbGw9Im5vbmUiCgkJdmlld0JveD0iMCAwIDI0IDI0IgoJCXN0cm9rZS13aWR0aD0iMS41IgoJCXN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKCT4KCQk8cGF0aAoJCQlzdHJva2UtbGluZWNhcD0icm91bmQiCgkJCXN0cm9rZS1saW5lam9pbj0icm91bmQiCgkJCWQ9Ik05LjgxMyAxNS45MDQgOSAxOC43NWwtLjgxMy0yLjg0NmE0LjUgNC41IDAgMCAwLTMuMDktMy4wOUwyLjI1IDEybDIuODQ2LS44MTNhNC41IDQuNSAwIDAgMCAzLjA5LTMuMDlMOSA1LjI1bC44MTMgMi44NDZhNC41IDQuNSAwIDAgMCAzLjA5IDMuMDlMMTUuNzUgMTJsLTIuODQ2LjgxM2E0LjUgNC41IDAgMCAwLTMuMDkgMy4wOVpNMTguMjU5IDguNzE1IDE4IDkuNzVsLS4yNTktMS4wMzVhMy4zNzUgMy4zNzUgMCAwIDAtMi40NTUtMi40NTZMMTQuMjUgNmwxLjAzNi0uMjU5YTMuMzc1IDMuMzc1IDAgMCAwIDIuNDU1LTIuNDU2TDE4IDIuMjVsLjI1OSAxLjAzNWEzLjM3NSAzLjM3NSAwIDAgMCAyLjQ1NiAyLjQ1NkwyMS43NSA2bC0xLjAzNS4yNTlhMy4zNzUgMy4zNzUgMCAwIDAtMi40NTYgMi40NTZaTTE2Ljg5NCAyMC41NjcgMTYuNSAyMS43NWwtLjM5NC0xLjE4M2EyLjI1IDIuMjUgMCAwIDAtMS40MjMtMS40MjNMMTMuNSAxOC43NWwxLjE4My0uMzk0YTIuMjUgMi4yNSAwIDAgMCAxLjQyMy0xLjQyM2wuMzk0LTEuMTgzLjM5NCAxLjE4M2EyLjI1IDIuMjUgMCAwIDAgMS40MjMgMS40MjNsMS4xODMuMzk0LTEuMTgzLjM5NGEyLjI1IDIuMjUgMCAwIDAtMS40MjMgMS40MjNaIgoJCS8+Cgk8L3N2Zz4K) - https://Nahida.dev/icons/sparkles
 * @see https://Nahida.dev/guide/react- Documentation
 *
 * @param {Object} props - Xaa icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Sparkles = createXaaIcon('sparkles', __iconNode, {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.5',
  xmlns: 'http://www.w3.org/2000/svg',
});

export default Sparkles;
