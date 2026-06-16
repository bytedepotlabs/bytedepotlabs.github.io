import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs';

const input = fs.readFileSync('./src/input.css', 'utf8');

postcss([tailwindcss, autoprefixer])
  .process(input, { from: './src/input.css', to: './dist/output.css' })
  .then(result => {
    fs.mkdirSync('./dist', { recursive: true });
    fs.writeFileSync('./dist/output.css', result.css);
    console.log('✓ CSS compiled successfully to dist/output.css');
  })
  .catch(err => {
    console.error('Error compiling CSS:', err);
    process.exit(1);
  });
