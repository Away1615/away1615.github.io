---
projectId: rift
language: zh
---

## 完整玩法流程

Rift 是基于 UE 5.6 的第三人称局域网合作 ARPG 原型。玩家创建或加入房间，在大厅确认模块化角色外观，进入第一关守卫正在充能的传送点，再前往首领关卡。击败首领完成本局；角色死亡后经过十秒倒计时原地复活。

核心玩法使用 C++，Blueprint 负责 UI 表现、动画设置和素材配置。报告重点是完整的战斗与关卡流程，以及可配置的遭遇生成。

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/game-loop.png" alt="报告图 1：主菜单、角色大厅、传送点防守与首领战。" loading="lazy" />
<figcaption>报告图 1：主菜单、角色大厅、传送点防守与首领战。</figcaption>
</figure>

## GAS 战斗与敌人行为

AbilityConfig 资产配置技能类、蒙太奇、伤害、命中反馈与 Gameplay Tags。连招、高速追击、闪避和格挡组织为 Gameplay Abilities，使用标签管理攻击、格挡、无敌与死亡状态。

敌人共用生命值与韧性战斗模型，韧性耗尽后进入硬直，形成输出窗口。AttributeSet 处理数值变化，EnemyCharacter 响应动画表现。行为树服务寻找附近存活玩家，通过技能系统发起攻击，再由敌人与技能配置区分攻击节奏和防御行为。

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/combat-debug.png" alt="报告图 6：玩家武器轨迹与敌人近战命中范围的调试可视化。" loading="lazy" />
<figcaption>报告图 6：玩家武器轨迹与敌人近战命中范围的调试可视化。</figcaption>
</figure>

## 预算驱动的遭遇生成

遭遇配置包含生成预算、敌人成本、权重、数量上限与生成半径。运行时筛选有效条目、按权重选择敌人、扣除成本，并在预设生成点周围寻找 NavMesh 可达位置，直到预算不足或没有有效条目。

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/encounter-settings.png" alt="报告图 3：遭遇预算与敌人池配置。" loading="lazy" />
<figcaption>报告图 3：遭遇预算与敌人池配置。</figcaption>
</figure>


<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/encounter-flow.png" alt="报告图 5：规则驱动的遭遇生成流程。" loading="lazy" />
<figcaption>报告图 5：规则驱动的遭遇生成流程。</figcaption>
</figure>

传送点按激活进度阈值触发波次，探索区域触发器采用同样的规则生成遭遇。系统在配置约束内改变敌人组合，不生成关卡几何，也不是使用 Unreal PCG 图表实现的流程。

## 换装与联机状态

头发与手臂部件先在本地预览，确认后提交最终选择，避免同步每次预览变化。

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/character-customization.png" alt="报告图 4：大厅中的模块化外观预览。" loading="lazy" />
<figcaption>报告图 4：大厅中的模块化外观预览。</figcaption>
</figure>

报告记录了两项联机问题的处理：大厅 UI 在 GameState 尚未复制完成时短间隔重试初始化；切图前将外观选择缓存在 PlayerController 中，进入玩法地图后恢复到 PlayerState。

## 测试与项目范围

开发期间通过单人 PIE 和 Listen Server 多人模式检查大厅状态、角色生成、地图切换、战斗事件与主客机 UI 反馈，并用武器轨迹和攻击范围可视化辅助调试。截图为开发过程画面，不代表已完成公网匹配、专用服务器或延迟补偿测试。

当前原型包含一个双剑职业、两张关卡与三类敌人。美术使用 Synty Polygon 等素材，技术栈包括 GAS、UMG、行为树、OnlineSubsystem 与 Motion Warping。

[源码与构建说明](https://github.com/Away1615/Rift/tree/develop) · [玩法与技术报告](https://github.com/Away1615/Rift/blob/develop/docs/Rift-Report.pdf)
