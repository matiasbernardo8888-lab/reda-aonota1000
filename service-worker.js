self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  // Quando clicar na notificação, abre o site
  event.waitUntil(
    clients.openWindow('/')
  );
});
