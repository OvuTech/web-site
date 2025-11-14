import { ApiError, ApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

// ============ Base HTTP Client ============

async function request<T = ApiResponse>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(
      data.detail || data.message || 'API request failed',
      response.status,
      data
    );
  }

  return data as T;
}

// ============ HTTP Method Helpers ============

export const http = {
  get: <T = ApiResponse>(endpoint: string, options?: RequestInit): Promise<T> => {
    return request<T>(endpoint, { ...options, method: 'GET' });
  },

  post: <T = ApiResponse>(endpoint: string, data?: any, options?: RequestInit): Promise<T> => {
    return request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  put: <T = ApiResponse>(endpoint: string, data?: any, options?: RequestInit): Promise<T> => {
    return request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  patch: <T = ApiResponse>(endpoint: string, data?: any, options?: RequestInit): Promise<T> => {
    return request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  delete: <T = ApiResponse>(endpoint: string, options?: RequestInit): Promise<T> => {
    return request<T>(endpoint, { ...options, method: 'DELETE' });
  },
};
