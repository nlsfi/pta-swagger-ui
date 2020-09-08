import StandaloneLayout from "./layout"
import TopbarPlugin from "plugins/topbar"
import NlsTopbarPlugin from "plugins/nls-topbar"
import ConfigsPlugin from "corePlugins/configs"

// the Standalone preset

export default [
  //TopbarPlugin,
  NlsTopbarPlugin,
  ConfigsPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  }
]
