export interface ColorHist {
  r: number[];
  g: number[];
  b: number[];
  bins: number[];
}

export class ImageService {

  computeHist({ im, nbins = 20 }: { im: ImageData; nbins?: number }): ColorHist {
    const bins = this.createBins(nbins);
    const distributions = im.data
      .reduce((prev, cur, idx) => {
        const channel = idx % 4;
        if (channel !== 3) {
          prev[channel].push(cur);
        }
        return prev;
      }, [[], [], []] as [number[], number[], number[]])
      .map(c => c.sort((a, b) => a - b))
      .map(c => this.distributeOnBins({ c, bins }));
    return {
      r: distributions[0],
      g: distributions[1],
      b: distributions[2],
      bins
    };
  }

  // c must be sorted ascending
  private distributeOnBins({ c, bins }: { c: number[]; bins: number[] }): number[] {
    const res = Array(bins.length - 1).fill(0);
    let cIdxLast = 0;
    for (let idx = 1; idx < bins.length; idx++) {
      const cIdx = c.findIndex(e => e > bins[idx]); // [ bin[cIdxLast], bin[cIdx] )
      if (cIdx === -1) {
        res[idx - 1] = (c.length - cIdxLast) / c.length; // add the rest
        break;
      }
      res[idx - 1] = (cIdx - cIdxLast) / c.length;
      cIdxLast = cIdx;
    }
    return res;
  }

  // returns [0, a, b, ..., 256] of length nbins+1
  private createBins(nbins: number): number[] {
    const res = [] as number[];
    const binWidth = Math.floor(256 / nbins);
    for (let b = 0; b <= 256; b = b + binWidth) {
      res.push(b);
    }
    res[res.length - 1] = Math.max(256, res[res.length - 1]);
    return res;
  }

  // |(1 - \int min(f_i, g_i)dx)_i |_{l_1}  l1-norm of hist-distances
  computeDist(h1: ColorHist, h2: ColorHist): number {
    return ['r', 'g', 'b']
      .map(p => this.computeHistogramDistance(
        { f: h1[p as keyof ColorHist], g: h2[p as keyof ColorHist] }
      ))
      .reduce((prev, e) => prev + e, 0);
  }

  private computeHistogramDistance({ f, g }: { f: number[], g: number[] }): number {
    return 1 - f.reduce((prev, e, idx) => prev + Math.min(e, g[idx]), 0);
  }

}

export default new ImageService();