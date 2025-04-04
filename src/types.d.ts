import type { useLazyLoadQuery } from 'react-relay/hooks.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => unknown
  ? A
  : never;

export type RelayQueryOptions = ArgumentTypes<typeof useLazyLoadQuery>[2];
