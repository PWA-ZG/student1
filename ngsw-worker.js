self.addEventListener('install', (event) => {
    event.waitUntil(
      self.registration.sync.register('syncTask')
        .then(() => this.log('Sync Task Registered install'))
        .catch((error) => this.log('Error registering sync task', error))
    );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.sync.register('syncTask')
      .then(() => this.log('Sync Task Registered'))
      .catch((error) => this.log('Error registering sync task', error))
  );
});


self.addEventListener('sync', (event) => {
    if (event.tag === 'syncTask') {
        event.waitUntil(doSync());
}
});

function doSync() {
    this.log('Background sync task is running! yeah');
}
