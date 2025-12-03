---
title: Mirandus
description: An exploration of Mirandus, a fantasy MMORPG, inspired by Skyrim and challenging traditional RPG norms with its player-owned economy and land ownership via blockchain technology.
background_image: /backgrounds/mirandus-background.webp
---

# Mirandus
Mirandus is a fantasy MMORPG developed by Gala Games, set in a vast open world where players can own land, build structures, and participate in a player-driven economy. The game draws inspiration from titles like Skyrim but introduces unique mechanics through blockchain technology, allowing players to truly own in-game assets.

## Key Features
- **Player-Owned Land**: Players can purchase, sell, and trade land parcels within the game world, giving them control over their in-game environment.
- **Decentralized Economy**: The game features a player-driven economy where players can create businesses, craft items, and trade with others using blockchain-based assets.
- **Immersive Gameplay**: Mirandus offers a rich narrative and immersive gameplay experience, with quests, exploration, and combat set in a fantasy world.
- **Blockchain Integration**: In-game assets, including land, items, and characters, are tokenized on the blockchain, providing players with true ownership and the ability to trade assets outside of the game.

## My Involvement
As a Software Engineer and DevOps Engineer, I contributed to various aspects of Mirandus' development, including:
- **Backend Development**: Worked on the server-side architecture to support the game's multiplayer features and ensure scalability for a large player base.
    - Implemented ENet protocol for efficient, low-latency communication between clients and servers.
    - Restructured data synchronization mechanisms to ensure consistent state across clients and servers, via utilizing Protobuf for organized data serialization.
    - Architected a robust microservice infrastructure using Kubernetes on **AWS**, enabling scalable and resilient game server deployments.
        - Moved our game-server from a monolithic architecture to a microservices-based design, improving maintainability and scalability; splitting services into distinct responsible domains such as Authentication, Game Logic, NPC Services, and World State Management per Zone.
- **DevOps**: Established CI/CD pipelines and automated deployment processes to streamline development workflows.
    - Built infrastructure as code using **Terraform** to manage cloud resources, ensuring reproducible and version-controlled environments.
    - Developed automated testing frameworks to ensure code quality and reliability across multiple services.
    - Built **CI/CD pipelines** using **Gitlab CI**, integrated with **FluxCD** for GitOps-based deployments to our Kubernetes clusters.
    - Implemented monitoring and logging solutions to track system performance and quickly identify issues in production environments.
    - Collaborated with cross-functional teams to optimize development processes and improve overall project efficiency.
    - Maintained content delivery via **Unity's Addressable Asset System**, optimizing asset loading and updates for players with our own CDN setup.

## Technologies Used
- **Programming Languages**: C# (.NET for Unity), Terraform
- **Game Engine**: Unity
- **Cloud and DevOps**: AWS, Kubernetes, Docker, Prometheus, Grafana, Loki, Redis, MySQL
- **CI/CD**: Gitlab CI, FluxCD
- **Networking**: ENet, Protobuf

## Architecture Overview
Mirandus' architecture is designed to support a large-scale multiplayer environment with a focus on scalability, reliability, and player ownership of assets.
- **Microservices Architecture**: The backend is composed of multiple microservices, each responsible for specific functionalities such as player authentication, game logic, NPC management, and world state synchronization.
- **Kubernetes on AWS**: The game servers and services are deployed on Kubernetes clusters hosted on AWS, allowing for dynamic scaling based on player demand.
- **Blockchain Integration**: In-game assets are tokenized on the blockchain, enabling true ownership and tradeability of items and land.
- **Networking Layer**: Utilizes the ENet protocol for efficient, low-latency communication, ensuring smooth gameplay experiences for players.

[![Mirandus Server Architecture](/diagrams/mirandus/server-architecture.png)](/diagrams/mirandus/server-architecture.png)

This architecture provides:
- Scalability to handle a large number of concurrent players
- Resilience through microservices and Kubernetes orchestration
- Secure handling of player-owned assets via blockchain technology

## Conclusion
Working on Mirandus provided me with valuable experience in backend development, DevOps practices, and integrating blockchain technology into a large-scale multiplayer game. The project's innovative approach to player ownership and economy has the potential to redefine how players interact with virtual worlds.