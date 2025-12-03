---
title: VitalXP Engine
description: An in-depth look at the VitalXP engine developed in 2022, exploring its architecture, features, and the development process behind it.
# date: 2023-01-01
---

# VitalXP Engine
The VitalXP Engine was a custom-built game engine developed in 2022 for VitalXP Inc. It was designed with a modular and performance-focused architecture, enabling teams to build immersive, scalable, and data-driven game experiences.

## My Responsibilities
As a Software Engineer and DevOps Engineer, I owned major portions of the engine’s architecture, networking stack, and cloud platform. My work included:

- Designing and implementing developer-facing networking APIs for multiplayer features and data retrieval.
    - Built a low-latency UDP-based transport layer designed for real-time communication, with reliability and ordering mechanisms appropriate for gameplay scenarios
    - Integrated the networking layer directly with the Entity Component System (ECS) to ensure stable and consistent client–server state synchronization.
    - Added first-party support for PlayFab to provide secure authentication, persistent data storage, and leaderboard services.
- Building a secure, collaborative development workflow for distributed teams.
    - Implemented a real-time collaboration system where multiple developers could iterate on projects simultaneously.
    - Provisioned on-demand test environments using Kubernetes, enabling isolated, short-lived game server instances for rapid testing.
    - Developed a structured content-sharing system to allow teams to safely exchange assets and binaries inside controlled access boundaries.
## Technologies Used
- **Programming Languages**: C++, Python, TypeScript
- **Cloud and DevOps**: AWS, Kubernetes, Docker
- **Backend Services**: Playfab

## Engine Architecture Overview
The VitalXP Engine followed a modular, extensible design that supported rapid iteration and cross-discipline collaboration.
- **Core Engine**:
A message-bus architecture enabled decoupled communication across subsystems.
- **Entity Component System (ECS)**:
Provided a data-oriented framework for building large, complex gameplay systems efficiently.
- **Networking Layer**:
Offered high-level APIs for multiplayer development, including secure client–server messaging, session management, and state replication.
- **Rendering Engine**:
Supported modern 2D and 3D rendering with advanced features such as post-processing, shader pipelines, and lighting systems.
    - **Vulkan**: Used for high-performance rendering on modern hardware.
    - **OpenGL**: Served as a compatibility fallback for legacy platforms.
- **Scripting System**:
Enabled rapid iteration and custom gameplay logic:
    - **Lua**: Lightweight scripting for gameplay behaviors.
    - **.NET Languages**: Additional scripting flexibility for teams using C# or other .NET tools.
    - **C++ Modules**: Allowed native integration for performance-critical systems.
    - **Hot Reloading**: Dramatically reduced iteration time during development.

## Cloud Infrastructure
VitalXP’s live-collaboration ecosystem was deployed on **AWS**, leveraging managed services and security-first architecture principles.
- **Docker Containerization**: Ensured consistent, reproducible environments across development and testing pipelines.
- **Kubernetes (EKS)**: Used for orchestrating isolated, ephemeral development test environments with autoscaling and workload segmentation.
- **Secure Asset Distribution**: Project assets were stored in **Amazon S3** using segregated buckets organized by customer and project. Access was managed through strict IAM policies, ensuring that each workspace remained isolated and compliant with internal security controls.

[![](https://mermaid.ink/img/pako:eNp9k81u4jAUhV_FuqsgAUpikiZe0nbVH1VlZlNSISe-BYvERo4zmg7i3cdJoKUorRe276dzjq9kew-FFggMuCk20mJhG4OTHC3PFHGjRvNHFkiKUqKyj55UFo1CO1ped4RYTewGyaPdvGaq96yNbnbOoRvhdXMrdsuH4BQqck9wy3Ne42h5c9y9Eql681dxTT0h6-1ouaBkXur8O12ZnzV5r7kgc15yVaA5d5x3uk3qU5-3d4vVk9GiKazUavV7sbrltf3uKIMlfw-8tkQzWj63JQk6tcsc0IYX2vAHLb3Q0k9trz5eCXsmkwm5Z2U-iGva4zI_kb7rQRoO0mOCyNmvls6_JFzQcJC6BBjD2kgBzJoGx1ChqXhbwr51ZOAeUYUZMLcV3GwzyNTBeXZcvWhdnWzuvtYbYG-8rF3V7NzzwRvJ14ZXH9SgEmiudaMssJQGXQiwPfwFRhM6jUMaRjRJo_TKD6IxvDtMZ9PUj_wZnflREPlxdBjDv-5cf5q4Mo7DNPH9qzSOXB4KabV56D9O938O_wFK2Asi?type=png)](https://mermaid.live/edit#pako:eNp9k81u4jAUhV_FuqsgAUpikiZe0nbVH1VlZlNSISe-BYvERo4zmg7i3cdJoKUorRe276dzjq9kew-FFggMuCk20mJhG4OTHC3PFHGjRvNHFkiKUqKyj55UFo1CO1ped4RYTewGyaPdvGaq96yNbnbOoRvhdXMrdsuH4BQqck9wy3Ne42h5c9y9Eql681dxTT0h6-1ouaBkXur8O12ZnzV5r7kgc15yVaA5d5x3uk3qU5-3d4vVk9GiKazUavV7sbrltf3uKIMlfw-8tkQzWj63JQk6tcsc0IYX2vAHLb3Q0k9trz5eCXsmkwm5Z2U-iGva4zI_kb7rQRoO0mOCyNmvls6_JFzQcJC6BBjD2kgBzJoGx1ChqXhbwr51ZOAeUYUZMLcV3GwzyNTBeXZcvWhdnWzuvtYbYG-8rF3V7NzzwRvJ14ZXH9SgEmiudaMssJQGXQiwPfwFRhM6jUMaRjRJo_TKD6IxvDtMZ9PUj_wZnflREPlxdBjDv-5cf5q4Mo7DNPH9qzSOXB4KabV56D9O938O_wFK2Asi)

This architecture provided:
- Strong workload isolation
- Secure handling of multiplayer traffic
- Scalable resource allocation for development teams
- Controlled access to shared content and services

## Conclusion
The VitalXP Engine gave me extensive experience across engine development, networking, developer tooling, and secure cloud architecture.

Although the engine was discontinued in late 2022, the project significantly shaped my expertise as both a Software Engineer and DevOps Engineer, and it remains one of the most valuable engineering endeavors I’ve worked on.