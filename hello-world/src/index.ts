import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

// import {
//   ILayoutRestorer
// } from '@jupyterlab/application';
// import { ICommandPalette } from '@jupyterlab/apputils';
// import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
// import { ILauncher } from '@jupyterlab/launcher';
// import { IMainMenu } from '@jupyterlab/mainmenu';
// import { ISettingRegistry } from '@jupyterlab/settingregistry';


import '../style/index.css';


declare global {
    interface Window {
       _cls: any;
    }
}

// requires: [
//     ICommandPalette,
//     ILauncher,
//     IFileBrowserFactory,
//     ILayoutRestorer,
//     IMainMenu,
//     ISettingRegistry
//   ],
//   activate: async (
//     app: JupyterFrontEnd,
//     palette: ICommandPalette,
//     launcher: ILauncher,
//     browserFactory: IFileBrowserFactory,
//     restorer: ILayoutRestorer,
//     menu: IMainMenu,
//     registry: ISettingRegistry
//   )

/**
 * Initialization data for the @jupyterlab-examples/hello-world extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@jupyterlab-examples/hello-world:plugin',
  description: 'Minimal JupyterLab extension.',
  autoStart: true,
  requires: [
   
  ],
  activate: async (
    app: JupyterFrontEnd,
  
  ) => {
    console.log('Starting embedded extension...');
    const getCls = () => {
      return {
        app
       
      }
    }
    console.log('Add cls plugin to frontend...')
    window._cls = getCls
  }
};

export default plugin;
