import { createEnv } from '@t3-oss/env-nextjs';

const env = createEnv({
  client: {},
  server: {},
  runtimeEnv: process.env
});

export default env;
