import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';
const colors = {
  black: '#161616',
  white: '#bbefd5',
  blue: '#8065f4',
  red: '#b17aeb',
  green: '#40936a',
  yellow: '#f3c331'
}

const colorSet: IColorSet = {
  base: {
    background: colors.black,
    foreground: colors.white,
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
