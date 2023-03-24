import { useMutation } from '@tanstack/react-query';
import { bizPortalAPI } from '../api';

export function postAuthLogin(body: {
  id: string;
  password: string;
  isStayAuth?: boolean;
}) {
  console.log('sdf', body);
  return bizPortalAPI.post('/v1/auth/login', body);
}

export function useOnLogin() {
  return useMutation(postAuthLogin, {
    onSuccess: (res: any, variables: any) => {
      console.log('res', res);
    },
    onError: (err: any) => {
      console.log('e', err);
    },
  });
}
