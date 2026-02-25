import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useBackendStatus() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['backendStatus'],
    queryFn: async () => {
      if (!actor) return 'Connecting...';
      return actor.getStatus();
    },
    enabled: !!actor && !isFetching,
    staleTime: 30000, // Cache for 30 seconds
  });
}
