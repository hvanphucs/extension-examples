import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';


declare global {
    interface Window {
       _cls: any;
    }
}

/**
 * Initialization data for the @jupyterlab-examples/hello-world extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@jupyterlab-examples/hello-world:plugin',
  description: 'Minimal JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    const getCls = () => {
      return app
    }

    console.log('Add cls plugin to frontend')
    window._cls = getCls

    console.log('The JupyterLab main application:', app);
  }
};

export default plugin;
