<template>
  <div class="garage">
    <div class="door">
      <svg version="1.1" id="door" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px" y="0px" viewBox="0 0 149 88"
           style="enable-background:new 0 0 149 88;" xml:space="preserve" :class="{open:isOpen}">
            <rect class="handle" width="149" height="87.8"/>
            <rect x="3" y="2"  width="143" height="6"/>
            <rect x="3" y="10" width="143" height="6"/>
            <rect x="3" y="18" width="143" height="6"/>
            <rect x="3" y="26" width="143" height="6"/>
            <rect x="3" y="34" width="143" height="6"/>
            <rect x="3" y="42" width="143" height="6"/>
            <rect x="3" y="50" width="143" height="6"/>
            <rect x="3" y="58" width="143" height="6"/>
            <rect x="3" y="66" width="143" height="6"/>
            <rect x="3" y="74" width="143" height="6"/>
            <rect x="3" y="82" width="143" height="6"/>
            <rect x="70.5" y="85" class="handle" width="8.2" height="1"/>
      </svg>
    </div>
    <svg version="1.1" id="garage" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         x="0px" y="0px" viewBox="0 0 232.2 143.6"
         style="enable-background:new 0 0 232.2 143.6;" xml:space="preserve">
            <rect id="garage_house" x="-0.4" y="0.1" width="233" height="23"/>
            <path id="garage_outside" d="M42.5,143.6c-10.7,0-20.8,0-31.4,0c0-38.3,0.2-76.2,0.2-115c70.3,0,140.9,0,211.9,0
               c0,38.1-0.2,76.1-0.2,114.8c-10,0-20.2,0-31.1,0c0-29.3,0.4-58,0.4-87.8c-50,0-99.4,0-149.4,0C42.9,85.1,42.5,113.9,42.5,143.6z"/>
            <path id="jeep_lower" d="M152.3,86.1L150,99.5c-0.3,1.9-2.1,5.4-6.5,5.4H92.4c-1.9,0-5.7-1.1-6.5-5.4l-2.4-13.3l-12.9,1.4v8.1h6.7
                v5.3h-1.9c0,0-4.8-0.3-4.8,4.5V139c0,0,0,4.5,4.8,4.5H82c0,0,4.8,0.3,4.8-4.5v-12.9h33.8c0,0,2.9,2.7,6.2,2.8
                c5.2,0.2,7.7-3.9,7.7-3.9l14.5,0.1l0.2,14c0,0,0.7,4.5,5.5,4.5h5.8c0,0,4.8,0.3,4.8-4.5v-33.5c0,0,0-4.5-4.8-4.5h-1.9l0.1-5.3h6.7
                v-8.1L152.3,86.1z"/>
            <path id="jeep_upper" d="M156.5,82.7l0-9.9h-6.1v-9c0-3.3-2.7-6-6-6H91.8c-3.3,0-6,2.7-6,6v9l-5.9,0l0,10l5.4,0c0,0.6,2.8,16,2.8,16
                c0.7,4.1,4.7,4.1,4.9,4.1h49.9c4.1,0,4.9-3.9,4.9-4.1c0,0,2.8-15.7,2.8-16L156.5,82.7L156.5,82.7z M130,77.6
                c0.6-1.8,2.3-3.1,4.3-3.1c2,0,3.7,1.3,4.3,3.1H130z M89.6,63.7c0-1.2,1-2.2,2.2-2.2h52.6c1.2,0,2.2,1,2.2,2.2v13.9h-3.8
                c-0.7-4.1-4.2-7.2-8.5-7.2c-4.3,0-7.8,3.1-8.5,7.2h-13.8v-3.3c0,0,0-1.6-1.6-1.6h-11c0,0-1.6,0-1.6,1.6v3.3h-8.2V63.7z M96,93.5
                c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8c2.6,0,4.8,2.1,4.8,4.8C100.8,91.3,98.6,93.5,96,93.5L96,93.5z M139.7,93.5
                c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8c2.6,0,4.8,2.1,4.8,4.8C144.5,91.3,142.3,93.5,139.7,93.5L139.7,93.5z M107.7,99.2
                h-3.5V84.5h3.5V99.2z M113.7,99.2h-3.5V84.5h3.5V99.2z M119.7,99.2h-3.5V84.5h3.5V99.2z M125.6,99.2h-3.5V84.5h3.5V99.2z
                 M131.7,99.2h-3.5V84.5h3.5V99.2z"/>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'DoorImage',
    props: {
      status: {
        type: String,
        required: true,
        default: 'closed'
      }
    },
    computed: {
      isOpen () {
        return this.status === 'open'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";

  .garage {
    width: 385px;
    margin-top: 20px;
    position: relative;
  }

  .garage #jeep_lower, .garage #jeep_upper {
    fill:  md-get-palette-color(grey, 900)
  }

  .door {
    position: absolute;
    width: 247px;
    left: 71px;
    top: 93px;
    overflow: hidden;
    height: 153px;
  }

  .door svg {
    top: -1px;
    position: absolute;
    -webkit-transition-timing-function: linear; /* Safari and Chrome */
    transition-timing-function: linear;
    -webkit-transition: top 13s, -webkit-transform 13s;
    transition: top 13s, -webkit-transform 13s;
  }

  .door svg.open {
    top: -147px;
  }

  svg path, svg rect {
    fill: md-get-palette-color(orange, 700)
  }

  .door .handle {
    fill: #FFFFFF;
  }

</style>