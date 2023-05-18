<template>
  <div class="eyes">
    <div class="eyelid">
      <div class="eye">
        <div class="iris"></div>
      </div>
    </div>
    <span class="nose"></span>
    <div class="eyelid">
      <div class="eye">
        <div class="iris"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.moveIrises = this.moveIrises.bind(this); // Bind the method to the component instance
    document.addEventListener('mousemove', this.moveIrises);
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.moveIrises);
  },
  methods: {
    moveIrises(e) {
      const box = document.body.getBoundingClientRect();
      const irises = this.$el.querySelectorAll('.eye .iris'); // Access $el here when the component is mounted
      irises.forEach(iris => {
        const eye = iris.parentNode.getBoundingClientRect();
        const left = eye.x + eye.width / 2;
        const top = eye.y + eye.height / 2;
        const delta = {
          x: e.x - left,
          y: e.y - top,
          left: Math.abs(box.left - left),
          right: Math.abs(box.right - left),
          top: Math.abs(box.top - top),
          bottom: Math.abs(box.bottom - top)
        };
        const translate = {
          x: this.scale(delta.x, Math.max(delta.left, delta.right) * -1, Math.max(delta.left, delta.right), -67.5, -32.5),
          y: this.scale(delta.y, Math.max(delta.top, delta.bottom) * -1, Math.max(delta.top, delta.bottom), -67.5, -32.5)
        };
        iris.style.transform = `translate(${translate.x}%,${translate.y}%)`;
      });
    },
    scale(num, in_min, in_max, out_min, out_max) {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
  }
};
</script>

  
<style scoped>
.eyes {
    /* background-color: var(--black); */
    /* padding: .5vw; */
    
    box-sizing: border-box;
    border-radius: 50vw;
    position: relative;
    width: fit-content;
    height: fit-content;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    cursor: default;

    .eyelid {
        background-color: var(--white);
        position: relative;
        border: 2px solid black;
        border-radius: 50%;
        overflow: hidden;

        &:before,
        &:after {
            content: '';
            display: inline-block;
            position: absolute;

            width: 100%;
            height: 100%;
            z-index: 1;
            transition: height .3s ease;
        }

    }

    .eye {
        position: relative;
        display: inline-block;
        height: 3vw;
        width: 2.5vw;
        background: white;
        border-radius: 50%;


        &:after,
        .iris,
        .iris:after {
            content: '';
            display: inline-block;
            border-radius: 50%;
            position: absolute;
            
        }

        .iris,
        .iris:after {

            top: 50%;
            left: 50%;
        }

        .iris {
            height: 10vw;
            width: 6vw;
            background: var(--white);
            transform: translate(-50%, -50%);

            &:after {
                background-color: black;
                width: 2vw;
                height: 2vw;
                transform: inherit;
            }
        }
    }
}

.nose {
    width: .5vw;
}</style>