import { http } from '../client';
import { ApiResponse, QuestionData } from '../types';

export const questions = {
  submit: (data: QuestionData): Promise<ApiResponse> => {
    return http.post('/api/v1/questions/', data);
  },
};
