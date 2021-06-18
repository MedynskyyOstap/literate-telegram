export type Database = {
  object: string,
  id: string,
  title: string,
  properties: {
    Name: {
      type: string,
      title: Record<string, unknown>
    },
    Description: {
      type: string,
      rich_text: Record<string, unknown>
    }
  }
};

export interface Meta {
  totalCount: number;
}