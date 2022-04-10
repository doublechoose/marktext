import { app } from 'electron'
import { showAboutDialog } from '../actions/help'
import * as actions from '../actions/marktext'

// macOS only menu.

export default function (keybindings) {
  return {
    label: 'MarkText',
    submenu: [{
      // label: 'About MarkText',
      label: '关于MarkText',
      click (menuItem, focusedWindow) {
        showAboutDialog(focusedWindow)
      }
    }, {
      // label: 'Check for updates...',
      label: '检查更新...',
      click (menuItem, focusedWindow) {
        actions.checkUpdates(focusedWindow)
      }
    }, {
      // label: 'Preferences',
      label: '首选项',
      accelerator: keybindings.getAccelerator('file.preferences'),
      click () {
        actions.userSetting()
      }
    }, {
      type: 'separator'
    }, {
      // label: 'Services',
      label: '服务',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      // label: 'Hide MarkText',
      label: '隐藏MarkText',
      accelerator: keybindings.getAccelerator('mt.hide'),
      click () {
        actions.osxHide()
      }
    }, {
      // label: 'Hide Others',
      label: '隐藏其他',
      accelerator: keybindings.getAccelerator('mt.hide-others'),
      click () {
        actions.osxHideAll()
      }
    }, {
      // label: 'Show All',
      label: '全部显示',
      click () {
        actions.osxShowAll()
      }
    }, {
      type: 'separator'
    }, {
      // label: 'Quit MarkText',
      label: '退出MarkText',
      accelerator: keybindings.getAccelerator('file.quit'),
      click: app.quit
    }]
  }
}
