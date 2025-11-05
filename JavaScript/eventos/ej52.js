document.addEventListener('DOMContentLoaded', () => {
    let myWindow;

    document.getElementById('openWin').addEventListener('click', () => {
      myWindow = window.open(
        '',
        'smallWindow',
        'width=100,height=100,menubar=no,toolbar=no,location=no'
      );
      if (myWindow) {
        myWindow.document.body.style.background = 'red';
        myWindow.document.title = 'Ventana Roja';
      }
    });

    document.getElementById('resizeWin').addEventListener('click', () => {
      if (myWindow && !myWindow.closed) {
        myWindow.resizeTo(250, 250);
        myWindow.focus();
      } else {
        alert('Primero abre la ventana.');
      }
    });
});