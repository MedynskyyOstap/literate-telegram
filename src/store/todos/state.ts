export type State = {
  loading: boolean,
  results: [{
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
  }]
};

export const state: State = {
    loading: false,
    results: [{
      object: '',
      id: '',
      title: '',
      properties: {
        Name: {
          type: '',
          title: {}
        },
        Description: {
          type: '',
          rich_text: {}
        }
      }
    }]
};