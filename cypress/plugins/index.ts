import webpack from '@cypress/webpack-preprocessor'
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin'

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  on('file:preprocessor', webpack({
    webpackOptions: require('../webpack.config')(config),
  }))

 getCompareSnapshotsPlugin(on, config)

  return config
}
