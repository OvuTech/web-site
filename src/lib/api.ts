const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface WaitlistSubscribeData {
  email: string;
  name: string;
}

interface PartnershipData {
  company_name: string;
  email: string;
  phone: string;
  category: string;
}

interface ApiResponse {
  id?: string;
  name?: string;
  email?: string;
  created_at?: string;
  message?: string;
  detail?: string;
  status?: string;
  already_exists?: boolean;
}

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchApi<T = ApiResponse>(
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

export const api = {
  waitlist: {
    subscribe: async (data: WaitlistSubscribeData): Promise<ApiResponse> => {
      return fetchApi('/api/v1/waitlist/subscribe', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
  },

  partnerships: {
    create: async (data: PartnershipData): Promise<ApiResponse> => {
      return fetchApi('/partnerships/', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
  },
};

export { ApiError };
export type { ApiResponse, WaitlistSubscribeData, PartnershipData };
