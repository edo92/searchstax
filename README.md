# SearchStax - UI Kit

[Live view](https://searchstax-9zy67ljuz-eduard-jacobs-projects.vercel.app/)

## Table of Contents

1. [Installation](#installation)
2. [Usage](#development-setup)

---

# Installation

```sh
git clone https://github.com/edo92/searchstax.git
cd searchstax
yarn install
```

# Development Setup

- start local development

```sh
yarn dev
```

- run in docker container

```sh
docker-compose up
```

# Environmental Variables

> **_NOTE:_** Automatically loads environment variables from .env.dev

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
