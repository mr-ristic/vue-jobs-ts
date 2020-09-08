export const EMAIL_ERROR = 'Invalid Email address';
export const PASSWORD_ERROR = 'Password must be 6 charachter or more';
export enum ActionTypes {
  SET_ERROR = 'SET_ERROR',
  RESET_ERROR = 'RESET_ERROR'
}

export enum MutationTypes {
  SET_EMAIL_ERROR = 'SET_EMAIL_ERROR',
  SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR',
  SET_OTHER_ERROR = 'SET_OTHER_ERROR',
  RESET_ERROR = 'RESET_ERROR'
}

export enum GetterTypes {
  CHECK_ERRORS = 'CHECK_ERRORS'
}
