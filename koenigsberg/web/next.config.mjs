import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = 'C:\\The Koenigsberg Project\\The Koenigsberg Project.png';
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'logo.png');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log('Logo copied successfully from', source, 'to', dest);
  } else {
    console.warn('Source logo file not found at:', source);
  }
} catch (err) {
  console.error('Error copying logo file:', err);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
