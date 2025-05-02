class DrawerController {
  constructor ( drawerElement, options = {} ) {
    this.drawer = drawerElement;
    this.position = 100;
    this.targetPosition = 100;
    this.isDragging = false;

    // Options
    this.snapThreshold = options.snapThreshold || 0.5;
    this.minSwipeVelocity = options.minSwipeVelocity || 0.5;
    this.minSwipeDistance = options.minSwipeDistance || 30;
    this.speedMultiplier = options.speedMultiplier || 0.3;

    // Drag tracking
    this.startY = 0;
    this.currentY = 0;
    this.lastY = 0;
    this.startTime = 0;
    this.drawerHeight = 0;

    this.init(); }

  init() {
    this.refreshDimensions();
    window.addEventListener( "resize", () => this.refreshDimensions() );

    document.addEventListener( "touchstart", e => this.onTouchStart(e) );
    document.addEventListener( "touchmove", e => this.onTouchMove(e) );
    document.addEventListener( "touchend", e => this.onTouchEnd(e) );

    requestAnimationFrame ( () => this.animate() );  }

  refreshDimensions() {
    this.drawerHeight = this.drawer.getBoundingClientRect().height;
  }

  pixelToPercent(y) {
    const screenHeight = document.documentElement.clientHeight; // full viewport height
    return Math.max(0, Math.min(100, (y / screenHeight) * 100));
  }

  onTouchStart(e) {
    this.isDragging = true;
    this.startY = e.touches[0].clientY;
    this.currentY = this.startY;
    this.lastY = this.startY;
    this.startTime = Date.now();
  }

  onTouchMove(e) {
    if (!this.isDragging) return;
    this.currentY = e.touches[0].clientY;
    const percent = this.pixelToPercent(this.currentY); // now uses absolute screen position
    this.targetPosition = percent;
  }

  onTouchEnd(e) {
    if (!this.isDragging) return;
    this.isDragging = false;

    if (this.position <= 80) {
      this.targetPosition = 0;
    } else {
      this.targetPosition = 100;
    }
  }

  animate() {
    if (this.isDragging) {
      this.position = this.targetPosition;
      this.setTransform(); } 
    else {
      const diff = this.targetPosition - this.position;
      if (Math.abs(diff) > this.snapThreshold) {
        let speed = diff * this.speedMultiplier;
        const minSpeed = 0.5;
        if (speed > 0) {
          speed = Math.max(speed, minSpeed);
        } else {
          speed = Math.min(speed, -minSpeed);
        }

        this.position += speed;

        if (this.position < 0) this.position = 0;
        if (this.position > 100) this.position = 100;

        this.setTransform();
      } else {
        this.position = this.targetPosition;
        this.setTransform(); } }

    requestAnimationFrame(() => this.animate()); }

  setTransform() {
    const translateY = (this.position / 100) * this.drawerHeight;
    this.drawer.style.transform = `translateY(${translateY}px)`; } }
