let cacheStorageKey = "periodic-table_v1.0"

let cacheList = [
    './index.html',
    './index.css',
    './index.js',
    './data.json',
    './calc.png'
]
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheStorageKey)
        .then(cache => cache.addAll(cacheList))
        .then(() => self.skipWaiting())
    )
})
self.addEventListener('fetch' , e => {
    e.respondWith(caches.match(e.request).then(response => {
        if(response != null){
            return response
        }
        return fetch(e.request.url)
    }))
})
self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.filter(cacheNames => {
            return cacheNames !== cacheStorageKey
        }).map(cacheNames => {
            return caches.delete(cacheNames)
        }))
    }).then(() => {
        return self.clients.claim()
    }))
})