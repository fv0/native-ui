'use babel';

import toggleClassName from './helpers/toggle-class-name';

const classNames = {
  'native-ui-autoResizeTabs': atom.config.get('native-ui.tabs.autoResizeTabs'),
  'native-ui-macTransparency': atom.config.get('native-ui.ui.macTransparency'),
  'native-ui-seamlessScrollbars': atom.config.get('native-ui.ui.seamlessScrollbars')
};

if (atom.config.get('native-ui.ui.macTransparency')) {
  // Make sidebars transparent
  require('electron').remote.getCurrentWindow().setVibrancy('light');
}

export default {
  activate() {
    Object.keys(classNames).forEach(className => (
      toggleClassName(className, classNames[className])),
    );
  },

  deactivate() {
    // Reset all class names
    Object.keys(classNames).forEach(className => toggleClassName(className, false));
  }
};
