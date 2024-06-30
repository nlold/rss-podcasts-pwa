/** @type {import('next').NextConfig} */

import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";

// Получение директории текущего файла в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "service-worker.js"),
              to: path.resolve(__dirname, "public"),
            },
          ],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
