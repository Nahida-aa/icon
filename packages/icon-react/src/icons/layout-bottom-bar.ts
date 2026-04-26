import createXaaIcon from '../createXaaIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  ['path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none', key: 'mrmzjk' }],
  [
    'path',
    {
      d: 'M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12',
      key: 'rv03xb',
    },
  ],
  ['path', { d: 'M4 15l16 0', key: 'hr2vz0' }],
];

/**
 * @component @name LayoutBottomBar
 * @description Xaa SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwkJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgoJCXdpZHRoPSIyNCIKCQloZWlnaHQ9IjI0IgoJCXZpZXdCb3g9IjAgMCAyNCAyNCIKCQlmaWxsPSJub25lIgoJCXN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKCQlzdHJva2Utd2lkdGg9IjIiCgkJc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgoJCXN0cm9rZS1saW5lam9pbj0icm91bmQiCgk+CgkJPHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPgoJCTxwYXRoIGQ9Ik00IDZhMiAyIDAgMCAxIDIgLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEgLTIgMmgtMTJhMiAyIDAgMCAxIC0yIC0ybDAgLTEyIiAvPgoJCTxwYXRoIGQ9Ik00IDE1bDE2IDAiIC8+Cgk8L3N2Zz4=) - https://Nahida.dev/icons/layout-bottom-bar
 * @see https://Nahida.dev/guide/react- Documentation
 *
 * @param {Object} props - Xaa icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const LayoutBottomBar = createXaaIcon('layout-bottom-bar', __iconNode);

export default LayoutBottomBar;
