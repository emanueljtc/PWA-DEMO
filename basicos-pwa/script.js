;
//  Registro de Caracteristicas de PWA's
((d, w, n, c) => {
  // Registro Service Workers
  if ('serviceWorker' in n) {
    w.addEventListener('load', () => {
      n.serviceWorker.register('./sw.js')
        .then(registration => {
          c(registration)
          c(
            'Services Worker Registrado con Exito',
            registration.scope
          );
        })
        .catch(
          err => c(`Registro de Service Worker Fallido`, err)
        )
    })
  }
  // Activar servicio de las Notificaciones 
  if (w.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(status => {
      console.log(status)
      let n = new Notification('Titulo', {
        body: 'Soy una notificación',
        icon: './img/icon_192x192.png' // opcional
      })
    })
  }
})(document, window, navigator, console.log);

((d, w, n, c) => {

})(document, window, navigator, console.log);

((d, w, n, c) => {

})(document, window, navigator, console.log);
