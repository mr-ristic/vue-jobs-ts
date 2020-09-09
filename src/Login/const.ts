export const EMAIL_ERROR = 'Invalid Email address';
export const PASSWORD_ERROR = 'Password must be 6 charachter or more';
export enum ActionTypes {
  SET_ERROR = 'SET_ERROR',
  RESET_ERROR = 'RESET_ERROR',
  SUBMIT_FORM = 'SUBMIT_FORM'
}

export enum MutationTypes {
  RESET_ERROR = 'RESET_ERROR',
  SET_SUBMITTING = 'SET_SUBMITTING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOG_OUT = 'LOG_OUT'
}

export enum GetterTypes {
  CHECK_ERRORS = 'CHECK_ERRORS'
}
