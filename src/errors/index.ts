import { ErrorHandler } from 'vue-router/types/router';
// TODO extract error state to root
export default function errorHandle(e: Error, type: string, commit: any) {
  const { message } = e;
  if (message) {
    commit(type, message);
  }
}
