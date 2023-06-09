import { useMutation } from 'react-query';
import useAxios from '../useAxios';
import { AxiosError } from 'axios';
import { success } from '../useToastify';

export function useDeleteManager() {
  const { deleteManager } = useAxios();

  const { mutateAsync } = useMutation(
    ['deleteManager'],
    (id: number) => deleteManager(id),
    {
      onSuccess: () => success(),
    },
  );
  return { mutateAsync };
}
//!isAdmin should be isAdmin
