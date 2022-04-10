export default function (keybindings) {
  return {
    // label: 'Edit',
    label: '编辑',
    submenu: [{
      // label: 'Cut',
      label: '剪切',
      accelerator: keybindings.getAccelerator('edit.cut'),
      role: 'cut'
    }, {
      // label: 'Copy',
      label: '复制',
      accelerator: keybindings.getAccelerator('edit.copy'),
      role: 'copy'
    }, {
      // label: 'Paste',
      label: '粘贴',
      accelerator: keybindings.getAccelerator('edit.paste'),
      role: 'paste'
    }, {
      type: 'separator'
    }, {
      // label: 'Select All',
      label: '全选',
      accelerator: keybindings.getAccelerator('edit.select-all'),
      role: 'selectAll'
    }]
  }
}
