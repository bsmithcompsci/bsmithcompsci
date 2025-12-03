---
title: Tavern Games
description: An overview of Tavern Games, a collection of multiplayer mini-games developed by Gala Games, highlighting my contributions to backend development, networking, and DevOps.
background_image: /backgrounds/tavern-games-background.jpg
---

# Tavern Games
Tavern Games is a collection of multiplayer mini-games in the Mirandus universe, developed by Gala Games. These games provide players with engaging and social experiences, allowing them to compete and collaborate in a variety of game modes.

## Key Features
- **Multiplayer Mini-Games**: A variety of card mini-games that players can enjoy together in a tavern setting.
- **Shared Economy**: Players can earn in-game currency and items that can be used across the Mirandus ecosystem.

## My Involvement
As a Software Engineer and DevOps Engineer, I contributed to various aspects of Tavern Games' development, including:
- **Backend Development**: Worked on the server-side architecture to support multiplayer features and ensure scalability
    - Implemented ENet protocol for efficient, low-latency communication between clients and servers.
    - Hooked up the game logic to our internal APIs for player authentication, matchmaking, and game state management.
    - Developed game state synchronization mechanisms to ensure consistent state across clients and servers, utilizing Protobuf for organized data serialization.
    - Read more at: [Mirandus](../mirandus)
- **DevOps**: Established CI/CD pipelines and automated deployment processes to streamline development workflows.
    - Read more at: [Mirandus](./mirandus)

## Technologies Used
- **Programming Languages**: C# (.NET for Unity), Terraform
- **Game Engine**: Unity
- **Cloud and DevOps**: AWS, Kubernetes, Docker, Prometheus, Grafana, Loki, Redis, MySQL
- **CI/CD**: Gitlab CI, FluxCD
- **Networking**: ENet, Protobuf

## Architecture Overview
Tavern Games' architecture is extended from the Mirandus backend, allowing us to leverage existing infrastructure while tailoring it to the needs of multiplayer mini-games.

Read more at: [Mirandus](../mirandus)

