import { http } from '../client';
import { ApiResponse, PartnershipData } from '../types';

export const partnerships = {
  create: (data: PartnershipData): Promise<ApiResponse> => {
    return http.post('/partnerships/', data);
  },
};
