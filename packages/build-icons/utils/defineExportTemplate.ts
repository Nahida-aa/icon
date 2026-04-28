import type { XaaIconDefaultHtmlProps } from '../types';

export interface ExportTemplateParams {
  componentName: string;
  iconName: string;
  children: any;
  getSvg: () => Promise<string>;
  deprecated: boolean;
  deprecationReason: string;
  iconData: any;
  defaults?: XaaIconDefaultHtmlProps;
}

export const defineExportTemplate = (exportFunction: (params: ExportTemplateParams) => Promise<string>) => exportFunction;
