if( 'serviceWorker' in navigator ) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
    .then( registration => {
      console.log(registration)
      console.log(
        'Services Worker Registrado con Exito',
        registration.scope
      );
    })
    .catch(
      err => console.log(`Registro de Service Worker Fallido`, err)
    )
  })
}