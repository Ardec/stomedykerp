// composables/useBaseUrl.ts
import { useRuntimeConfig } from 'nuxt/app';

export function useBaseUrl(): string {
  const config = useRuntimeConfig();
  const baseUrl: string = config.public.DATABASE_ID;
  return baseUrl;
}
