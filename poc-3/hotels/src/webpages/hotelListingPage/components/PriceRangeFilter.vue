<template>
  <DoubleRangeSlider :min="min" :max="max" @update:min="value => min = value" @update:max="value => max = value"></DoubleRangeSlider>
</template>

    <label>Min</label><input type="text" v-model="min"/>
    <label>Max</label><input type="text" v-model="max"/>
<script>


import DoubleRangeSlider from '@/components/shared/slider/DoubleRangeSlider'

export default {
  data () {
    return {
      min: 0,
      max: 10
    }
  },
  components: {
    DoubleRangeSlider
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>