import { useMutation, useQuery } from 'react-query';
import useAxios from '../useAxios';
import { AxiosError } from 'axios';
import { success } from '../useToastify';

export function useCreateManager() {
  const { createManager } = useAxios();

  const { mutateAsync } = useMutation(
    ['createManager'],
    (params: { address: string; organizationId: number }) =>
      createManager(params.address, params.organizationId),
    {
      onSuccess: () => success(),
    },
  );
  return { mutateAsync };
}
//!isAdmin should be isAdmin
