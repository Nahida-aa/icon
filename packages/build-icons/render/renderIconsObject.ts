import { basename } from 'path';
import { type INode, parseSync } from 'svgson';
import { readSvg } from '../helpers/readSvg';
import { hasDuplicatedChildren } from '../helpers/hasDuplicatedChildren';
import { generateHashedKey } from '../helpers/generateHashedKey';
import type { XaaIconDefaultHtmlProps } from '../types';

const getSvgAttr = (attrs: Record<string, string> | undefined, key: string): string | undefined => {
  if (!attrs) return undefined;
  return attrs[key];
};

const extractDefaults = (root: INode): XaaIconDefaultHtmlProps | undefined => {
  const attrs = root.attributes;
  if (!attrs) return undefined;

  const defaults: XaaIconDefaultHtmlProps = {};

  const width = getSvgAttr(attrs, 'width');
  const height = getSvgAttr(attrs, 'height');
  const viewBox = getSvgAttr(attrs, 'viewBox');
  const fill = getSvgAttr(attrs, 'fill');
  const stroke = getSvgAttr(attrs, 'stroke');
  const strokeWidth = getSvgAttr(attrs, 'stroke-width');
  const strokeLinecap = getSvgAttr(attrs, 'stroke-linecap');
  const strokeLinejoin = getSvgAttr(attrs, 'stroke-linejoin');
  const xmlns = getSvgAttr(attrs, 'xmlns');

  if (width !== undefined) defaults.width = Number(width);
  if (height !== undefined) defaults.height = Number(height);
  if (viewBox !== undefined) defaults.viewBox = viewBox;
  if (fill !== undefined) defaults.fill = fill as never;
  if (stroke !== undefined) defaults.stroke = stroke as never;
  if (strokeWidth !== undefined) defaults['stroke-width'] = strokeWidth as never;
  if (strokeLinecap !== undefined) defaults['stroke-linecap'] = strokeLinecap as never;
  if (strokeLinejoin !== undefined) defaults['stroke-linejoin'] = strokeLinejoin as never;
  if (xmlns !== undefined) defaults.xmlns = xmlns as never;

  return Object.keys(defaults).length > 0 ? defaults : undefined;
};

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {string} iconsDirectory - The directory where the icons are stored.
 * @returns {Object}
 */
export default async function generateIconObject(
  svgFiles: string[],
  iconsDirectory: string,
  renderUniqueKey = false,
) {
  const svgsContentPromises = svgFiles.map(async (svgFile) => {
    const name = basename(svgFile, '.svg');
    const svg = await readSvg(svgFile, iconsDirectory);
    const contents = parseSync(svg);

    if (!(contents.children && contents.children.length)) {
      throw new Error(`${name}.svg has no children!`);
    }

    if (hasDuplicatedChildren(contents.children)) {
      throw new Error(`Duplicated children in ${name}.svg`);
    }

    if (renderUniqueKey) {
      contents.children = contents.children.map((child) => {
        child.attributes.key = generateHashedKey(child);

        return child;
      });
    }

    const defaults = extractDefaults(contents);
    return { name, contents, defaults };
  });

  const svgsContents = await Promise.all(svgsContentPromises);

  const icons = svgsContents.reduce<Record<string, INode>>((acc, icon) => {
    acc[icon.name] = icon.contents;
    return acc;
  }, {});

  const defaultsMap = svgsContents.reduce<Record<string, XaaIconDefaultHtmlProps | undefined>>(
    (acc, icon) => {
      acc[icon.name] = icon.defaults;
      return acc;
    },
    {},
  );

  return { icons, defaults: defaultsMap };
}