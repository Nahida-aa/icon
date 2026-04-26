import { readSvgDirectory } from "./helpers/readSvgDirectory";
import renderIconsObject from './render/renderIconsObject.ts';
import generateIconFiles from './building/generateIconFiles.ts';
import generateExportsFile from './building/generateExportsFile.ts';

import generateAliasesFiles from './building/aliases/generateAliasesFiles.ts';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import {getIconMetaData} from './utils/getIconMetaData.ts';
import generateDynamicImports from './building/generateDynamicImports.ts';


interface CliArguments {
  renderUniqueKey?: boolean;
  templateSrc?: string;
  silent?: boolean;
  iconFileExtension?: string;
  importImportFileExtension?: string;
  exportFileName?: string;
  exportModuleNameCasing?: 'camel' | 'pascal';
  withAliases?: boolean;
  aliasNamesOnly?: boolean;
  withDynamicImports?: boolean;
  separateAliasesFile?: boolean;
  separateAliasesFileExtension?: string;
  separateAliasesFileIgnore?: string;
  separateIconFileExport?: boolean;
  separateIconFileExportExtension?: string;
  aliasesFileExtension?: string;
  aliasImportFileExtension?: string;
  useDefaultExports?: boolean;
  pretty?: boolean;
  output: string | undefined;
}
const args = Bun.argv.slice(2);
console.log(args); // [ "--output=./src", "--templateSrc=./scripts/exportTemplate.mts", "--renderUniqueKey", "--withAliases", "--withDynamicImports", "--separateAliasesFile", "--separateAliasesFileIgnore=fingerprint",  "--aliasesFileExtension=.ts", "--iconFileExtension=.ts", "--exportFileName=index.ts"]
// const cliArguments = 
// console.log(cliArguments);