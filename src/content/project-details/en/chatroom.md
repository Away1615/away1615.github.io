---
projectId: chatroom
language: en
---

## Messages and concurrency

Winsock TCP carries length-prefixed, typed messages for group/private chat, presence, and system notifications. Receive buffering handles fragmented and coalesced messages; thread-safe queues connect session I/O with event processing.

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/chatroom/message-format.png" alt="Message layout: length, type, and serialized body." loading="lazy" />
<figcaption>Message layout: length, type, and serialized body.</figcaption>
</figure>

## Client and operation

The Dear ImGui client provides an online-user list and group/private windows, with FMOD notification audio. The server uses TCP 65432 and clients default to localhost for multi-client testing.

This is a coursework communication prototype. Partial-write retries remain a transport limitation, so it should not be treated as a production messaging service. See the README for dependencies and setup.

[GitHub / README](https://github.com/Away1615/ChatRoom/tree/develop) · [Report](https://github.com/Away1615/ChatRoom/blob/develop/WM9M4.pdf)
