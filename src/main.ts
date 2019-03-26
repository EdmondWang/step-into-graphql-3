import logger from './logger';

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => logger.info('Module disposed. '));
}