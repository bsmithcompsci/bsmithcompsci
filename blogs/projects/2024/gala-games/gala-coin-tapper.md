---
title: Gala Coin Tapper
description: An overview of Gala Coin Tapper, a simple tapping game developed by Gala Games, highlighting my contributions to game development, backend integration, and DevOps.
---

# Gala Coin Tapper
Gala Coin Tapper is a simple tapping game developed by Gala Games. The game focuses on core gameplay mechanics that encourage user engagement through repetitive tapping actions, rewarding players for their interactions.

## Key Features
- **Tapping Mechanics**: Players tap on the screen to interact with the game, simulating actions such as collecting Gala Coins.
- **Progression System**: The game includes a progression system that rewards players for continued engagement, unlocking new levels or features as they advance.
- **User Interface**: A clean and intuitive user interface that guides players through the game mechanics and provides feedback on their actions.

## My Involvement
As a Software Engineer, I contributed to various aspects of Gala Coin Tapper's development, including:
- **Game Development**: Worked on implementing the core tapping mechanics and ensuring smooth gameplay experiences.
    - Improved the network batching of player actions to reduce server load during peak usage times.
    - Implemented a scoring system that tracks player progress and rewards.
- **Backend Integration**: Set up backend services to manage player data and game state.
    - Designed APIs for saving and retrieving player progress.
    - Ensured data integrity and security for player information.
- **DevOps**: Assisted in setting up CI/CD pipelines for automated testing and deployment.
    - Configured build processes to streamline development workflows.
    - Monitored application performance and implemented optimizations as needed.
    - Built CI/CD pipelines using Gitlab CI, integrated with FluxCD for GitOps-based deployments to our Kubernetes clusters.
    - Integrated app telemetry using [Sentry.IO](https://sentry.io/) for real-time error tracking and performance monitoring.
    - Integrated backend services with monitoring solutions like Datadog to track system health and performance metrics.
- **Testing and Optimization**: Ensured the game runs smoothly across different devices and platforms.
    - Conducted performance testing to identify and resolve bottlenecks.

## Technologies Used
- **Programming Languages**: C# (.NET for Unity), Terraform
- **Game Engine**: Unity
- **Cloud and DevOps**: AWS, Kubernetes, Docker, Datadog, Redis, MySQL
- **CI/CD**: Gitlab CI, FluxCD
- **Networking**: ENet, Protobuf

## Architecture Overview
Gala Coin Tapper's architecture is designed to support a simple yet engaging gameplay experience.
- **Client-Side**: The game runs on the Unity engine, utilizing C# for game logic.
- **Backend Services**: A lightweight backend built to handle player data and game state management.
- **CI/CD Pipelines**: Automated build and deployment processes to ensure rapid iteration and testing.

This architecture provides:
- Responsive gameplay mechanics
- Secure handling of player data
- Scalable backend services to support player growth

## Conclusion
Working on Gala Coin Tapper provided me with valuable experience in game development, backend integration, and DevOps practices. The project allowed me to explore core gameplay mechanics and user engagement strategies in a simple yet effective manner.