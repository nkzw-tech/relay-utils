# `@nkzw/relay-utils`

Utility functions for the Relay GraphQL framework.

## Installation

```bash
npm install @nkzw/relay-utils
```

## Usage

```typescript
import { useRelayQueryOptions } from '@nkzw/relay-utils';

function MyComponent() {
  const [queryOptions, updateQueryOptions] =
    useRelayQueryOptions('network-only');

  // Pass queryOptions to Relay, or call `updateQueryOptions` to refetch the query.
}
```
