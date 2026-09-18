export interface LocalizedText {
  en: string;
  zh: string;
}

export interface TechnologyTag {
  label: string;
  tone: string;
}

export interface ProjectMetadata {
  label: LocalizedText;
  value: LocalizedText;
}

export interface ProjectMedia {
  src: string;
  width: number;
  height: number;
  alt: LocalizedText;
  caption: LocalizedText;
}

export interface Project {
  id: string;
  title: string;
  detailTitle: string;
  cardLabel: LocalizedText;
  mediaClass: string;
  mediaBadge: string;
  mediaHint: LocalizedText;
  mediaLabel: LocalizedText;
  heroMedia?: ProjectMedia;
  description: LocalizedText;
  tags: TechnologyTag[];
  github?: string;
  detailType: LocalizedText;
  metadata: ProjectMetadata[];
}

export interface ExperienceItem {
  category: "work" | "education";
  period: string;
  name: LocalizedText;
  description: LocalizedText;
  tag: LocalizedText;
}

export interface SkillGroup {
  title: LocalizedText;
  tags: TechnologyTag[];
}

export function localized(en: string, zh: string): LocalizedText {
  return { en, zh };
}

export function getProjectPath(projectId: string): string {
  return `/projects/${projectId}/`;
}

export const projects: Project[] = [
{
  "id": "rift",
  "title": "Rift",
  "detailTitle": "Rift",
  "cardLabel": {
    "en": "UE5 co-op / combat systems",
    "zh": "UE5 联机 / 战斗系统"
  },
  "mediaClass": "media-rift",
  "mediaBadge": "RIFT",
  "mediaHint": {
    "en": "GAS / LAN co-op",
    "zh": "GAS / 合作战斗"
  },
  "mediaLabel": {
    "en": "Rift teleport defense gameplay",
    "zh": "Rift 传送点防守实机画面"
  },
  "heroMedia": {
    "src": "/assets/projects/rift/teleport-objective.png",
    "width": 1276,
    "height": 771,
    "alt": {
      "en": "Player defending the teleport activation objective",
      "zh": "玩家在传送点充能期间进行防守"
    },
    "caption": {
      "en": "Report Figure 2: the first-level teleport objective. Unreal Engine development capture.",
      "zh": "报告图 2：第一关传送点目标，Unreal Engine 开发实机截图。"
    }
  },
  "description": {
    "en": "A third-person co-op ARPG prototype combining GAS combat, replicated lobby flow, modular appearance, and budget-driven enemy encounters.",
    "zh": "第三人称合作 ARPG 原型，结合 GAS 战斗、联机大厅、模块化换装与预算驱动的敌人遭遇。"
  },
  "tags": [
    {
      "label": "C++",
      "tone": "ue"
    },
    {
      "label": "UE5.6",
      "tone": "ue"
    },
    {
      "label": "GAS",
      "tone": "ue"
    },
    {
      "label": "Replication",
      "tone": "ue"
    },
    {
      "label": "Behavior Tree",
      "tone": "ue"
    }
  ],
  "github": "https://github.com/Away1615/Rift/tree/develop",
  "detailType": {
    "en": "Personal multiplayer project",
    "zh": "个人联机项目"
  },
  "metadata": [
    {
      "label": {
        "en": "Engine",
        "zh": "引擎"
      },
      "value": {
        "en": "Unreal Engine 5.6",
        "zh": "Unreal Engine 5.6"
      }
    },
    {
      "label": {
        "en": "Platform",
        "zh": "平台"
      },
      "value": {
        "en": "Windows PC",
        "zh": "Windows PC"
      }
    },
    {
      "label": {
        "en": "Networking",
        "zh": "联机"
      },
      "value": {
        "en": "LAN / Listen Server",
        "zh": "LAN / Listen Server"
      }
    },
    {
      "label": {
        "en": "Focus",
        "zh": "重点"
      },
      "value": {
        "en": "Combat / configurable encounters",
        "zh": "战斗 / 可配置遭遇"
      }
    }
  ]
},
  {
    "id": "dx12",
    "title": "DX12-FPS",
    "detailTitle": "DX12-FPS",
    "cardLabel": {
      "en": "Engine architecture / rendering backend",
      "zh": "引擎架构 / 渲染后端"
    },
    "mediaClass": "media-dx12",
    "mediaBadge": "DX12-FPS",
    "mediaHint": {
      "en": "DirectX 12 renderer",
      "zh": "DirectX 12 渲染器"
    },
    "mediaLabel": {
      "en": "DX12-FPS gameplay media",
      "zh": "DX12-FPS 游戏画面"
    },
    "description": {
      "en": "A first-person shooter demo built on a custom DirectX 12 renderer with data-driven levels, component-based gameplay, skeletal meshes, and GPU instancing.",
      "zh": "基于自研 DirectX 12 渲染器构建的第一人称射击 Demo，支持数据驱动关卡、组件化玩法、骨骼网格与 GPU 实例化。"
    },
    "tags": [
      {
        "label": "C++",
        "tone": "cpp"
      },
      {
        "label": "DirectX 12",
        "tone": "dx"
      },
      {
        "label": "HLSL",
        "tone": "hlsl"
      },
      {
        "label": "Solo",
        "tone": "solo"
      }
    ],
    "github": "https://github.com/Away1615/DX12-FPS/tree/develop",
    "detailType": {
      "en": "Project",
      "zh": "项目"
    },
    "metadata": [
      {
        "label": {
          "en": "Role",
          "zh": "角色"
        },
        "value": {
          "en": "Solo Programmer",
          "zh": "独立程序员"
        }
      },
      {
        "label": {
          "en": "Engine",
          "zh": "引擎"
        },
        "value": {
          "en": "Custom DirectX 12 Renderer",
          "zh": "自研 DirectX 12 渲染器"
        }
      },
      {
        "label": {
          "en": "Language",
          "zh": "语言"
        },
        "value": {
          "en": "C++ / HLSL",
          "zh": "C++ / HLSL"
        }
      },
      {
        "label": {
          "en": "Platform",
          "zh": "平台"
        },
        "value": {
          "en": "Windows PC",
          "zh": "Windows PC"
        }
      }
    ],
    "heroMedia": {
      "src": "/assets/projects/dx12/fps-scene.png",
      "width": 1533,
      "height": 897,
      "alt": {
        "en": "FPS scene rendered by the custom DirectX 12 engine",
        "zh": "自研 DirectX 12 引擎中的 FPS 场景"
      },
      "caption": {
        "en": "First-person weapon, instanced vegetation, and point lighting. Capture from the project report.",
        "zh": "第一人称武器、植被实例与点光源。画面来自项目报告。"
      }
    }
  },
  {
    "id": "raytracing",
    "title": "Ray Tracing Renderer",
    "detailTitle": "Ray Tracing Renderer",
    "cardLabel": {
      "en": "Light transport / material sampling",
      "zh": "光传输 / 材质采样"
    },
    "mediaClass": "media-raytracing",
    "mediaBadge": "Ray Tracing Renderer",
    "mediaHint": {
      "en": "Light transport / material sampling",
      "zh": "光传输 / 材质采样"
    },
    "mediaLabel": {
      "en": "Kitchen path-traced at 128 SPP with OIDN",
      "zh": "128 SPP 路径追踪与 OIDN 降噪后的厨房场景"
    },
    "heroMedia": {
      "src": "/assets/projects/raytracing/kitchen-PathTrace-128-denoised.png",
      "width": 1280,
      "height": 720,
      "alt": {
        "en": "Kitchen path-traced at 128 SPP with OIDN",
        "zh": "128 SPP 路径追踪与 OIDN 降噪后的厨房场景"
      },
      "caption": {
        "en": "Kitchen · path tracing · 128 SPP · OIDN. Existing renderer output.",
        "zh": "厨房场景 · 路径追踪 · 128 SPP · OIDN。项目实际输出。"
      }
    },
    "description": {
      "en": "A CPU renderer with BSDF materials, three global-illumination methods, SAH BVH traversal, and OIDN denoising.",
      "zh": "CPU 光线追踪渲染器，支持 BSDF 材质、三种全局光照方法、SAH BVH 求交与 OIDN 降噪。"
    },
    "tags": [
      {
        "label": "C++",
        "tone": "cpp"
      },
      {
        "label": "BSDF / BVH",
        "tone": "cpp"
      },
      {
        "label": "NEE / MIS",
        "tone": "cpp"
      },
      {
        "label": "OIDN",
        "tone": "cpp"
      }
    ],
    "github": "https://github.com/Away1615/RayTracing/tree/develop",
    "detailType": {
      "en": "Technical project",
      "zh": "技术项目"
    },
    "metadata": [
      {
        "label": {
          "en": "Focus",
          "zh": "方向"
        },
        "value": {
          "en": "Light transport / material sampling",
          "zh": "光传输 / 材质采样"
        }
      },
      {
        "label": {
          "en": "Platform",
          "zh": "平台"
        },
        "value": {
          "en": "Windows / C++",
          "zh": "Windows / C++"
        }
      },
      {
        "label": {
          "en": "Context",
          "zh": "背景"
        },
        "value": {
          "en": "Games Engineering coursework",
          "zh": "游戏工程课程项目"
        }
      }
    ]
  },
  {
    "id": "rasterizer",
    "title": "Software Rasterizer",
    "detailTitle": "Optimized Software Rasterizer",
    "cardLabel": {
      "en": "CPU rendering performance",
      "zh": "CPU 渲染性能优化"
    },
    "mediaClass": "media-rasterizer",
    "mediaBadge": "2.96–4.58×",
    "mediaHint": {
      "en": "SIMD / multithreading",
      "zh": "SIMD / 多线程"
    },
    "mediaLabel": {
      "en": "Rasterizer benchmark media",
      "zh": "光栅器性能测试画面"
    },
    "description": {
      "en": "CPU rasterizer optimization using pipeline improvements, eight-pixel SIMD shading, tile scheduling, and a custom thread pool.",
      "zh": "通过流水线改进、八像素 SIMD 着色、分块调度和自研线程池优化 CPU 光栅器。"
    },
    "tags": [
      {
        "label": "C++",
        "tone": "cpp"
      },
      {
        "label": "AVX SIMD",
        "tone": "simd"
      },
      {
        "label": "Multithreading",
        "tone": "thread"
      }
    ],
    "github": "https://github.com/Away1615/Rasterizer/tree/develop",
    "detailType": {
      "en": "Technical project",
      "zh": "技术项目"
    },
    "metadata": [
      {
        "label": {
          "en": "Focus",
          "zh": "重点"
        },
        "value": {
          "en": "CPU Rendering Performance",
          "zh": "CPU 渲染性能"
        }
      },
      {
        "label": {
          "en": "Language",
          "zh": "语言"
        },
        "value": {
          "en": "C++",
          "zh": "C++"
        }
      },
      {
        "label": {
          "en": "Optimization",
          "zh": "优化方式"
        },
        "value": {
          "en": "AVX SIMD / Multithreading",
          "zh": "AVX SIMD / Multithreading"
        }
      },
      {
        "label": {
          "en": "Result",
          "zh": "结果"
        },
        "value": {
          "en": "2.96–4.58× baseline FPS (pipeline + SIMD)",
          "zh": "基线 FPS 的 2.96–4.58 倍（管线 + SIMD）"
        }
      }
    ],
    "heroMedia": {
      "src": "/assets/projects/rasterizer/benchmark.svg",
      "width": 1200,
      "height": 720,
      "alt": {
        "en": "Baseline and optimized FPS for three scenes",
        "zh": "三个场景优化前后的 FPS 对比"
      },
      "caption": {
        "en": "Historical single-thread pipeline + SIMD measurements. Ratios are calculated from recorded FPS.",
        "zh": "历史单线程管线与 SIMD 组合优化测试，倍率按记录的 FPS 计算。"
      }
    }
  },
  {
    "id": "vehicle",
    "title": "SkyFire Uprising",
    "detailTitle": "SkyFire Uprising",
    "cardLabel": {
      "en": "Team project / technical VFX",
      "zh": "团队项目 / 技术特效"
    },
    "mediaClass": "media-vehicle",
    "mediaBadge": "SKYFIRE",
    "mediaHint": {
      "en": "Weather / gameplay VFX",
      "zh": "天气 / 玩法特效"
    },
    "mediaLabel": {
      "en": "SkyFire Uprising gameplay VFX overview",
      "zh": "SkyFire Uprising 玩法特效总览"
    },
    "heroMedia": {
      "src": "/assets/projects/skyfire-uprising/overview.webp",
      "width": 1800,
      "height": 1331,
      "alt": {
        "en": "A four-panel overview of rain, speed, collision, and combat effects in SkyFire Uprising.",
        "zh": "SkyFire Uprising 中降雨、高速、碰撞与战斗特效的四画面总览。"
      },
      "caption": {
        "en": "Gameplay VFX overview: dynamic rain and lightning, speed feedback, collision sparks, and combat atmosphere.",
        "zh": "玩法特效总览：动态降雨与闪电、高速反馈、碰撞火花及战斗氛围。"
      }
    },
    "description": {
      "en": "A six-person UE5.4 vehicle-combat project. I owned the dynamic weather and gameplay VFX stack, spanning Blueprint orchestration, Niagara and materials, and a reusable C++ particle framework.",
      "zh": "六人协作开发的 UE5.4 载具战斗项目。我负责动态天气与玩法特效体系，包括 Blueprint 调度、Niagara 与材质，以及可复用的 C++ 粒子框架。"
    },
    "tags": [
      {
        "label": "UE5.4",
        "tone": "ue"
      },
      {
        "label": "C++",
        "tone": "cpp"
      },
      {
        "label": "Blueprint",
        "tone": "blueprint"
      },
      {
        "label": "Niagara",
        "tone": "niagara"
      }
    ],
    "detailType": {
      "en": "Team project / Technical VFX",
      "zh": "团队项目 / 技术特效"
    },
    "metadata": [
      {
        "label": {
          "en": "Role",
          "zh": "角色"
        },
        "value": {
          "en": "Gameplay VFX / Technical VFX Programmer",
          "zh": "玩法特效 / 技术特效程序员"
        }
      },
      {
        "label": {
          "en": "Team",
          "zh": "团队"
        },
        "value": {
          "en": "6 people",
          "zh": "6 人"
        }
      },
      {
        "label": {
          "en": "Engine",
          "zh": "引擎"
        },
        "value": {
          "en": "Unreal Engine 5.4",
          "zh": "Unreal Engine 5.4"
        }
      },
      {
        "label": {
          "en": "Scope",
          "zh": "技术范围"
        },
        "value": {
          "en": "C++, Blueprint, Niagara, Materials",
          "zh": "C++, Blueprint, Niagara, Materials"
        }
      }
    ]
  },
  {
    "id": "survivors-like",
    "title": "Vampire Survivors Like",
    "detailTitle": "Vampire Survivors Like",
    "cardLabel": {
      "en": "C++ gameplay architecture / state persistence",
      "zh": "C++ 玩法架构 / 状态持久化"
    },
    "mediaClass": "media-survivors",
    "mediaBadge": "SURVIVE",
    "mediaHint": {
      "en": "C++17 survival action",
      "zh": "C++17 生存动作游戏"
    },
    "mediaLabel": {
      "en": "Vampire Survivors Like gameplay media",
      "zh": "Vampire Survivors Like 游戏画面"
    },
    "heroMedia": {
      "src": "/assets/projects/vampire-survivors-like/gameplay-infinite.png",
      "width": 1281,
      "height": 720,
      "alt": {
        "en": "Infinite-map gameplay showing the player, a heavy enemy, automatic fire, a power-up, and coordinate-hashed terrain.",
        "zh": "无限地图实机画面，展示玩家、重型敌人、自动射击、增益道具与坐标哈希生成的地形。"
      },
      "caption": {
        "en": "Live Release x64 capture: seeded world-coordinate sampling, camera-relative rendering, enemy pressure, and nearest-target automatic fire in infinite mode.",
        "zh": "Release x64 实机截图：无限模式同时展示基于种子的世界坐标采样、相机相对渲染、敌人压力与最近目标自动射击。"
      }
    },
    "description": {
      "en": "A C++17 survival-action game built around interface-driven gameplay systems, pooled entity lifecycles, deterministic infinite-map sampling, and versioned snapshot persistence.",
      "zh": "使用 C++17 开发的生存动作游戏，围绕接口驱动的玩法系统、池化实体生命周期、确定性无限地图采样与版本化快照持久化构建。"
    },
    "tags": [
      {
        "label": "C++17",
        "tone": "cpp"
      },
      {
        "label": "Gameplay Systems",
        "tone": "gas"
      },
      {
        "label": "Object Pooling",
        "tone": "thread"
      },
      {
        "label": "State Persistence",
        "tone": "net"
      }
    ],
    "github": "https://github.com/Away1615/Vampire-Survivors-Like/tree/develop",
    "detailType": {
      "en": "Gameplay project",
      "zh": "玩法项目"
    },
    "metadata": [
      {
        "label": {
          "en": "Role",
          "zh": "角色"
        },
        "value": {
          "en": "Gameplay / Systems Programmer",
          "zh": "玩法 / 系统程序员"
        }
      },
      {
        "label": {
          "en": "Language",
          "zh": "语言"
        },
        "value": {
          "en": "C++17",
          "zh": "C++17"
        }
      },
      {
        "label": {
          "en": "Framework",
          "zh": "框架"
        },
        "value": {
          "en": "GamesEngineeringBase (Direct3D 11)",
          "zh": "GamesEngineeringBase (Direct3D 11)"
        }
      },
      {
        "label": {
          "en": "Platform",
          "zh": "平台"
        },
        "value": {
          "en": "Windows PC",
          "zh": "Windows PC"
        }
      },
      {
        "label": {
          "en": "Context",
          "zh": "项目背景"
        },
        "value": {
          "en": "MSc Games Engineering coursework",
          "zh": "游戏工程硕士课程项目"
        }
      }
    ]
  },
  {
    "id": "chatroom",
    "title": "TCP Chat Room",
    "detailTitle": "TCP Chat Room",
    "cardLabel": {
      "en": "Networking / message-driven systems",
      "zh": "网络通信 / 消息驱动系统"
    },
    "mediaClass": "media-chatroom",
    "mediaBadge": "TCP Chat Room",
    "mediaHint": {
      "en": "Networking / message-driven systems",
      "zh": "网络通信 / 消息驱动系统"
    },
    "mediaLabel": {
      "en": "Two chat clients with synchronized presence updates",
      "zh": "两个聊天客户端与在线状态更新"
    },
    "heroMedia": {
      "src": "/assets/projects/chatroom/group-chat.png",
      "width": 1899,
      "height": 674,
      "alt": {
        "en": "Two chat clients with synchronized presence updates",
        "zh": "两个聊天客户端与在线状态更新"
      },
      "caption": {
        "en": "Multiple clients exchanging messages and receiving join/leave events. Report capture.",
        "zh": "多客户端消息与加入、离开通知，截图来自项目报告。"
      }
    },
    "description": {
      "en": "A multithreaded C++ chat application with framed TCP messages, group/private conversations, and an ImGui client.",
      "zh": "多线程 C++ 聊天应用，包含 TCP 消息分帧、群聊与私聊，以及 ImGui 客户端。"
    },
    "tags": [
      {
        "label": "C++20",
        "tone": "cpp"
      },
      {
        "label": "TCP / Winsock",
        "tone": "cpp"
      },
      {
        "label": "Multithreading",
        "tone": "cpp"
      },
      {
        "label": "ImGui",
        "tone": "cpp"
      }
    ],
    "github": "https://github.com/Away1615/ChatRoom/tree/develop",
    "detailType": {
      "en": "Technical project",
      "zh": "技术项目"
    },
    "metadata": [
      {
        "label": {
          "en": "Focus",
          "zh": "方向"
        },
        "value": {
          "en": "Networking / message-driven systems",
          "zh": "网络通信 / 消息驱动系统"
        }
      },
      {
        "label": {
          "en": "Platform",
          "zh": "平台"
        },
        "value": {
          "en": "Windows / C++",
          "zh": "Windows / C++"
        }
      },
      {
        "label": {
          "en": "Context",
          "zh": "背景"
        },
        "value": {
          "en": "Games Engineering coursework",
          "zh": "游戏工程课程项目"
        }
      }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    "category": "education",
    "period": "2025.09 – 2027.01",
    "name": {
      "en": "University of Warwick",
      "zh": "华威大学"
    },
    "description": {
      "en": "MSc Games Engineering, WMG Excellence Scholarship.",
      "zh": "游戏工程硕士，WMG Excellence Scholarship。"
    },
    "tag": {
      "en": "Graphics / Engine / UE5",
      "zh": "图形 / 引擎 / UE5"
    }
  },
  {
    "category": "work",
    "period": "2021 - 2024",
    "name": {
      "en": "ByteDance",
      "zh": "字节跳动"
    },
    "description": {
      "en": "Three years of client engineering at ByteDance: shared components, cross-team platform capabilities, Feed modularization, and a Rust SDK used by Android, PC, and iOS.",
      "zh": "三年字节跳动客户端研发经历，涵盖通用组件、跨团队平台能力、Feed 模块化，以及 Android、PC、iOS 共用的 Rust SDK。"
    },
    "tag": {
      "en": "Swift / Client Architecture",
      "zh": "Swift / 客户端架构"
    }
  },
  {
    "category": "education",
    "period": "2017 - 2021",
    "name": {
      "en": "Wuhan University of Technology",
      "zh": "武汉理工大学"
    },
    "description": {
      "en": "BSc Software Engineering.",
      "zh": "软件工程学士。"
    },
    "tag": {
      "en": "Data Structures / Operating Systems / Computer Organization / Software Architecture",
      "zh": "数据结构 / 操作系统 / 计算机组成原理 / 软件系统设计与体系结构"
    }
  }
];

export const skillGroups: SkillGroup[] = [
  {
    "title": {
      "en": "Languages",
      "zh": "编程语言"
    },
    "tags": [
      {
        "label": "C++",
        "tone": "cpp"
      },
      {
        "label": "Swift",
        "tone": "swift"
      },
      {
        "label": "Python",
        "tone": "python"
      },
      {
        "label": "HLSL",
        "tone": "hlsl"
      }
    ]
  },
  {
    "title": {
      "en": "Gameplay",
      "zh": "玩法系统"
    },
    "tags": [
      {
        "label": "Unreal Engine 5",
        "tone": "ue"
      },
      {
        "label": "GAS",
        "tone": "gas"
      },
      {
        "label": "UMG",
        "tone": "ue"
      },
      {
        "label": "Replication",
        "tone": "net"
      },
      {
        "label": "Behavior Tree",
        "tone": "team"
      }
    ]
  },
  {
    "title": {
      "en": "Rendering",
      "zh": "图形渲染"
    },
    "tags": [
      {
        "label": "DirectX 12",
        "tone": "dx"
      },
      {
        "label": "Rasterization",
        "tone": "simd"
      },
      {
        "label": "Ray Tracing",
        "tone": "blueprint"
      },
      {
        "label": "BVH",
        "tone": "thread"
      }
    ]
  },
  {
    "title": {
      "en": "Performance",
      "zh": "性能优化"
    },
    "tags": [
      {
        "label": "SIMD",
        "tone": "simd"
      },
      {
        "label": "Multithreading",
        "tone": "thread"
      },
      {
        "label": "P99 Analysis",
        "tone": "solo"
      },
      {
        "label": "Profiling",
        "tone": "team"
      }
    ]
  }
];

export const featuredProjects = projects.filter((project) => ["rift", "dx12", "raytracing", "rasterizer", "vehicle"].includes(project.id));
