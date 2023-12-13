<template>
  <div class="street-sign">
    <!-- <div class="road"></div> -->
    <div class="lined thick" v-bind:class="position">
      <span @click="goContent(addressId)">{{ paramValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import to from 'await-to-js'

const props = defineProps<{ initialParam: string, position: string, id: number }>()

const paramValue = ref(props.initialParam)
const position = ref(props.position)
const addressId = ref(props.id)


console.log("paramValue==", paramValue)

</script>

<style scoped lang="scss">
.street-sign {
    position: relative;
    width: 100%;
    min-width: 600px;
    height: 60px;
  /* 样式定义 */
  .thick {
    width: 60px;
    align-self: center;
    background: transparent;
    padding: 10px;
    margin: 0 15px;
    transition: all .5s ease;
    color: #cea568;//#f0a354;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    outline: none;
    box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, .2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    &.dotted.thick {
      border: dotted 5px #cea568;
    }

    &:hover {
      box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, .3);
    }
  }

  .lined.thick {
    border: solid 3px #cea568;
  }
  .left {
    position: absolute;
    left: 30px;
    top: 0;
  }
  .left-center {
    position: absolute;
    left: calc(50% - 103px);
    top: 0;
  }
  .left-center .road {

  }
  .right-center {
    position: absolute;
    right: calc(50% - 103px);
    top: 0;
  }
  .right {
    position: absolute;
    right: 30px;
    top: 0;
  }
}</style>