import path from 'path';
import { babel } from '@rollup/plugin-babel';
import esbuild from 'esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import license from 'rollup-plugin-license';
import pkg from './package.json' with { type: 'json' };

const packageName = 'XaaIconSolid';
const inputs = ['src/index.ts'];

const bundles = [
  {
    format: 'cjs',
    outputDir: 'dist/cjs',
    preserveModules: true,
    extension: 'cjs',
  },
  {
    format: 'esm',
    outputDir: 'dist/esm',
    preserveModules: true,
    extension: 'mjs',
  },
];

const configs = bundles
  .map(({ outputDir, format, preserveModules, extension }) =>
    inputs.map((input) => ({
      input,
      plugins: [
        babel({
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          babelHelpers: 'bundled',
          presets: [
            'babel-preset-solid',
            '@babel/preset-typescript',
            ['@babel/preset-env', { bugfixes: true, targets: 'last 2 years' }],
          ],
        }),
        nodeResolve({
          extensions: ['.js', '.ts', '.jsx', '.tsx'],
          resolveOnly: [/@xaa\/.*$/],
        }),
        license({
          banner: `@license ${pkg.name} v${pkg.version} - ${pkg.license}

This source code is licensed under the ${pkg.license} license.
See the LICENSE file in the root directory of this source tree.`,
        }),
        format === 'esm'
          ? {
              name: 'build-source-and-types',
              async buildEnd() {
                const entryPoints = ['./src/**/*.tsx', './src/**/*.ts'];
                
                // 生成保留 JSX 的 source 版本
                await esbuild.build({
                  entryPoints,
                  outdir: './dist/source',
                  outExtension: {
                    '.js': '.jsx',
                  },
                  loader: {
                    '.js': 'jsx',
                  },
                  jsx: 'preserve',
                  jsxImportSource: 'solid-js',
                  bundle: true,
                  format: 'esm',
                  sourcemap: true,
                  target: ['esnext'],
                  banner: {
                    js: `/**
* @license ${pkg.name} v${pkg.version} - ${pkg.license}
*
* This source code is licensed under the ${pkg.license} license.
* See the LICENSE file in the root directory of this source tree.
*/`,
                  },
                  plugins: [
                    {
                      name: 'externalize-everything-except-own-dependencies',
                      setup(build) {
                        build.onResolve({ filter: /(.*)/ }, (args) => {
                          const modulePath = path.join(args.resolveDir, args.path);
                          if (
                            args.kind === 'import-statement' &&
                            args.path !== '@xaa/build-icons' &&
                            !modulePath.includes('packages/build-icons')
                          ) {
                            return { path: args.path, external: true };
                          }
                        });
                      },
                    },
                  ],
                  external: ['solid-js'],
                });

                // 生成类型声明文件
                try {
                  const ts = await import('typescript');
                  const sourceFile = pkg.source || 'src/index.ts';
                  const program = ts.createProgram([sourceFile], {
                    target: ts.ScriptTarget.ESNext,
                    module: ts.ModuleKind.ESNext,
                    moduleResolution: ts.ModuleResolutionKind.NodeJs,
                    jsx: ts.JsxEmit.Preserve,
                    jsxImportSource: 'solid-js',
                    allowSyntheticDefaultImports: true,
                    esModuleInterop: true,
                    declarationDir: 'dist/types',
                    declaration: true,
                    emitDeclarationOnly: true,
                  });
                  program.emit();
                } catch (err) {
                  console.error('Failed to generate types:', err.message);
                }
              },
            }
          : null,
      ].filter(Boolean),
      external: ['solid-js', 'solid-js/web', 'solid-js/store'],
      output: {
        name: packageName,
        dir: outputDir,
        exports: 'auto',
        entryFileNames: `[name].${extension}`,
        format,
        preserveModules,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    }))
  )
  .flat();

export default configs;
