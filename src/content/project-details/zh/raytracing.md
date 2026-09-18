---
projectId: raytracing
language: zh
---

## 材质与光传输

统一 BSDF 求值、采样与概率密度接口，支持漫反射、镜面、玻璃和 GGX 金属材质。实现 Path Tracing、Instant Radiosity 与 Light Tracing；路径追踪结合 NEE、MIS 与俄罗斯轮盘赌处理光照采样和路径终止。

<figure class="project-detail-figure">
<img src="/assets/projects/raytracing/MaterialsScene-PathTrace-128-denoised.png" alt="128 SPP 材质测试，使用 OIDN 降噪。" loading="lazy" />
<figcaption>128 SPP 材质测试，使用 OIDN 降噪。</figcaption>
</figure>

## 采样、求交与并行

- 环境贴图按亮度与球面面积权重构建采样分布，并完成方向概率密度转换。
- 分桶 SAH BVH 支持最近交点查询与遮挡提前退出，减少无效求交。
- 屏幕分块与原子任务分配组织多线程渲染。

## 降噪对比

同为 128 SPP，分别展示原始采样与 OIDN 输出。反照率和法线辅助缓冲参与降噪；降噪结果不等同于高采样参考真值。
<div class="project-detail-gallery">
<figure class="project-detail-figure">
<img src="/assets/projects/raytracing/cornell-box-PathTrace-128.png" alt="原始路径追踪 · 128 SPP" loading="lazy" />
<figcaption>原始路径追踪 · 128 SPP</figcaption>
</figure>

<figure class="project-detail-figure">
<img src="/assets/projects/raytracing/cornell-box-PathTrace-128-denoised.png" alt="OIDN 降噪 · 128 SPP" loading="lazy" />
<figcaption>OIDN 降噪 · 128 SPP</figcaption>
</figure>
</div>

## 代码与文档

基于课程框架实现，场景素材及 Intel OIDN 为外部依赖。

[GitHub / README](https://github.com/Away1615/RayTracing/tree/develop) · [Report](https://github.com/Away1615/RayTracing/blob/develop/WM9M3.pdf)
