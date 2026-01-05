# Eurojackpot Tracker

A Discord bot that automatically tracks the Eurojackpot lottery and sends notifications when the jackpot reaches a specified threshold.

## Overview

This bot monitors the Eurojackpot lottery by fetching data from the API and sends Discord notifications when the jackpot exceeds 65 million euros. It runs on a cron schedule, checking for updates on Tuesdays and Fridays at 8:00 AM UTC (drawing days).

## Features

- 🎰 Automated Eurojackpot monitoring
- 📅 Scheduled checks on drawing days (Tuesdays and Fridays)
- 💰 Configurable jackpot threshold (currently set to 65M EUR)
- 🤖 Discord webhook notifications
- 🐳 Docker support for easy deployment
- 📊 TypeScript for type safety

## Prerequisites

- Node.js (LTS version recommended)
- Discord webhook URL and credentials
- Docker (optional, for containerized deployment)

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd eurojackpot-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
DISCORD_WEBHOOK_ID=your_webhook_id
DISCORD_WEBHOOK_TOKEN=your_webhook_token
```

To get these values:

1. Go to your Discord server settings
2. Navigate to Integrations > Webhooks
3. Create a new webhook or use an existing one
4. Copy the webhook URL - it will be in the format: `https://discord.com/api/webhooks/{ID}/{TOKEN}`

### 4. Run the application

#### Development mode

```bash
npm run dev
```

#### Production mode

```bash
npm run build
npm start
```

## Docker Deployment

### Build the Docker image

```bash
docker build -t eurojackpot-tracker .
```

### Run the container

```bash
docker run -d \
  --name eurojackpot-tracker \
  -e DISCORD_WEBHOOK_ID=your_webhook_id \
  -e DISCORD_WEBHOOK_TOKEN=your_webhook_token \
  eurojackpot-tracker
```

## Configuration

### Cron Schedule

The bot runs on the following schedule:

- **Time**: 8:00 AM UTC
- **Days**: Tuesdays and Fridays (drawing days)
- **Cron expression**: `0 0 8 * * 2,5`

## Scripts

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `npm run dev`        | Start in development mode with hot reload |
| `npm run build`      | Build the project for production          |
| `npm start`          | Start the built application               |
| `npm run lint`       | Run ESLint                                |
| `npm run lint:fix`   | Run ESLint with auto-fix                  |
| `npm run format`     | Check code formatting with Prettier       |
| `npm run format:fix` | Format code with Prettier                 |
| `npm run types`      | Type-check the project                    |
| `npm run release`    | Create a semantic release                 |

## Project Structure

```
├── src/
│   ├── discord.ts      # Discord webhook client
│   ├── environment.ts  # Environment variable validation
│   ├── index.ts        # Main application logic
│   └── types.ts        # TypeScript type definitions
├── Dockerfile          # Docker configuration
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint configuration
└── README.md          # This file
```

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Discord.js** - Discord API wrapper
- **Cron** - Job scheduling
- **Zod** - Runtime type validation
- **Docker** - Containerization
- **ESLint & Prettier** - Code quality and formatting
