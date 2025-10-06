import "express";

declare module "express" {
  export interface Request {
    user?: {
      id: string;
      email: string;
    };
  }
}
declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
      email: string;
    };
  }
}
