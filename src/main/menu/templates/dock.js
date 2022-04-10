import { app, Menu } from 'electron'
import * as actions from '../actions/file'

const dockMenu = Menu.buildFromTemplate([{
  // label: 'Open...',
  label: '打开...',
  click (menuItem, browserWindow) {
    if (browserWindow) {
      actions.openFile(browserWindow)
    } else {
      actions.newEditorWindow()
    }
  }
}, {
  // label: 'Clear Recent',
  label: '清除最近文件',
  click () {
    app.clearRecentDocuments()
  }
}])

export default dockMenu
