---
projectId: rasterizer
language: en
---

## Pipeline and SIMD optimization

Transformed-vertex caching, light pre-normalization, Early-Z, backface culling, and incremental edge functions reduce redundant work. SoA data and AVX operations batch transforms and eight-pixel shading.

## Recorded results

Historical single-thread pipeline + SIMD measurements from report Table 4. Ratios are recalculated from FPS and do not include an additional multithreading speedup.

| Scene | Baseline FPS | Optimized FPS | Ratio | P99 (ms) |
| --- | ---: | ---: | ---: | ---: |
| 1 | 267.20 | 1061.76 | 3.97× | 6.17 → 1.57 |
| 2 | 120.32 | 550.48 | 4.58× | 10.37 → 2.54 |
| 3 | 79.22 | 234.61 | 2.96× | 14.76 → 5.53 |

P99 frame time decreased by approximately 63–76%. These development-machine observations are hardware-dependent; reproduction requires fixed scene, resolution, compiler, and sampling settings.

## Parallelism tradeoffs

A thread pool dispatches screen tiles, sharing read-only inputs while separating color/depth writes. Experiments vary worker count, tile size, and culling strategy to inspect scheduling and load balance. More threads are not always faster.

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rasterizer/tile-benchmarks.png" alt="Tile-size, worker-count, and culling experiments from the report." loading="lazy" />
<figcaption>Tile-size, worker-count, and culling experiments from the report.</figcaption>
</figure>

[GitHub / README](https://github.com/Away1615/Rasterizer/tree/develop) · [Report](https://github.com/Away1615/Rasterizer/blob/develop/WM9M4.pdf)
