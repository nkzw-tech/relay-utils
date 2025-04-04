import { useCallback, useState } from 'react';
import type { FetchPolicy } from 'react-relay/hooks.js';
import type { CacheConfig } from 'relay-runtime';
import type { RelayQueryOptions } from './types.d.ts';

type RequiredRelayQueryOptions = NonNullable<RelayQueryOptions>;

export function useRelayQueryOptions(
  fetchPolicy: FetchPolicy = 'store-or-network',
  fetchKey?: number,
  metadata?: CacheConfig['metadata'],
): [RequiredRelayQueryOptions, () => void] {
  const [queryOptions, setQueryOptions] = useState<RequiredRelayQueryOptions>(
    () => ({
      fetchKey,
      fetchPolicy,
      networkCacheConfig: { metadata },
    }),
  );

  return [
    queryOptions,
    useCallback(
      () =>
        setQueryOptions((state) => ({
          fetchKey:
            ((typeof state?.fetchKey === 'number' ? state.fetchKey : 0) || 0) +
            1,
          fetchPolicy: 'network-only',
        })),
      [],
    ),
  ];
}
