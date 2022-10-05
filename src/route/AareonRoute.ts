export interface AareonRoute {
  path: string;
  url:string;
  routes?: AareonRoute[];
  component?: React.FC;
  exact: boolean;
  data: {
    role: string;
    label: string;
    key: string;
    file?: string;
    opened?: boolean;
    description?: string;
    icon?: string;
    order?: number;
    visible?: boolean;
  };
}
