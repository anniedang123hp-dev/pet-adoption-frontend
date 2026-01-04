declare module 'vite-plugin-eslint' {
  import type { Plugin } from 'vite';
  const eslint: (options?: {
    emitWarning?: boolean;
    emitError?: boolean;
    failOnError?: boolean;
    failOnWarning?: boolean;
    lintOnStart?: boolean;
  }) => Plugin;
  export default eslint;
}
