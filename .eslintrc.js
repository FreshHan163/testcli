/**
 * @file eslint config
 * @author yangpei01
 */
const path = require('path');

module.exports = {
    'extends': [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/react',
        '@ecomfe/eslint-config/import'
    ],
    'rules': {
        'sort-imports': 'off',
        'object-curly-spacing': ['error', 'never'],
        'comma-dangle': 'off',
        'prefer-const': ['error', {destructuring: 'all'}],
        // 'import/no-unresolved': 'off',
        'import/order': 'off', // 不需要引入顺序验证
        'react/jsx-no-bind': [
            'warn',
            {
                allowArrowFunctions: true // 暂且允许箭头函数，来提升代码可读性
            }
        ],
        'import/unambiguous': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-uses-react': 'warn'
    },
    'settings': {
        'react': {
            version: 'detect'
        },
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname, 'build/webpack.dev.js')
            }
        }
    }
};
