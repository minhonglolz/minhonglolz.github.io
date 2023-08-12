module.exports = {
  extends: ['next/core-web-vitals', 'standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-process-env': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    'react/jsx-indent': ['warn', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    'react/prop-types': 'off',
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/jsx-curly-spacing': ['warn', { when: 'never', children: true }],
    'react/jsx-tag-spacing': ['warn', {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/self-closing-comp': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-equals-spacing': [2, 'never'],
    /** https://typescript-eslint.io/rules/comma-dangle */
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
      generics: 'ignore',
    }],
    /** https://typescript-eslint.io/rules/indent/ */
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      offsetTernaryExpressions: true,
    }],
    /** https://typescript-eslint.io/rules/type-annotation-spacing/ */
    '@typescript-eslint/type-annotation-spacing': ['error'],
    /** https://typescript-eslint.io/rules/member-delimiter-style */
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    /** https://typescript-eslint.io/rules/no-unused-vars */
    /** https://typescript-eslint.io/rules/space-before-function-paren */
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    /** https://typescript-eslint.io/rules/space-infix-ops */
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error'],
    /** https://typescript-eslint.io/rules/semi */
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@next/next/no-title-in-document-head': 'off',
  },
}
