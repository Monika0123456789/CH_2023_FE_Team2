<template>
  <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);">
    <h2 style="margin-top: 0;">Hotel Type</h2>

    <div>
    <label>
      <input
        type="checkbox"
        value="All"
        :checked="selectedTypes.length === uniqueTypes.length"
        @change="handleCheckboxChange('All')"
      />
      All
    </label>
  </div>

    <div v-for="type in uniqueTypes" :key="type">
      <label>
        <input
          type="checkbox"
          :value="type"
          :checked="selectedTypes.includes(type)"
          @change="handleCheckboxChange(type)"
        />
        {{ type }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelTypeFilter',
  data(){
    return{
    selectedType:"",}
  },
  props: {
    hotels: Array,
    selectedTypes: Array,
  },
  computed: {
    uniqueTypes() {
      return Array.from(new Set(this.hotels.map(hotel => hotel.type)));
    },
  },
  methods: {
    handleCheckboxChange(type) {
      let updatedSelectedTypes;

      if (type === 'All') {
        updatedSelectedTypes = this.selectedTypes.length === this.uniqueTypes.length ? [] : [...this.uniqueTypes];
      } else {
        if (this.selectedTypes.includes(type)) {
          updatedSelectedTypes = this.selectedTypes.filter(selectedType => selectedType !== type);
        } else {
          updatedSelectedTypes = [...this.selectedTypes, type];
        }
      }

      this.$emit('typeChange', updatedSelectedTypes);
    },
    
  },
};
</script>

<style scoped>
</style>
