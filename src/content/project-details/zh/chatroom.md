---
projectId: chatroom
language: zh
---

## 消息与线程模型

基于 Winsock TCP，使用长度前缀与类型字段区分群聊、私聊、加入、离开及系统通知。接收缓冲处理拆分与合并到达的消息，连接 I/O 与事件处理通过线程安全队列交互。

<figure class="project-detail-figure is-wide">
<img src="/assets/projects/chatroom/message-format.png" alt="消息布局：长度、类型与序列化消息体。" loading="lazy" />
<figcaption>消息布局：长度、类型与序列化消息体。</figcaption>
</figure>

## 客户端与运行

Dear ImGui 客户端提供在线用户列表、群聊与私聊窗口，FMOD 播放通知音效。服务器默认使用 TCP 65432，客户端默认连接本机，可通过多客户端验证消息与状态更新。

这是课程通信原型：发送路径尚需补全部分写入重试，不应将当前版本视为生产消息服务。构建依赖与配置方法见 README。

[GitHub / README](https://github.com/Away1615/ChatRoom/tree/develop) · [Report](https://github.com/Away1615/ChatRoom/blob/develop/WM9M4.pdf)
