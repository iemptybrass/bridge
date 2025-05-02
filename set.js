window.addEventListener ( 'load', () => {
  const drawer = document.getElementById ( 'drawer' );
  const drawerController = new DrawerController ( drawer, {
    snapThreshold: 0.5,
    minSwipeVelocity: 0.5,
    minSwipeDistance: 30,
    speedMultiplier: 0.3 } );
  window.drawerController = drawerController; } );