---
title: Project Campsite
description: An overview of Project Campsite, a collection of mini-games developed for campsite entertainment, highlighting my contributions to game development, backend integration, and DevOps.
background_image: /backgrounds/campsitegames-background.webp
---

# Project Campsite
Project Campsite is a Action RPG, set in a fantasy world where players embark on quests, battle monsters, and explore diverse landscapes. The game emphasizes engaging combat mechanics, character progression, and an immersive storyline. Created by Campsite Games, founded by myself and my brother, [Matthew Niznak](https://www.linkedin.com/in/matthew-niznak-a83b92116/), we aim to deliver a captivating, challenging and enjoyable gaming experience to the RPG genre.

## The Premise of Project Campsite
In Project Campsite, players assume the role of an adventurer, venturing into a new world of magic, industrialization and mystery. The game features a rich narrative, diverse environments, and a variety of quests that encourage exploration and strategic combat.

Inspired by classic RPGs, Project Campsite combines traditional elements with modern gameplay mechanics and social mechanics to create a unique experience. The game is heavily inspired titles like Diablo II, Baldur's Gate, Dark Souls, and V Rising.

## My Involvement
As Chief Technology Officer (CTO), I have been deeply involved in all aspects of Project Campsite's development, including:
- **Game Development**: Leading the implementation of core gameplay mechanics and ensuring smooth gameplay experiences.
    - Developed responsive combat controls to enhance player interaction.
    - Implemented a robust character progression system that tracks player stats, skills, and inventory.
    - Created animation and visual effect systems to provide feedback on player actions.

- **Backend Integration**: Setting up backend services to manage player data, game state, and multiplayer features.
    - Designed APIs for saving and retrieving player progress, inventory, and game state.
    - Architected multiplayer server infrastructure to allow players to connect, interact, and compete in real-time via our instanced game servers.

- **DevOps**: Establishing CI/CD pipelines for automated testing and deployment.
    - Built CI/CD pipelines using Gitlab CI, integrated with FluxCD for GitOps-based deployments to our Kubernetes clusters.
    - Automated build processes to streamline development workflows.
    - Monitored application performance and implemented optimizations as needed.

- **Testing and Optimization**: Ensuring the game runs smoothly across different devices and platforms.
    - Conducted performance testing to identify and resolve bottlenecks.
    - Optimized asset loading and memory usage to improve game performance.

## Technologies Used
- **Programming Languages**: GDScript, Golang, Terraform, Python, Bash/Shell Scripting
- **Game Engine**: Godot
- **Cloud and DevOps**: AWS, Kubernetes, Docker, Prometheus, Grafana, Loki, Redis, MySQL
- **CI/CD**: Gitlab CI, FluxCD
- **Networking**: ENet, Protobuf 

## Architecture Overview
Project Campsite's architecture is designed to support a scalable multiplayer environment with a focus on reliability and player engagement.
- **Client-Side**: The game runs on the Godot engine, utilizing GDScript for game logic.
- **Backend Services**: A microservices-based backend built with Golang to handle player data, game state management, and multiplayer features.
    - **Gateway Service**: Manages player connections via a living websocket connection to route players to their respective game server instances or any other information needed.
    - **Matchmaking Service**: Handles player matchmaking by providing relvant information to the requesting player, so the player can make a decision on who they should reach out to invite to their adventuring party.
    - **Game Server Instances**: Each game server instance is responsible for managing the game state, player interactions, and world events for a specific group of players.
    - **Database**: A MySQL database is used to store player data, game state, and other persistent information.
    - **Cache Layer**: Valkey is used as a caching layer to improve performance and reduce database load.

- **CI/CD Pipelines**: Automated build and deployment processes to ensure rapid iteration and testing.

This architecture provides:
- Scalability to handle a growing number of players
- Resilience through microservices and Kubernetes orchestration
- Secure handling of player data and game state

## Conclusion
As this project is under ongoing development, working on Project Campsite has provided me with valuable experience in leadership roles, game development, backend integration, and DevOps practices. 
