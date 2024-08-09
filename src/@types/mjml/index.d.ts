declare module 'mjml' {
  export interface MJMLParseOptions {
    minify?: boolean;
    beautify?: boolean;
    validationLevel?: 'strict' | 'soft' | 'skip';
  }

  export interface MJMLParseResults {
    html: string;
    errors: Array<{ line: number; message: string; tagName: string }>;
  }

  export default function mjml(
    input: string | { filePath: string },
    options?: MJMLParseOptions,
  ): MJMLParseResults;
}
