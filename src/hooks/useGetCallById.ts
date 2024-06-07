import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    async function loadCall() {
      if (!client) return;

      const { calls } = await client.queryCalls({
        filter_conditions: {
          id,
        },
      });

      if (calls.length) setCall(calls[0]);
      setIsCallLoading(false);
    }

    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
};
