export interface DataProps {
  id: number;
  user: { email: string };
  jobRequest: { jobType: { name: string } };
  client: { name: string };
  start_time: string;
  end_time: string;
}

export interface PaginationObjectProps {
  count: number;
  current_page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface JobsProps {
  data: Array<DataProps>;
  loader: boolean;
  pagination: PaginationObjectProps;
}
