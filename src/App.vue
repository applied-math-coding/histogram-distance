<template>
  <div>
    <div ref="imageContainer" class="image-container"></div>
    <div class="distances-container">
      <img class="mini-image" :src="url" v-for="url in imageUrls" :key="url" />
      <div v-for="(row, rowIndex) in distances" :key="rowIndex">
        <div v-for="(dist, colIndex) in row" :key="rowIndex + '' + colIndex">
          {{ formatDistance(dist) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
