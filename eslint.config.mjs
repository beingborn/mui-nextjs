import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    // import.meta.dirname is available after Node.js v20.11.0
    baseDirectory: import.meta.dirname, // 모듈 디렉토리 지정
    recommendedConfig: js.configs.recommended, // JS 기본 사용자 권장
});

const eslintConfig = [
    ...compat.config({
        extends: ['next', 'prettier', 'eslint:recommended'],
    }),
];

export default eslintConfig;
