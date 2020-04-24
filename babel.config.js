/**
 * @file config for babel
 * @author xueliqiang@baidu.com
 */

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: '2',
                modules: false,
                targets: {
                    browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9'
                    ]
                }
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        'transform-class-properties',
        'react-hot-loader/babel',
        '@babel/plugin-syntax-dynamic-import',
        [
            '@babel/plugin-transform-runtime',
            {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: false
            }
        ]
    ]
};
