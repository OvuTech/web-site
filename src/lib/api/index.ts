// ============ Main API Export ============

import { waitlist } from './endpoints/waitlist';
import { partnerships } from './endpoints/partnerships';
import { questions } from './endpoints/questions';

export const api = {
  waitlist,
  partnerships,
  questions,
};

// ============ Re-exports ============

export { http } from './client';
export { ApiError } from './types';
export type {
  ApiResponse,
  WaitlistSubscribeData,
  PartnershipData,
  QuestionData,
} from './types';
