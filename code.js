exports.handler = async (event) => {
  const request = event.Records[0].cf.request;

  if (request.headers.host[0].value === 'mycompany.co.th') {
    return {
      status: '301',
      statusDescription: `Redirecting to www.mycompany.co.th`,
      headers: {
        location: [{
          key: 'Location',
          value: `https://www.mycompany.co.th${request.uri}`
        }]
      }
    };
  }
  return request;
};
