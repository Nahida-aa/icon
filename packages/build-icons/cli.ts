#!/usr/bin/env bun
console.log('=== CLI STARTED ===');
import fs from 'node:fs';
import path from 'node:path';
import { readSvgDirectory } from "./helpers/readSvgDirectory";
import renderIconsObject from './render/renderIconsObject.ts';
import generateIconFiles from './building/generateIconFiles.ts';
import generateExportsFile from './building/generateExportsFile.ts';

import generateAliasesFiles from './building/aliases/generateAliasesFiles.ts';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import {getIconMetaData} from './utils/getIconMetaData.ts';
import generateDynamicImports from './building/generateDynamicImports.ts';


type CliArguments = {
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
type CliArgumentsKey = keyof CliArguments;
const args = Bun.argv.slice(2);

const cliArguments = args.reduce<CliArguments>((acc, arg) => {
  if (arg.startsWith('--')) {
    const [key, value] = arg.slice(2).split('=') as [CliArgumentsKey, string | undefined];
    if (value !== undefined) {
      (acc[key] as string) = value;
    } else {
      (acc[key] as boolean) = true;
    }
  }
  return acc;
}, {} as CliArguments);
const {
  renderUniqueKey = false,
  templateSrc,
  silent = false,
  iconFileExtension = '.js',
  importImportFileExtension = '',
  exportFileName = 'index.js',
  exportModuleNameCasing = 'pascal',
  withAliases = false,
  aliasNamesOnly = false,
  withDynamicImports = false,
  separateAliasesFile = false,
  separateAliasesFileExtension = undefined,
  separateAliasesFileIgnore = undefined,
  separateIconFileExport = false,
  separateIconFileExportExtension = undefined,
  aliasesFileExtension = '.js',
  aliasImportFileExtension = '',
  useDefaultExports = true,
  pretty = true,
} = cliArguments;
console.log(cliArguments);

const ICONS_DIR = path.resolve(process.cwd(), '../../icons');
const OUTPUT_DIR = path.resolve(process.cwd(), cliArguments.output || '../build');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}
async function buildIcons() {
  if (templateSrc == null) {
    throw new Error('No `templateSrc` argument given.');
  }

  const svgFiles = await readSvgDirectory(ICONS_DIR);

  const { icons, defaults } = await renderIconsObject(svgFiles, ICONS_DIR, renderUniqueKey);

  const { default: iconFileTemplate } = await import(path.resolve(process.cwd(), templateSrc));

  const iconMetaData = await getIconMetaData(ICONS_DIR);

  // Generates iconsNodes files for each icon
  await generateIconFiles({
    iconNodes: icons,
    iconDefaults: defaults,
    outputDirectory: OUTPUT_DIR,
    template: iconFileTemplate,
    showLog: !silent,
    iconFileExtension,
    separateIconFileExport,
    separateIconFileExportExtension,
    pretty: JSON.parse(String(pretty)),
    iconsDir: ICONS_DIR,
    iconMetaData,
  });

  if (withAliases) {
    await generateAliasesFiles({
      iconNodes: icons,
      iconMetaData,
      aliasNamesOnly,
      iconFileExtension,
      outputDirectory: OUTPUT_DIR,
      fileExtension: aliasesFileExtension,
      aliasImportFileExtension,
      separateAliasesFile,
      separateAliasesFileExtension,
      separateAliasesFileIgnore,
      showLog: !silent,
    });
  }

  if (withDynamicImports) {
    await generateDynamicImports({
      iconNodes: icons,
      outputDirectory: OUTPUT_DIR,
      fileExtension: aliasesFileExtension,
      iconMetaData,
      showLog: !silent,
    });
  }

  // Generates entry files for the compiler filled with icons exports
  await generateExportsFile(
    path.join(OUTPUT_DIR, 'icons', exportFileName),
    path.join(OUTPUT_DIR, 'icons'),
    icons,
    exportModuleNameCasing,
    importImportFileExtension,
    useDefaultExports,
  );
}

try {
  await buildIcons();
} catch (error) {
  console.error(error);
}