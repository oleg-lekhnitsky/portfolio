<template>
    <div style="display: flex; gap: 10px;">
      <div v-for="(div, index) in divs" :key="index" class="draggable"
           :style="{ transform: 'translate(' + div.translateX + 'px, ' + div.translateY + 'px)', width: div.width + 'vw', height: div.height + 'vw', backgroundImage: 'url(' + images[index] + ')', zIndex: div.zIndex }">
        <div class="draggable-header" @mousedown="startDragging($event, index)">
          <div style=" overflow: hidden;"></div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {

      divs: [
        { zIndex: 1, width: 20, height: 20, translateX: 0, translateY: 0 },
        { zIndex: 1, width: 40, height: 20, translateX: 0, translateY: 0 },
      ],

      images: [
        "0001.png",
        "/0002.png",
      ],
      dragging: false,
      offset: { x: 0, y: 0 },
      index: null,
      maxZIndex: 10
    };
  },
  methods: {
    startDragging(e, index) {
      this.index = index;
      this.dragging = true;
      this.offset.x = e.clientX - this.divs[index].translateX;
      this.offset.y = e.clientY - this.divs[index].translateY;
      this.divs[index].zIndex = this.maxZIndex;
      this.maxZIndex++;
    },
    stopDragging() {
      this.dragging = false;
      this.index = null;
    },
    handleDragging(e) {
      if (this.dragging) {
        let index = this.index;
        let div = this.divs[index];
        div.translateX = e.clientX - this.offset.x;
        div.translateY = e.clientY - this.offset.y;
      }
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.handleDragging);
    document.addEventListener("mouseup", this.stopDragging);
    document.addEventListener("touchmove", this.handleDragging, { passive: false });
    document.addEventListener("touchend", this.stopDragging);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.handleDragging);
    document.removeEventListener("mouseup", this.stopDragging);
    document.removeEventListener("touchmove", this.handleDragging, { passive: false });
    document.removeEventListener("touchend", this.stopDragging);
  },
};
</script>

<style scoped>
.draggable {
  position: relative;
  z-index: 1;
  border-radius: 30px;
  overflow: hidden;
  background-size: cover;
  transition: all 100ms ease-out;
}

.draggable:active {
  box-shadow: -1px 66px 46px 0px rgba(0, 0, 0, 0.14);
  
}

.draggable-header {
  cursor: move;
  z-index: 10;
  padding: 1rem;
  height: 100%;
}

.draggable-body {
  padding: 10px;
}
</style>
