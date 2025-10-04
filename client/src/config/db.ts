import Dexie from "dexie";

export interface Txn {
  id: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  updatedAt: number; // epoch ms
  deleted?: boolean;
}

export interface SyncOp {
  id: string;
  type: "txn" | "meta";
  op: "create" | "update" | "delete";
  payload: any;
  createdAt: number;
  applied?: boolean;
}

class CuankuDB extends Dexie {
  txns!: Dexie.Table<Txn, string>;
  sync!: Dexie.Table<SyncOp, string>;

  constructor() {
    super("cuanku-db");
    this.version(1).stores({
      txns: "id, date, updatedAt",
      sync: "id, createdAt, applied",
    });
  }
}

export const db = new CuankuDB();
