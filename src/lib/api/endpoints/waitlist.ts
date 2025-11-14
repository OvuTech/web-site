import { http } from '../client';
import { ApiResponse, WaitlistSubscribeData } from '../types';

export const waitlist = {
  subscribe: (data: WaitlistSubscribeData): Promise<ApiResponse> => {
    return http.post('/api/v1/waitlist/subscribe', data);
  },
};
