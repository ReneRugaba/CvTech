export const genericResponse = {
  ok: {
    status: 200,
    response: 'succeful',
  },
  serverKo: {
    status: 500,
    response: 'Internal sever error',
  },
  notFound: {
    status: 400,
    response: 'No record found',
  },
  conflicts: {
    status: 409,
    response: 'Duplicate entry(ies)',
  },
  recordCreated: {
    status: 201,
    Response: 'Record created',
  },
  jwtConstant: {
    secret: 'secretKey',
  },
};
