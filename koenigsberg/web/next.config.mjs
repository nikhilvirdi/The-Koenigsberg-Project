import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoSource = 'C:\\The Koenigsberg Project\\The Koenigsberg Project.png';
const avatarSource = 'C:\\The Koenigsberg Project\\Nikhil Virdi pfp.jpeg';
const destDir = path.join(__dirname, 'public');
const logoDest = path.join(destDir, 'logo.png');
const avatarDest = path.join(destDir, 'avatar.png');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  // Copy logo
  if (fs.existsSync(logoSource)) {
    fs.copyFileSync(logoSource, logoDest);
    console.log('Logo copied successfully to', logoDest);
  } else {
    console.warn('Source logo file not found at:', logoSource);
  }
  // Copy avatar
  if (fs.existsSync(avatarSource)) {
    fs.copyFileSync(avatarSource, avatarDest);
    console.log('Avatar copied successfully to', avatarDest);
  } else {
    console.warn('Source avatar file not found at:', avatarSource);
  }
} catch (err) {
  console.error('Error copying assets:', err);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
