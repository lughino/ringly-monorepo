export const isServer = (): boolean => typeof document === 'undefined';

export const renderServer = <R extends unknown>(toRender: R): R | null =>
  isServer() ? toRender : null;

/**
 * It returns the first parameter passed to the function if the environment is the `server`, the second parameter if the environment is the `client`.
 *
 */
export const renderCond = <I extends unknown, E extends unknown>(
  serverRend: I,
  clientRend: E,
): I | E => (isServer() ? serverRend : clientRend);
