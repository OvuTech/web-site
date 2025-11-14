// ============ Request Data Types ============

export interface WaitlistSubscribeData {
  email: string;
  name: string;
}

export interface PartnershipData {
  company_name: string;
  email: string;
  phone: string;
  category: string;
}

export interface QuestionData {
  email: string;
  question: string;
  name: string;
}

// ============ Response Types ============

export interface ApiResponse {
  id?: string;
  name?: string;
  email?: string;
  question?: string;
  created_at?: string;
  message?: string;
  detail?: string;
  status?: string;
  already_exists?: boolean;
}

// ============ Error Types ============

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
