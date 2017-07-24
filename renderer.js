// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let electron = require('electron');
let win = electron.remote.getCurrentWindow();
win.setResizable(true);

let maximizeBtn = document.querySelector('#maximize');
let unmaximizeBtn = document.querySelector('#unmaximize');

maximizeBtn.addEventListener('click', () => win.maximize());
unmaximizeBtn.addEventListener('click', () => win.unmaximize());

let setBtnState = () => {
  if (win.isMaximized()) {
    maximizeBtn.classList.add('hide');
    unmaximizeBtn.classList.remove('hide');
  } else {
    unmaximizeBtn.classList.add('hide');
    maximizeBtn.classList.remove('hide');
  }
};

win.on('maximize', setBtnState);
win.on('unmaximize', setBtnState);
setBtnState();
