import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
    const config = {
        plugins: [vue()]
    };

    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    const SKIP_BASE_PATH = process.env.VITE_SKIP_BASE_BATH;
    if (SKIP_BASE_PATH === undefined || SKIP_BASE_PATH === 'false')
        config.base = '/pinia-thenetninja/';

    return defineConfig(config);
}
