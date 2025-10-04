interface Config {
  nodeEnv: string;
  port: number;
  secret_token: string;
}

export const config: Config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 3000,
  secret_token: process.env.SECRET_TOKEN || "rahasiacuy",
};
