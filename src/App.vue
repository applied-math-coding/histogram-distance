<template>
  <div>
    <h1 class="text-center">Histogram Distance</h1>
    <h2>Images:</h2>
    <div ref="imageContainer" class="image-container mb-6"></div>

    <h2>Cross Distances:</h2>
    <div class="distances-container mb-6">
      <img
        class="mini-image top"
        :src="url"
        v-for="(url, index) in imageUrls"
        :key="url"
        :style="{ 'grid-column': index + 2 }"
      />
      <img
        class="mini-image side"
        :src="url"
        v-for="(url, index) in imageUrls"
        :key="url"
        :style="{ 'grid-row': index + 2 }"
      />
      <template v-for="(row, rowIndex) in distances" :key="rowIndex">
        <div
          v-for="(dist, colIndex) in row"
          :key="rowIndex + '' + colIndex"
          :style="{
            'grid-row': rowIndex + 2,
            'grid-column': colIndex + 2,
            '--lightness': 20 + ((80 - 20) * dist) / 2 + '%',
          }"
          class="distance-positioner"
        >
          <span>{{ formatDistance(dist) }}</span>
        </div>
      </template>
    </div>

    <h2>Histogram Image 1/2 (r-channel):</h2>
    <div ref="plotContainer"></div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
