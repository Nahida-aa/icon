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
 * @preview ![img](data:image/svg+xml;base64,CTxzdmcJCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKCQlmaWxsPSJub25lIgoJCXdpZHRoPSIyNCIKCQloZWlnaHQ9IjI0IgoJCXZpZXdCb3g9IjAgMCAyNCAyNCIKCQlzdHJva2Utd2lkdGg9IjEuNSIKCQlzdHJva2U9IiMwMDAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAycHgiCgk+CgkJPHBhdGgKCQkJc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgoJCQlzdHJva2UtbGluZWpvaW49InJvdW5kIgoJCQlkPSJNOS44MTMgMTUuOTA0IDkgMTguNzVsLS44MTMtMi44NDZhNC41IDQuNSAwIDAgMC0zLjA5LTMuMDlMMi4yNSAxMmwyLjg0Ni0uODEzYTQuNSA0LjUgMCAwIDAgMy4wOS0zLjA5TDkgNS4yNWwuODEzIDIuODQ2YTQuNSA0LjUgMCAwIDAgMy4wOSAzLjA5TDE1Ljc1IDEybC0yLjg0Ni44MTNhNC41IDQuNSAwIDAgMC0zLjA5IDMuMDlaTTE4LjI1OSA4LjcxNSAxOCA5Ljc1bC0uMjU5LTEuMDM1YTMuMzc1IDMuMzc1IDAgMCAwLTIuNDU1LTIuNDU2TDE0LjI1IDZsMS4wMzYtLjI1OWEzLjM3NSAzLjM3NSAwIDAgMCAyLjQ1NS0yLjQ1NkwxOCAyLjI1bC4yNTkgMS4wMzVhMy4zNzUgMy4zNzUgMCAwIDAgMi40NTYgMi40NTZMMjEuNzUgNmwtMS4wMzUuMjU5YTMuMzc1IDMuMzc1IDAgMCAwLTIuNDU2IDIuNDU2Wk0xNi44OTQgMjAuNTY3IDE2LjUgMjEuNzVsLS4zOTQtMS4xODNhMi4yNSAyLjI1IDAgMCAwLTEuNDIzLTEuNDIzTDEzLjUgMTguNzVsMS4xODMtLjM5NGEyLjI1IDIuMjUgMCAwIDAgMS40MjMtMS40MjNsLjM5NC0xLjE4My4zOTQgMS4xODNhMi4yNSAyLjI1IDAgMCAwIDEuNDIzIDEuNDIzbDEuMTgzLjM5NC0xLjE4My4zOTRhMi4yNSAyLjI1IDAgMCAwLTEuNDIzIDEuNDIzWiIKCQkvPgoJPC9zdmc+) - https://icon.nahida-aa.workers.dev/icons/sparkles
 * @see https://icon.nahida-aa.workers.dev/guide/react- Documentation
 *
 * @param {Object} props - Xaa icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Sparkles = createXaaIcon('sparkles', __iconNode, {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.5',
  xmlns: 'http://www.w3.org/2000/svg',
});

export default Sparkles;
