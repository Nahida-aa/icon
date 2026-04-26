import type { XaaIconDefaultHtmlProps } from '../types';

interface ExportTemplateParams {
  componentName: string;
  iconName: string;
  children: any;
  getSvg: () => Promise<string>;
  deprecated: boolean;
  deprecationReason: string;
  iconData: any;
  defaults?: XaaIconDefaultHtmlProps;
}

const defineExportTemplate = (exportFunction: (params: ExportTemplateParams) => Promise<string>) => exportFunction;

export default defineExportTemplate;