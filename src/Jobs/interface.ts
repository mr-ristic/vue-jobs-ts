export interface DataProps {
  user: { email: string };
  jobRequest: { jobType: { name: string } };
  client: { name: string };
  start_time: string;
  end_time: string;
}

export interface JobsProps {
  data: Array<DataProps>;
  loader: boolean;
}
