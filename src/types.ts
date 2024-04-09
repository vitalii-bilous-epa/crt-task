export interface ClientsServerResponse {
  id: string;
  name: string;
}

export interface TasksServerResponse {
  id: string;
  name: string;
  reportId: string;
}

export interface ReportServerResponse {
  id: string;
  name: string;
  clientId: string;
}
