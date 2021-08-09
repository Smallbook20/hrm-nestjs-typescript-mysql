export class RequestDto {
  userId: string;
  header: {
    (name: `set-cookie`): string;
    (name: string): string;
  };
  url: string;
  originalUrl: string;
  roleName: string[];
  params: string;
}
