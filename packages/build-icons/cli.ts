import { readSvgDirectory } from "./helpers/readSvgDirectory";
import renderIconsObject from './render/renderIconsObject.ts';
import generateIconFiles from './building/generateIconFiles.ts';
import generateExportsFile from './building/generateExportsFile.ts';

import generateAliasesFiles from './building/aliases/generateAliasesFiles.ts';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import {getIconMetaData} from './utils/getIconMetaData.ts';
import generateDynamicImports from './building/generateDynamicImports.ts';

const args = Bun.argv.slice(2);
console.log(args);