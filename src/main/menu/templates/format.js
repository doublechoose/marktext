import * as actions from '../actions/format'

export default function (keybindings) {
  return {
    id: 'formatMenuItem',
    // label: 'F&ormat',
    label: '&格式',
    submenu: [{
      id: 'strongMenuItem',
      // label: 'Bold',
      label: '粗体',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strong'),
      click (menuItem, focusedWindow) {
        actions.strong(focusedWindow)
      }
    }, {
      id: 'emphasisMenuItem',
      // label: 'Italic',
      label: '斜体',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.emphasis'),
      click (menuItem, focusedWindow) {
        actions.emphasis(focusedWindow)
      }
    }, {
      id: 'underlineMenuItem',
      // label: 'Underline',
      label: '下划线',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.underline'),
      click (menuItem, focusedWindow) {
        actions.underline(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'superscriptMenuItem',
      // label: 'Superscript',
      label: '上标',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.superscript'),
      click (menuItem, focusedWindow) {
        actions.superscript(focusedWindow)
      }
    }, {
      id: 'subscriptMenuItem',
      // label: 'Subscript',
      label: '下标',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.subscript'),
      click (menuItem, focusedWindow) {
        actions.subscript(focusedWindow)
      }
    }, {
      id: 'highlightMenuItem',
      // label: 'Highlight',
      label: '高亮',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.highlight'),
      click (menuItem, focusedWindow) {
        actions.highlight(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'inlineCodeMenuItem',
      // label: 'Inline Code',
      label: '内联代码',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-code'),
      click (menuItem, focusedWindow) {
        actions.inlineCode(focusedWindow)
      }
    }, {
      id: 'inlineMathMenuItem',
      label: '内联数学',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-math'),
      click (menuItem, focusedWindow) {
        actions.inlineMath(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'strikeMenuItem',
      // label: 'Strikethrough',
      label: '删除线',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strike'),
      click (menuItem, focusedWindow) {
        actions.strikethrough(focusedWindow)
      }
    }, {
      id: 'hyperlinkMenuItem',
      // label: 'Hyperlink',
      label: '超链接',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.hyperlink'),
      click (menuItem, focusedWindow) {
        actions.hyperlink(focusedWindow)
      }
    }, {
      id: 'imageMenuItem',
      // label: 'Image',
      label: '图片',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.image'),
      click (menuItem, focusedWindow) {
        actions.image(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      // label: 'Clear Formatting',
      label: '清除格式化',
      accelerator: keybindings.getAccelerator('format.clear-format'),
      click (menuItem, focusedWindow) {
        actions.clearFormat(focusedWindow)
      }
    }]
  }
}
