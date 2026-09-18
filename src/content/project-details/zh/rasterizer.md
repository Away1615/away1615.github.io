---
projectId: rasterizer
language: zh
---

## 管线与 SIMD 优化

通过变换顶点缓存、光照预处理、Early-Z、背面剔除与边函数增量计算减少重复工作。使用 SoA 数据布局及 AVX 批量变换和八像素着色，提升数据并行度。

## 实测结果

以下来自报告表 4 的单线程管线与 SIMD 组合优化。倍率由 FPS 重新计算，不包含额外的多线程收益。

| Scene | Baseline FPS | Optimized FPS | Ratio | P99 (ms) |
| --- | ---: | ---: | ---: | ---: |
| 1 | 267.20 | 1061.76 | 3.97× | 6.17 → 1.57 |
| 2 | 120.32 | 550.48 | 4.58× | 10.37 → 2.54 |
| 3 | 79.22 | 234.61 | 2.96× | 14.76 → 5.53 |

P99 帧耗时降低约 63%–76%。这些是开发环境中的历史数据，不能视为跨硬件保证；复测需要固定场景、分辨率、编译配置与采样设置。

## 多线程取舍

线程池按屏幕块分发任务，共享只读数据，将颜色与深度写入限制在各自区域。对比线程数、块尺寸及剔除策略，观察调度与负载分布的影响；线程更多并不总是更快。

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rasterizer/tile-benchmarks.png" alt="报告中的块尺寸、线程数与剔除策略实验。" loading="lazy" />
<figcaption>报告中的块尺寸、线程数与剔除策略实验。</figcaption>
</figure>

[GitHub / README](https://github.com/Away1615/Rasterizer/tree/develop) · [Report](https://github.com/Away1615/Rasterizer/blob/develop/WM9M4.pdf)
