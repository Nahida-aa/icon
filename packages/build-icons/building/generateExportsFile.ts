import path from 'path';
import type { INode } from 'svgson';
import { toCamelCase } from '../utils/toCamelCase';
import { toPascalCase } from '../utils/toPascalCase';
import { resetFile } from '../helpers/resetFile';
import { appendFile } from '../helpers/appendFile';

export default async function generateExportFile(
  inputEntry: string,
  outputDirectory: string,
  iconNodes: Record<string, INode>,
  exportModuleNameCasing: 'camel' | 'pascal',
  iconFileExtension = '',
  useDefaultExports = true,
) {
  const fileName = path.basename(inputEntry);

  // Reset file
  await resetFile(fileName, outputDirectory);

  const icons = Object.keys(iconNodes);

  // Generate Import for Icon VNodes
  const iconImportNodesPromises = icons.map(async (iconName) => {
    let componentName;

    if (exportModuleNameCasing === 'camel') {
      componentName = toCamelCase(iconName);
    } else if (exportModuleNameCasing === 'pascal') {
      componentName = toPascalCase(iconName);
    }
    const importString = `export ${
      useDefaultExports ? `{ default as ${componentName} }` : `*`
    } from './${iconName}${iconFileExtension}';\n`;
    return appendFile(importString, fileName, outputDirectory);
  });

  await Promise.all(iconImportNodesPromises);

  await appendFile('\n', fileName, outputDirectory);

  console.log(`Successfully generated ${outputDirectory}/${fileName} file`);
}