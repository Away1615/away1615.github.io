---
projectId: raytracing
language: en
---

## Materials and light transport

A common BSDF evaluation, sampling, and PDF interface supports diffuse, mirror, glass, and GGX conductor materials. Three rendering modes explore path tracing, instant radiosity, and light tracing. The path tracer combines NEE, MIS, and Russian roulette for sampling and path termination.

<figure class="project-detail-figure">
<img src="/assets/projects/raytracing/MaterialsScene-PathTrace-128-denoised.png" alt="Material study at 128 SPP with OIDN denoising." loading="lazy" />
<figcaption>Material study at 128 SPP with OIDN denoising.</figcaption>
</figure>

## Sampling, traversal, and parallelism

- Environment-map importance sampling weights luminance by spherical area and converts directional PDFs.
- A binned SAH BVH supports closest-hit traversal and early-out shadow queries.
- Screen tiles and atomic task distribution organize CPU parallel rendering.

## Denoising comparison

Both images use 128 SPP: raw accumulation followed by OIDN with albedo and normal auxiliary buffers. Denoising reduces visible noise but is not a substitute for a high-sample reference.
<div class="project-detail-gallery">
<figure class="project-detail-figure">
<img src="/assets/projects/raytracing/cornell-box-PathTrace-128.png" alt="Raw path tracing · 128 SPP" loading="lazy" />
<figcaption>Raw path tracing · 128 SPP</figcaption>
</figure>

<figure class="project-detail-figure">
<img src="/assets/projects/raytracing/cornell-box-PathTrace-128-denoised.png" alt="OIDN denoising · 128 SPP" loading="lazy" />
<figcaption>OIDN denoising · 128 SPP</figcaption>
</figure>
</div>

## Code and documentation

Implemented within the course framework; scene assets and Intel OIDN are external dependencies.

[GitHub / README](https://github.com/Away1615/RayTracing/tree/develop) · [Report](https://github.com/Away1615/RayTracing/blob/develop/WM9M3.pdf)
