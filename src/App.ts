import { defineComponent } from 'vue';
import imageService from './image.service';
import numeral from 'numeral';

const TARGET_WIDTH = 300;

export default defineComponent({
  name: 'App',
  data() {
    return {
      publicPath: process.env.BASE_URL,
      distances: [] as number[][],
      imageUrls: [] as string[]
    };
  },
  async mounted() {
    const data = await Promise.all([...Array(6)]
      .map((_, idx) => {
        const container = this.$refs.imageContainer as HTMLElement;
        const canvas = document.createElement('canvas');
        container.append(canvas);
        return [canvas, idx] as [HTMLCanvasElement, number];
      })
      .map(async ([canvas, idx]) => {
        const grayscale = idx === 5;
        const imageData = await this.drawImage(canvas, `${this.publicPath}image${idx}.jpg`, grayscale);
        const url = await createObjectUrl(canvas);
        return { imageData, url };
      })
    );
    this.imageUrls = data.map(({ url }) => url);
    this.distances = data
      .map(({ imageData: im }) => imageService.computeHist({ im }))
      .map((h1, _, hists) => hists.map(h2 => imageService.computeDist(h1, h2)));
  },
  components: {},
  methods: {
    drawImage(canvas: HTMLCanvasElement, url: string, grayscale: boolean): Promise<ImageData> {
      return new Promise(res => {
        const image = new Image();
        image.src = url
        image.addEventListener('load', () => {
          const alpha = TARGET_WIDTH / image.width;
          image.width = TARGET_WIDTH;
          image.height = alpha * image.height;
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
          grayscale && (ctx.filter = 'grayscale(100%)');
          ctx.drawImage(image, 0, 0, image.width, image.height);
          res(ctx.getImageData(0, 0, canvas.width, canvas.height));
        });
      });
    },
    formatDistance(d: number): string {
      return numeral(d < 0.00001 ? 0 : d).format('0.00');
    }
  }
});

function createObjectUrl(canvas: HTMLCanvasElement): Promise<string> {
  return new Promise(res => {
    canvas.toBlob(d => res(URL.createObjectURL(d)))
  });
}