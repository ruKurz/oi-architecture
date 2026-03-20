import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    // Two-layer model separation boundary guard (ADR-0018, concept §3.6)
    // Renderer modules must not import semantic layer artifacts directly.
    // Only src/data/doc/projection.ts may cross the layer boundary.
    files: ['src/renderer/**/*.ts', 'src/views/**/*.ts', 'src/router.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/data/doc/types-doc', '**/data/doc/document-model'],
              message:
                'Renderer modules must not import from the Semantic Model Layer directly. Use src/data/doc/projection.ts instead.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['dist/', 'node_modules/'],
  },
)
