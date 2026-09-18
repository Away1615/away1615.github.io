---
projectId: rift
language: en
---

## Playable loop

Rift is a UE 5.6 third-person LAN co-op ARPG prototype. Players create or join a room, confirm a modular character in the lobby, defend a charging teleport in the first level, and travel to a boss encounter. Defeating the boss completes the run; player death uses a ten-second respawn countdown.

Core gameplay uses C++. Blueprints handle UI presentation, animation setup, and asset configuration. The report's focus is a complete combat/progression loop and configurable encounters.

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/game-loop.png" alt="Report Figure 1: main menu, lobby customization, teleport defense, and boss encounter." loading="lazy" />
<figcaption>Report Figure 1: main menu, lobby customization, teleport defense, and boss encounter.</figcaption>
</figure>

## GAS combat and enemy behavior

AbilityConfig assets describe ability classes, montages, damage, hit feedback, and Gameplay Tags. Combo attacks, a high-speed follow-up mode, dodge, and guard are organized as Gameplay Abilities; tags control attacking, blocking, invulnerability, and death states.

Health and poise form a shared enemy combat model. Breaking poise creates a stagger opportunity. Attribute sets update values while enemy characters handle reactions. Behavior Tree services select a nearby living player and trigger attacks through abilities, with enemy configurations varying pressure and defensive behavior.

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/combat-debug.png" alt="Report Figure 6: player weapon traces and enemy melee hit volumes during debugging." loading="lazy" />
<figcaption>Report Figure 6: player weapon traces and enemy melee hit volumes during debugging.</figcaption>
</figure>

## Budget-driven encounters

Encounter settings define spawn budget, enemy cost, weight, maximum count, and spawn radius. The runtime filters eligible entries, selects by weight, deducts cost, and samples reachable NavMesh positions near authored spawn points. It stops when no affordable/valid entry remains.

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/encounter-settings.png" alt="Report Figure 3: encounter budget and weighted enemy-pool configuration." loading="lazy" />
<figcaption>Report Figure 3: encounter budget and weighted enemy-pool configuration.</figcaption>
</figure>


<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/encounter-flow.png" alt="Report Figure 5: the rule-based encounter-generation flow." loading="lazy" />
<figcaption>Report Figure 5: the rule-based encounter-generation flow.</figcaption>
</figure>

Teleport waves are triggered at activation-progress thresholds; exploration encounters use the same rule-based approach. The system varies enemy composition within configured constraints, rather than generating level geometry. It is not an Unreal PCG graph workflow.

## Appearance and multiplayer state

Hair and arm choices preview locally. The final selection is submitted on confirmation, avoiding synchronization of every intermediate preview.

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/rift/character-customization.png" alt="Report Figure 4: modular appearance selection in the lobby." loading="lazy" />
<figcaption>Report Figure 4: modular appearance selection in the lobby.</figcaption>
</figure>

The report records two practical multiplayer fixes: retrying lobby UI initialization until the replicated GameState is ready, and caching appearance in PlayerController before travel so it can be restored to PlayerState in gameplay.

## Testing and project scope

Development testing used single-player PIE and listen-server multiplayer to check lobby state, spawning, map travel, combat events, and UI feedback on host and clients. Weapon traces and enemy attack volumes were visualized for debugging. The screenshots show development sessions; they do not establish Internet matchmaking, dedicated-server support, or latency-compensation testing.

The current prototype has one dual-sword class, two levels, and three enemy types. Art assets include Synty Polygon packs; the project uses GAS, UMG, Behavior Trees, OnlineSubsystem, and Motion Warping.

[Source and build instructions](https://github.com/Away1615/Rift/tree/develop) · [Game and technical report](https://github.com/Away1615/Rift/blob/develop/docs/Rift-Report.pdf)
