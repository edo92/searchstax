# SearchStax - UI Kit

[Live view](https://searchstax-9zy67ljuz-eduard-jacobs-projects.vercel.app/)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Technologies](#technologies)

---

## Getting Started

Follow these steps to get the project up and running:

1. **Install dependencies**:

```sh
yarn install
```

2. **Start**

```sh
yarn dev
```

## Run in container

1. start project in docker container

```sh
docker-compose up
```

## Local development

- Environmental variables
  Automatically loads environment variables from .env.dev file and validates with zod

```sh
NEXT_PUBLIC_SEARCH_URL=https://example.com/search
NEXT_PUBLIC_SUGGESTER_URL=https://example.com/suggest
NEXT_PUBLIC_TRACK_API_KEY=your-track-api-key
NEXT_PUBLIC_SEARCH_AUTH=token
NEXT_PUBLIC_RELATED_SEARCHES_URL=https://example.com/related
NEXT_PUBLIC_AUTH_TYPE=token
NEXT_PUBLIC_RELATED_SEARCHES_API_KEY=your-related-api-key
NEXT_PUBLIC_ANALYTICS_BASE_URL=https://example.com/analytics
```

## Technologies Used

This project leverages the following key technologies:

- **Next.js (v14)**:
- **Tailwind CSS**:
