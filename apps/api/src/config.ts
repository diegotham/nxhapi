export default {
  swagger: {
    options: {
      info: {
        title: 'API Documentation',
        version: 'v1.0.0',
        contact: {
          name: 'Hello',
          email: 'hello@hellohello.com',
        },
      },
      grouping: 'tags',
      sortEndpoints: 'ordered',
    },
  },
  status: {
    options: {
      path: '/status',
      title: 'API Monitor',
      routeConfig: {
        auth: false,
      },
    },
  },
};
