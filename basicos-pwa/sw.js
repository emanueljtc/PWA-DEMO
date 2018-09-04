self.addEventListener('install', e => {
  console.log('Evento: SW Instalado')
})

self.addEventListener('active', e => {
  console.log('Evento: SW Activado')
})

self.addEventListener('fetch', e => {
  console.log('Evento: SW Recuperando')
})