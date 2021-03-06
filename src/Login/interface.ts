export interface ErrorProps {
  email: string | boolean;
  password: string | boolean;
  message: string | boolean;
}

export interface LoginProps {
  errors: ErrorProps;
  submitting: boolean;
}

export interface FieldsProps {
  email: string;
  password: string;
  router: any;
}

export interface StateProps {}
