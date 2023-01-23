import { util } from '@aws-appsync/utils';

export function request(ctx) {
  return {
    operation: 'GetItem',
    key: {
      name: util.dynamodb.toDynamoDB(ctx.args.name),
    },
  };
}

export function response(ctx) {
  return ctx.result;
}
