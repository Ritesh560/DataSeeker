const { readdirSync } = require('fs');
const { isSVG, removeExtension } = require('./utils');
const { generateWebIconMap, generateIconComponentFile } = require('./generators');

//These paths are from root

const ICON_SOURCE_FOLDER = 'src/icons/icons';
const ICON_OUTPUT_FOLDER = 'src/icons';
const FONT_FOLDER = 'libs/icons/src/lib/assets/fonts';
const FONT_NAME = 'custom-font-icon';

const icons = readdirSync(ICON_SOURCE_FOLDER).filter(isSVG).map(removeExtension);

try {
  generateIconComponentFile(icons, { dir: ICON_OUTPUT_FOLDER });
  generateWebIconMap(icons, { dir: ICON_SOURCE_FOLDER });
} catch (e) {
  console.error(e);
}
