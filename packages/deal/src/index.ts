import { Buffer } from "buffer";
import { Address } from '@stellar/stellar-sdk';
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  Result,
  Spec as ContractSpec,
} from '@stellar/stellar-sdk/contract';
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Typepoint,
  Duration,
} from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk'
export * as contract from '@stellar/stellar-sdk/contract'
export * as rpc from '@stellar/stellar-sdk/rpc'

if (typeof window !== 'undefined') {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CCDL3F57MOX527LKBJJDXRCWY5OA77IUL3S6SWV34NPVSEXPUO4ODTE7",
  }
} as const

export enum Stage {
  Created = 0,
  Accepted = 1,
  Rejected = 2,
  Completed = 3,
  Expired = 4,
}

export const Errors = {

}

export interface Client {
  /**
   * Construct and simulate a propose_deal transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  propose_deal: ({user, client, product, amount, ratio, token, time_to_live, desc}: {user: string, client: string, product: string, amount: u32, ratio: u32, token: string, time_to_live: u32, desc: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<boolean>>

  /**
   * Construct and simulate a decide_deal transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  decide_deal: ({decision, len_of_deal}: {decision: boolean, len_of_deal: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_stage transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_stage: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<Stage>>>

  /**
   * Construct and simulate a get_deal_user transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_user: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<string>>>

  /**
   * Construct and simulate a get_deal_client transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_client: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<string>>>

  /**
   * Construct and simulate a get_deal_product transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_product: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<string>>>

  /**
   * Construct and simulate a get_deal_amount transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_amount: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<u32>>>

  /**
   * Construct and simulate a get_deal_ratio transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_ratio: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<u32>>>

  /**
   * Construct and simulate a get_deal_token transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_token: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<string>>>

  /**
   * Construct and simulate a get_deal_ttl transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_ttl: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<u32>>>

  /**
   * Construct and simulate a get_deal_desc transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_deal_desc: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Option<string>>>

}
export class Client extends ContractClient {
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAAAwAAAAAAAAAAAAAABVN0YWdlAAAAAAAABQAAAAAAAAAHQ3JlYXRlZAAAAAAAAAAAAAAAAAhBY2NlcHRlZAAAAAEAAAAAAAAACFJlamVjdGVkAAAAAgAAAAAAAAAJQ29tcGxldGVkAAAAAAAAAwAAAAAAAAAHRXhwaXJlZAAAAAAE",
        "AAAAAAAAAAAAAAAMcHJvcG9zZV9kZWFsAAAACAAAAAAAAAAEdXNlcgAAABMAAAAAAAAABmNsaWVudAAAAAAAEwAAAAAAAAAHcHJvZHVjdAAAAAATAAAAAAAAAAZhbW91bnQAAAAAAAQAAAAAAAAABXJhdGlvAAAAAAAABAAAAAAAAAAFdG9rZW4AAAAAAAATAAAAAAAAAAx0aW1lX3RvX2xpdmUAAAAEAAAAAAAAAARkZXNjAAAAEAAAAAEAAAAB",
        "AAAAAAAAAAAAAAALZGVjaWRlX2RlYWwAAAAAAgAAAAAAAAAIZGVjaXNpb24AAAABAAAAAAAAAAtsZW5fb2ZfZGVhbAAAAAAEAAAAAA==",
        "AAAAAAAAAAAAAAAJZ2V0X3N0YWdlAAAAAAAAAAAAAAEAAAPoAAAH0AAAAAVTdGFnZQAAAA==",
        "AAAAAAAAAAAAAAANZ2V0X2RlYWxfdXNlcgAAAAAAAAAAAAABAAAD6AAAABM=",
        "AAAAAAAAAAAAAAAPZ2V0X2RlYWxfY2xpZW50AAAAAAAAAAABAAAD6AAAABM=",
        "AAAAAAAAAAAAAAAQZ2V0X2RlYWxfcHJvZHVjdAAAAAAAAAABAAAD6AAAABM=",
        "AAAAAAAAAAAAAAAPZ2V0X2RlYWxfYW1vdW50AAAAAAAAAAABAAAD6AAAAAQ=",
        "AAAAAAAAAAAAAAAOZ2V0X2RlYWxfcmF0aW8AAAAAAAAAAAABAAAD6AAAAAQ=",
        "AAAAAAAAAAAAAAAOZ2V0X2RlYWxfdG9rZW4AAAAAAAAAAAABAAAD6AAAABM=",
        "AAAAAAAAAAAAAAAMZ2V0X2RlYWxfdHRsAAAAAAAAAAEAAAPoAAAABA==",
        "AAAAAAAAAAAAAAANZ2V0X2RlYWxfZGVzYwAAAAAAAAAAAAABAAAD6AAAABA=" ]),
      options
    )
  }
  public readonly fromJSON = {
    propose_deal: this.txFromJSON<boolean>,
        decide_deal: this.txFromJSON<null>,
        get_stage: this.txFromJSON<Option<Stage>>,
        get_deal_user: this.txFromJSON<Option<string>>,
        get_deal_client: this.txFromJSON<Option<string>>,
        get_deal_product: this.txFromJSON<Option<string>>,
        get_deal_amount: this.txFromJSON<Option<u32>>,
        get_deal_ratio: this.txFromJSON<Option<u32>>,
        get_deal_token: this.txFromJSON<Option<string>>,
        get_deal_ttl: this.txFromJSON<Option<u32>>,
        get_deal_desc: this.txFromJSON<Option<string>>
  }
}