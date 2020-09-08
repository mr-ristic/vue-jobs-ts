export interface ErrorProps {
  email: string | boolean;
  password: string | boolean;
  message: string | boolean;
}

export interface LoginProps {
  errors: ErrorProps;
  submitting: boolean;
}

export interface StateProps {}
