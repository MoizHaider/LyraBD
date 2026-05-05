
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model CampaignPlatform
 * 
 */
export type CampaignPlatform = $Result.DefaultSelection<Prisma.$CampaignPlatformPayload>
/**
 * Model Run
 * 
 */
export type Run = $Result.DefaultSelection<Prisma.$RunPayload>
/**
 * Model AgentState
 * 
 */
export type AgentState = $Result.DefaultSelection<Prisma.$AgentStatePayload>
/**
 * Model RunPlatformProgress
 * 
 */
export type RunPlatformProgress = $Result.DefaultSelection<Prisma.$RunPlatformProgressPayload>
/**
 * Model RunEvent
 * 
 */
export type RunEvent = $Result.DefaultSelection<Prisma.$RunEventPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model LeadRawData
 * 
 */
export type LeadRawData = $Result.DefaultSelection<Prisma.$LeadRawDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CampaignStatus: {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  ARCHIVED: 'ARCHIVED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const HitlType: {
  CAPTCHA: 'CAPTCHA',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
  TWO_FACTOR_AUTH: 'TWO_FACTOR_AUTH',
  RATE_LIMITED: 'RATE_LIMITED',
  MANUAL_REVIEW: 'MANUAL_REVIEW'
};

export type HitlType = (typeof HitlType)[keyof typeof HitlType]


export const Platform: {
  LINKEDIN: 'LINKEDIN',
  TWITTER: 'TWITTER',
  REDDIT: 'REDDIT',
  INSTAGRAM: 'INSTAGRAM',
  FACEBOOK: 'FACEBOOK',
  PRODUCTHUNT: 'PRODUCTHUNT',
  GITHUB: 'GITHUB',
  INDIEGOGO: 'INDIEGOGO',
  ANGELIST: 'ANGELIST',
  CUSTOM: 'CUSTOM'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const RunStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type RunStatus = (typeof RunStatus)[keyof typeof RunStatus]


export const LeadStatus: {
  NEW: 'NEW',
  REVIEWED: 'REVIEWED',
  CONTACTED: 'CONTACTED',
  QUALIFIED: 'QUALIFIED',
  DISQUALIFIED: 'DISQUALIFIED',
  BOUNCED: 'BOUNCED'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const PlatformRunStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  SKIPPED: 'SKIPPED',
  FAILED: 'FAILED'
};

export type PlatformRunStatus = (typeof PlatformRunStatus)[keyof typeof PlatformRunStatus]


export const RunEventType: {
  NAVIGATION: 'NAVIGATION',
  EXTRACTION: 'EXTRACTION',
  LEAD_SAVED: 'LEAD_SAVED',
  LEAD_DUPLICATE: 'LEAD_DUPLICATE',
  HITL_TRIGGERED: 'HITL_TRIGGERED',
  HITL_RESOLVED: 'HITL_RESOLVED',
  PLATFORM_STARTED: 'PLATFORM_STARTED',
  PLATFORM_COMPLETED: 'PLATFORM_COMPLETED',
  ERROR: 'ERROR',
  AGENT_STARTED: 'AGENT_STARTED',
  AGENT_COMPLETED: 'AGENT_COMPLETED'
};

export type RunEventType = (typeof RunEventType)[keyof typeof RunEventType]

}

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type HitlType = $Enums.HitlType

export const HitlType: typeof $Enums.HitlType

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type RunStatus = $Enums.RunStatus

export const RunStatus: typeof $Enums.RunStatus

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type PlatformRunStatus = $Enums.PlatformRunStatus

export const PlatformRunStatus: typeof $Enums.PlatformRunStatus

export type RunEventType = $Enums.RunEventType

export const RunEventType: typeof $Enums.RunEventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignPlatform`: Exposes CRUD operations for the **CampaignPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignPlatforms
    * const campaignPlatforms = await prisma.campaignPlatform.findMany()
    * ```
    */
  get campaignPlatform(): Prisma.CampaignPlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.run`: Exposes CRUD operations for the **Run** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Runs
    * const runs = await prisma.run.findMany()
    * ```
    */
  get run(): Prisma.RunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentState`: Exposes CRUD operations for the **AgentState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentStates
    * const agentStates = await prisma.agentState.findMany()
    * ```
    */
  get agentState(): Prisma.AgentStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.runPlatformProgress`: Exposes CRUD operations for the **RunPlatformProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunPlatformProgresses
    * const runPlatformProgresses = await prisma.runPlatformProgress.findMany()
    * ```
    */
  get runPlatformProgress(): Prisma.RunPlatformProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.runEvent`: Exposes CRUD operations for the **RunEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunEvents
    * const runEvents = await prisma.runEvent.findMany()
    * ```
    */
  get runEvent(): Prisma.RunEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadRawData`: Exposes CRUD operations for the **LeadRawData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadRawData
    * const leadRawData = await prisma.leadRawData.findMany()
    * ```
    */
  get leadRawData(): Prisma.LeadRawDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Campaign: 'Campaign',
    CampaignPlatform: 'CampaignPlatform',
    Run: 'Run',
    AgentState: 'AgentState',
    RunPlatformProgress: 'RunPlatformProgress',
    RunEvent: 'RunEvent',
    Lead: 'Lead',
    LeadRawData: 'LeadRawData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campaign" | "campaignPlatform" | "run" | "agentState" | "runPlatformProgress" | "runEvent" | "lead" | "leadRawData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      CampaignPlatform: {
        payload: Prisma.$CampaignPlatformPayload<ExtArgs>
        fields: Prisma.CampaignPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>
          }
          findFirst: {
            args: Prisma.CampaignPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>
          }
          findMany: {
            args: Prisma.CampaignPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>[]
          }
          create: {
            args: Prisma.CampaignPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>
          }
          createMany: {
            args: Prisma.CampaignPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>[]
          }
          delete: {
            args: Prisma.CampaignPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>
          }
          update: {
            args: Prisma.CampaignPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>
          }
          deleteMany: {
            args: Prisma.CampaignPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignPlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>[]
          }
          upsert: {
            args: Prisma.CampaignPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPlatformPayload>
          }
          aggregate: {
            args: Prisma.CampaignPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignPlatform>
          }
          groupBy: {
            args: Prisma.CampaignPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignPlatformCountAggregateOutputType> | number
          }
        }
      }
      Run: {
        payload: Prisma.$RunPayload<ExtArgs>
        fields: Prisma.RunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findFirst: {
            args: Prisma.RunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findMany: {
            args: Prisma.RunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          create: {
            args: Prisma.RunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          createMany: {
            args: Prisma.RunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          delete: {
            args: Prisma.RunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          update: {
            args: Prisma.RunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          deleteMany: {
            args: Prisma.RunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          upsert: {
            args: Prisma.RunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          aggregate: {
            args: Prisma.RunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRun>
          }
          groupBy: {
            args: Prisma.RunGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunCountArgs<ExtArgs>
            result: $Utils.Optional<RunCountAggregateOutputType> | number
          }
        }
      }
      AgentState: {
        payload: Prisma.$AgentStatePayload<ExtArgs>
        fields: Prisma.AgentStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>
          }
          findFirst: {
            args: Prisma.AgentStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>
          }
          findMany: {
            args: Prisma.AgentStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>[]
          }
          create: {
            args: Prisma.AgentStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>
          }
          createMany: {
            args: Prisma.AgentStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>[]
          }
          delete: {
            args: Prisma.AgentStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>
          }
          update: {
            args: Prisma.AgentStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>
          }
          deleteMany: {
            args: Prisma.AgentStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>[]
          }
          upsert: {
            args: Prisma.AgentStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStatePayload>
          }
          aggregate: {
            args: Prisma.AgentStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentState>
          }
          groupBy: {
            args: Prisma.AgentStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentStateCountArgs<ExtArgs>
            result: $Utils.Optional<AgentStateCountAggregateOutputType> | number
          }
        }
      }
      RunPlatformProgress: {
        payload: Prisma.$RunPlatformProgressPayload<ExtArgs>
        fields: Prisma.RunPlatformProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunPlatformProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunPlatformProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>
          }
          findFirst: {
            args: Prisma.RunPlatformProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunPlatformProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>
          }
          findMany: {
            args: Prisma.RunPlatformProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>[]
          }
          create: {
            args: Prisma.RunPlatformProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>
          }
          createMany: {
            args: Prisma.RunPlatformProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunPlatformProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>[]
          }
          delete: {
            args: Prisma.RunPlatformProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>
          }
          update: {
            args: Prisma.RunPlatformProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>
          }
          deleteMany: {
            args: Prisma.RunPlatformProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunPlatformProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunPlatformProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>[]
          }
          upsert: {
            args: Prisma.RunPlatformProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlatformProgressPayload>
          }
          aggregate: {
            args: Prisma.RunPlatformProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRunPlatformProgress>
          }
          groupBy: {
            args: Prisma.RunPlatformProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunPlatformProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunPlatformProgressCountArgs<ExtArgs>
            result: $Utils.Optional<RunPlatformProgressCountAggregateOutputType> | number
          }
        }
      }
      RunEvent: {
        payload: Prisma.$RunEventPayload<ExtArgs>
        fields: Prisma.RunEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>
          }
          findFirst: {
            args: Prisma.RunEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>
          }
          findMany: {
            args: Prisma.RunEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>[]
          }
          create: {
            args: Prisma.RunEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>
          }
          createMany: {
            args: Prisma.RunEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>[]
          }
          delete: {
            args: Prisma.RunEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>
          }
          update: {
            args: Prisma.RunEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>
          }
          deleteMany: {
            args: Prisma.RunEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>[]
          }
          upsert: {
            args: Prisma.RunEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunEventPayload>
          }
          aggregate: {
            args: Prisma.RunEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRunEvent>
          }
          groupBy: {
            args: Prisma.RunEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunEventCountArgs<ExtArgs>
            result: $Utils.Optional<RunEventCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      LeadRawData: {
        payload: Prisma.$LeadRawDataPayload<ExtArgs>
        fields: Prisma.LeadRawDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadRawDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadRawDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>
          }
          findFirst: {
            args: Prisma.LeadRawDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadRawDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>
          }
          findMany: {
            args: Prisma.LeadRawDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>[]
          }
          create: {
            args: Prisma.LeadRawDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>
          }
          createMany: {
            args: Prisma.LeadRawDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadRawDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>[]
          }
          delete: {
            args: Prisma.LeadRawDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>
          }
          update: {
            args: Prisma.LeadRawDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>
          }
          deleteMany: {
            args: Prisma.LeadRawDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadRawDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadRawDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>[]
          }
          upsert: {
            args: Prisma.LeadRawDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRawDataPayload>
          }
          aggregate: {
            args: Prisma.LeadRawDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadRawData>
          }
          groupBy: {
            args: Prisma.LeadRawDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadRawDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadRawDataCountArgs<ExtArgs>
            result: $Utils.Optional<LeadRawDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    campaign?: CampaignOmit
    campaignPlatform?: CampaignPlatformOmit
    run?: RunOmit
    agentState?: AgentStateOmit
    runPlatformProgress?: RunPlatformProgressOmit
    runEvent?: RunEventOmit
    lead?: LeadOmit
    leadRawData?: LeadRawDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    platforms: number
    runs: number
    leads: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platforms?: boolean | CampaignCountOutputTypeCountPlatformsArgs
    runs?: boolean | CampaignCountOutputTypeCountRunsArgs
    leads?: boolean | CampaignCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignPlatformWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type CampaignPlatformCountOutputType
   */

  export type CampaignPlatformCountOutputType = {
    runs: number
    leads: number
  }

  export type CampaignPlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | CampaignPlatformCountOutputTypeCountRunsArgs
    leads?: boolean | CampaignPlatformCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * CampaignPlatformCountOutputType without action
   */
  export type CampaignPlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatformCountOutputType
     */
    select?: CampaignPlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignPlatformCountOutputType without action
   */
  export type CampaignPlatformCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunPlatformProgressWhereInput
  }

  /**
   * CampaignPlatformCountOutputType without action
   */
  export type CampaignPlatformCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type RunCountOutputType
   */

  export type RunCountOutputType = {
    platformProgress: number
    events: number
    leads: number
  }

  export type RunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platformProgress?: boolean | RunCountOutputTypeCountPlatformProgressArgs
    events?: boolean | RunCountOutputTypeCountEventsArgs
    leads?: boolean | RunCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunCountOutputType
     */
    select?: RunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeCountPlatformProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunPlatformProgressWhereInput
  }

  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunEventWhereInput
  }

  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    niche: string | null
    icp: string | null
    goal: string | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    niche: string | null
    icp: string | null
    goal: string | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    niche: number
    icp: number
    goal: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    niche?: true
    icp?: true
    goal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    niche?: true
    icp?: true
    goal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    niche?: true
    icp?: true
    goal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    niche: string
    icp: string
    goal: string | null
    status: $Enums.CampaignStatus
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    niche?: boolean
    icp?: boolean
    goal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    platforms?: boolean | Campaign$platformsArgs<ExtArgs>
    runs?: boolean | Campaign$runsArgs<ExtArgs>
    leads?: boolean | Campaign$leadsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    niche?: boolean
    icp?: boolean
    goal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    niche?: boolean
    icp?: boolean
    goal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    niche?: boolean
    icp?: boolean
    goal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "niche" | "icp" | "goal" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platforms?: boolean | Campaign$platformsArgs<ExtArgs>
    runs?: boolean | Campaign$runsArgs<ExtArgs>
    leads?: boolean | Campaign$leadsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      platforms: Prisma.$CampaignPlatformPayload<ExtArgs>[]
      runs: Prisma.$RunPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      niche: string
      icp: string
      goal: string | null
      status: $Enums.CampaignStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    platforms<T extends Campaign$platformsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$platformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    runs<T extends Campaign$runsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Campaign$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly niche: FieldRef<"Campaign", 'String'>
    readonly icp: FieldRef<"Campaign", 'String'>
    readonly goal: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.platforms
   */
  export type Campaign$platformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    where?: CampaignPlatformWhereInput
    orderBy?: CampaignPlatformOrderByWithRelationInput | CampaignPlatformOrderByWithRelationInput[]
    cursor?: CampaignPlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignPlatformScalarFieldEnum | CampaignPlatformScalarFieldEnum[]
  }

  /**
   * Campaign.runs
   */
  export type Campaign$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    cursor?: RunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Campaign.leads
   */
  export type Campaign$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model CampaignPlatform
   */

  export type AggregateCampaignPlatform = {
    _count: CampaignPlatformCountAggregateOutputType | null
    _avg: CampaignPlatformAvgAggregateOutputType | null
    _sum: CampaignPlatformSumAggregateOutputType | null
    _min: CampaignPlatformMinAggregateOutputType | null
    _max: CampaignPlatformMaxAggregateOutputType | null
  }

  export type CampaignPlatformAvgAggregateOutputType = {
    priority: number | null
  }

  export type CampaignPlatformSumAggregateOutputType = {
    priority: number | null
  }

  export type CampaignPlatformMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    platform: $Enums.Platform | null
    searchQuery: string | null
    searchFilters: string | null
    priority: number | null
    isEnabled: boolean | null
    createdAt: Date | null
  }

  export type CampaignPlatformMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    platform: $Enums.Platform | null
    searchQuery: string | null
    searchFilters: string | null
    priority: number | null
    isEnabled: boolean | null
    createdAt: Date | null
  }

  export type CampaignPlatformCountAggregateOutputType = {
    id: number
    campaignId: number
    platform: number
    searchQuery: number
    searchFilters: number
    priority: number
    isEnabled: number
    createdAt: number
    _all: number
  }


  export type CampaignPlatformAvgAggregateInputType = {
    priority?: true
  }

  export type CampaignPlatformSumAggregateInputType = {
    priority?: true
  }

  export type CampaignPlatformMinAggregateInputType = {
    id?: true
    campaignId?: true
    platform?: true
    searchQuery?: true
    searchFilters?: true
    priority?: true
    isEnabled?: true
    createdAt?: true
  }

  export type CampaignPlatformMaxAggregateInputType = {
    id?: true
    campaignId?: true
    platform?: true
    searchQuery?: true
    searchFilters?: true
    priority?: true
    isEnabled?: true
    createdAt?: true
  }

  export type CampaignPlatformCountAggregateInputType = {
    id?: true
    campaignId?: true
    platform?: true
    searchQuery?: true
    searchFilters?: true
    priority?: true
    isEnabled?: true
    createdAt?: true
    _all?: true
  }

  export type CampaignPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignPlatform to aggregate.
     */
    where?: CampaignPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPlatforms to fetch.
     */
    orderBy?: CampaignPlatformOrderByWithRelationInput | CampaignPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignPlatforms
    **/
    _count?: true | CampaignPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignPlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignPlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignPlatformMaxAggregateInputType
  }

  export type GetCampaignPlatformAggregateType<T extends CampaignPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignPlatform[P]>
      : GetScalarType<T[P], AggregateCampaignPlatform[P]>
  }




  export type CampaignPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignPlatformWhereInput
    orderBy?: CampaignPlatformOrderByWithAggregationInput | CampaignPlatformOrderByWithAggregationInput[]
    by: CampaignPlatformScalarFieldEnum[] | CampaignPlatformScalarFieldEnum
    having?: CampaignPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignPlatformCountAggregateInputType | true
    _avg?: CampaignPlatformAvgAggregateInputType
    _sum?: CampaignPlatformSumAggregateInputType
    _min?: CampaignPlatformMinAggregateInputType
    _max?: CampaignPlatformMaxAggregateInputType
  }

  export type CampaignPlatformGroupByOutputType = {
    id: string
    campaignId: string
    platform: $Enums.Platform
    searchQuery: string | null
    searchFilters: string | null
    priority: number
    isEnabled: boolean
    createdAt: Date
    _count: CampaignPlatformCountAggregateOutputType | null
    _avg: CampaignPlatformAvgAggregateOutputType | null
    _sum: CampaignPlatformSumAggregateOutputType | null
    _min: CampaignPlatformMinAggregateOutputType | null
    _max: CampaignPlatformMaxAggregateOutputType | null
  }

  type GetCampaignPlatformGroupByPayload<T extends CampaignPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignPlatformGroupByOutputType[P]>
        }
      >
    >


  export type CampaignPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    searchQuery?: boolean
    searchFilters?: boolean
    priority?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    runs?: boolean | CampaignPlatform$runsArgs<ExtArgs>
    leads?: boolean | CampaignPlatform$leadsArgs<ExtArgs>
    _count?: boolean | CampaignPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPlatform"]>

  export type CampaignPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    searchQuery?: boolean
    searchFilters?: boolean
    priority?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPlatform"]>

  export type CampaignPlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    searchQuery?: boolean
    searchFilters?: boolean
    priority?: boolean
    isEnabled?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPlatform"]>

  export type CampaignPlatformSelectScalar = {
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    searchQuery?: boolean
    searchFilters?: boolean
    priority?: boolean
    isEnabled?: boolean
    createdAt?: boolean
  }

  export type CampaignPlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "platform" | "searchQuery" | "searchFilters" | "priority" | "isEnabled" | "createdAt", ExtArgs["result"]["campaignPlatform"]>
  export type CampaignPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    runs?: boolean | CampaignPlatform$runsArgs<ExtArgs>
    leads?: boolean | CampaignPlatform$leadsArgs<ExtArgs>
    _count?: boolean | CampaignPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type CampaignPlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $CampaignPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignPlatform"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      runs: Prisma.$RunPlatformProgressPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      platform: $Enums.Platform
      searchQuery: string | null
      searchFilters: string | null
      priority: number
      isEnabled: boolean
      createdAt: Date
    }, ExtArgs["result"]["campaignPlatform"]>
    composites: {}
  }

  type CampaignPlatformGetPayload<S extends boolean | null | undefined | CampaignPlatformDefaultArgs> = $Result.GetResult<Prisma.$CampaignPlatformPayload, S>

  type CampaignPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignPlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignPlatformCountAggregateInputType | true
    }

  export interface CampaignPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignPlatform'], meta: { name: 'CampaignPlatform' } }
    /**
     * Find zero or one CampaignPlatform that matches the filter.
     * @param {CampaignPlatformFindUniqueArgs} args - Arguments to find a CampaignPlatform
     * @example
     * // Get one CampaignPlatform
     * const campaignPlatform = await prisma.campaignPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignPlatformFindUniqueArgs>(args: SelectSubset<T, CampaignPlatformFindUniqueArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignPlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignPlatformFindUniqueOrThrowArgs} args - Arguments to find a CampaignPlatform
     * @example
     * // Get one CampaignPlatform
     * const campaignPlatform = await prisma.campaignPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPlatformFindFirstArgs} args - Arguments to find a CampaignPlatform
     * @example
     * // Get one CampaignPlatform
     * const campaignPlatform = await prisma.campaignPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignPlatformFindFirstArgs>(args?: SelectSubset<T, CampaignPlatformFindFirstArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPlatformFindFirstOrThrowArgs} args - Arguments to find a CampaignPlatform
     * @example
     * // Get one CampaignPlatform
     * const campaignPlatform = await prisma.campaignPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignPlatforms
     * const campaignPlatforms = await prisma.campaignPlatform.findMany()
     * 
     * // Get first 10 CampaignPlatforms
     * const campaignPlatforms = await prisma.campaignPlatform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignPlatformWithIdOnly = await prisma.campaignPlatform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignPlatformFindManyArgs>(args?: SelectSubset<T, CampaignPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignPlatform.
     * @param {CampaignPlatformCreateArgs} args - Arguments to create a CampaignPlatform.
     * @example
     * // Create one CampaignPlatform
     * const CampaignPlatform = await prisma.campaignPlatform.create({
     *   data: {
     *     // ... data to create a CampaignPlatform
     *   }
     * })
     * 
     */
    create<T extends CampaignPlatformCreateArgs>(args: SelectSubset<T, CampaignPlatformCreateArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignPlatforms.
     * @param {CampaignPlatformCreateManyArgs} args - Arguments to create many CampaignPlatforms.
     * @example
     * // Create many CampaignPlatforms
     * const campaignPlatform = await prisma.campaignPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignPlatformCreateManyArgs>(args?: SelectSubset<T, CampaignPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignPlatforms and returns the data saved in the database.
     * @param {CampaignPlatformCreateManyAndReturnArgs} args - Arguments to create many CampaignPlatforms.
     * @example
     * // Create many CampaignPlatforms
     * const campaignPlatform = await prisma.campaignPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignPlatforms and only return the `id`
     * const campaignPlatformWithIdOnly = await prisma.campaignPlatform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignPlatform.
     * @param {CampaignPlatformDeleteArgs} args - Arguments to delete one CampaignPlatform.
     * @example
     * // Delete one CampaignPlatform
     * const CampaignPlatform = await prisma.campaignPlatform.delete({
     *   where: {
     *     // ... filter to delete one CampaignPlatform
     *   }
     * })
     * 
     */
    delete<T extends CampaignPlatformDeleteArgs>(args: SelectSubset<T, CampaignPlatformDeleteArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignPlatform.
     * @param {CampaignPlatformUpdateArgs} args - Arguments to update one CampaignPlatform.
     * @example
     * // Update one CampaignPlatform
     * const campaignPlatform = await prisma.campaignPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignPlatformUpdateArgs>(args: SelectSubset<T, CampaignPlatformUpdateArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignPlatforms.
     * @param {CampaignPlatformDeleteManyArgs} args - Arguments to filter CampaignPlatforms to delete.
     * @example
     * // Delete a few CampaignPlatforms
     * const { count } = await prisma.campaignPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignPlatformDeleteManyArgs>(args?: SelectSubset<T, CampaignPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignPlatforms
     * const campaignPlatform = await prisma.campaignPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignPlatformUpdateManyArgs>(args: SelectSubset<T, CampaignPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignPlatforms and returns the data updated in the database.
     * @param {CampaignPlatformUpdateManyAndReturnArgs} args - Arguments to update many CampaignPlatforms.
     * @example
     * // Update many CampaignPlatforms
     * const campaignPlatform = await prisma.campaignPlatform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignPlatforms and only return the `id`
     * const campaignPlatformWithIdOnly = await prisma.campaignPlatform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignPlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignPlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignPlatform.
     * @param {CampaignPlatformUpsertArgs} args - Arguments to update or create a CampaignPlatform.
     * @example
     * // Update or create a CampaignPlatform
     * const campaignPlatform = await prisma.campaignPlatform.upsert({
     *   create: {
     *     // ... data to create a CampaignPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignPlatform we want to update
     *   }
     * })
     */
    upsert<T extends CampaignPlatformUpsertArgs>(args: SelectSubset<T, CampaignPlatformUpsertArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPlatformCountArgs} args - Arguments to filter CampaignPlatforms to count.
     * @example
     * // Count the number of CampaignPlatforms
     * const count = await prisma.campaignPlatform.count({
     *   where: {
     *     // ... the filter for the CampaignPlatforms we want to count
     *   }
     * })
    **/
    count<T extends CampaignPlatformCountArgs>(
      args?: Subset<T, CampaignPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignPlatformAggregateArgs>(args: Subset<T, CampaignPlatformAggregateArgs>): Prisma.PrismaPromise<GetCampaignPlatformAggregateType<T>>

    /**
     * Group by CampaignPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignPlatformGroupByArgs['orderBy'] }
        : { orderBy?: CampaignPlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignPlatform model
   */
  readonly fields: CampaignPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    runs<T extends CampaignPlatform$runsArgs<ExtArgs> = {}>(args?: Subset<T, CampaignPlatform$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends CampaignPlatform$leadsArgs<ExtArgs> = {}>(args?: Subset<T, CampaignPlatform$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignPlatform model
   */
  interface CampaignPlatformFieldRefs {
    readonly id: FieldRef<"CampaignPlatform", 'String'>
    readonly campaignId: FieldRef<"CampaignPlatform", 'String'>
    readonly platform: FieldRef<"CampaignPlatform", 'Platform'>
    readonly searchQuery: FieldRef<"CampaignPlatform", 'String'>
    readonly searchFilters: FieldRef<"CampaignPlatform", 'String'>
    readonly priority: FieldRef<"CampaignPlatform", 'Int'>
    readonly isEnabled: FieldRef<"CampaignPlatform", 'Boolean'>
    readonly createdAt: FieldRef<"CampaignPlatform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignPlatform findUnique
   */
  export type CampaignPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPlatform to fetch.
     */
    where: CampaignPlatformWhereUniqueInput
  }

  /**
   * CampaignPlatform findUniqueOrThrow
   */
  export type CampaignPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPlatform to fetch.
     */
    where: CampaignPlatformWhereUniqueInput
  }

  /**
   * CampaignPlatform findFirst
   */
  export type CampaignPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPlatform to fetch.
     */
    where?: CampaignPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPlatforms to fetch.
     */
    orderBy?: CampaignPlatformOrderByWithRelationInput | CampaignPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignPlatforms.
     */
    cursor?: CampaignPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignPlatforms.
     */
    distinct?: CampaignPlatformScalarFieldEnum | CampaignPlatformScalarFieldEnum[]
  }

  /**
   * CampaignPlatform findFirstOrThrow
   */
  export type CampaignPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPlatform to fetch.
     */
    where?: CampaignPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPlatforms to fetch.
     */
    orderBy?: CampaignPlatformOrderByWithRelationInput | CampaignPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignPlatforms.
     */
    cursor?: CampaignPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignPlatforms.
     */
    distinct?: CampaignPlatformScalarFieldEnum | CampaignPlatformScalarFieldEnum[]
  }

  /**
   * CampaignPlatform findMany
   */
  export type CampaignPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPlatforms to fetch.
     */
    where?: CampaignPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPlatforms to fetch.
     */
    orderBy?: CampaignPlatformOrderByWithRelationInput | CampaignPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignPlatforms.
     */
    cursor?: CampaignPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignPlatforms.
     */
    distinct?: CampaignPlatformScalarFieldEnum | CampaignPlatformScalarFieldEnum[]
  }

  /**
   * CampaignPlatform create
   */
  export type CampaignPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignPlatform.
     */
    data: XOR<CampaignPlatformCreateInput, CampaignPlatformUncheckedCreateInput>
  }

  /**
   * CampaignPlatform createMany
   */
  export type CampaignPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignPlatforms.
     */
    data: CampaignPlatformCreateManyInput | CampaignPlatformCreateManyInput[]
  }

  /**
   * CampaignPlatform createManyAndReturn
   */
  export type CampaignPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignPlatforms.
     */
    data: CampaignPlatformCreateManyInput | CampaignPlatformCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignPlatform update
   */
  export type CampaignPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignPlatform.
     */
    data: XOR<CampaignPlatformUpdateInput, CampaignPlatformUncheckedUpdateInput>
    /**
     * Choose, which CampaignPlatform to update.
     */
    where: CampaignPlatformWhereUniqueInput
  }

  /**
   * CampaignPlatform updateMany
   */
  export type CampaignPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignPlatforms.
     */
    data: XOR<CampaignPlatformUpdateManyMutationInput, CampaignPlatformUncheckedUpdateManyInput>
    /**
     * Filter which CampaignPlatforms to update
     */
    where?: CampaignPlatformWhereInput
    /**
     * Limit how many CampaignPlatforms to update.
     */
    limit?: number
  }

  /**
   * CampaignPlatform updateManyAndReturn
   */
  export type CampaignPlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * The data used to update CampaignPlatforms.
     */
    data: XOR<CampaignPlatformUpdateManyMutationInput, CampaignPlatformUncheckedUpdateManyInput>
    /**
     * Filter which CampaignPlatforms to update
     */
    where?: CampaignPlatformWhereInput
    /**
     * Limit how many CampaignPlatforms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignPlatform upsert
   */
  export type CampaignPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignPlatform to update in case it exists.
     */
    where: CampaignPlatformWhereUniqueInput
    /**
     * In case the CampaignPlatform found by the `where` argument doesn't exist, create a new CampaignPlatform with this data.
     */
    create: XOR<CampaignPlatformCreateInput, CampaignPlatformUncheckedCreateInput>
    /**
     * In case the CampaignPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignPlatformUpdateInput, CampaignPlatformUncheckedUpdateInput>
  }

  /**
   * CampaignPlatform delete
   */
  export type CampaignPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    /**
     * Filter which CampaignPlatform to delete.
     */
    where: CampaignPlatformWhereUniqueInput
  }

  /**
   * CampaignPlatform deleteMany
   */
  export type CampaignPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignPlatforms to delete
     */
    where?: CampaignPlatformWhereInput
    /**
     * Limit how many CampaignPlatforms to delete.
     */
    limit?: number
  }

  /**
   * CampaignPlatform.runs
   */
  export type CampaignPlatform$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    where?: RunPlatformProgressWhereInput
    orderBy?: RunPlatformProgressOrderByWithRelationInput | RunPlatformProgressOrderByWithRelationInput[]
    cursor?: RunPlatformProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunPlatformProgressScalarFieldEnum | RunPlatformProgressScalarFieldEnum[]
  }

  /**
   * CampaignPlatform.leads
   */
  export type CampaignPlatform$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * CampaignPlatform without action
   */
  export type CampaignPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
  }


  /**
   * Model Run
   */

  export type AggregateRun = {
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  export type RunAvgAggregateOutputType = {
    totalLeadsFound: number | null
  }

  export type RunSumAggregateOutputType = {
    totalLeadsFound: number | null
  }

  export type RunMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    status: $Enums.RunStatus | null
    totalLeadsFound: number | null
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
  }

  export type RunMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    status: $Enums.RunStatus | null
    totalLeadsFound: number | null
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
  }

  export type RunCountAggregateOutputType = {
    id: number
    campaignId: number
    status: number
    totalLeadsFound: number
    startedAt: number
    finishedAt: number
    errorMessage: number
    _all: number
  }


  export type RunAvgAggregateInputType = {
    totalLeadsFound?: true
  }

  export type RunSumAggregateInputType = {
    totalLeadsFound?: true
  }

  export type RunMinAggregateInputType = {
    id?: true
    campaignId?: true
    status?: true
    totalLeadsFound?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
  }

  export type RunMaxAggregateInputType = {
    id?: true
    campaignId?: true
    status?: true
    totalLeadsFound?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
  }

  export type RunCountAggregateInputType = {
    id?: true
    campaignId?: true
    status?: true
    totalLeadsFound?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
    _all?: true
  }

  export type RunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Run to aggregate.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Runs
    **/
    _count?: true | RunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunMaxAggregateInputType
  }

  export type GetRunAggregateType<T extends RunAggregateArgs> = {
        [P in keyof T & keyof AggregateRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRun[P]>
      : GetScalarType<T[P], AggregateRun[P]>
  }




  export type RunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
    orderBy?: RunOrderByWithAggregationInput | RunOrderByWithAggregationInput[]
    by: RunScalarFieldEnum[] | RunScalarFieldEnum
    having?: RunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunCountAggregateInputType | true
    _avg?: RunAvgAggregateInputType
    _sum?: RunSumAggregateInputType
    _min?: RunMinAggregateInputType
    _max?: RunMaxAggregateInputType
  }

  export type RunGroupByOutputType = {
    id: string
    campaignId: string
    status: $Enums.RunStatus
    totalLeadsFound: number
    startedAt: Date
    finishedAt: Date | null
    errorMessage: string | null
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  type GetRunGroupByPayload<T extends RunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunGroupByOutputType[P]>
            : GetScalarType<T[P], RunGroupByOutputType[P]>
        }
      >
    >


  export type RunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    status?: boolean
    totalLeadsFound?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    agentState?: boolean | Run$agentStateArgs<ExtArgs>
    platformProgress?: boolean | Run$platformProgressArgs<ExtArgs>
    events?: boolean | Run$eventsArgs<ExtArgs>
    leads?: boolean | Run$leadsArgs<ExtArgs>
    _count?: boolean | RunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    status?: boolean
    totalLeadsFound?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    status?: boolean
    totalLeadsFound?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectScalar = {
    id?: boolean
    campaignId?: boolean
    status?: boolean
    totalLeadsFound?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
  }

  export type RunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "status" | "totalLeadsFound" | "startedAt" | "finishedAt" | "errorMessage", ExtArgs["result"]["run"]>
  export type RunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    agentState?: boolean | Run$agentStateArgs<ExtArgs>
    platformProgress?: boolean | Run$platformProgressArgs<ExtArgs>
    events?: boolean | Run$eventsArgs<ExtArgs>
    leads?: boolean | Run$leadsArgs<ExtArgs>
    _count?: boolean | RunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type RunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $RunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Run"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      agentState: Prisma.$AgentStatePayload<ExtArgs> | null
      platformProgress: Prisma.$RunPlatformProgressPayload<ExtArgs>[]
      events: Prisma.$RunEventPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      status: $Enums.RunStatus
      totalLeadsFound: number
      startedAt: Date
      finishedAt: Date | null
      errorMessage: string | null
    }, ExtArgs["result"]["run"]>
    composites: {}
  }

  type RunGetPayload<S extends boolean | null | undefined | RunDefaultArgs> = $Result.GetResult<Prisma.$RunPayload, S>

  type RunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunCountAggregateInputType | true
    }

  export interface RunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Run'], meta: { name: 'Run' } }
    /**
     * Find zero or one Run that matches the filter.
     * @param {RunFindUniqueArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunFindUniqueArgs>(args: SelectSubset<T, RunFindUniqueArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Run that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunFindUniqueOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunFindUniqueOrThrowArgs>(args: SelectSubset<T, RunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunFindFirstArgs>(args?: SelectSubset<T, RunFindFirstArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunFindFirstOrThrowArgs>(args?: SelectSubset<T, RunFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Runs
     * const runs = await prisma.run.findMany()
     * 
     * // Get first 10 Runs
     * const runs = await prisma.run.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runWithIdOnly = await prisma.run.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunFindManyArgs>(args?: SelectSubset<T, RunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Run.
     * @param {RunCreateArgs} args - Arguments to create a Run.
     * @example
     * // Create one Run
     * const Run = await prisma.run.create({
     *   data: {
     *     // ... data to create a Run
     *   }
     * })
     * 
     */
    create<T extends RunCreateArgs>(args: SelectSubset<T, RunCreateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Runs.
     * @param {RunCreateManyArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunCreateManyArgs>(args?: SelectSubset<T, RunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Runs and returns the data saved in the database.
     * @param {RunCreateManyAndReturnArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunCreateManyAndReturnArgs>(args?: SelectSubset<T, RunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Run.
     * @param {RunDeleteArgs} args - Arguments to delete one Run.
     * @example
     * // Delete one Run
     * const Run = await prisma.run.delete({
     *   where: {
     *     // ... filter to delete one Run
     *   }
     * })
     * 
     */
    delete<T extends RunDeleteArgs>(args: SelectSubset<T, RunDeleteArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Run.
     * @param {RunUpdateArgs} args - Arguments to update one Run.
     * @example
     * // Update one Run
     * const run = await prisma.run.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunUpdateArgs>(args: SelectSubset<T, RunUpdateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Runs.
     * @param {RunDeleteManyArgs} args - Arguments to filter Runs to delete.
     * @example
     * // Delete a few Runs
     * const { count } = await prisma.run.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunDeleteManyArgs>(args?: SelectSubset<T, RunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunUpdateManyArgs>(args: SelectSubset<T, RunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs and returns the data updated in the database.
     * @param {RunUpdateManyAndReturnArgs} args - Arguments to update many Runs.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RunUpdateManyAndReturnArgs>(args: SelectSubset<T, RunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Run.
     * @param {RunUpsertArgs} args - Arguments to update or create a Run.
     * @example
     * // Update or create a Run
     * const run = await prisma.run.upsert({
     *   create: {
     *     // ... data to create a Run
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Run we want to update
     *   }
     * })
     */
    upsert<T extends RunUpsertArgs>(args: SelectSubset<T, RunUpsertArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCountArgs} args - Arguments to filter Runs to count.
     * @example
     * // Count the number of Runs
     * const count = await prisma.run.count({
     *   where: {
     *     // ... the filter for the Runs we want to count
     *   }
     * })
    **/
    count<T extends RunCountArgs>(
      args?: Subset<T, RunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RunAggregateArgs>(args: Subset<T, RunAggregateArgs>): Prisma.PrismaPromise<GetRunAggregateType<T>>

    /**
     * Group by Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunGroupByArgs['orderBy'] }
        : { orderBy?: RunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Run model
   */
  readonly fields: RunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Run.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agentState<T extends Run$agentStateArgs<ExtArgs> = {}>(args?: Subset<T, Run$agentStateArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    platformProgress<T extends Run$platformProgressArgs<ExtArgs> = {}>(args?: Subset<T, Run$platformProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Run$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Run$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Run$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Run$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Run model
   */
  interface RunFieldRefs {
    readonly id: FieldRef<"Run", 'String'>
    readonly campaignId: FieldRef<"Run", 'String'>
    readonly status: FieldRef<"Run", 'RunStatus'>
    readonly totalLeadsFound: FieldRef<"Run", 'Int'>
    readonly startedAt: FieldRef<"Run", 'DateTime'>
    readonly finishedAt: FieldRef<"Run", 'DateTime'>
    readonly errorMessage: FieldRef<"Run", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Run findUnique
   */
  export type RunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findUniqueOrThrow
   */
  export type RunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findFirst
   */
  export type RunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findFirstOrThrow
   */
  export type RunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findMany
   */
  export type RunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Runs to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run create
   */
  export type RunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to create a Run.
     */
    data: XOR<RunCreateInput, RunUncheckedCreateInput>
  }

  /**
   * Run createMany
   */
  export type RunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
  }

  /**
   * Run createManyAndReturn
   */
  export type RunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run update
   */
  export type RunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to update a Run.
     */
    data: XOR<RunUpdateInput, RunUncheckedUpdateInput>
    /**
     * Choose, which Run to update.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run updateMany
   */
  export type RunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
  }

  /**
   * Run updateManyAndReturn
   */
  export type RunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run upsert
   */
  export type RunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The filter to search for the Run to update in case it exists.
     */
    where: RunWhereUniqueInput
    /**
     * In case the Run found by the `where` argument doesn't exist, create a new Run with this data.
     */
    create: XOR<RunCreateInput, RunUncheckedCreateInput>
    /**
     * In case the Run was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunUpdateInput, RunUncheckedUpdateInput>
  }

  /**
   * Run delete
   */
  export type RunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter which Run to delete.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run deleteMany
   */
  export type RunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Runs to delete
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to delete.
     */
    limit?: number
  }

  /**
   * Run.agentState
   */
  export type Run$agentStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    where?: AgentStateWhereInput
  }

  /**
   * Run.platformProgress
   */
  export type Run$platformProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    where?: RunPlatformProgressWhereInput
    orderBy?: RunPlatformProgressOrderByWithRelationInput | RunPlatformProgressOrderByWithRelationInput[]
    cursor?: RunPlatformProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunPlatformProgressScalarFieldEnum | RunPlatformProgressScalarFieldEnum[]
  }

  /**
   * Run.events
   */
  export type Run$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    where?: RunEventWhereInput
    orderBy?: RunEventOrderByWithRelationInput | RunEventOrderByWithRelationInput[]
    cursor?: RunEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunEventScalarFieldEnum | RunEventScalarFieldEnum[]
  }

  /**
   * Run.leads
   */
  export type Run$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Run without action
   */
  export type RunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
  }


  /**
   * Model AgentState
   */

  export type AggregateAgentState = {
    _count: AgentStateCountAggregateOutputType | null
    _avg: AgentStateAvgAggregateOutputType | null
    _sum: AgentStateSumAggregateOutputType | null
    _min: AgentStateMinAggregateOutputType | null
    _max: AgentStateMaxAggregateOutputType | null
  }

  export type AgentStateAvgAggregateOutputType = {
    currentPlatformIdx: number | null
  }

  export type AgentStateSumAggregateOutputType = {
    currentPlatformIdx: number | null
  }

  export type AgentStateMinAggregateOutputType = {
    id: string | null
    runId: string | null
    currentNode: string | null
    currentPlatform: $Enums.Platform | null
    currentPlatformIdx: number | null
    lastAction: string | null
    checkpoint: string | null
    hitlRequired: boolean | null
    hitlType: $Enums.HitlType | null
    hitlScreenshotPath: string | null
    hitlResolvedAt: Date | null
    updatedAt: Date | null
  }

  export type AgentStateMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    currentNode: string | null
    currentPlatform: $Enums.Platform | null
    currentPlatformIdx: number | null
    lastAction: string | null
    checkpoint: string | null
    hitlRequired: boolean | null
    hitlType: $Enums.HitlType | null
    hitlScreenshotPath: string | null
    hitlResolvedAt: Date | null
    updatedAt: Date | null
  }

  export type AgentStateCountAggregateOutputType = {
    id: number
    runId: number
    currentNode: number
    currentPlatform: number
    currentPlatformIdx: number
    lastAction: number
    checkpoint: number
    hitlRequired: number
    hitlType: number
    hitlScreenshotPath: number
    hitlResolvedAt: number
    updatedAt: number
    _all: number
  }


  export type AgentStateAvgAggregateInputType = {
    currentPlatformIdx?: true
  }

  export type AgentStateSumAggregateInputType = {
    currentPlatformIdx?: true
  }

  export type AgentStateMinAggregateInputType = {
    id?: true
    runId?: true
    currentNode?: true
    currentPlatform?: true
    currentPlatformIdx?: true
    lastAction?: true
    checkpoint?: true
    hitlRequired?: true
    hitlType?: true
    hitlScreenshotPath?: true
    hitlResolvedAt?: true
    updatedAt?: true
  }

  export type AgentStateMaxAggregateInputType = {
    id?: true
    runId?: true
    currentNode?: true
    currentPlatform?: true
    currentPlatformIdx?: true
    lastAction?: true
    checkpoint?: true
    hitlRequired?: true
    hitlType?: true
    hitlScreenshotPath?: true
    hitlResolvedAt?: true
    updatedAt?: true
  }

  export type AgentStateCountAggregateInputType = {
    id?: true
    runId?: true
    currentNode?: true
    currentPlatform?: true
    currentPlatformIdx?: true
    lastAction?: true
    checkpoint?: true
    hitlRequired?: true
    hitlType?: true
    hitlScreenshotPath?: true
    hitlResolvedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentState to aggregate.
     */
    where?: AgentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentStates to fetch.
     */
    orderBy?: AgentStateOrderByWithRelationInput | AgentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentStates
    **/
    _count?: true | AgentStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentStateMaxAggregateInputType
  }

  export type GetAgentStateAggregateType<T extends AgentStateAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentState[P]>
      : GetScalarType<T[P], AggregateAgentState[P]>
  }




  export type AgentStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentStateWhereInput
    orderBy?: AgentStateOrderByWithAggregationInput | AgentStateOrderByWithAggregationInput[]
    by: AgentStateScalarFieldEnum[] | AgentStateScalarFieldEnum
    having?: AgentStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentStateCountAggregateInputType | true
    _avg?: AgentStateAvgAggregateInputType
    _sum?: AgentStateSumAggregateInputType
    _min?: AgentStateMinAggregateInputType
    _max?: AgentStateMaxAggregateInputType
  }

  export type AgentStateGroupByOutputType = {
    id: string
    runId: string
    currentNode: string | null
    currentPlatform: $Enums.Platform | null
    currentPlatformIdx: number
    lastAction: string | null
    checkpoint: string | null
    hitlRequired: boolean
    hitlType: $Enums.HitlType | null
    hitlScreenshotPath: string | null
    hitlResolvedAt: Date | null
    updatedAt: Date
    _count: AgentStateCountAggregateOutputType | null
    _avg: AgentStateAvgAggregateOutputType | null
    _sum: AgentStateSumAggregateOutputType | null
    _min: AgentStateMinAggregateOutputType | null
    _max: AgentStateMaxAggregateOutputType | null
  }

  type GetAgentStateGroupByPayload<T extends AgentStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentStateGroupByOutputType[P]>
            : GetScalarType<T[P], AgentStateGroupByOutputType[P]>
        }
      >
    >


  export type AgentStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    currentNode?: boolean
    currentPlatform?: boolean
    currentPlatformIdx?: boolean
    lastAction?: boolean
    checkpoint?: boolean
    hitlRequired?: boolean
    hitlType?: boolean
    hitlScreenshotPath?: boolean
    hitlResolvedAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentState"]>

  export type AgentStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    currentNode?: boolean
    currentPlatform?: boolean
    currentPlatformIdx?: boolean
    lastAction?: boolean
    checkpoint?: boolean
    hitlRequired?: boolean
    hitlType?: boolean
    hitlScreenshotPath?: boolean
    hitlResolvedAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentState"]>

  export type AgentStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    currentNode?: boolean
    currentPlatform?: boolean
    currentPlatformIdx?: boolean
    lastAction?: boolean
    checkpoint?: boolean
    hitlRequired?: boolean
    hitlType?: boolean
    hitlScreenshotPath?: boolean
    hitlResolvedAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentState"]>

  export type AgentStateSelectScalar = {
    id?: boolean
    runId?: boolean
    currentNode?: boolean
    currentPlatform?: boolean
    currentPlatformIdx?: boolean
    lastAction?: boolean
    checkpoint?: boolean
    hitlRequired?: boolean
    hitlType?: boolean
    hitlScreenshotPath?: boolean
    hitlResolvedAt?: boolean
    updatedAt?: boolean
  }

  export type AgentStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "currentNode" | "currentPlatform" | "currentPlatformIdx" | "lastAction" | "checkpoint" | "hitlRequired" | "hitlType" | "hitlScreenshotPath" | "hitlResolvedAt" | "updatedAt", ExtArgs["result"]["agentState"]>
  export type AgentStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type AgentStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type AgentStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }

  export type $AgentStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentState"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      currentNode: string | null
      currentPlatform: $Enums.Platform | null
      currentPlatformIdx: number
      lastAction: string | null
      checkpoint: string | null
      hitlRequired: boolean
      hitlType: $Enums.HitlType | null
      hitlScreenshotPath: string | null
      hitlResolvedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["agentState"]>
    composites: {}
  }

  type AgentStateGetPayload<S extends boolean | null | undefined | AgentStateDefaultArgs> = $Result.GetResult<Prisma.$AgentStatePayload, S>

  type AgentStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentStateCountAggregateInputType | true
    }

  export interface AgentStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentState'], meta: { name: 'AgentState' } }
    /**
     * Find zero or one AgentState that matches the filter.
     * @param {AgentStateFindUniqueArgs} args - Arguments to find a AgentState
     * @example
     * // Get one AgentState
     * const agentState = await prisma.agentState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentStateFindUniqueArgs>(args: SelectSubset<T, AgentStateFindUniqueArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentStateFindUniqueOrThrowArgs} args - Arguments to find a AgentState
     * @example
     * // Get one AgentState
     * const agentState = await prisma.agentState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentStateFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStateFindFirstArgs} args - Arguments to find a AgentState
     * @example
     * // Get one AgentState
     * const agentState = await prisma.agentState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentStateFindFirstArgs>(args?: SelectSubset<T, AgentStateFindFirstArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStateFindFirstOrThrowArgs} args - Arguments to find a AgentState
     * @example
     * // Get one AgentState
     * const agentState = await prisma.agentState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentStateFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentStates
     * const agentStates = await prisma.agentState.findMany()
     * 
     * // Get first 10 AgentStates
     * const agentStates = await prisma.agentState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentStateWithIdOnly = await prisma.agentState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentStateFindManyArgs>(args?: SelectSubset<T, AgentStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentState.
     * @param {AgentStateCreateArgs} args - Arguments to create a AgentState.
     * @example
     * // Create one AgentState
     * const AgentState = await prisma.agentState.create({
     *   data: {
     *     // ... data to create a AgentState
     *   }
     * })
     * 
     */
    create<T extends AgentStateCreateArgs>(args: SelectSubset<T, AgentStateCreateArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentStates.
     * @param {AgentStateCreateManyArgs} args - Arguments to create many AgentStates.
     * @example
     * // Create many AgentStates
     * const agentState = await prisma.agentState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentStateCreateManyArgs>(args?: SelectSubset<T, AgentStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentStates and returns the data saved in the database.
     * @param {AgentStateCreateManyAndReturnArgs} args - Arguments to create many AgentStates.
     * @example
     * // Create many AgentStates
     * const agentState = await prisma.agentState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentStates and only return the `id`
     * const agentStateWithIdOnly = await prisma.agentState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentStateCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentState.
     * @param {AgentStateDeleteArgs} args - Arguments to delete one AgentState.
     * @example
     * // Delete one AgentState
     * const AgentState = await prisma.agentState.delete({
     *   where: {
     *     // ... filter to delete one AgentState
     *   }
     * })
     * 
     */
    delete<T extends AgentStateDeleteArgs>(args: SelectSubset<T, AgentStateDeleteArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentState.
     * @param {AgentStateUpdateArgs} args - Arguments to update one AgentState.
     * @example
     * // Update one AgentState
     * const agentState = await prisma.agentState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentStateUpdateArgs>(args: SelectSubset<T, AgentStateUpdateArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentStates.
     * @param {AgentStateDeleteManyArgs} args - Arguments to filter AgentStates to delete.
     * @example
     * // Delete a few AgentStates
     * const { count } = await prisma.agentState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentStateDeleteManyArgs>(args?: SelectSubset<T, AgentStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentStates
     * const agentState = await prisma.agentState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentStateUpdateManyArgs>(args: SelectSubset<T, AgentStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentStates and returns the data updated in the database.
     * @param {AgentStateUpdateManyAndReturnArgs} args - Arguments to update many AgentStates.
     * @example
     * // Update many AgentStates
     * const agentState = await prisma.agentState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentStates and only return the `id`
     * const agentStateWithIdOnly = await prisma.agentState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentStateUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentState.
     * @param {AgentStateUpsertArgs} args - Arguments to update or create a AgentState.
     * @example
     * // Update or create a AgentState
     * const agentState = await prisma.agentState.upsert({
     *   create: {
     *     // ... data to create a AgentState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentState we want to update
     *   }
     * })
     */
    upsert<T extends AgentStateUpsertArgs>(args: SelectSubset<T, AgentStateUpsertArgs<ExtArgs>>): Prisma__AgentStateClient<$Result.GetResult<Prisma.$AgentStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStateCountArgs} args - Arguments to filter AgentStates to count.
     * @example
     * // Count the number of AgentStates
     * const count = await prisma.agentState.count({
     *   where: {
     *     // ... the filter for the AgentStates we want to count
     *   }
     * })
    **/
    count<T extends AgentStateCountArgs>(
      args?: Subset<T, AgentStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentStateAggregateArgs>(args: Subset<T, AgentStateAggregateArgs>): Prisma.PrismaPromise<GetAgentStateAggregateType<T>>

    /**
     * Group by AgentState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentStateGroupByArgs['orderBy'] }
        : { orderBy?: AgentStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentState model
   */
  readonly fields: AgentStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentState model
   */
  interface AgentStateFieldRefs {
    readonly id: FieldRef<"AgentState", 'String'>
    readonly runId: FieldRef<"AgentState", 'String'>
    readonly currentNode: FieldRef<"AgentState", 'String'>
    readonly currentPlatform: FieldRef<"AgentState", 'Platform'>
    readonly currentPlatformIdx: FieldRef<"AgentState", 'Int'>
    readonly lastAction: FieldRef<"AgentState", 'String'>
    readonly checkpoint: FieldRef<"AgentState", 'String'>
    readonly hitlRequired: FieldRef<"AgentState", 'Boolean'>
    readonly hitlType: FieldRef<"AgentState", 'HitlType'>
    readonly hitlScreenshotPath: FieldRef<"AgentState", 'String'>
    readonly hitlResolvedAt: FieldRef<"AgentState", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentState findUnique
   */
  export type AgentStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * Filter, which AgentState to fetch.
     */
    where: AgentStateWhereUniqueInput
  }

  /**
   * AgentState findUniqueOrThrow
   */
  export type AgentStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * Filter, which AgentState to fetch.
     */
    where: AgentStateWhereUniqueInput
  }

  /**
   * AgentState findFirst
   */
  export type AgentStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * Filter, which AgentState to fetch.
     */
    where?: AgentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentStates to fetch.
     */
    orderBy?: AgentStateOrderByWithRelationInput | AgentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentStates.
     */
    cursor?: AgentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentStates.
     */
    distinct?: AgentStateScalarFieldEnum | AgentStateScalarFieldEnum[]
  }

  /**
   * AgentState findFirstOrThrow
   */
  export type AgentStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * Filter, which AgentState to fetch.
     */
    where?: AgentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentStates to fetch.
     */
    orderBy?: AgentStateOrderByWithRelationInput | AgentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentStates.
     */
    cursor?: AgentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentStates.
     */
    distinct?: AgentStateScalarFieldEnum | AgentStateScalarFieldEnum[]
  }

  /**
   * AgentState findMany
   */
  export type AgentStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * Filter, which AgentStates to fetch.
     */
    where?: AgentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentStates to fetch.
     */
    orderBy?: AgentStateOrderByWithRelationInput | AgentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentStates.
     */
    cursor?: AgentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentStates.
     */
    distinct?: AgentStateScalarFieldEnum | AgentStateScalarFieldEnum[]
  }

  /**
   * AgentState create
   */
  export type AgentStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentState.
     */
    data: XOR<AgentStateCreateInput, AgentStateUncheckedCreateInput>
  }

  /**
   * AgentState createMany
   */
  export type AgentStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentStates.
     */
    data: AgentStateCreateManyInput | AgentStateCreateManyInput[]
  }

  /**
   * AgentState createManyAndReturn
   */
  export type AgentStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * The data used to create many AgentStates.
     */
    data: AgentStateCreateManyInput | AgentStateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentState update
   */
  export type AgentStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentState.
     */
    data: XOR<AgentStateUpdateInput, AgentStateUncheckedUpdateInput>
    /**
     * Choose, which AgentState to update.
     */
    where: AgentStateWhereUniqueInput
  }

  /**
   * AgentState updateMany
   */
  export type AgentStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentStates.
     */
    data: XOR<AgentStateUpdateManyMutationInput, AgentStateUncheckedUpdateManyInput>
    /**
     * Filter which AgentStates to update
     */
    where?: AgentStateWhereInput
    /**
     * Limit how many AgentStates to update.
     */
    limit?: number
  }

  /**
   * AgentState updateManyAndReturn
   */
  export type AgentStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * The data used to update AgentStates.
     */
    data: XOR<AgentStateUpdateManyMutationInput, AgentStateUncheckedUpdateManyInput>
    /**
     * Filter which AgentStates to update
     */
    where?: AgentStateWhereInput
    /**
     * Limit how many AgentStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentState upsert
   */
  export type AgentStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentState to update in case it exists.
     */
    where: AgentStateWhereUniqueInput
    /**
     * In case the AgentState found by the `where` argument doesn't exist, create a new AgentState with this data.
     */
    create: XOR<AgentStateCreateInput, AgentStateUncheckedCreateInput>
    /**
     * In case the AgentState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentStateUpdateInput, AgentStateUncheckedUpdateInput>
  }

  /**
   * AgentState delete
   */
  export type AgentStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
    /**
     * Filter which AgentState to delete.
     */
    where: AgentStateWhereUniqueInput
  }

  /**
   * AgentState deleteMany
   */
  export type AgentStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentStates to delete
     */
    where?: AgentStateWhereInput
    /**
     * Limit how many AgentStates to delete.
     */
    limit?: number
  }

  /**
   * AgentState without action
   */
  export type AgentStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentState
     */
    select?: AgentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentState
     */
    omit?: AgentStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStateInclude<ExtArgs> | null
  }


  /**
   * Model RunPlatformProgress
   */

  export type AggregateRunPlatformProgress = {
    _count: RunPlatformProgressCountAggregateOutputType | null
    _avg: RunPlatformProgressAvgAggregateOutputType | null
    _sum: RunPlatformProgressSumAggregateOutputType | null
    _min: RunPlatformProgressMinAggregateOutputType | null
    _max: RunPlatformProgressMaxAggregateOutputType | null
  }

  export type RunPlatformProgressAvgAggregateOutputType = {
    pagesScraped: number | null
    leadsFound: number | null
  }

  export type RunPlatformProgressSumAggregateOutputType = {
    pagesScraped: number | null
    leadsFound: number | null
  }

  export type RunPlatformProgressMinAggregateOutputType = {
    id: string | null
    runId: string | null
    campaignPlatformId: string | null
    status: $Enums.PlatformRunStatus | null
    pagesScraped: number | null
    leadsFound: number | null
    lastCursorUrl: string | null
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
  }

  export type RunPlatformProgressMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    campaignPlatformId: string | null
    status: $Enums.PlatformRunStatus | null
    pagesScraped: number | null
    leadsFound: number | null
    lastCursorUrl: string | null
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
  }

  export type RunPlatformProgressCountAggregateOutputType = {
    id: number
    runId: number
    campaignPlatformId: number
    status: number
    pagesScraped: number
    leadsFound: number
    lastCursorUrl: number
    startedAt: number
    finishedAt: number
    errorMessage: number
    _all: number
  }


  export type RunPlatformProgressAvgAggregateInputType = {
    pagesScraped?: true
    leadsFound?: true
  }

  export type RunPlatformProgressSumAggregateInputType = {
    pagesScraped?: true
    leadsFound?: true
  }

  export type RunPlatformProgressMinAggregateInputType = {
    id?: true
    runId?: true
    campaignPlatformId?: true
    status?: true
    pagesScraped?: true
    leadsFound?: true
    lastCursorUrl?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
  }

  export type RunPlatformProgressMaxAggregateInputType = {
    id?: true
    runId?: true
    campaignPlatformId?: true
    status?: true
    pagesScraped?: true
    leadsFound?: true
    lastCursorUrl?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
  }

  export type RunPlatformProgressCountAggregateInputType = {
    id?: true
    runId?: true
    campaignPlatformId?: true
    status?: true
    pagesScraped?: true
    leadsFound?: true
    lastCursorUrl?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
    _all?: true
  }

  export type RunPlatformProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunPlatformProgress to aggregate.
     */
    where?: RunPlatformProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlatformProgresses to fetch.
     */
    orderBy?: RunPlatformProgressOrderByWithRelationInput | RunPlatformProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunPlatformProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlatformProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlatformProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RunPlatformProgresses
    **/
    _count?: true | RunPlatformProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunPlatformProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunPlatformProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunPlatformProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunPlatformProgressMaxAggregateInputType
  }

  export type GetRunPlatformProgressAggregateType<T extends RunPlatformProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateRunPlatformProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunPlatformProgress[P]>
      : GetScalarType<T[P], AggregateRunPlatformProgress[P]>
  }




  export type RunPlatformProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunPlatformProgressWhereInput
    orderBy?: RunPlatformProgressOrderByWithAggregationInput | RunPlatformProgressOrderByWithAggregationInput[]
    by: RunPlatformProgressScalarFieldEnum[] | RunPlatformProgressScalarFieldEnum
    having?: RunPlatformProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunPlatformProgressCountAggregateInputType | true
    _avg?: RunPlatformProgressAvgAggregateInputType
    _sum?: RunPlatformProgressSumAggregateInputType
    _min?: RunPlatformProgressMinAggregateInputType
    _max?: RunPlatformProgressMaxAggregateInputType
  }

  export type RunPlatformProgressGroupByOutputType = {
    id: string
    runId: string
    campaignPlatformId: string
    status: $Enums.PlatformRunStatus
    pagesScraped: number
    leadsFound: number
    lastCursorUrl: string | null
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
    _count: RunPlatformProgressCountAggregateOutputType | null
    _avg: RunPlatformProgressAvgAggregateOutputType | null
    _sum: RunPlatformProgressSumAggregateOutputType | null
    _min: RunPlatformProgressMinAggregateOutputType | null
    _max: RunPlatformProgressMaxAggregateOutputType | null
  }

  type GetRunPlatformProgressGroupByPayload<T extends RunPlatformProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunPlatformProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunPlatformProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunPlatformProgressGroupByOutputType[P]>
            : GetScalarType<T[P], RunPlatformProgressGroupByOutputType[P]>
        }
      >
    >


  export type RunPlatformProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    status?: boolean
    pagesScraped?: boolean
    leadsFound?: boolean
    lastCursorUrl?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | CampaignPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runPlatformProgress"]>

  export type RunPlatformProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    status?: boolean
    pagesScraped?: boolean
    leadsFound?: boolean
    lastCursorUrl?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | CampaignPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runPlatformProgress"]>

  export type RunPlatformProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    status?: boolean
    pagesScraped?: boolean
    leadsFound?: boolean
    lastCursorUrl?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | CampaignPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runPlatformProgress"]>

  export type RunPlatformProgressSelectScalar = {
    id?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    status?: boolean
    pagesScraped?: boolean
    leadsFound?: boolean
    lastCursorUrl?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
  }

  export type RunPlatformProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "campaignPlatformId" | "status" | "pagesScraped" | "leadsFound" | "lastCursorUrl" | "startedAt" | "finishedAt" | "errorMessage", ExtArgs["result"]["runPlatformProgress"]>
  export type RunPlatformProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | CampaignPlatformDefaultArgs<ExtArgs>
  }
  export type RunPlatformProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | CampaignPlatformDefaultArgs<ExtArgs>
  }
  export type RunPlatformProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | CampaignPlatformDefaultArgs<ExtArgs>
  }

  export type $RunPlatformProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RunPlatformProgress"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
      campaignPlatform: Prisma.$CampaignPlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      campaignPlatformId: string
      status: $Enums.PlatformRunStatus
      pagesScraped: number
      leadsFound: number
      lastCursorUrl: string | null
      startedAt: Date | null
      finishedAt: Date | null
      errorMessage: string | null
    }, ExtArgs["result"]["runPlatformProgress"]>
    composites: {}
  }

  type RunPlatformProgressGetPayload<S extends boolean | null | undefined | RunPlatformProgressDefaultArgs> = $Result.GetResult<Prisma.$RunPlatformProgressPayload, S>

  type RunPlatformProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunPlatformProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunPlatformProgressCountAggregateInputType | true
    }

  export interface RunPlatformProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RunPlatformProgress'], meta: { name: 'RunPlatformProgress' } }
    /**
     * Find zero or one RunPlatformProgress that matches the filter.
     * @param {RunPlatformProgressFindUniqueArgs} args - Arguments to find a RunPlatformProgress
     * @example
     * // Get one RunPlatformProgress
     * const runPlatformProgress = await prisma.runPlatformProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunPlatformProgressFindUniqueArgs>(args: SelectSubset<T, RunPlatformProgressFindUniqueArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RunPlatformProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunPlatformProgressFindUniqueOrThrowArgs} args - Arguments to find a RunPlatformProgress
     * @example
     * // Get one RunPlatformProgress
     * const runPlatformProgress = await prisma.runPlatformProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunPlatformProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, RunPlatformProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunPlatformProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlatformProgressFindFirstArgs} args - Arguments to find a RunPlatformProgress
     * @example
     * // Get one RunPlatformProgress
     * const runPlatformProgress = await prisma.runPlatformProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunPlatformProgressFindFirstArgs>(args?: SelectSubset<T, RunPlatformProgressFindFirstArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunPlatformProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlatformProgressFindFirstOrThrowArgs} args - Arguments to find a RunPlatformProgress
     * @example
     * // Get one RunPlatformProgress
     * const runPlatformProgress = await prisma.runPlatformProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunPlatformProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, RunPlatformProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RunPlatformProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlatformProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunPlatformProgresses
     * const runPlatformProgresses = await prisma.runPlatformProgress.findMany()
     * 
     * // Get first 10 RunPlatformProgresses
     * const runPlatformProgresses = await prisma.runPlatformProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runPlatformProgressWithIdOnly = await prisma.runPlatformProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunPlatformProgressFindManyArgs>(args?: SelectSubset<T, RunPlatformProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RunPlatformProgress.
     * @param {RunPlatformProgressCreateArgs} args - Arguments to create a RunPlatformProgress.
     * @example
     * // Create one RunPlatformProgress
     * const RunPlatformProgress = await prisma.runPlatformProgress.create({
     *   data: {
     *     // ... data to create a RunPlatformProgress
     *   }
     * })
     * 
     */
    create<T extends RunPlatformProgressCreateArgs>(args: SelectSubset<T, RunPlatformProgressCreateArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RunPlatformProgresses.
     * @param {RunPlatformProgressCreateManyArgs} args - Arguments to create many RunPlatformProgresses.
     * @example
     * // Create many RunPlatformProgresses
     * const runPlatformProgress = await prisma.runPlatformProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunPlatformProgressCreateManyArgs>(args?: SelectSubset<T, RunPlatformProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RunPlatformProgresses and returns the data saved in the database.
     * @param {RunPlatformProgressCreateManyAndReturnArgs} args - Arguments to create many RunPlatformProgresses.
     * @example
     * // Create many RunPlatformProgresses
     * const runPlatformProgress = await prisma.runPlatformProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RunPlatformProgresses and only return the `id`
     * const runPlatformProgressWithIdOnly = await prisma.runPlatformProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunPlatformProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, RunPlatformProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RunPlatformProgress.
     * @param {RunPlatformProgressDeleteArgs} args - Arguments to delete one RunPlatformProgress.
     * @example
     * // Delete one RunPlatformProgress
     * const RunPlatformProgress = await prisma.runPlatformProgress.delete({
     *   where: {
     *     // ... filter to delete one RunPlatformProgress
     *   }
     * })
     * 
     */
    delete<T extends RunPlatformProgressDeleteArgs>(args: SelectSubset<T, RunPlatformProgressDeleteArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RunPlatformProgress.
     * @param {RunPlatformProgressUpdateArgs} args - Arguments to update one RunPlatformProgress.
     * @example
     * // Update one RunPlatformProgress
     * const runPlatformProgress = await prisma.runPlatformProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunPlatformProgressUpdateArgs>(args: SelectSubset<T, RunPlatformProgressUpdateArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RunPlatformProgresses.
     * @param {RunPlatformProgressDeleteManyArgs} args - Arguments to filter RunPlatformProgresses to delete.
     * @example
     * // Delete a few RunPlatformProgresses
     * const { count } = await prisma.runPlatformProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunPlatformProgressDeleteManyArgs>(args?: SelectSubset<T, RunPlatformProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunPlatformProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlatformProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunPlatformProgresses
     * const runPlatformProgress = await prisma.runPlatformProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunPlatformProgressUpdateManyArgs>(args: SelectSubset<T, RunPlatformProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunPlatformProgresses and returns the data updated in the database.
     * @param {RunPlatformProgressUpdateManyAndReturnArgs} args - Arguments to update many RunPlatformProgresses.
     * @example
     * // Update many RunPlatformProgresses
     * const runPlatformProgress = await prisma.runPlatformProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RunPlatformProgresses and only return the `id`
     * const runPlatformProgressWithIdOnly = await prisma.runPlatformProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RunPlatformProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, RunPlatformProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RunPlatformProgress.
     * @param {RunPlatformProgressUpsertArgs} args - Arguments to update or create a RunPlatformProgress.
     * @example
     * // Update or create a RunPlatformProgress
     * const runPlatformProgress = await prisma.runPlatformProgress.upsert({
     *   create: {
     *     // ... data to create a RunPlatformProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunPlatformProgress we want to update
     *   }
     * })
     */
    upsert<T extends RunPlatformProgressUpsertArgs>(args: SelectSubset<T, RunPlatformProgressUpsertArgs<ExtArgs>>): Prisma__RunPlatformProgressClient<$Result.GetResult<Prisma.$RunPlatformProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RunPlatformProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlatformProgressCountArgs} args - Arguments to filter RunPlatformProgresses to count.
     * @example
     * // Count the number of RunPlatformProgresses
     * const count = await prisma.runPlatformProgress.count({
     *   where: {
     *     // ... the filter for the RunPlatformProgresses we want to count
     *   }
     * })
    **/
    count<T extends RunPlatformProgressCountArgs>(
      args?: Subset<T, RunPlatformProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunPlatformProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunPlatformProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlatformProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RunPlatformProgressAggregateArgs>(args: Subset<T, RunPlatformProgressAggregateArgs>): Prisma.PrismaPromise<GetRunPlatformProgressAggregateType<T>>

    /**
     * Group by RunPlatformProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlatformProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RunPlatformProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunPlatformProgressGroupByArgs['orderBy'] }
        : { orderBy?: RunPlatformProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RunPlatformProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunPlatformProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RunPlatformProgress model
   */
  readonly fields: RunPlatformProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RunPlatformProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunPlatformProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaignPlatform<T extends CampaignPlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignPlatformDefaultArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RunPlatformProgress model
   */
  interface RunPlatformProgressFieldRefs {
    readonly id: FieldRef<"RunPlatformProgress", 'String'>
    readonly runId: FieldRef<"RunPlatformProgress", 'String'>
    readonly campaignPlatformId: FieldRef<"RunPlatformProgress", 'String'>
    readonly status: FieldRef<"RunPlatformProgress", 'PlatformRunStatus'>
    readonly pagesScraped: FieldRef<"RunPlatformProgress", 'Int'>
    readonly leadsFound: FieldRef<"RunPlatformProgress", 'Int'>
    readonly lastCursorUrl: FieldRef<"RunPlatformProgress", 'String'>
    readonly startedAt: FieldRef<"RunPlatformProgress", 'DateTime'>
    readonly finishedAt: FieldRef<"RunPlatformProgress", 'DateTime'>
    readonly errorMessage: FieldRef<"RunPlatformProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RunPlatformProgress findUnique
   */
  export type RunPlatformProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * Filter, which RunPlatformProgress to fetch.
     */
    where: RunPlatformProgressWhereUniqueInput
  }

  /**
   * RunPlatformProgress findUniqueOrThrow
   */
  export type RunPlatformProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * Filter, which RunPlatformProgress to fetch.
     */
    where: RunPlatformProgressWhereUniqueInput
  }

  /**
   * RunPlatformProgress findFirst
   */
  export type RunPlatformProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * Filter, which RunPlatformProgress to fetch.
     */
    where?: RunPlatformProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlatformProgresses to fetch.
     */
    orderBy?: RunPlatformProgressOrderByWithRelationInput | RunPlatformProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunPlatformProgresses.
     */
    cursor?: RunPlatformProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlatformProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlatformProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunPlatformProgresses.
     */
    distinct?: RunPlatformProgressScalarFieldEnum | RunPlatformProgressScalarFieldEnum[]
  }

  /**
   * RunPlatformProgress findFirstOrThrow
   */
  export type RunPlatformProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * Filter, which RunPlatformProgress to fetch.
     */
    where?: RunPlatformProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlatformProgresses to fetch.
     */
    orderBy?: RunPlatformProgressOrderByWithRelationInput | RunPlatformProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunPlatformProgresses.
     */
    cursor?: RunPlatformProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlatformProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlatformProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunPlatformProgresses.
     */
    distinct?: RunPlatformProgressScalarFieldEnum | RunPlatformProgressScalarFieldEnum[]
  }

  /**
   * RunPlatformProgress findMany
   */
  export type RunPlatformProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * Filter, which RunPlatformProgresses to fetch.
     */
    where?: RunPlatformProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlatformProgresses to fetch.
     */
    orderBy?: RunPlatformProgressOrderByWithRelationInput | RunPlatformProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RunPlatformProgresses.
     */
    cursor?: RunPlatformProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlatformProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlatformProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunPlatformProgresses.
     */
    distinct?: RunPlatformProgressScalarFieldEnum | RunPlatformProgressScalarFieldEnum[]
  }

  /**
   * RunPlatformProgress create
   */
  export type RunPlatformProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a RunPlatformProgress.
     */
    data: XOR<RunPlatformProgressCreateInput, RunPlatformProgressUncheckedCreateInput>
  }

  /**
   * RunPlatformProgress createMany
   */
  export type RunPlatformProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RunPlatformProgresses.
     */
    data: RunPlatformProgressCreateManyInput | RunPlatformProgressCreateManyInput[]
  }

  /**
   * RunPlatformProgress createManyAndReturn
   */
  export type RunPlatformProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * The data used to create many RunPlatformProgresses.
     */
    data: RunPlatformProgressCreateManyInput | RunPlatformProgressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunPlatformProgress update
   */
  export type RunPlatformProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a RunPlatformProgress.
     */
    data: XOR<RunPlatformProgressUpdateInput, RunPlatformProgressUncheckedUpdateInput>
    /**
     * Choose, which RunPlatformProgress to update.
     */
    where: RunPlatformProgressWhereUniqueInput
  }

  /**
   * RunPlatformProgress updateMany
   */
  export type RunPlatformProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RunPlatformProgresses.
     */
    data: XOR<RunPlatformProgressUpdateManyMutationInput, RunPlatformProgressUncheckedUpdateManyInput>
    /**
     * Filter which RunPlatformProgresses to update
     */
    where?: RunPlatformProgressWhereInput
    /**
     * Limit how many RunPlatformProgresses to update.
     */
    limit?: number
  }

  /**
   * RunPlatformProgress updateManyAndReturn
   */
  export type RunPlatformProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * The data used to update RunPlatformProgresses.
     */
    data: XOR<RunPlatformProgressUpdateManyMutationInput, RunPlatformProgressUncheckedUpdateManyInput>
    /**
     * Filter which RunPlatformProgresses to update
     */
    where?: RunPlatformProgressWhereInput
    /**
     * Limit how many RunPlatformProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunPlatformProgress upsert
   */
  export type RunPlatformProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the RunPlatformProgress to update in case it exists.
     */
    where: RunPlatformProgressWhereUniqueInput
    /**
     * In case the RunPlatformProgress found by the `where` argument doesn't exist, create a new RunPlatformProgress with this data.
     */
    create: XOR<RunPlatformProgressCreateInput, RunPlatformProgressUncheckedCreateInput>
    /**
     * In case the RunPlatformProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunPlatformProgressUpdateInput, RunPlatformProgressUncheckedUpdateInput>
  }

  /**
   * RunPlatformProgress delete
   */
  export type RunPlatformProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
    /**
     * Filter which RunPlatformProgress to delete.
     */
    where: RunPlatformProgressWhereUniqueInput
  }

  /**
   * RunPlatformProgress deleteMany
   */
  export type RunPlatformProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunPlatformProgresses to delete
     */
    where?: RunPlatformProgressWhereInput
    /**
     * Limit how many RunPlatformProgresses to delete.
     */
    limit?: number
  }

  /**
   * RunPlatformProgress without action
   */
  export type RunPlatformProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlatformProgress
     */
    select?: RunPlatformProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlatformProgress
     */
    omit?: RunPlatformProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlatformProgressInclude<ExtArgs> | null
  }


  /**
   * Model RunEvent
   */

  export type AggregateRunEvent = {
    _count: RunEventCountAggregateOutputType | null
    _min: RunEventMinAggregateOutputType | null
    _max: RunEventMaxAggregateOutputType | null
  }

  export type RunEventMinAggregateOutputType = {
    id: string | null
    runId: string | null
    type: $Enums.RunEventType | null
    message: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type RunEventMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    type: $Enums.RunEventType | null
    message: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type RunEventCountAggregateOutputType = {
    id: number
    runId: number
    type: number
    message: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type RunEventMinAggregateInputType = {
    id?: true
    runId?: true
    type?: true
    message?: true
    metadata?: true
    createdAt?: true
  }

  export type RunEventMaxAggregateInputType = {
    id?: true
    runId?: true
    type?: true
    message?: true
    metadata?: true
    createdAt?: true
  }

  export type RunEventCountAggregateInputType = {
    id?: true
    runId?: true
    type?: true
    message?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type RunEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunEvent to aggregate.
     */
    where?: RunEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunEvents to fetch.
     */
    orderBy?: RunEventOrderByWithRelationInput | RunEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RunEvents
    **/
    _count?: true | RunEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunEventMaxAggregateInputType
  }

  export type GetRunEventAggregateType<T extends RunEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRunEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunEvent[P]>
      : GetScalarType<T[P], AggregateRunEvent[P]>
  }




  export type RunEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunEventWhereInput
    orderBy?: RunEventOrderByWithAggregationInput | RunEventOrderByWithAggregationInput[]
    by: RunEventScalarFieldEnum[] | RunEventScalarFieldEnum
    having?: RunEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunEventCountAggregateInputType | true
    _min?: RunEventMinAggregateInputType
    _max?: RunEventMaxAggregateInputType
  }

  export type RunEventGroupByOutputType = {
    id: string
    runId: string
    type: $Enums.RunEventType
    message: string
    metadata: string | null
    createdAt: Date
    _count: RunEventCountAggregateOutputType | null
    _min: RunEventMinAggregateOutputType | null
    _max: RunEventMaxAggregateOutputType | null
  }

  type GetRunEventGroupByPayload<T extends RunEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunEventGroupByOutputType[P]>
            : GetScalarType<T[P], RunEventGroupByOutputType[P]>
        }
      >
    >


  export type RunEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runEvent"]>

  export type RunEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runEvent"]>

  export type RunEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runEvent"]>

  export type RunEventSelectScalar = {
    id?: boolean
    runId?: boolean
    type?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type RunEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "type" | "message" | "metadata" | "createdAt", ExtArgs["result"]["runEvent"]>
  export type RunEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type RunEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type RunEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }

  export type $RunEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RunEvent"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      type: $Enums.RunEventType
      message: string
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["runEvent"]>
    composites: {}
  }

  type RunEventGetPayload<S extends boolean | null | undefined | RunEventDefaultArgs> = $Result.GetResult<Prisma.$RunEventPayload, S>

  type RunEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunEventCountAggregateInputType | true
    }

  export interface RunEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RunEvent'], meta: { name: 'RunEvent' } }
    /**
     * Find zero or one RunEvent that matches the filter.
     * @param {RunEventFindUniqueArgs} args - Arguments to find a RunEvent
     * @example
     * // Get one RunEvent
     * const runEvent = await prisma.runEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunEventFindUniqueArgs>(args: SelectSubset<T, RunEventFindUniqueArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RunEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunEventFindUniqueOrThrowArgs} args - Arguments to find a RunEvent
     * @example
     * // Get one RunEvent
     * const runEvent = await prisma.runEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunEventFindUniqueOrThrowArgs>(args: SelectSubset<T, RunEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunEventFindFirstArgs} args - Arguments to find a RunEvent
     * @example
     * // Get one RunEvent
     * const runEvent = await prisma.runEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunEventFindFirstArgs>(args?: SelectSubset<T, RunEventFindFirstArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunEventFindFirstOrThrowArgs} args - Arguments to find a RunEvent
     * @example
     * // Get one RunEvent
     * const runEvent = await prisma.runEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunEventFindFirstOrThrowArgs>(args?: SelectSubset<T, RunEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RunEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunEvents
     * const runEvents = await prisma.runEvent.findMany()
     * 
     * // Get first 10 RunEvents
     * const runEvents = await prisma.runEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runEventWithIdOnly = await prisma.runEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunEventFindManyArgs>(args?: SelectSubset<T, RunEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RunEvent.
     * @param {RunEventCreateArgs} args - Arguments to create a RunEvent.
     * @example
     * // Create one RunEvent
     * const RunEvent = await prisma.runEvent.create({
     *   data: {
     *     // ... data to create a RunEvent
     *   }
     * })
     * 
     */
    create<T extends RunEventCreateArgs>(args: SelectSubset<T, RunEventCreateArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RunEvents.
     * @param {RunEventCreateManyArgs} args - Arguments to create many RunEvents.
     * @example
     * // Create many RunEvents
     * const runEvent = await prisma.runEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunEventCreateManyArgs>(args?: SelectSubset<T, RunEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RunEvents and returns the data saved in the database.
     * @param {RunEventCreateManyAndReturnArgs} args - Arguments to create many RunEvents.
     * @example
     * // Create many RunEvents
     * const runEvent = await prisma.runEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RunEvents and only return the `id`
     * const runEventWithIdOnly = await prisma.runEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunEventCreateManyAndReturnArgs>(args?: SelectSubset<T, RunEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RunEvent.
     * @param {RunEventDeleteArgs} args - Arguments to delete one RunEvent.
     * @example
     * // Delete one RunEvent
     * const RunEvent = await prisma.runEvent.delete({
     *   where: {
     *     // ... filter to delete one RunEvent
     *   }
     * })
     * 
     */
    delete<T extends RunEventDeleteArgs>(args: SelectSubset<T, RunEventDeleteArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RunEvent.
     * @param {RunEventUpdateArgs} args - Arguments to update one RunEvent.
     * @example
     * // Update one RunEvent
     * const runEvent = await prisma.runEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunEventUpdateArgs>(args: SelectSubset<T, RunEventUpdateArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RunEvents.
     * @param {RunEventDeleteManyArgs} args - Arguments to filter RunEvents to delete.
     * @example
     * // Delete a few RunEvents
     * const { count } = await prisma.runEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunEventDeleteManyArgs>(args?: SelectSubset<T, RunEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunEvents
     * const runEvent = await prisma.runEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunEventUpdateManyArgs>(args: SelectSubset<T, RunEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunEvents and returns the data updated in the database.
     * @param {RunEventUpdateManyAndReturnArgs} args - Arguments to update many RunEvents.
     * @example
     * // Update many RunEvents
     * const runEvent = await prisma.runEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RunEvents and only return the `id`
     * const runEventWithIdOnly = await prisma.runEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RunEventUpdateManyAndReturnArgs>(args: SelectSubset<T, RunEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RunEvent.
     * @param {RunEventUpsertArgs} args - Arguments to update or create a RunEvent.
     * @example
     * // Update or create a RunEvent
     * const runEvent = await prisma.runEvent.upsert({
     *   create: {
     *     // ... data to create a RunEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunEvent we want to update
     *   }
     * })
     */
    upsert<T extends RunEventUpsertArgs>(args: SelectSubset<T, RunEventUpsertArgs<ExtArgs>>): Prisma__RunEventClient<$Result.GetResult<Prisma.$RunEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RunEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunEventCountArgs} args - Arguments to filter RunEvents to count.
     * @example
     * // Count the number of RunEvents
     * const count = await prisma.runEvent.count({
     *   where: {
     *     // ... the filter for the RunEvents we want to count
     *   }
     * })
    **/
    count<T extends RunEventCountArgs>(
      args?: Subset<T, RunEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RunEventAggregateArgs>(args: Subset<T, RunEventAggregateArgs>): Prisma.PrismaPromise<GetRunEventAggregateType<T>>

    /**
     * Group by RunEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RunEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunEventGroupByArgs['orderBy'] }
        : { orderBy?: RunEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RunEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RunEvent model
   */
  readonly fields: RunEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RunEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RunEvent model
   */
  interface RunEventFieldRefs {
    readonly id: FieldRef<"RunEvent", 'String'>
    readonly runId: FieldRef<"RunEvent", 'String'>
    readonly type: FieldRef<"RunEvent", 'RunEventType'>
    readonly message: FieldRef<"RunEvent", 'String'>
    readonly metadata: FieldRef<"RunEvent", 'String'>
    readonly createdAt: FieldRef<"RunEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RunEvent findUnique
   */
  export type RunEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * Filter, which RunEvent to fetch.
     */
    where: RunEventWhereUniqueInput
  }

  /**
   * RunEvent findUniqueOrThrow
   */
  export type RunEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * Filter, which RunEvent to fetch.
     */
    where: RunEventWhereUniqueInput
  }

  /**
   * RunEvent findFirst
   */
  export type RunEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * Filter, which RunEvent to fetch.
     */
    where?: RunEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunEvents to fetch.
     */
    orderBy?: RunEventOrderByWithRelationInput | RunEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunEvents.
     */
    cursor?: RunEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunEvents.
     */
    distinct?: RunEventScalarFieldEnum | RunEventScalarFieldEnum[]
  }

  /**
   * RunEvent findFirstOrThrow
   */
  export type RunEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * Filter, which RunEvent to fetch.
     */
    where?: RunEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunEvents to fetch.
     */
    orderBy?: RunEventOrderByWithRelationInput | RunEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunEvents.
     */
    cursor?: RunEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunEvents.
     */
    distinct?: RunEventScalarFieldEnum | RunEventScalarFieldEnum[]
  }

  /**
   * RunEvent findMany
   */
  export type RunEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * Filter, which RunEvents to fetch.
     */
    where?: RunEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunEvents to fetch.
     */
    orderBy?: RunEventOrderByWithRelationInput | RunEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RunEvents.
     */
    cursor?: RunEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunEvents.
     */
    distinct?: RunEventScalarFieldEnum | RunEventScalarFieldEnum[]
  }

  /**
   * RunEvent create
   */
  export type RunEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * The data needed to create a RunEvent.
     */
    data: XOR<RunEventCreateInput, RunEventUncheckedCreateInput>
  }

  /**
   * RunEvent createMany
   */
  export type RunEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RunEvents.
     */
    data: RunEventCreateManyInput | RunEventCreateManyInput[]
  }

  /**
   * RunEvent createManyAndReturn
   */
  export type RunEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * The data used to create many RunEvents.
     */
    data: RunEventCreateManyInput | RunEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunEvent update
   */
  export type RunEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * The data needed to update a RunEvent.
     */
    data: XOR<RunEventUpdateInput, RunEventUncheckedUpdateInput>
    /**
     * Choose, which RunEvent to update.
     */
    where: RunEventWhereUniqueInput
  }

  /**
   * RunEvent updateMany
   */
  export type RunEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RunEvents.
     */
    data: XOR<RunEventUpdateManyMutationInput, RunEventUncheckedUpdateManyInput>
    /**
     * Filter which RunEvents to update
     */
    where?: RunEventWhereInput
    /**
     * Limit how many RunEvents to update.
     */
    limit?: number
  }

  /**
   * RunEvent updateManyAndReturn
   */
  export type RunEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * The data used to update RunEvents.
     */
    data: XOR<RunEventUpdateManyMutationInput, RunEventUncheckedUpdateManyInput>
    /**
     * Filter which RunEvents to update
     */
    where?: RunEventWhereInput
    /**
     * Limit how many RunEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunEvent upsert
   */
  export type RunEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * The filter to search for the RunEvent to update in case it exists.
     */
    where: RunEventWhereUniqueInput
    /**
     * In case the RunEvent found by the `where` argument doesn't exist, create a new RunEvent with this data.
     */
    create: XOR<RunEventCreateInput, RunEventUncheckedCreateInput>
    /**
     * In case the RunEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunEventUpdateInput, RunEventUncheckedUpdateInput>
  }

  /**
   * RunEvent delete
   */
  export type RunEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
    /**
     * Filter which RunEvent to delete.
     */
    where: RunEventWhereUniqueInput
  }

  /**
   * RunEvent deleteMany
   */
  export type RunEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunEvents to delete
     */
    where?: RunEventWhereInput
    /**
     * Limit how many RunEvents to delete.
     */
    limit?: number
  }

  /**
   * RunEvent without action
   */
  export type RunEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunEvent
     */
    select?: RunEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunEvent
     */
    omit?: RunEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunEventInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadAvgAggregateOutputType = {
    score: number | null
  }

  export type LeadSumAggregateOutputType = {
    score: number | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    runId: string | null
    campaignPlatformId: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    jobTitle: string | null
    company: string | null
    companySize: string | null
    industry: string | null
    location: string | null
    profileUrl: string | null
    websiteUrl: string | null
    linkedinUrl: string | null
    twitterHandle: string | null
    score: number | null
    scoreReason: string | null
    isVerified: boolean | null
    status: $Enums.LeadStatus | null
    platform: $Enums.Platform | null
    sourcePageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    runId: string | null
    campaignPlatformId: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    jobTitle: string | null
    company: string | null
    companySize: string | null
    industry: string | null
    location: string | null
    profileUrl: string | null
    websiteUrl: string | null
    linkedinUrl: string | null
    twitterHandle: string | null
    score: number | null
    scoreReason: string | null
    isVerified: boolean | null
    status: $Enums.LeadStatus | null
    platform: $Enums.Platform | null
    sourcePageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    campaignId: number
    runId: number
    campaignPlatformId: number
    name: number
    firstName: number
    lastName: number
    email: number
    phone: number
    jobTitle: number
    company: number
    companySize: number
    industry: number
    location: number
    profileUrl: number
    websiteUrl: number
    linkedinUrl: number
    twitterHandle: number
    score: number
    scoreReason: number
    isVerified: number
    status: number
    platform: number
    sourcePageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadAvgAggregateInputType = {
    score?: true
  }

  export type LeadSumAggregateInputType = {
    score?: true
  }

  export type LeadMinAggregateInputType = {
    id?: true
    campaignId?: true
    runId?: true
    campaignPlatformId?: true
    name?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    jobTitle?: true
    company?: true
    companySize?: true
    industry?: true
    location?: true
    profileUrl?: true
    websiteUrl?: true
    linkedinUrl?: true
    twitterHandle?: true
    score?: true
    scoreReason?: true
    isVerified?: true
    status?: true
    platform?: true
    sourcePageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    campaignId?: true
    runId?: true
    campaignPlatformId?: true
    name?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    jobTitle?: true
    company?: true
    companySize?: true
    industry?: true
    location?: true
    profileUrl?: true
    websiteUrl?: true
    linkedinUrl?: true
    twitterHandle?: true
    score?: true
    scoreReason?: true
    isVerified?: true
    status?: true
    platform?: true
    sourcePageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    campaignId?: true
    runId?: true
    campaignPlatformId?: true
    name?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    jobTitle?: true
    company?: true
    companySize?: true
    industry?: true
    location?: true
    profileUrl?: true
    websiteUrl?: true
    linkedinUrl?: true
    twitterHandle?: true
    score?: true
    scoreReason?: true
    isVerified?: true
    status?: true
    platform?: true
    sourcePageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _avg?: LeadAvgAggregateInputType
    _sum?: LeadSumAggregateInputType
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    campaignId: string
    runId: string
    campaignPlatformId: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    jobTitle: string | null
    company: string | null
    companySize: string | null
    industry: string | null
    location: string | null
    profileUrl: string | null
    websiteUrl: string | null
    linkedinUrl: string | null
    twitterHandle: string | null
    score: number | null
    scoreReason: string | null
    isVerified: boolean
    status: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    jobTitle?: boolean
    company?: boolean
    companySize?: boolean
    industry?: boolean
    location?: boolean
    profileUrl?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    twitterHandle?: boolean
    score?: boolean
    scoreReason?: boolean
    isVerified?: boolean
    status?: boolean
    platform?: boolean
    sourcePageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | Lead$campaignPlatformArgs<ExtArgs>
    rawData?: boolean | Lead$rawDataArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    jobTitle?: boolean
    company?: boolean
    companySize?: boolean
    industry?: boolean
    location?: boolean
    profileUrl?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    twitterHandle?: boolean
    score?: boolean
    scoreReason?: boolean
    isVerified?: boolean
    status?: boolean
    platform?: boolean
    sourcePageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | Lead$campaignPlatformArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    jobTitle?: boolean
    company?: boolean
    companySize?: boolean
    industry?: boolean
    location?: boolean
    profileUrl?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    twitterHandle?: boolean
    score?: boolean
    scoreReason?: boolean
    isVerified?: boolean
    status?: boolean
    platform?: boolean
    sourcePageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | Lead$campaignPlatformArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    campaignId?: boolean
    runId?: boolean
    campaignPlatformId?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    jobTitle?: boolean
    company?: boolean
    companySize?: boolean
    industry?: boolean
    location?: boolean
    profileUrl?: boolean
    websiteUrl?: boolean
    linkedinUrl?: boolean
    twitterHandle?: boolean
    score?: boolean
    scoreReason?: boolean
    isVerified?: boolean
    status?: boolean
    platform?: boolean
    sourcePageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "runId" | "campaignPlatformId" | "name" | "firstName" | "lastName" | "email" | "phone" | "jobTitle" | "company" | "companySize" | "industry" | "location" | "profileUrl" | "websiteUrl" | "linkedinUrl" | "twitterHandle" | "score" | "scoreReason" | "isVerified" | "status" | "platform" | "sourcePageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | Lead$campaignPlatformArgs<ExtArgs>
    rawData?: boolean | Lead$rawDataArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | Lead$campaignPlatformArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    run?: boolean | RunDefaultArgs<ExtArgs>
    campaignPlatform?: boolean | Lead$campaignPlatformArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      run: Prisma.$RunPayload<ExtArgs>
      campaignPlatform: Prisma.$CampaignPlatformPayload<ExtArgs> | null
      rawData: Prisma.$LeadRawDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      runId: string
      campaignPlatformId: string | null
      name: string | null
      firstName: string | null
      lastName: string | null
      email: string | null
      phone: string | null
      jobTitle: string | null
      company: string | null
      companySize: string | null
      industry: string | null
      location: string | null
      profileUrl: string | null
      websiteUrl: string | null
      linkedinUrl: string | null
      twitterHandle: string | null
      score: number | null
      scoreReason: string | null
      isVerified: boolean
      status: $Enums.LeadStatus
      platform: $Enums.Platform
      sourcePageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaignPlatform<T extends Lead$campaignPlatformArgs<ExtArgs> = {}>(args?: Subset<T, Lead$campaignPlatformArgs<ExtArgs>>): Prisma__CampaignPlatformClient<$Result.GetResult<Prisma.$CampaignPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rawData<T extends Lead$rawDataArgs<ExtArgs> = {}>(args?: Subset<T, Lead$rawDataArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly campaignId: FieldRef<"Lead", 'String'>
    readonly runId: FieldRef<"Lead", 'String'>
    readonly campaignPlatformId: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly firstName: FieldRef<"Lead", 'String'>
    readonly lastName: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly jobTitle: FieldRef<"Lead", 'String'>
    readonly company: FieldRef<"Lead", 'String'>
    readonly companySize: FieldRef<"Lead", 'String'>
    readonly industry: FieldRef<"Lead", 'String'>
    readonly location: FieldRef<"Lead", 'String'>
    readonly profileUrl: FieldRef<"Lead", 'String'>
    readonly websiteUrl: FieldRef<"Lead", 'String'>
    readonly linkedinUrl: FieldRef<"Lead", 'String'>
    readonly twitterHandle: FieldRef<"Lead", 'String'>
    readonly score: FieldRef<"Lead", 'Int'>
    readonly scoreReason: FieldRef<"Lead", 'String'>
    readonly isVerified: FieldRef<"Lead", 'Boolean'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly platform: FieldRef<"Lead", 'Platform'>
    readonly sourcePageUrl: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.campaignPlatform
   */
  export type Lead$campaignPlatformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPlatform
     */
    select?: CampaignPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPlatform
     */
    omit?: CampaignPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPlatformInclude<ExtArgs> | null
    where?: CampaignPlatformWhereInput
  }

  /**
   * Lead.rawData
   */
  export type Lead$rawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    where?: LeadRawDataWhereInput
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model LeadRawData
   */

  export type AggregateLeadRawData = {
    _count: LeadRawDataCountAggregateOutputType | null
    _min: LeadRawDataMinAggregateOutputType | null
    _max: LeadRawDataMaxAggregateOutputType | null
  }

  export type LeadRawDataMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    rawHtml: string | null
    rawMarkdown: string | null
    llmInput: string | null
    llmOutput: string | null
    screenshotPath: string | null
    scrapedAt: Date | null
  }

  export type LeadRawDataMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    rawHtml: string | null
    rawMarkdown: string | null
    llmInput: string | null
    llmOutput: string | null
    screenshotPath: string | null
    scrapedAt: Date | null
  }

  export type LeadRawDataCountAggregateOutputType = {
    id: number
    leadId: number
    rawHtml: number
    rawMarkdown: number
    llmInput: number
    llmOutput: number
    screenshotPath: number
    scrapedAt: number
    _all: number
  }


  export type LeadRawDataMinAggregateInputType = {
    id?: true
    leadId?: true
    rawHtml?: true
    rawMarkdown?: true
    llmInput?: true
    llmOutput?: true
    screenshotPath?: true
    scrapedAt?: true
  }

  export type LeadRawDataMaxAggregateInputType = {
    id?: true
    leadId?: true
    rawHtml?: true
    rawMarkdown?: true
    llmInput?: true
    llmOutput?: true
    screenshotPath?: true
    scrapedAt?: true
  }

  export type LeadRawDataCountAggregateInputType = {
    id?: true
    leadId?: true
    rawHtml?: true
    rawMarkdown?: true
    llmInput?: true
    llmOutput?: true
    screenshotPath?: true
    scrapedAt?: true
    _all?: true
  }

  export type LeadRawDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadRawData to aggregate.
     */
    where?: LeadRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRawData to fetch.
     */
    orderBy?: LeadRawDataOrderByWithRelationInput | LeadRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadRawData
    **/
    _count?: true | LeadRawDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadRawDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadRawDataMaxAggregateInputType
  }

  export type GetLeadRawDataAggregateType<T extends LeadRawDataAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadRawData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadRawData[P]>
      : GetScalarType<T[P], AggregateLeadRawData[P]>
  }




  export type LeadRawDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadRawDataWhereInput
    orderBy?: LeadRawDataOrderByWithAggregationInput | LeadRawDataOrderByWithAggregationInput[]
    by: LeadRawDataScalarFieldEnum[] | LeadRawDataScalarFieldEnum
    having?: LeadRawDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadRawDataCountAggregateInputType | true
    _min?: LeadRawDataMinAggregateInputType
    _max?: LeadRawDataMaxAggregateInputType
  }

  export type LeadRawDataGroupByOutputType = {
    id: string
    leadId: string
    rawHtml: string | null
    rawMarkdown: string | null
    llmInput: string | null
    llmOutput: string | null
    screenshotPath: string | null
    scrapedAt: Date
    _count: LeadRawDataCountAggregateOutputType | null
    _min: LeadRawDataMinAggregateOutputType | null
    _max: LeadRawDataMaxAggregateOutputType | null
  }

  type GetLeadRawDataGroupByPayload<T extends LeadRawDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadRawDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadRawDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadRawDataGroupByOutputType[P]>
            : GetScalarType<T[P], LeadRawDataGroupByOutputType[P]>
        }
      >
    >


  export type LeadRawDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    rawHtml?: boolean
    rawMarkdown?: boolean
    llmInput?: boolean
    llmOutput?: boolean
    screenshotPath?: boolean
    scrapedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadRawData"]>

  export type LeadRawDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    rawHtml?: boolean
    rawMarkdown?: boolean
    llmInput?: boolean
    llmOutput?: boolean
    screenshotPath?: boolean
    scrapedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadRawData"]>

  export type LeadRawDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    rawHtml?: boolean
    rawMarkdown?: boolean
    llmInput?: boolean
    llmOutput?: boolean
    screenshotPath?: boolean
    scrapedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadRawData"]>

  export type LeadRawDataSelectScalar = {
    id?: boolean
    leadId?: boolean
    rawHtml?: boolean
    rawMarkdown?: boolean
    llmInput?: boolean
    llmOutput?: boolean
    screenshotPath?: boolean
    scrapedAt?: boolean
  }

  export type LeadRawDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "rawHtml" | "rawMarkdown" | "llmInput" | "llmOutput" | "screenshotPath" | "scrapedAt", ExtArgs["result"]["leadRawData"]>
  export type LeadRawDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadRawDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadRawDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $LeadRawDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadRawData"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      rawHtml: string | null
      rawMarkdown: string | null
      llmInput: string | null
      llmOutput: string | null
      screenshotPath: string | null
      scrapedAt: Date
    }, ExtArgs["result"]["leadRawData"]>
    composites: {}
  }

  type LeadRawDataGetPayload<S extends boolean | null | undefined | LeadRawDataDefaultArgs> = $Result.GetResult<Prisma.$LeadRawDataPayload, S>

  type LeadRawDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadRawDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadRawDataCountAggregateInputType | true
    }

  export interface LeadRawDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadRawData'], meta: { name: 'LeadRawData' } }
    /**
     * Find zero or one LeadRawData that matches the filter.
     * @param {LeadRawDataFindUniqueArgs} args - Arguments to find a LeadRawData
     * @example
     * // Get one LeadRawData
     * const leadRawData = await prisma.leadRawData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadRawDataFindUniqueArgs>(args: SelectSubset<T, LeadRawDataFindUniqueArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadRawData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadRawDataFindUniqueOrThrowArgs} args - Arguments to find a LeadRawData
     * @example
     * // Get one LeadRawData
     * const leadRawData = await prisma.leadRawData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadRawDataFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadRawDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadRawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRawDataFindFirstArgs} args - Arguments to find a LeadRawData
     * @example
     * // Get one LeadRawData
     * const leadRawData = await prisma.leadRawData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadRawDataFindFirstArgs>(args?: SelectSubset<T, LeadRawDataFindFirstArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadRawData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRawDataFindFirstOrThrowArgs} args - Arguments to find a LeadRawData
     * @example
     * // Get one LeadRawData
     * const leadRawData = await prisma.leadRawData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadRawDataFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadRawDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadRawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRawDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadRawData
     * const leadRawData = await prisma.leadRawData.findMany()
     * 
     * // Get first 10 LeadRawData
     * const leadRawData = await prisma.leadRawData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadRawDataWithIdOnly = await prisma.leadRawData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadRawDataFindManyArgs>(args?: SelectSubset<T, LeadRawDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadRawData.
     * @param {LeadRawDataCreateArgs} args - Arguments to create a LeadRawData.
     * @example
     * // Create one LeadRawData
     * const LeadRawData = await prisma.leadRawData.create({
     *   data: {
     *     // ... data to create a LeadRawData
     *   }
     * })
     * 
     */
    create<T extends LeadRawDataCreateArgs>(args: SelectSubset<T, LeadRawDataCreateArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadRawData.
     * @param {LeadRawDataCreateManyArgs} args - Arguments to create many LeadRawData.
     * @example
     * // Create many LeadRawData
     * const leadRawData = await prisma.leadRawData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadRawDataCreateManyArgs>(args?: SelectSubset<T, LeadRawDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadRawData and returns the data saved in the database.
     * @param {LeadRawDataCreateManyAndReturnArgs} args - Arguments to create many LeadRawData.
     * @example
     * // Create many LeadRawData
     * const leadRawData = await prisma.leadRawData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadRawData and only return the `id`
     * const leadRawDataWithIdOnly = await prisma.leadRawData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadRawDataCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadRawDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadRawData.
     * @param {LeadRawDataDeleteArgs} args - Arguments to delete one LeadRawData.
     * @example
     * // Delete one LeadRawData
     * const LeadRawData = await prisma.leadRawData.delete({
     *   where: {
     *     // ... filter to delete one LeadRawData
     *   }
     * })
     * 
     */
    delete<T extends LeadRawDataDeleteArgs>(args: SelectSubset<T, LeadRawDataDeleteArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadRawData.
     * @param {LeadRawDataUpdateArgs} args - Arguments to update one LeadRawData.
     * @example
     * // Update one LeadRawData
     * const leadRawData = await prisma.leadRawData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadRawDataUpdateArgs>(args: SelectSubset<T, LeadRawDataUpdateArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadRawData.
     * @param {LeadRawDataDeleteManyArgs} args - Arguments to filter LeadRawData to delete.
     * @example
     * // Delete a few LeadRawData
     * const { count } = await prisma.leadRawData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadRawDataDeleteManyArgs>(args?: SelectSubset<T, LeadRawDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRawDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadRawData
     * const leadRawData = await prisma.leadRawData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadRawDataUpdateManyArgs>(args: SelectSubset<T, LeadRawDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadRawData and returns the data updated in the database.
     * @param {LeadRawDataUpdateManyAndReturnArgs} args - Arguments to update many LeadRawData.
     * @example
     * // Update many LeadRawData
     * const leadRawData = await prisma.leadRawData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadRawData and only return the `id`
     * const leadRawDataWithIdOnly = await prisma.leadRawData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadRawDataUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadRawDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadRawData.
     * @param {LeadRawDataUpsertArgs} args - Arguments to update or create a LeadRawData.
     * @example
     * // Update or create a LeadRawData
     * const leadRawData = await prisma.leadRawData.upsert({
     *   create: {
     *     // ... data to create a LeadRawData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadRawData we want to update
     *   }
     * })
     */
    upsert<T extends LeadRawDataUpsertArgs>(args: SelectSubset<T, LeadRawDataUpsertArgs<ExtArgs>>): Prisma__LeadRawDataClient<$Result.GetResult<Prisma.$LeadRawDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRawDataCountArgs} args - Arguments to filter LeadRawData to count.
     * @example
     * // Count the number of LeadRawData
     * const count = await prisma.leadRawData.count({
     *   where: {
     *     // ... the filter for the LeadRawData we want to count
     *   }
     * })
    **/
    count<T extends LeadRawDataCountArgs>(
      args?: Subset<T, LeadRawDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadRawDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRawDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadRawDataAggregateArgs>(args: Subset<T, LeadRawDataAggregateArgs>): Prisma.PrismaPromise<GetLeadRawDataAggregateType<T>>

    /**
     * Group by LeadRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRawDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadRawDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadRawDataGroupByArgs['orderBy'] }
        : { orderBy?: LeadRawDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadRawDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadRawDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadRawData model
   */
  readonly fields: LeadRawDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadRawData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadRawDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadRawData model
   */
  interface LeadRawDataFieldRefs {
    readonly id: FieldRef<"LeadRawData", 'String'>
    readonly leadId: FieldRef<"LeadRawData", 'String'>
    readonly rawHtml: FieldRef<"LeadRawData", 'String'>
    readonly rawMarkdown: FieldRef<"LeadRawData", 'String'>
    readonly llmInput: FieldRef<"LeadRawData", 'String'>
    readonly llmOutput: FieldRef<"LeadRawData", 'String'>
    readonly screenshotPath: FieldRef<"LeadRawData", 'String'>
    readonly scrapedAt: FieldRef<"LeadRawData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadRawData findUnique
   */
  export type LeadRawDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * Filter, which LeadRawData to fetch.
     */
    where: LeadRawDataWhereUniqueInput
  }

  /**
   * LeadRawData findUniqueOrThrow
   */
  export type LeadRawDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * Filter, which LeadRawData to fetch.
     */
    where: LeadRawDataWhereUniqueInput
  }

  /**
   * LeadRawData findFirst
   */
  export type LeadRawDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * Filter, which LeadRawData to fetch.
     */
    where?: LeadRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRawData to fetch.
     */
    orderBy?: LeadRawDataOrderByWithRelationInput | LeadRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadRawData.
     */
    cursor?: LeadRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadRawData.
     */
    distinct?: LeadRawDataScalarFieldEnum | LeadRawDataScalarFieldEnum[]
  }

  /**
   * LeadRawData findFirstOrThrow
   */
  export type LeadRawDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * Filter, which LeadRawData to fetch.
     */
    where?: LeadRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRawData to fetch.
     */
    orderBy?: LeadRawDataOrderByWithRelationInput | LeadRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadRawData.
     */
    cursor?: LeadRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadRawData.
     */
    distinct?: LeadRawDataScalarFieldEnum | LeadRawDataScalarFieldEnum[]
  }

  /**
   * LeadRawData findMany
   */
  export type LeadRawDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * Filter, which LeadRawData to fetch.
     */
    where?: LeadRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRawData to fetch.
     */
    orderBy?: LeadRawDataOrderByWithRelationInput | LeadRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadRawData.
     */
    cursor?: LeadRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadRawData.
     */
    distinct?: LeadRawDataScalarFieldEnum | LeadRawDataScalarFieldEnum[]
  }

  /**
   * LeadRawData create
   */
  export type LeadRawDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadRawData.
     */
    data: XOR<LeadRawDataCreateInput, LeadRawDataUncheckedCreateInput>
  }

  /**
   * LeadRawData createMany
   */
  export type LeadRawDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadRawData.
     */
    data: LeadRawDataCreateManyInput | LeadRawDataCreateManyInput[]
  }

  /**
   * LeadRawData createManyAndReturn
   */
  export type LeadRawDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * The data used to create many LeadRawData.
     */
    data: LeadRawDataCreateManyInput | LeadRawDataCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadRawData update
   */
  export type LeadRawDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadRawData.
     */
    data: XOR<LeadRawDataUpdateInput, LeadRawDataUncheckedUpdateInput>
    /**
     * Choose, which LeadRawData to update.
     */
    where: LeadRawDataWhereUniqueInput
  }

  /**
   * LeadRawData updateMany
   */
  export type LeadRawDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadRawData.
     */
    data: XOR<LeadRawDataUpdateManyMutationInput, LeadRawDataUncheckedUpdateManyInput>
    /**
     * Filter which LeadRawData to update
     */
    where?: LeadRawDataWhereInput
    /**
     * Limit how many LeadRawData to update.
     */
    limit?: number
  }

  /**
   * LeadRawData updateManyAndReturn
   */
  export type LeadRawDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * The data used to update LeadRawData.
     */
    data: XOR<LeadRawDataUpdateManyMutationInput, LeadRawDataUncheckedUpdateManyInput>
    /**
     * Filter which LeadRawData to update
     */
    where?: LeadRawDataWhereInput
    /**
     * Limit how many LeadRawData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadRawData upsert
   */
  export type LeadRawDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadRawData to update in case it exists.
     */
    where: LeadRawDataWhereUniqueInput
    /**
     * In case the LeadRawData found by the `where` argument doesn't exist, create a new LeadRawData with this data.
     */
    create: XOR<LeadRawDataCreateInput, LeadRawDataUncheckedCreateInput>
    /**
     * In case the LeadRawData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadRawDataUpdateInput, LeadRawDataUncheckedUpdateInput>
  }

  /**
   * LeadRawData delete
   */
  export type LeadRawDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
    /**
     * Filter which LeadRawData to delete.
     */
    where: LeadRawDataWhereUniqueInput
  }

  /**
   * LeadRawData deleteMany
   */
  export type LeadRawDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadRawData to delete
     */
    where?: LeadRawDataWhereInput
    /**
     * Limit how many LeadRawData to delete.
     */
    limit?: number
  }

  /**
   * LeadRawData without action
   */
  export type LeadRawDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRawData
     */
    select?: LeadRawDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRawData
     */
    omit?: LeadRawDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRawDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    niche: 'niche',
    icp: 'icp',
    goal: 'goal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const CampaignPlatformScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    platform: 'platform',
    searchQuery: 'searchQuery',
    searchFilters: 'searchFilters',
    priority: 'priority',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt'
  };

  export type CampaignPlatformScalarFieldEnum = (typeof CampaignPlatformScalarFieldEnum)[keyof typeof CampaignPlatformScalarFieldEnum]


  export const RunScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    status: 'status',
    totalLeadsFound: 'totalLeadsFound',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    errorMessage: 'errorMessage'
  };

  export type RunScalarFieldEnum = (typeof RunScalarFieldEnum)[keyof typeof RunScalarFieldEnum]


  export const AgentStateScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    currentNode: 'currentNode',
    currentPlatform: 'currentPlatform',
    currentPlatformIdx: 'currentPlatformIdx',
    lastAction: 'lastAction',
    checkpoint: 'checkpoint',
    hitlRequired: 'hitlRequired',
    hitlType: 'hitlType',
    hitlScreenshotPath: 'hitlScreenshotPath',
    hitlResolvedAt: 'hitlResolvedAt',
    updatedAt: 'updatedAt'
  };

  export type AgentStateScalarFieldEnum = (typeof AgentStateScalarFieldEnum)[keyof typeof AgentStateScalarFieldEnum]


  export const RunPlatformProgressScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    campaignPlatformId: 'campaignPlatformId',
    status: 'status',
    pagesScraped: 'pagesScraped',
    leadsFound: 'leadsFound',
    lastCursorUrl: 'lastCursorUrl',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    errorMessage: 'errorMessage'
  };

  export type RunPlatformProgressScalarFieldEnum = (typeof RunPlatformProgressScalarFieldEnum)[keyof typeof RunPlatformProgressScalarFieldEnum]


  export const RunEventScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    type: 'type',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type RunEventScalarFieldEnum = (typeof RunEventScalarFieldEnum)[keyof typeof RunEventScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    runId: 'runId',
    campaignPlatformId: 'campaignPlatformId',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    jobTitle: 'jobTitle',
    company: 'company',
    companySize: 'companySize',
    industry: 'industry',
    location: 'location',
    profileUrl: 'profileUrl',
    websiteUrl: 'websiteUrl',
    linkedinUrl: 'linkedinUrl',
    twitterHandle: 'twitterHandle',
    score: 'score',
    scoreReason: 'scoreReason',
    isVerified: 'isVerified',
    status: 'status',
    platform: 'platform',
    sourcePageUrl: 'sourcePageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const LeadRawDataScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    rawHtml: 'rawHtml',
    rawMarkdown: 'rawMarkdown',
    llmInput: 'llmInput',
    llmOutput: 'llmOutput',
    screenshotPath: 'screenshotPath',
    scrapedAt: 'scrapedAt'
  };

  export type LeadRawDataScalarFieldEnum = (typeof LeadRawDataScalarFieldEnum)[keyof typeof LeadRawDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RunStatus'
   */
  export type EnumRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RunStatus'>
    


  /**
   * Reference to a field of type 'HitlType'
   */
  export type EnumHitlTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HitlType'>
    


  /**
   * Reference to a field of type 'PlatformRunStatus'
   */
  export type EnumPlatformRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlatformRunStatus'>
    


  /**
   * Reference to a field of type 'RunEventType'
   */
  export type EnumRunEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RunEventType'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    niche?: StringFilter<"Campaign"> | string
    icp?: StringFilter<"Campaign"> | string
    goal?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    platforms?: CampaignPlatformListRelationFilter
    runs?: RunListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    niche?: SortOrder
    icp?: SortOrder
    goal?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    platforms?: CampaignPlatformOrderByRelationAggregateInput
    runs?: RunOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    niche?: StringFilter<"Campaign"> | string
    icp?: StringFilter<"Campaign"> | string
    goal?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    platforms?: CampaignPlatformListRelationFilter
    runs?: RunListRelationFilter
    leads?: LeadListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    niche?: SortOrder
    icp?: SortOrder
    goal?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    niche?: StringWithAggregatesFilter<"Campaign"> | string
    icp?: StringWithAggregatesFilter<"Campaign"> | string
    goal?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type CampaignPlatformWhereInput = {
    AND?: CampaignPlatformWhereInput | CampaignPlatformWhereInput[]
    OR?: CampaignPlatformWhereInput[]
    NOT?: CampaignPlatformWhereInput | CampaignPlatformWhereInput[]
    id?: StringFilter<"CampaignPlatform"> | string
    campaignId?: StringFilter<"CampaignPlatform"> | string
    platform?: EnumPlatformFilter<"CampaignPlatform"> | $Enums.Platform
    searchQuery?: StringNullableFilter<"CampaignPlatform"> | string | null
    searchFilters?: StringNullableFilter<"CampaignPlatform"> | string | null
    priority?: IntFilter<"CampaignPlatform"> | number
    isEnabled?: BoolFilter<"CampaignPlatform"> | boolean
    createdAt?: DateTimeFilter<"CampaignPlatform"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    runs?: RunPlatformProgressListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type CampaignPlatformOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    searchQuery?: SortOrderInput | SortOrder
    searchFilters?: SortOrderInput | SortOrder
    priority?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    runs?: RunPlatformProgressOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type CampaignPlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_platform?: CampaignPlatformCampaignIdPlatformCompoundUniqueInput
    AND?: CampaignPlatformWhereInput | CampaignPlatformWhereInput[]
    OR?: CampaignPlatformWhereInput[]
    NOT?: CampaignPlatformWhereInput | CampaignPlatformWhereInput[]
    campaignId?: StringFilter<"CampaignPlatform"> | string
    platform?: EnumPlatformFilter<"CampaignPlatform"> | $Enums.Platform
    searchQuery?: StringNullableFilter<"CampaignPlatform"> | string | null
    searchFilters?: StringNullableFilter<"CampaignPlatform"> | string | null
    priority?: IntFilter<"CampaignPlatform"> | number
    isEnabled?: BoolFilter<"CampaignPlatform"> | boolean
    createdAt?: DateTimeFilter<"CampaignPlatform"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    runs?: RunPlatformProgressListRelationFilter
    leads?: LeadListRelationFilter
  }, "id" | "campaignId_platform">

  export type CampaignPlatformOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    searchQuery?: SortOrderInput | SortOrder
    searchFilters?: SortOrderInput | SortOrder
    priority?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
    _count?: CampaignPlatformCountOrderByAggregateInput
    _avg?: CampaignPlatformAvgOrderByAggregateInput
    _max?: CampaignPlatformMaxOrderByAggregateInput
    _min?: CampaignPlatformMinOrderByAggregateInput
    _sum?: CampaignPlatformSumOrderByAggregateInput
  }

  export type CampaignPlatformScalarWhereWithAggregatesInput = {
    AND?: CampaignPlatformScalarWhereWithAggregatesInput | CampaignPlatformScalarWhereWithAggregatesInput[]
    OR?: CampaignPlatformScalarWhereWithAggregatesInput[]
    NOT?: CampaignPlatformScalarWhereWithAggregatesInput | CampaignPlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignPlatform"> | string
    campaignId?: StringWithAggregatesFilter<"CampaignPlatform"> | string
    platform?: EnumPlatformWithAggregatesFilter<"CampaignPlatform"> | $Enums.Platform
    searchQuery?: StringNullableWithAggregatesFilter<"CampaignPlatform"> | string | null
    searchFilters?: StringNullableWithAggregatesFilter<"CampaignPlatform"> | string | null
    priority?: IntWithAggregatesFilter<"CampaignPlatform"> | number
    isEnabled?: BoolWithAggregatesFilter<"CampaignPlatform"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CampaignPlatform"> | Date | string
  }

  export type RunWhereInput = {
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    id?: StringFilter<"Run"> | string
    campaignId?: StringFilter<"Run"> | string
    status?: EnumRunStatusFilter<"Run"> | $Enums.RunStatus
    totalLeadsFound?: IntFilter<"Run"> | number
    startedAt?: DateTimeFilter<"Run"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    errorMessage?: StringNullableFilter<"Run"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    agentState?: XOR<AgentStateNullableScalarRelationFilter, AgentStateWhereInput> | null
    platformProgress?: RunPlatformProgressListRelationFilter
    events?: RunEventListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type RunOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
    totalLeadsFound?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    campaign?: CampaignOrderByWithRelationInput
    agentState?: AgentStateOrderByWithRelationInput
    platformProgress?: RunPlatformProgressOrderByRelationAggregateInput
    events?: RunEventOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type RunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    campaignId?: StringFilter<"Run"> | string
    status?: EnumRunStatusFilter<"Run"> | $Enums.RunStatus
    totalLeadsFound?: IntFilter<"Run"> | number
    startedAt?: DateTimeFilter<"Run"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    errorMessage?: StringNullableFilter<"Run"> | string | null
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    agentState?: XOR<AgentStateNullableScalarRelationFilter, AgentStateWhereInput> | null
    platformProgress?: RunPlatformProgressListRelationFilter
    events?: RunEventListRelationFilter
    leads?: LeadListRelationFilter
  }, "id">

  export type RunOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
    totalLeadsFound?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: RunCountOrderByAggregateInput
    _avg?: RunAvgOrderByAggregateInput
    _max?: RunMaxOrderByAggregateInput
    _min?: RunMinOrderByAggregateInput
    _sum?: RunSumOrderByAggregateInput
  }

  export type RunScalarWhereWithAggregatesInput = {
    AND?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    OR?: RunScalarWhereWithAggregatesInput[]
    NOT?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Run"> | string
    campaignId?: StringWithAggregatesFilter<"Run"> | string
    status?: EnumRunStatusWithAggregatesFilter<"Run"> | $Enums.RunStatus
    totalLeadsFound?: IntWithAggregatesFilter<"Run"> | number
    startedAt?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Run"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Run"> | string | null
  }

  export type AgentStateWhereInput = {
    AND?: AgentStateWhereInput | AgentStateWhereInput[]
    OR?: AgentStateWhereInput[]
    NOT?: AgentStateWhereInput | AgentStateWhereInput[]
    id?: StringFilter<"AgentState"> | string
    runId?: StringFilter<"AgentState"> | string
    currentNode?: StringNullableFilter<"AgentState"> | string | null
    currentPlatform?: EnumPlatformNullableFilter<"AgentState"> | $Enums.Platform | null
    currentPlatformIdx?: IntFilter<"AgentState"> | number
    lastAction?: StringNullableFilter<"AgentState"> | string | null
    checkpoint?: StringNullableFilter<"AgentState"> | string | null
    hitlRequired?: BoolFilter<"AgentState"> | boolean
    hitlType?: EnumHitlTypeNullableFilter<"AgentState"> | $Enums.HitlType | null
    hitlScreenshotPath?: StringNullableFilter<"AgentState"> | string | null
    hitlResolvedAt?: DateTimeNullableFilter<"AgentState"> | Date | string | null
    updatedAt?: DateTimeFilter<"AgentState"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }

  export type AgentStateOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    currentNode?: SortOrderInput | SortOrder
    currentPlatform?: SortOrderInput | SortOrder
    currentPlatformIdx?: SortOrder
    lastAction?: SortOrderInput | SortOrder
    checkpoint?: SortOrderInput | SortOrder
    hitlRequired?: SortOrder
    hitlType?: SortOrderInput | SortOrder
    hitlScreenshotPath?: SortOrderInput | SortOrder
    hitlResolvedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    run?: RunOrderByWithRelationInput
  }

  export type AgentStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId?: string
    AND?: AgentStateWhereInput | AgentStateWhereInput[]
    OR?: AgentStateWhereInput[]
    NOT?: AgentStateWhereInput | AgentStateWhereInput[]
    currentNode?: StringNullableFilter<"AgentState"> | string | null
    currentPlatform?: EnumPlatformNullableFilter<"AgentState"> | $Enums.Platform | null
    currentPlatformIdx?: IntFilter<"AgentState"> | number
    lastAction?: StringNullableFilter<"AgentState"> | string | null
    checkpoint?: StringNullableFilter<"AgentState"> | string | null
    hitlRequired?: BoolFilter<"AgentState"> | boolean
    hitlType?: EnumHitlTypeNullableFilter<"AgentState"> | $Enums.HitlType | null
    hitlScreenshotPath?: StringNullableFilter<"AgentState"> | string | null
    hitlResolvedAt?: DateTimeNullableFilter<"AgentState"> | Date | string | null
    updatedAt?: DateTimeFilter<"AgentState"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }, "id" | "runId">

  export type AgentStateOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    currentNode?: SortOrderInput | SortOrder
    currentPlatform?: SortOrderInput | SortOrder
    currentPlatformIdx?: SortOrder
    lastAction?: SortOrderInput | SortOrder
    checkpoint?: SortOrderInput | SortOrder
    hitlRequired?: SortOrder
    hitlType?: SortOrderInput | SortOrder
    hitlScreenshotPath?: SortOrderInput | SortOrder
    hitlResolvedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: AgentStateCountOrderByAggregateInput
    _avg?: AgentStateAvgOrderByAggregateInput
    _max?: AgentStateMaxOrderByAggregateInput
    _min?: AgentStateMinOrderByAggregateInput
    _sum?: AgentStateSumOrderByAggregateInput
  }

  export type AgentStateScalarWhereWithAggregatesInput = {
    AND?: AgentStateScalarWhereWithAggregatesInput | AgentStateScalarWhereWithAggregatesInput[]
    OR?: AgentStateScalarWhereWithAggregatesInput[]
    NOT?: AgentStateScalarWhereWithAggregatesInput | AgentStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentState"> | string
    runId?: StringWithAggregatesFilter<"AgentState"> | string
    currentNode?: StringNullableWithAggregatesFilter<"AgentState"> | string | null
    currentPlatform?: EnumPlatformNullableWithAggregatesFilter<"AgentState"> | $Enums.Platform | null
    currentPlatformIdx?: IntWithAggregatesFilter<"AgentState"> | number
    lastAction?: StringNullableWithAggregatesFilter<"AgentState"> | string | null
    checkpoint?: StringNullableWithAggregatesFilter<"AgentState"> | string | null
    hitlRequired?: BoolWithAggregatesFilter<"AgentState"> | boolean
    hitlType?: EnumHitlTypeNullableWithAggregatesFilter<"AgentState"> | $Enums.HitlType | null
    hitlScreenshotPath?: StringNullableWithAggregatesFilter<"AgentState"> | string | null
    hitlResolvedAt?: DateTimeNullableWithAggregatesFilter<"AgentState"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"AgentState"> | Date | string
  }

  export type RunPlatformProgressWhereInput = {
    AND?: RunPlatformProgressWhereInput | RunPlatformProgressWhereInput[]
    OR?: RunPlatformProgressWhereInput[]
    NOT?: RunPlatformProgressWhereInput | RunPlatformProgressWhereInput[]
    id?: StringFilter<"RunPlatformProgress"> | string
    runId?: StringFilter<"RunPlatformProgress"> | string
    campaignPlatformId?: StringFilter<"RunPlatformProgress"> | string
    status?: EnumPlatformRunStatusFilter<"RunPlatformProgress"> | $Enums.PlatformRunStatus
    pagesScraped?: IntFilter<"RunPlatformProgress"> | number
    leadsFound?: IntFilter<"RunPlatformProgress"> | number
    lastCursorUrl?: StringNullableFilter<"RunPlatformProgress"> | string | null
    startedAt?: DateTimeNullableFilter<"RunPlatformProgress"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"RunPlatformProgress"> | Date | string | null
    errorMessage?: StringNullableFilter<"RunPlatformProgress"> | string | null
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    campaignPlatform?: XOR<CampaignPlatformScalarRelationFilter, CampaignPlatformWhereInput>
  }

  export type RunPlatformProgressOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    status?: SortOrder
    pagesScraped?: SortOrder
    leadsFound?: SortOrder
    lastCursorUrl?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    run?: RunOrderByWithRelationInput
    campaignPlatform?: CampaignPlatformOrderByWithRelationInput
  }

  export type RunPlatformProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId_campaignPlatformId?: RunPlatformProgressRunIdCampaignPlatformIdCompoundUniqueInput
    AND?: RunPlatformProgressWhereInput | RunPlatformProgressWhereInput[]
    OR?: RunPlatformProgressWhereInput[]
    NOT?: RunPlatformProgressWhereInput | RunPlatformProgressWhereInput[]
    runId?: StringFilter<"RunPlatformProgress"> | string
    campaignPlatformId?: StringFilter<"RunPlatformProgress"> | string
    status?: EnumPlatformRunStatusFilter<"RunPlatformProgress"> | $Enums.PlatformRunStatus
    pagesScraped?: IntFilter<"RunPlatformProgress"> | number
    leadsFound?: IntFilter<"RunPlatformProgress"> | number
    lastCursorUrl?: StringNullableFilter<"RunPlatformProgress"> | string | null
    startedAt?: DateTimeNullableFilter<"RunPlatformProgress"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"RunPlatformProgress"> | Date | string | null
    errorMessage?: StringNullableFilter<"RunPlatformProgress"> | string | null
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    campaignPlatform?: XOR<CampaignPlatformScalarRelationFilter, CampaignPlatformWhereInput>
  }, "id" | "runId_campaignPlatformId">

  export type RunPlatformProgressOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    status?: SortOrder
    pagesScraped?: SortOrder
    leadsFound?: SortOrder
    lastCursorUrl?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: RunPlatformProgressCountOrderByAggregateInput
    _avg?: RunPlatformProgressAvgOrderByAggregateInput
    _max?: RunPlatformProgressMaxOrderByAggregateInput
    _min?: RunPlatformProgressMinOrderByAggregateInput
    _sum?: RunPlatformProgressSumOrderByAggregateInput
  }

  export type RunPlatformProgressScalarWhereWithAggregatesInput = {
    AND?: RunPlatformProgressScalarWhereWithAggregatesInput | RunPlatformProgressScalarWhereWithAggregatesInput[]
    OR?: RunPlatformProgressScalarWhereWithAggregatesInput[]
    NOT?: RunPlatformProgressScalarWhereWithAggregatesInput | RunPlatformProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RunPlatformProgress"> | string
    runId?: StringWithAggregatesFilter<"RunPlatformProgress"> | string
    campaignPlatformId?: StringWithAggregatesFilter<"RunPlatformProgress"> | string
    status?: EnumPlatformRunStatusWithAggregatesFilter<"RunPlatformProgress"> | $Enums.PlatformRunStatus
    pagesScraped?: IntWithAggregatesFilter<"RunPlatformProgress"> | number
    leadsFound?: IntWithAggregatesFilter<"RunPlatformProgress"> | number
    lastCursorUrl?: StringNullableWithAggregatesFilter<"RunPlatformProgress"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"RunPlatformProgress"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"RunPlatformProgress"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"RunPlatformProgress"> | string | null
  }

  export type RunEventWhereInput = {
    AND?: RunEventWhereInput | RunEventWhereInput[]
    OR?: RunEventWhereInput[]
    NOT?: RunEventWhereInput | RunEventWhereInput[]
    id?: StringFilter<"RunEvent"> | string
    runId?: StringFilter<"RunEvent"> | string
    type?: EnumRunEventTypeFilter<"RunEvent"> | $Enums.RunEventType
    message?: StringFilter<"RunEvent"> | string
    metadata?: StringNullableFilter<"RunEvent"> | string | null
    createdAt?: DateTimeFilter<"RunEvent"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }

  export type RunEventOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    run?: RunOrderByWithRelationInput
  }

  export type RunEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RunEventWhereInput | RunEventWhereInput[]
    OR?: RunEventWhereInput[]
    NOT?: RunEventWhereInput | RunEventWhereInput[]
    runId?: StringFilter<"RunEvent"> | string
    type?: EnumRunEventTypeFilter<"RunEvent"> | $Enums.RunEventType
    message?: StringFilter<"RunEvent"> | string
    metadata?: StringNullableFilter<"RunEvent"> | string | null
    createdAt?: DateTimeFilter<"RunEvent"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }, "id">

  export type RunEventOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RunEventCountOrderByAggregateInput
    _max?: RunEventMaxOrderByAggregateInput
    _min?: RunEventMinOrderByAggregateInput
  }

  export type RunEventScalarWhereWithAggregatesInput = {
    AND?: RunEventScalarWhereWithAggregatesInput | RunEventScalarWhereWithAggregatesInput[]
    OR?: RunEventScalarWhereWithAggregatesInput[]
    NOT?: RunEventScalarWhereWithAggregatesInput | RunEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RunEvent"> | string
    runId?: StringWithAggregatesFilter<"RunEvent"> | string
    type?: EnumRunEventTypeWithAggregatesFilter<"RunEvent"> | $Enums.RunEventType
    message?: StringWithAggregatesFilter<"RunEvent"> | string
    metadata?: StringNullableWithAggregatesFilter<"RunEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RunEvent"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    campaignId?: StringFilter<"Lead"> | string
    runId?: StringFilter<"Lead"> | string
    campaignPlatformId?: StringNullableFilter<"Lead"> | string | null
    name?: StringNullableFilter<"Lead"> | string | null
    firstName?: StringNullableFilter<"Lead"> | string | null
    lastName?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    jobTitle?: StringNullableFilter<"Lead"> | string | null
    company?: StringNullableFilter<"Lead"> | string | null
    companySize?: StringNullableFilter<"Lead"> | string | null
    industry?: StringNullableFilter<"Lead"> | string | null
    location?: StringNullableFilter<"Lead"> | string | null
    profileUrl?: StringNullableFilter<"Lead"> | string | null
    websiteUrl?: StringNullableFilter<"Lead"> | string | null
    linkedinUrl?: StringNullableFilter<"Lead"> | string | null
    twitterHandle?: StringNullableFilter<"Lead"> | string | null
    score?: IntNullableFilter<"Lead"> | number | null
    scoreReason?: StringNullableFilter<"Lead"> | string | null
    isVerified?: BoolFilter<"Lead"> | boolean
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    platform?: EnumPlatformFilter<"Lead"> | $Enums.Platform
    sourcePageUrl?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    campaignPlatform?: XOR<CampaignPlatformNullableScalarRelationFilter, CampaignPlatformWhereInput> | null
    rawData?: XOR<LeadRawDataNullableScalarRelationFilter, LeadRawDataWhereInput> | null
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    twitterHandle?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    scoreReason?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    sourcePageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    run?: RunOrderByWithRelationInput
    campaignPlatform?: CampaignPlatformOrderByWithRelationInput
    rawData?: LeadRawDataOrderByWithRelationInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_campaignId?: LeadEmailCampaignIdCompoundUniqueInput
    profileUrl_campaignId?: LeadProfileUrlCampaignIdCompoundUniqueInput
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    campaignId?: StringFilter<"Lead"> | string
    runId?: StringFilter<"Lead"> | string
    campaignPlatformId?: StringNullableFilter<"Lead"> | string | null
    name?: StringNullableFilter<"Lead"> | string | null
    firstName?: StringNullableFilter<"Lead"> | string | null
    lastName?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    jobTitle?: StringNullableFilter<"Lead"> | string | null
    company?: StringNullableFilter<"Lead"> | string | null
    companySize?: StringNullableFilter<"Lead"> | string | null
    industry?: StringNullableFilter<"Lead"> | string | null
    location?: StringNullableFilter<"Lead"> | string | null
    profileUrl?: StringNullableFilter<"Lead"> | string | null
    websiteUrl?: StringNullableFilter<"Lead"> | string | null
    linkedinUrl?: StringNullableFilter<"Lead"> | string | null
    twitterHandle?: StringNullableFilter<"Lead"> | string | null
    score?: IntNullableFilter<"Lead"> | number | null
    scoreReason?: StringNullableFilter<"Lead"> | string | null
    isVerified?: BoolFilter<"Lead"> | boolean
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    platform?: EnumPlatformFilter<"Lead"> | $Enums.Platform
    sourcePageUrl?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
    campaignPlatform?: XOR<CampaignPlatformNullableScalarRelationFilter, CampaignPlatformWhereInput> | null
    rawData?: XOR<LeadRawDataNullableScalarRelationFilter, LeadRawDataWhereInput> | null
  }, "id" | "email_campaignId" | "profileUrl_campaignId">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    twitterHandle?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    scoreReason?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    sourcePageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _avg?: LeadAvgOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
    _sum?: LeadSumOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    campaignId?: StringWithAggregatesFilter<"Lead"> | string
    runId?: StringWithAggregatesFilter<"Lead"> | string
    campaignPlatformId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    name?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    company?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    companySize?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    location?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    twitterHandle?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    score?: IntNullableWithAggregatesFilter<"Lead"> | number | null
    scoreReason?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Lead"> | boolean
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    platform?: EnumPlatformWithAggregatesFilter<"Lead"> | $Enums.Platform
    sourcePageUrl?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type LeadRawDataWhereInput = {
    AND?: LeadRawDataWhereInput | LeadRawDataWhereInput[]
    OR?: LeadRawDataWhereInput[]
    NOT?: LeadRawDataWhereInput | LeadRawDataWhereInput[]
    id?: StringFilter<"LeadRawData"> | string
    leadId?: StringFilter<"LeadRawData"> | string
    rawHtml?: StringNullableFilter<"LeadRawData"> | string | null
    rawMarkdown?: StringNullableFilter<"LeadRawData"> | string | null
    llmInput?: StringNullableFilter<"LeadRawData"> | string | null
    llmOutput?: StringNullableFilter<"LeadRawData"> | string | null
    screenshotPath?: StringNullableFilter<"LeadRawData"> | string | null
    scrapedAt?: DateTimeFilter<"LeadRawData"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type LeadRawDataOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    rawHtml?: SortOrderInput | SortOrder
    rawMarkdown?: SortOrderInput | SortOrder
    llmInput?: SortOrderInput | SortOrder
    llmOutput?: SortOrderInput | SortOrder
    screenshotPath?: SortOrderInput | SortOrder
    scrapedAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type LeadRawDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leadId?: string
    AND?: LeadRawDataWhereInput | LeadRawDataWhereInput[]
    OR?: LeadRawDataWhereInput[]
    NOT?: LeadRawDataWhereInput | LeadRawDataWhereInput[]
    rawHtml?: StringNullableFilter<"LeadRawData"> | string | null
    rawMarkdown?: StringNullableFilter<"LeadRawData"> | string | null
    llmInput?: StringNullableFilter<"LeadRawData"> | string | null
    llmOutput?: StringNullableFilter<"LeadRawData"> | string | null
    screenshotPath?: StringNullableFilter<"LeadRawData"> | string | null
    scrapedAt?: DateTimeFilter<"LeadRawData"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id" | "leadId">

  export type LeadRawDataOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    rawHtml?: SortOrderInput | SortOrder
    rawMarkdown?: SortOrderInput | SortOrder
    llmInput?: SortOrderInput | SortOrder
    llmOutput?: SortOrderInput | SortOrder
    screenshotPath?: SortOrderInput | SortOrder
    scrapedAt?: SortOrder
    _count?: LeadRawDataCountOrderByAggregateInput
    _max?: LeadRawDataMaxOrderByAggregateInput
    _min?: LeadRawDataMinOrderByAggregateInput
  }

  export type LeadRawDataScalarWhereWithAggregatesInput = {
    AND?: LeadRawDataScalarWhereWithAggregatesInput | LeadRawDataScalarWhereWithAggregatesInput[]
    OR?: LeadRawDataScalarWhereWithAggregatesInput[]
    NOT?: LeadRawDataScalarWhereWithAggregatesInput | LeadRawDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadRawData"> | string
    leadId?: StringWithAggregatesFilter<"LeadRawData"> | string
    rawHtml?: StringNullableWithAggregatesFilter<"LeadRawData"> | string | null
    rawMarkdown?: StringNullableWithAggregatesFilter<"LeadRawData"> | string | null
    llmInput?: StringNullableWithAggregatesFilter<"LeadRawData"> | string | null
    llmOutput?: StringNullableWithAggregatesFilter<"LeadRawData"> | string | null
    screenshotPath?: StringNullableWithAggregatesFilter<"LeadRawData"> | string | null
    scrapedAt?: DateTimeWithAggregatesFilter<"LeadRawData"> | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: CampaignPlatformCreateNestedManyWithoutCampaignInput
    runs?: RunCreateNestedManyWithoutCampaignInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: CampaignPlatformUncheckedCreateNestedManyWithoutCampaignInput
    runs?: RunUncheckedCreateNestedManyWithoutCampaignInput
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: CampaignPlatformUpdateManyWithoutCampaignNestedInput
    runs?: RunUpdateManyWithoutCampaignNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: CampaignPlatformUncheckedUpdateManyWithoutCampaignNestedInput
    runs?: RunUncheckedUpdateManyWithoutCampaignNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPlatformCreateInput = {
    id?: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutPlatformsInput
    runs?: RunPlatformProgressCreateNestedManyWithoutCampaignPlatformInput
    leads?: LeadCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformUncheckedCreateInput = {
    id?: string
    campaignId: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    runs?: RunPlatformProgressUncheckedCreateNestedManyWithoutCampaignPlatformInput
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutPlatformsNestedInput
    runs?: RunPlatformProgressUpdateManyWithoutCampaignPlatformNestedInput
    leads?: LeadUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type CampaignPlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunPlatformProgressUncheckedUpdateManyWithoutCampaignPlatformNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type CampaignPlatformCreateManyInput = {
    id?: string
    campaignId: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
  }

  export type CampaignPlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCreateInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    campaign: CampaignCreateNestedOneWithoutRunsInput
    agentState?: AgentStateCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressCreateNestedManyWithoutRunInput
    events?: RunEventCreateNestedManyWithoutRunInput
    leads?: LeadCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateInput = {
    id?: string
    campaignId: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    agentState?: AgentStateUncheckedCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressUncheckedCreateNestedManyWithoutRunInput
    events?: RunEventUncheckedCreateNestedManyWithoutRunInput
    leads?: LeadUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutRunsNestedInput
    agentState?: AgentStateUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUpdateManyWithoutRunNestedInput
    events?: RunEventUpdateManyWithoutRunNestedInput
    leads?: LeadUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    agentState?: AgentStateUncheckedUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUncheckedUpdateManyWithoutRunNestedInput
    events?: RunEventUncheckedUpdateManyWithoutRunNestedInput
    leads?: LeadUncheckedUpdateManyWithoutRunNestedInput
  }

  export type RunCreateManyInput = {
    id?: string
    campaignId: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type RunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentStateCreateInput = {
    id?: string
    currentNode?: string | null
    currentPlatform?: $Enums.Platform | null
    currentPlatformIdx?: number
    lastAction?: string | null
    checkpoint?: string | null
    hitlRequired?: boolean
    hitlType?: $Enums.HitlType | null
    hitlScreenshotPath?: string | null
    hitlResolvedAt?: Date | string | null
    updatedAt?: Date | string
    run: RunCreateNestedOneWithoutAgentStateInput
  }

  export type AgentStateUncheckedCreateInput = {
    id?: string
    runId: string
    currentNode?: string | null
    currentPlatform?: $Enums.Platform | null
    currentPlatformIdx?: number
    lastAction?: string | null
    checkpoint?: string | null
    hitlRequired?: boolean
    hitlType?: $Enums.HitlType | null
    hitlScreenshotPath?: string | null
    hitlResolvedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type AgentStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    currentPlatform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    currentPlatformIdx?: IntFieldUpdateOperationsInput | number
    lastAction?: NullableStringFieldUpdateOperationsInput | string | null
    checkpoint?: NullableStringFieldUpdateOperationsInput | string | null
    hitlRequired?: BoolFieldUpdateOperationsInput | boolean
    hitlType?: NullableEnumHitlTypeFieldUpdateOperationsInput | $Enums.HitlType | null
    hitlScreenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    hitlResolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutAgentStateNestedInput
  }

  export type AgentStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    currentPlatform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    currentPlatformIdx?: IntFieldUpdateOperationsInput | number
    lastAction?: NullableStringFieldUpdateOperationsInput | string | null
    checkpoint?: NullableStringFieldUpdateOperationsInput | string | null
    hitlRequired?: BoolFieldUpdateOperationsInput | boolean
    hitlType?: NullableEnumHitlTypeFieldUpdateOperationsInput | $Enums.HitlType | null
    hitlScreenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    hitlResolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStateCreateManyInput = {
    id?: string
    runId: string
    currentNode?: string | null
    currentPlatform?: $Enums.Platform | null
    currentPlatformIdx?: number
    lastAction?: string | null
    checkpoint?: string | null
    hitlRequired?: boolean
    hitlType?: $Enums.HitlType | null
    hitlScreenshotPath?: string | null
    hitlResolvedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type AgentStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    currentPlatform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    currentPlatformIdx?: IntFieldUpdateOperationsInput | number
    lastAction?: NullableStringFieldUpdateOperationsInput | string | null
    checkpoint?: NullableStringFieldUpdateOperationsInput | string | null
    hitlRequired?: BoolFieldUpdateOperationsInput | boolean
    hitlType?: NullableEnumHitlTypeFieldUpdateOperationsInput | $Enums.HitlType | null
    hitlScreenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    hitlResolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    currentPlatform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    currentPlatformIdx?: IntFieldUpdateOperationsInput | number
    lastAction?: NullableStringFieldUpdateOperationsInput | string | null
    checkpoint?: NullableStringFieldUpdateOperationsInput | string | null
    hitlRequired?: BoolFieldUpdateOperationsInput | boolean
    hitlType?: NullableEnumHitlTypeFieldUpdateOperationsInput | $Enums.HitlType | null
    hitlScreenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    hitlResolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunPlatformProgressCreateInput = {
    id?: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    run: RunCreateNestedOneWithoutPlatformProgressInput
    campaignPlatform: CampaignPlatformCreateNestedOneWithoutRunsInput
  }

  export type RunPlatformProgressUncheckedCreateInput = {
    id?: string
    runId: string
    campaignPlatformId: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type RunPlatformProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    run?: RunUpdateOneRequiredWithoutPlatformProgressNestedInput
    campaignPlatform?: CampaignPlatformUpdateOneRequiredWithoutRunsNestedInput
  }

  export type RunPlatformProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunPlatformProgressCreateManyInput = {
    id?: string
    runId: string
    campaignPlatformId: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type RunPlatformProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunPlatformProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunEventCreateInput = {
    id?: string
    type: $Enums.RunEventType
    message: string
    metadata?: string | null
    createdAt?: Date | string
    run: RunCreateNestedOneWithoutEventsInput
  }

  export type RunEventUncheckedCreateInput = {
    id?: string
    runId: string
    type: $Enums.RunEventType
    message: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RunEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRunEventTypeFieldUpdateOperationsInput | $Enums.RunEventType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutEventsNestedInput
  }

  export type RunEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    type?: EnumRunEventTypeFieldUpdateOperationsInput | $Enums.RunEventType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunEventCreateManyInput = {
    id?: string
    runId: string
    type: $Enums.RunEventType
    message: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RunEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRunEventTypeFieldUpdateOperationsInput | $Enums.RunEventType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    type?: EnumRunEventTypeFieldUpdateOperationsInput | $Enums.RunEventType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    run: RunCreateNestedOneWithoutLeadsInput
    campaignPlatform?: CampaignPlatformCreateNestedOneWithoutLeadsInput
    rawData?: LeadRawDataCreateNestedOneWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    campaignId: string
    runId: string
    campaignPlatformId?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawData?: LeadRawDataUncheckedCreateNestedOneWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    run?: RunUpdateOneRequiredWithoutLeadsNestedInput
    campaignPlatform?: CampaignPlatformUpdateOneWithoutLeadsNestedInput
    rawData?: LeadRawDataUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawData?: LeadRawDataUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    campaignId: string
    runId: string
    campaignPlatformId?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadRawDataCreateInput = {
    id?: string
    rawHtml?: string | null
    rawMarkdown?: string | null
    llmInput?: string | null
    llmOutput?: string | null
    screenshotPath?: string | null
    scrapedAt?: Date | string
    lead: LeadCreateNestedOneWithoutRawDataInput
  }

  export type LeadRawDataUncheckedCreateInput = {
    id?: string
    leadId: string
    rawHtml?: string | null
    rawMarkdown?: string | null
    llmInput?: string | null
    llmOutput?: string | null
    screenshotPath?: string | null
    scrapedAt?: Date | string
  }

  export type LeadRawDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    rawMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    llmInput?: NullableStringFieldUpdateOperationsInput | string | null
    llmOutput?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutRawDataNestedInput
  }

  export type LeadRawDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    rawMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    llmInput?: NullableStringFieldUpdateOperationsInput | string | null
    llmOutput?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadRawDataCreateManyInput = {
    id?: string
    leadId: string
    rawHtml?: string | null
    rawMarkdown?: string | null
    llmInput?: string | null
    llmOutput?: string | null
    screenshotPath?: string | null
    scrapedAt?: Date | string
  }

  export type LeadRawDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    rawMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    llmInput?: NullableStringFieldUpdateOperationsInput | string | null
    llmOutput?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadRawDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    rawMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    llmInput?: NullableStringFieldUpdateOperationsInput | string | null
    llmOutput?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CampaignPlatformListRelationFilter = {
    every?: CampaignPlatformWhereInput
    some?: CampaignPlatformWhereInput
    none?: CampaignPlatformWhereInput
  }

  export type RunListRelationFilter = {
    every?: RunWhereInput
    some?: RunWhereInput
    none?: RunWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignPlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    niche?: SortOrder
    icp?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    niche?: SortOrder
    icp?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    niche?: SortOrder
    icp?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type RunPlatformProgressListRelationFilter = {
    every?: RunPlatformProgressWhereInput
    some?: RunPlatformProgressWhereInput
    none?: RunPlatformProgressWhereInput
  }

  export type RunPlatformProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignPlatformCampaignIdPlatformCompoundUniqueInput = {
    campaignId: string
    platform: $Enums.Platform
  }

  export type CampaignPlatformCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    searchQuery?: SortOrder
    searchFilters?: SortOrder
    priority?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignPlatformAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type CampaignPlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    searchQuery?: SortOrder
    searchFilters?: SortOrder
    priority?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignPlatformMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    searchQuery?: SortOrder
    searchFilters?: SortOrder
    priority?: SortOrder
    isEnabled?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignPlatformSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusFilter<$PrismaModel> | $Enums.RunStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AgentStateNullableScalarRelationFilter = {
    is?: AgentStateWhereInput | null
    isNot?: AgentStateWhereInput | null
  }

  export type RunEventListRelationFilter = {
    every?: RunEventWhereInput
    some?: RunEventWhereInput
    none?: RunEventWhereInput
  }

  export type RunEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
    totalLeadsFound?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type RunAvgOrderByAggregateInput = {
    totalLeadsFound?: SortOrder
  }

  export type RunMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
    totalLeadsFound?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type RunMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    status?: SortOrder
    totalLeadsFound?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type RunSumOrderByAggregateInput = {
    totalLeadsFound?: SortOrder
  }

  export type EnumRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.RunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunStatusFilter<$PrismaModel>
    _max?: NestedEnumRunStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableFilter<$PrismaModel> | $Enums.Platform | null
  }

  export type EnumHitlTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HitlType | EnumHitlTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HitlType[] | null
    notIn?: $Enums.HitlType[] | null
    not?: NestedEnumHitlTypeNullableFilter<$PrismaModel> | $Enums.HitlType | null
  }

  export type RunScalarRelationFilter = {
    is?: RunWhereInput
    isNot?: RunWhereInput
  }

  export type AgentStateCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    currentNode?: SortOrder
    currentPlatform?: SortOrder
    currentPlatformIdx?: SortOrder
    lastAction?: SortOrder
    checkpoint?: SortOrder
    hitlRequired?: SortOrder
    hitlType?: SortOrder
    hitlScreenshotPath?: SortOrder
    hitlResolvedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentStateAvgOrderByAggregateInput = {
    currentPlatformIdx?: SortOrder
  }

  export type AgentStateMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    currentNode?: SortOrder
    currentPlatform?: SortOrder
    currentPlatformIdx?: SortOrder
    lastAction?: SortOrder
    checkpoint?: SortOrder
    hitlRequired?: SortOrder
    hitlType?: SortOrder
    hitlScreenshotPath?: SortOrder
    hitlResolvedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentStateMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    currentNode?: SortOrder
    currentPlatform?: SortOrder
    currentPlatformIdx?: SortOrder
    lastAction?: SortOrder
    checkpoint?: SortOrder
    hitlRequired?: SortOrder
    hitlType?: SortOrder
    hitlScreenshotPath?: SortOrder
    hitlResolvedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentStateSumOrderByAggregateInput = {
    currentPlatformIdx?: SortOrder
  }

  export type EnumPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.Platform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumPlatformNullableFilter<$PrismaModel>
  }

  export type EnumHitlTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HitlType | EnumHitlTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HitlType[] | null
    notIn?: $Enums.HitlType[] | null
    not?: NestedEnumHitlTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HitlType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHitlTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHitlTypeNullableFilter<$PrismaModel>
  }

  export type EnumPlatformRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlatformRunStatus | EnumPlatformRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlatformRunStatus[]
    notIn?: $Enums.PlatformRunStatus[]
    not?: NestedEnumPlatformRunStatusFilter<$PrismaModel> | $Enums.PlatformRunStatus
  }

  export type CampaignPlatformScalarRelationFilter = {
    is?: CampaignPlatformWhereInput
    isNot?: CampaignPlatformWhereInput
  }

  export type RunPlatformProgressRunIdCampaignPlatformIdCompoundUniqueInput = {
    runId: string
    campaignPlatformId: string
  }

  export type RunPlatformProgressCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    status?: SortOrder
    pagesScraped?: SortOrder
    leadsFound?: SortOrder
    lastCursorUrl?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type RunPlatformProgressAvgOrderByAggregateInput = {
    pagesScraped?: SortOrder
    leadsFound?: SortOrder
  }

  export type RunPlatformProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    status?: SortOrder
    pagesScraped?: SortOrder
    leadsFound?: SortOrder
    lastCursorUrl?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type RunPlatformProgressMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    status?: SortOrder
    pagesScraped?: SortOrder
    leadsFound?: SortOrder
    lastCursorUrl?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type RunPlatformProgressSumOrderByAggregateInput = {
    pagesScraped?: SortOrder
    leadsFound?: SortOrder
  }

  export type EnumPlatformRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlatformRunStatus | EnumPlatformRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlatformRunStatus[]
    notIn?: $Enums.PlatformRunStatus[]
    not?: NestedEnumPlatformRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlatformRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformRunStatusFilter<$PrismaModel>
    _max?: NestedEnumPlatformRunStatusFilter<$PrismaModel>
  }

  export type EnumRunEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RunEventType | EnumRunEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RunEventType[]
    notIn?: $Enums.RunEventType[]
    not?: NestedEnumRunEventTypeFilter<$PrismaModel> | $Enums.RunEventType
  }

  export type RunEventCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type RunEventMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type RunEventMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRunEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunEventType | EnumRunEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RunEventType[]
    notIn?: $Enums.RunEventType[]
    not?: NestedEnumRunEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.RunEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunEventTypeFilter<$PrismaModel>
    _max?: NestedEnumRunEventTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type CampaignPlatformNullableScalarRelationFilter = {
    is?: CampaignPlatformWhereInput | null
    isNot?: CampaignPlatformWhereInput | null
  }

  export type LeadRawDataNullableScalarRelationFilter = {
    is?: LeadRawDataWhereInput | null
    isNot?: LeadRawDataWhereInput | null
  }

  export type LeadEmailCampaignIdCompoundUniqueInput = {
    email: string
    campaignId: string
  }

  export type LeadProfileUrlCampaignIdCompoundUniqueInput = {
    profileUrl: string
    campaignId: string
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    companySize?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    profileUrl?: SortOrder
    websiteUrl?: SortOrder
    linkedinUrl?: SortOrder
    twitterHandle?: SortOrder
    score?: SortOrder
    scoreReason?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    sourcePageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    companySize?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    profileUrl?: SortOrder
    websiteUrl?: SortOrder
    linkedinUrl?: SortOrder
    twitterHandle?: SortOrder
    score?: SortOrder
    scoreReason?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    sourcePageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    runId?: SortOrder
    campaignPlatformId?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    companySize?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    profileUrl?: SortOrder
    websiteUrl?: SortOrder
    linkedinUrl?: SortOrder
    twitterHandle?: SortOrder
    score?: SortOrder
    scoreReason?: SortOrder
    isVerified?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    sourcePageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type LeadRawDataCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    rawHtml?: SortOrder
    rawMarkdown?: SortOrder
    llmInput?: SortOrder
    llmOutput?: SortOrder
    screenshotPath?: SortOrder
    scrapedAt?: SortOrder
  }

  export type LeadRawDataMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    rawHtml?: SortOrder
    rawMarkdown?: SortOrder
    llmInput?: SortOrder
    llmOutput?: SortOrder
    screenshotPath?: SortOrder
    scrapedAt?: SortOrder
  }

  export type LeadRawDataMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    rawHtml?: SortOrder
    rawMarkdown?: SortOrder
    llmInput?: SortOrder
    llmOutput?: SortOrder
    screenshotPath?: SortOrder
    scrapedAt?: SortOrder
  }

  export type CampaignPlatformCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignPlatformCreateWithoutCampaignInput, CampaignPlatformUncheckedCreateWithoutCampaignInput> | CampaignPlatformCreateWithoutCampaignInput[] | CampaignPlatformUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutCampaignInput | CampaignPlatformCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignPlatformCreateManyCampaignInputEnvelope
    connect?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
  }

  export type RunCreateNestedManyWithoutCampaignInput = {
    create?: XOR<RunCreateWithoutCampaignInput, RunUncheckedCreateWithoutCampaignInput> | RunCreateWithoutCampaignInput[] | RunUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RunCreateOrConnectWithoutCampaignInput | RunCreateOrConnectWithoutCampaignInput[]
    createMany?: RunCreateManyCampaignInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CampaignPlatformUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignPlatformCreateWithoutCampaignInput, CampaignPlatformUncheckedCreateWithoutCampaignInput> | CampaignPlatformCreateWithoutCampaignInput[] | CampaignPlatformUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutCampaignInput | CampaignPlatformCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignPlatformCreateManyCampaignInputEnvelope
    connect?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
  }

  export type RunUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<RunCreateWithoutCampaignInput, RunUncheckedCreateWithoutCampaignInput> | RunCreateWithoutCampaignInput[] | RunUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RunCreateOrConnectWithoutCampaignInput | RunCreateOrConnectWithoutCampaignInput[]
    createMany?: RunCreateManyCampaignInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CampaignPlatformUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignPlatformCreateWithoutCampaignInput, CampaignPlatformUncheckedCreateWithoutCampaignInput> | CampaignPlatformCreateWithoutCampaignInput[] | CampaignPlatformUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutCampaignInput | CampaignPlatformCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignPlatformUpsertWithWhereUniqueWithoutCampaignInput | CampaignPlatformUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignPlatformCreateManyCampaignInputEnvelope
    set?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    disconnect?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    delete?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    connect?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    update?: CampaignPlatformUpdateWithWhereUniqueWithoutCampaignInput | CampaignPlatformUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignPlatformUpdateManyWithWhereWithoutCampaignInput | CampaignPlatformUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignPlatformScalarWhereInput | CampaignPlatformScalarWhereInput[]
  }

  export type RunUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<RunCreateWithoutCampaignInput, RunUncheckedCreateWithoutCampaignInput> | RunCreateWithoutCampaignInput[] | RunUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RunCreateOrConnectWithoutCampaignInput | RunCreateOrConnectWithoutCampaignInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutCampaignInput | RunUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: RunCreateManyCampaignInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutCampaignInput | RunUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: RunUpdateManyWithWhereWithoutCampaignInput | RunUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignPlatformUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignPlatformCreateWithoutCampaignInput, CampaignPlatformUncheckedCreateWithoutCampaignInput> | CampaignPlatformCreateWithoutCampaignInput[] | CampaignPlatformUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutCampaignInput | CampaignPlatformCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignPlatformUpsertWithWhereUniqueWithoutCampaignInput | CampaignPlatformUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignPlatformCreateManyCampaignInputEnvelope
    set?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    disconnect?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    delete?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    connect?: CampaignPlatformWhereUniqueInput | CampaignPlatformWhereUniqueInput[]
    update?: CampaignPlatformUpdateWithWhereUniqueWithoutCampaignInput | CampaignPlatformUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignPlatformUpdateManyWithWhereWithoutCampaignInput | CampaignPlatformUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignPlatformScalarWhereInput | CampaignPlatformScalarWhereInput[]
  }

  export type RunUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<RunCreateWithoutCampaignInput, RunUncheckedCreateWithoutCampaignInput> | RunCreateWithoutCampaignInput[] | RunUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RunCreateOrConnectWithoutCampaignInput | RunCreateOrConnectWithoutCampaignInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutCampaignInput | RunUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: RunCreateManyCampaignInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutCampaignInput | RunUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: RunUpdateManyWithWhereWithoutCampaignInput | RunUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutPlatformsInput = {
    create?: XOR<CampaignCreateWithoutPlatformsInput, CampaignUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPlatformsInput
    connect?: CampaignWhereUniqueInput
  }

  export type RunPlatformProgressCreateNestedManyWithoutCampaignPlatformInput = {
    create?: XOR<RunPlatformProgressCreateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput> | RunPlatformProgressCreateWithoutCampaignPlatformInput[] | RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput | RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput[]
    createMany?: RunPlatformProgressCreateManyCampaignPlatformInputEnvelope
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutCampaignPlatformInput = {
    create?: XOR<LeadCreateWithoutCampaignPlatformInput, LeadUncheckedCreateWithoutCampaignPlatformInput> | LeadCreateWithoutCampaignPlatformInput[] | LeadUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignPlatformInput | LeadCreateOrConnectWithoutCampaignPlatformInput[]
    createMany?: LeadCreateManyCampaignPlatformInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type RunPlatformProgressUncheckedCreateNestedManyWithoutCampaignPlatformInput = {
    create?: XOR<RunPlatformProgressCreateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput> | RunPlatformProgressCreateWithoutCampaignPlatformInput[] | RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput | RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput[]
    createMany?: RunPlatformProgressCreateManyCampaignPlatformInputEnvelope
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCampaignPlatformInput = {
    create?: XOR<LeadCreateWithoutCampaignPlatformInput, LeadUncheckedCreateWithoutCampaignPlatformInput> | LeadCreateWithoutCampaignPlatformInput[] | LeadUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignPlatformInput | LeadCreateOrConnectWithoutCampaignPlatformInput[]
    createMany?: LeadCreateManyCampaignPlatformInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CampaignUpdateOneRequiredWithoutPlatformsNestedInput = {
    create?: XOR<CampaignCreateWithoutPlatformsInput, CampaignUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPlatformsInput
    upsert?: CampaignUpsertWithoutPlatformsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutPlatformsInput, CampaignUpdateWithoutPlatformsInput>, CampaignUncheckedUpdateWithoutPlatformsInput>
  }

  export type RunPlatformProgressUpdateManyWithoutCampaignPlatformNestedInput = {
    create?: XOR<RunPlatformProgressCreateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput> | RunPlatformProgressCreateWithoutCampaignPlatformInput[] | RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput | RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput[]
    upsert?: RunPlatformProgressUpsertWithWhereUniqueWithoutCampaignPlatformInput | RunPlatformProgressUpsertWithWhereUniqueWithoutCampaignPlatformInput[]
    createMany?: RunPlatformProgressCreateManyCampaignPlatformInputEnvelope
    set?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    disconnect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    delete?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    update?: RunPlatformProgressUpdateWithWhereUniqueWithoutCampaignPlatformInput | RunPlatformProgressUpdateWithWhereUniqueWithoutCampaignPlatformInput[]
    updateMany?: RunPlatformProgressUpdateManyWithWhereWithoutCampaignPlatformInput | RunPlatformProgressUpdateManyWithWhereWithoutCampaignPlatformInput[]
    deleteMany?: RunPlatformProgressScalarWhereInput | RunPlatformProgressScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutCampaignPlatformNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignPlatformInput, LeadUncheckedCreateWithoutCampaignPlatformInput> | LeadCreateWithoutCampaignPlatformInput[] | LeadUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignPlatformInput | LeadCreateOrConnectWithoutCampaignPlatformInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignPlatformInput | LeadUpsertWithWhereUniqueWithoutCampaignPlatformInput[]
    createMany?: LeadCreateManyCampaignPlatformInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignPlatformInput | LeadUpdateWithWhereUniqueWithoutCampaignPlatformInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignPlatformInput | LeadUpdateManyWithWhereWithoutCampaignPlatformInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type RunPlatformProgressUncheckedUpdateManyWithoutCampaignPlatformNestedInput = {
    create?: XOR<RunPlatformProgressCreateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput> | RunPlatformProgressCreateWithoutCampaignPlatformInput[] | RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput | RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput[]
    upsert?: RunPlatformProgressUpsertWithWhereUniqueWithoutCampaignPlatformInput | RunPlatformProgressUpsertWithWhereUniqueWithoutCampaignPlatformInput[]
    createMany?: RunPlatformProgressCreateManyCampaignPlatformInputEnvelope
    set?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    disconnect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    delete?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    update?: RunPlatformProgressUpdateWithWhereUniqueWithoutCampaignPlatformInput | RunPlatformProgressUpdateWithWhereUniqueWithoutCampaignPlatformInput[]
    updateMany?: RunPlatformProgressUpdateManyWithWhereWithoutCampaignPlatformInput | RunPlatformProgressUpdateManyWithWhereWithoutCampaignPlatformInput[]
    deleteMany?: RunPlatformProgressScalarWhereInput | RunPlatformProgressScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCampaignPlatformNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignPlatformInput, LeadUncheckedCreateWithoutCampaignPlatformInput> | LeadCreateWithoutCampaignPlatformInput[] | LeadUncheckedCreateWithoutCampaignPlatformInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignPlatformInput | LeadCreateOrConnectWithoutCampaignPlatformInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignPlatformInput | LeadUpsertWithWhereUniqueWithoutCampaignPlatformInput[]
    createMany?: LeadCreateManyCampaignPlatformInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignPlatformInput | LeadUpdateWithWhereUniqueWithoutCampaignPlatformInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignPlatformInput | LeadUpdateManyWithWhereWithoutCampaignPlatformInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutRunsInput = {
    create?: XOR<CampaignCreateWithoutRunsInput, CampaignUncheckedCreateWithoutRunsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRunsInput
    connect?: CampaignWhereUniqueInput
  }

  export type AgentStateCreateNestedOneWithoutRunInput = {
    create?: XOR<AgentStateCreateWithoutRunInput, AgentStateUncheckedCreateWithoutRunInput>
    connectOrCreate?: AgentStateCreateOrConnectWithoutRunInput
    connect?: AgentStateWhereUniqueInput
  }

  export type RunPlatformProgressCreateNestedManyWithoutRunInput = {
    create?: XOR<RunPlatformProgressCreateWithoutRunInput, RunPlatformProgressUncheckedCreateWithoutRunInput> | RunPlatformProgressCreateWithoutRunInput[] | RunPlatformProgressUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutRunInput | RunPlatformProgressCreateOrConnectWithoutRunInput[]
    createMany?: RunPlatformProgressCreateManyRunInputEnvelope
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
  }

  export type RunEventCreateNestedManyWithoutRunInput = {
    create?: XOR<RunEventCreateWithoutRunInput, RunEventUncheckedCreateWithoutRunInput> | RunEventCreateWithoutRunInput[] | RunEventUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunEventCreateOrConnectWithoutRunInput | RunEventCreateOrConnectWithoutRunInput[]
    createMany?: RunEventCreateManyRunInputEnvelope
    connect?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutRunInput = {
    create?: XOR<LeadCreateWithoutRunInput, LeadUncheckedCreateWithoutRunInput> | LeadCreateWithoutRunInput[] | LeadUncheckedCreateWithoutRunInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutRunInput | LeadCreateOrConnectWithoutRunInput[]
    createMany?: LeadCreateManyRunInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type AgentStateUncheckedCreateNestedOneWithoutRunInput = {
    create?: XOR<AgentStateCreateWithoutRunInput, AgentStateUncheckedCreateWithoutRunInput>
    connectOrCreate?: AgentStateCreateOrConnectWithoutRunInput
    connect?: AgentStateWhereUniqueInput
  }

  export type RunPlatformProgressUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<RunPlatformProgressCreateWithoutRunInput, RunPlatformProgressUncheckedCreateWithoutRunInput> | RunPlatformProgressCreateWithoutRunInput[] | RunPlatformProgressUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutRunInput | RunPlatformProgressCreateOrConnectWithoutRunInput[]
    createMany?: RunPlatformProgressCreateManyRunInputEnvelope
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
  }

  export type RunEventUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<RunEventCreateWithoutRunInput, RunEventUncheckedCreateWithoutRunInput> | RunEventCreateWithoutRunInput[] | RunEventUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunEventCreateOrConnectWithoutRunInput | RunEventCreateOrConnectWithoutRunInput[]
    createMany?: RunEventCreateManyRunInputEnvelope
    connect?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<LeadCreateWithoutRunInput, LeadUncheckedCreateWithoutRunInput> | LeadCreateWithoutRunInput[] | LeadUncheckedCreateWithoutRunInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutRunInput | LeadCreateOrConnectWithoutRunInput[]
    createMany?: LeadCreateManyRunInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type EnumRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.RunStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CampaignUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<CampaignCreateWithoutRunsInput, CampaignUncheckedCreateWithoutRunsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRunsInput
    upsert?: CampaignUpsertWithoutRunsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutRunsInput, CampaignUpdateWithoutRunsInput>, CampaignUncheckedUpdateWithoutRunsInput>
  }

  export type AgentStateUpdateOneWithoutRunNestedInput = {
    create?: XOR<AgentStateCreateWithoutRunInput, AgentStateUncheckedCreateWithoutRunInput>
    connectOrCreate?: AgentStateCreateOrConnectWithoutRunInput
    upsert?: AgentStateUpsertWithoutRunInput
    disconnect?: AgentStateWhereInput | boolean
    delete?: AgentStateWhereInput | boolean
    connect?: AgentStateWhereUniqueInput
    update?: XOR<XOR<AgentStateUpdateToOneWithWhereWithoutRunInput, AgentStateUpdateWithoutRunInput>, AgentStateUncheckedUpdateWithoutRunInput>
  }

  export type RunPlatformProgressUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunPlatformProgressCreateWithoutRunInput, RunPlatformProgressUncheckedCreateWithoutRunInput> | RunPlatformProgressCreateWithoutRunInput[] | RunPlatformProgressUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutRunInput | RunPlatformProgressCreateOrConnectWithoutRunInput[]
    upsert?: RunPlatformProgressUpsertWithWhereUniqueWithoutRunInput | RunPlatformProgressUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunPlatformProgressCreateManyRunInputEnvelope
    set?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    disconnect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    delete?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    update?: RunPlatformProgressUpdateWithWhereUniqueWithoutRunInput | RunPlatformProgressUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunPlatformProgressUpdateManyWithWhereWithoutRunInput | RunPlatformProgressUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunPlatformProgressScalarWhereInput | RunPlatformProgressScalarWhereInput[]
  }

  export type RunEventUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunEventCreateWithoutRunInput, RunEventUncheckedCreateWithoutRunInput> | RunEventCreateWithoutRunInput[] | RunEventUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunEventCreateOrConnectWithoutRunInput | RunEventCreateOrConnectWithoutRunInput[]
    upsert?: RunEventUpsertWithWhereUniqueWithoutRunInput | RunEventUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunEventCreateManyRunInputEnvelope
    set?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    disconnect?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    delete?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    connect?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    update?: RunEventUpdateWithWhereUniqueWithoutRunInput | RunEventUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunEventUpdateManyWithWhereWithoutRunInput | RunEventUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunEventScalarWhereInput | RunEventScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutRunNestedInput = {
    create?: XOR<LeadCreateWithoutRunInput, LeadUncheckedCreateWithoutRunInput> | LeadCreateWithoutRunInput[] | LeadUncheckedCreateWithoutRunInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutRunInput | LeadCreateOrConnectWithoutRunInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutRunInput | LeadUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: LeadCreateManyRunInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutRunInput | LeadUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutRunInput | LeadUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type AgentStateUncheckedUpdateOneWithoutRunNestedInput = {
    create?: XOR<AgentStateCreateWithoutRunInput, AgentStateUncheckedCreateWithoutRunInput>
    connectOrCreate?: AgentStateCreateOrConnectWithoutRunInput
    upsert?: AgentStateUpsertWithoutRunInput
    disconnect?: AgentStateWhereInput | boolean
    delete?: AgentStateWhereInput | boolean
    connect?: AgentStateWhereUniqueInput
    update?: XOR<XOR<AgentStateUpdateToOneWithWhereWithoutRunInput, AgentStateUpdateWithoutRunInput>, AgentStateUncheckedUpdateWithoutRunInput>
  }

  export type RunPlatformProgressUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunPlatformProgressCreateWithoutRunInput, RunPlatformProgressUncheckedCreateWithoutRunInput> | RunPlatformProgressCreateWithoutRunInput[] | RunPlatformProgressUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunPlatformProgressCreateOrConnectWithoutRunInput | RunPlatformProgressCreateOrConnectWithoutRunInput[]
    upsert?: RunPlatformProgressUpsertWithWhereUniqueWithoutRunInput | RunPlatformProgressUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunPlatformProgressCreateManyRunInputEnvelope
    set?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    disconnect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    delete?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    connect?: RunPlatformProgressWhereUniqueInput | RunPlatformProgressWhereUniqueInput[]
    update?: RunPlatformProgressUpdateWithWhereUniqueWithoutRunInput | RunPlatformProgressUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunPlatformProgressUpdateManyWithWhereWithoutRunInput | RunPlatformProgressUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunPlatformProgressScalarWhereInput | RunPlatformProgressScalarWhereInput[]
  }

  export type RunEventUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<RunEventCreateWithoutRunInput, RunEventUncheckedCreateWithoutRunInput> | RunEventCreateWithoutRunInput[] | RunEventUncheckedCreateWithoutRunInput[]
    connectOrCreate?: RunEventCreateOrConnectWithoutRunInput | RunEventCreateOrConnectWithoutRunInput[]
    upsert?: RunEventUpsertWithWhereUniqueWithoutRunInput | RunEventUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: RunEventCreateManyRunInputEnvelope
    set?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    disconnect?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    delete?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    connect?: RunEventWhereUniqueInput | RunEventWhereUniqueInput[]
    update?: RunEventUpdateWithWhereUniqueWithoutRunInput | RunEventUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: RunEventUpdateManyWithWhereWithoutRunInput | RunEventUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: RunEventScalarWhereInput | RunEventScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<LeadCreateWithoutRunInput, LeadUncheckedCreateWithoutRunInput> | LeadCreateWithoutRunInput[] | LeadUncheckedCreateWithoutRunInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutRunInput | LeadCreateOrConnectWithoutRunInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutRunInput | LeadUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: LeadCreateManyRunInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutRunInput | LeadUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutRunInput | LeadUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type RunCreateNestedOneWithoutAgentStateInput = {
    create?: XOR<RunCreateWithoutAgentStateInput, RunUncheckedCreateWithoutAgentStateInput>
    connectOrCreate?: RunCreateOrConnectWithoutAgentStateInput
    connect?: RunWhereUniqueInput
  }

  export type NullableEnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform | null
  }

  export type NullableEnumHitlTypeFieldUpdateOperationsInput = {
    set?: $Enums.HitlType | null
  }

  export type RunUpdateOneRequiredWithoutAgentStateNestedInput = {
    create?: XOR<RunCreateWithoutAgentStateInput, RunUncheckedCreateWithoutAgentStateInput>
    connectOrCreate?: RunCreateOrConnectWithoutAgentStateInput
    upsert?: RunUpsertWithoutAgentStateInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutAgentStateInput, RunUpdateWithoutAgentStateInput>, RunUncheckedUpdateWithoutAgentStateInput>
  }

  export type RunCreateNestedOneWithoutPlatformProgressInput = {
    create?: XOR<RunCreateWithoutPlatformProgressInput, RunUncheckedCreateWithoutPlatformProgressInput>
    connectOrCreate?: RunCreateOrConnectWithoutPlatformProgressInput
    connect?: RunWhereUniqueInput
  }

  export type CampaignPlatformCreateNestedOneWithoutRunsInput = {
    create?: XOR<CampaignPlatformCreateWithoutRunsInput, CampaignPlatformUncheckedCreateWithoutRunsInput>
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutRunsInput
    connect?: CampaignPlatformWhereUniqueInput
  }

  export type EnumPlatformRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlatformRunStatus
  }

  export type RunUpdateOneRequiredWithoutPlatformProgressNestedInput = {
    create?: XOR<RunCreateWithoutPlatformProgressInput, RunUncheckedCreateWithoutPlatformProgressInput>
    connectOrCreate?: RunCreateOrConnectWithoutPlatformProgressInput
    upsert?: RunUpsertWithoutPlatformProgressInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutPlatformProgressInput, RunUpdateWithoutPlatformProgressInput>, RunUncheckedUpdateWithoutPlatformProgressInput>
  }

  export type CampaignPlatformUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<CampaignPlatformCreateWithoutRunsInput, CampaignPlatformUncheckedCreateWithoutRunsInput>
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutRunsInput
    upsert?: CampaignPlatformUpsertWithoutRunsInput
    connect?: CampaignPlatformWhereUniqueInput
    update?: XOR<XOR<CampaignPlatformUpdateToOneWithWhereWithoutRunsInput, CampaignPlatformUpdateWithoutRunsInput>, CampaignPlatformUncheckedUpdateWithoutRunsInput>
  }

  export type RunCreateNestedOneWithoutEventsInput = {
    create?: XOR<RunCreateWithoutEventsInput, RunUncheckedCreateWithoutEventsInput>
    connectOrCreate?: RunCreateOrConnectWithoutEventsInput
    connect?: RunWhereUniqueInput
  }

  export type EnumRunEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.RunEventType
  }

  export type RunUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<RunCreateWithoutEventsInput, RunUncheckedCreateWithoutEventsInput>
    connectOrCreate?: RunCreateOrConnectWithoutEventsInput
    upsert?: RunUpsertWithoutEventsInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutEventsInput, RunUpdateWithoutEventsInput>, RunUncheckedUpdateWithoutEventsInput>
  }

  export type CampaignCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadsInput
    connect?: CampaignWhereUniqueInput
  }

  export type RunCreateNestedOneWithoutLeadsInput = {
    create?: XOR<RunCreateWithoutLeadsInput, RunUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: RunCreateOrConnectWithoutLeadsInput
    connect?: RunWhereUniqueInput
  }

  export type CampaignPlatformCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CampaignPlatformCreateWithoutLeadsInput, CampaignPlatformUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutLeadsInput
    connect?: CampaignPlatformWhereUniqueInput
  }

  export type LeadRawDataCreateNestedOneWithoutLeadInput = {
    create?: XOR<LeadRawDataCreateWithoutLeadInput, LeadRawDataUncheckedCreateWithoutLeadInput>
    connectOrCreate?: LeadRawDataCreateOrConnectWithoutLeadInput
    connect?: LeadRawDataWhereUniqueInput
  }

  export type LeadRawDataUncheckedCreateNestedOneWithoutLeadInput = {
    create?: XOR<LeadRawDataCreateWithoutLeadInput, LeadRawDataUncheckedCreateWithoutLeadInput>
    connectOrCreate?: LeadRawDataCreateOrConnectWithoutLeadInput
    connect?: LeadRawDataWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type CampaignUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadsInput
    upsert?: CampaignUpsertWithoutLeadsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutLeadsInput, CampaignUpdateWithoutLeadsInput>, CampaignUncheckedUpdateWithoutLeadsInput>
  }

  export type RunUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<RunCreateWithoutLeadsInput, RunUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: RunCreateOrConnectWithoutLeadsInput
    upsert?: RunUpsertWithoutLeadsInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutLeadsInput, RunUpdateWithoutLeadsInput>, RunUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignPlatformUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<CampaignPlatformCreateWithoutLeadsInput, CampaignPlatformUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignPlatformCreateOrConnectWithoutLeadsInput
    upsert?: CampaignPlatformUpsertWithoutLeadsInput
    disconnect?: CampaignPlatformWhereInput | boolean
    delete?: CampaignPlatformWhereInput | boolean
    connect?: CampaignPlatformWhereUniqueInput
    update?: XOR<XOR<CampaignPlatformUpdateToOneWithWhereWithoutLeadsInput, CampaignPlatformUpdateWithoutLeadsInput>, CampaignPlatformUncheckedUpdateWithoutLeadsInput>
  }

  export type LeadRawDataUpdateOneWithoutLeadNestedInput = {
    create?: XOR<LeadRawDataCreateWithoutLeadInput, LeadRawDataUncheckedCreateWithoutLeadInput>
    connectOrCreate?: LeadRawDataCreateOrConnectWithoutLeadInput
    upsert?: LeadRawDataUpsertWithoutLeadInput
    disconnect?: LeadRawDataWhereInput | boolean
    delete?: LeadRawDataWhereInput | boolean
    connect?: LeadRawDataWhereUniqueInput
    update?: XOR<XOR<LeadRawDataUpdateToOneWithWhereWithoutLeadInput, LeadRawDataUpdateWithoutLeadInput>, LeadRawDataUncheckedUpdateWithoutLeadInput>
  }

  export type LeadRawDataUncheckedUpdateOneWithoutLeadNestedInput = {
    create?: XOR<LeadRawDataCreateWithoutLeadInput, LeadRawDataUncheckedCreateWithoutLeadInput>
    connectOrCreate?: LeadRawDataCreateOrConnectWithoutLeadInput
    upsert?: LeadRawDataUpsertWithoutLeadInput
    disconnect?: LeadRawDataWhereInput | boolean
    delete?: LeadRawDataWhereInput | boolean
    connect?: LeadRawDataWhereUniqueInput
    update?: XOR<XOR<LeadRawDataUpdateToOneWithWhereWithoutLeadInput, LeadRawDataUpdateWithoutLeadInput>, LeadRawDataUncheckedUpdateWithoutLeadInput>
  }

  export type LeadCreateNestedOneWithoutRawDataInput = {
    create?: XOR<LeadCreateWithoutRawDataInput, LeadUncheckedCreateWithoutRawDataInput>
    connectOrCreate?: LeadCreateOrConnectWithoutRawDataInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutRawDataNestedInput = {
    create?: XOR<LeadCreateWithoutRawDataInput, LeadUncheckedCreateWithoutRawDataInput>
    connectOrCreate?: LeadCreateOrConnectWithoutRawDataInput
    upsert?: LeadUpsertWithoutRawDataInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutRawDataInput, LeadUpdateWithoutRawDataInput>, LeadUncheckedUpdateWithoutRawDataInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusFilter<$PrismaModel> | $Enums.RunStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunStatus | EnumRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RunStatus[]
    notIn?: $Enums.RunStatus[]
    not?: NestedEnumRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.RunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunStatusFilter<$PrismaModel>
    _max?: NestedEnumRunStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableFilter<$PrismaModel> | $Enums.Platform | null
  }

  export type NestedEnumHitlTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HitlType | EnumHitlTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HitlType[] | null
    notIn?: $Enums.HitlType[] | null
    not?: NestedEnumHitlTypeNullableFilter<$PrismaModel> | $Enums.HitlType | null
  }

  export type NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.Platform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumPlatformNullableFilter<$PrismaModel>
  }

  export type NestedEnumHitlTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HitlType | EnumHitlTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HitlType[] | null
    notIn?: $Enums.HitlType[] | null
    not?: NestedEnumHitlTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HitlType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHitlTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHitlTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlatformRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlatformRunStatus | EnumPlatformRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlatformRunStatus[]
    notIn?: $Enums.PlatformRunStatus[]
    not?: NestedEnumPlatformRunStatusFilter<$PrismaModel> | $Enums.PlatformRunStatus
  }

  export type NestedEnumPlatformRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlatformRunStatus | EnumPlatformRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlatformRunStatus[]
    notIn?: $Enums.PlatformRunStatus[]
    not?: NestedEnumPlatformRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlatformRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformRunStatusFilter<$PrismaModel>
    _max?: NestedEnumPlatformRunStatusFilter<$PrismaModel>
  }

  export type NestedEnumRunEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RunEventType | EnumRunEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RunEventType[]
    notIn?: $Enums.RunEventType[]
    not?: NestedEnumRunEventTypeFilter<$PrismaModel> | $Enums.RunEventType
  }

  export type NestedEnumRunEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RunEventType | EnumRunEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RunEventType[]
    notIn?: $Enums.RunEventType[]
    not?: NestedEnumRunEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.RunEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRunEventTypeFilter<$PrismaModel>
    _max?: NestedEnumRunEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[]
    notIn?: $Enums.LeadStatus[]
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type CampaignPlatformCreateWithoutCampaignInput = {
    id?: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    runs?: RunPlatformProgressCreateNestedManyWithoutCampaignPlatformInput
    leads?: LeadCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformUncheckedCreateWithoutCampaignInput = {
    id?: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    runs?: RunPlatformProgressUncheckedCreateNestedManyWithoutCampaignPlatformInput
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformCreateOrConnectWithoutCampaignInput = {
    where: CampaignPlatformWhereUniqueInput
    create: XOR<CampaignPlatformCreateWithoutCampaignInput, CampaignPlatformUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignPlatformCreateManyCampaignInputEnvelope = {
    data: CampaignPlatformCreateManyCampaignInput | CampaignPlatformCreateManyCampaignInput[]
  }

  export type RunCreateWithoutCampaignInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    agentState?: AgentStateCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressCreateNestedManyWithoutRunInput
    events?: RunEventCreateNestedManyWithoutRunInput
    leads?: LeadCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutCampaignInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    agentState?: AgentStateUncheckedCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressUncheckedCreateNestedManyWithoutRunInput
    events?: RunEventUncheckedCreateNestedManyWithoutRunInput
    leads?: LeadUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutCampaignInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutCampaignInput, RunUncheckedCreateWithoutCampaignInput>
  }

  export type RunCreateManyCampaignInputEnvelope = {
    data: RunCreateManyCampaignInput | RunCreateManyCampaignInput[]
  }

  export type LeadCreateWithoutCampaignInput = {
    id?: string
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    run: RunCreateNestedOneWithoutLeadsInput
    campaignPlatform?: CampaignPlatformCreateNestedOneWithoutLeadsInput
    rawData?: LeadRawDataCreateNestedOneWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCampaignInput = {
    id?: string
    runId: string
    campaignPlatformId?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawData?: LeadRawDataUncheckedCreateNestedOneWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadCreateManyCampaignInputEnvelope = {
    data: LeadCreateManyCampaignInput | LeadCreateManyCampaignInput[]
  }

  export type CampaignPlatformUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignPlatformWhereUniqueInput
    update: XOR<CampaignPlatformUpdateWithoutCampaignInput, CampaignPlatformUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignPlatformCreateWithoutCampaignInput, CampaignPlatformUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignPlatformUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignPlatformWhereUniqueInput
    data: XOR<CampaignPlatformUpdateWithoutCampaignInput, CampaignPlatformUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignPlatformUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignPlatformScalarWhereInput
    data: XOR<CampaignPlatformUpdateManyMutationInput, CampaignPlatformUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignPlatformScalarWhereInput = {
    AND?: CampaignPlatformScalarWhereInput | CampaignPlatformScalarWhereInput[]
    OR?: CampaignPlatformScalarWhereInput[]
    NOT?: CampaignPlatformScalarWhereInput | CampaignPlatformScalarWhereInput[]
    id?: StringFilter<"CampaignPlatform"> | string
    campaignId?: StringFilter<"CampaignPlatform"> | string
    platform?: EnumPlatformFilter<"CampaignPlatform"> | $Enums.Platform
    searchQuery?: StringNullableFilter<"CampaignPlatform"> | string | null
    searchFilters?: StringNullableFilter<"CampaignPlatform"> | string | null
    priority?: IntFilter<"CampaignPlatform"> | number
    isEnabled?: BoolFilter<"CampaignPlatform"> | boolean
    createdAt?: DateTimeFilter<"CampaignPlatform"> | Date | string
  }

  export type RunUpsertWithWhereUniqueWithoutCampaignInput = {
    where: RunWhereUniqueInput
    update: XOR<RunUpdateWithoutCampaignInput, RunUncheckedUpdateWithoutCampaignInput>
    create: XOR<RunCreateWithoutCampaignInput, RunUncheckedCreateWithoutCampaignInput>
  }

  export type RunUpdateWithWhereUniqueWithoutCampaignInput = {
    where: RunWhereUniqueInput
    data: XOR<RunUpdateWithoutCampaignInput, RunUncheckedUpdateWithoutCampaignInput>
  }

  export type RunUpdateManyWithWhereWithoutCampaignInput = {
    where: RunScalarWhereInput
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyWithoutCampaignInput>
  }

  export type RunScalarWhereInput = {
    AND?: RunScalarWhereInput | RunScalarWhereInput[]
    OR?: RunScalarWhereInput[]
    NOT?: RunScalarWhereInput | RunScalarWhereInput[]
    id?: StringFilter<"Run"> | string
    campaignId?: StringFilter<"Run"> | string
    status?: EnumRunStatusFilter<"Run"> | $Enums.RunStatus
    totalLeadsFound?: IntFilter<"Run"> | number
    startedAt?: DateTimeFilter<"Run"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    errorMessage?: StringNullableFilter<"Run"> | string | null
  }

  export type LeadUpsertWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
  }

  export type LeadUpdateManyWithWhereWithoutCampaignInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCampaignInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    campaignId?: StringFilter<"Lead"> | string
    runId?: StringFilter<"Lead"> | string
    campaignPlatformId?: StringNullableFilter<"Lead"> | string | null
    name?: StringNullableFilter<"Lead"> | string | null
    firstName?: StringNullableFilter<"Lead"> | string | null
    lastName?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    jobTitle?: StringNullableFilter<"Lead"> | string | null
    company?: StringNullableFilter<"Lead"> | string | null
    companySize?: StringNullableFilter<"Lead"> | string | null
    industry?: StringNullableFilter<"Lead"> | string | null
    location?: StringNullableFilter<"Lead"> | string | null
    profileUrl?: StringNullableFilter<"Lead"> | string | null
    websiteUrl?: StringNullableFilter<"Lead"> | string | null
    linkedinUrl?: StringNullableFilter<"Lead"> | string | null
    twitterHandle?: StringNullableFilter<"Lead"> | string | null
    score?: IntNullableFilter<"Lead"> | number | null
    scoreReason?: StringNullableFilter<"Lead"> | string | null
    isVerified?: BoolFilter<"Lead"> | boolean
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    platform?: EnumPlatformFilter<"Lead"> | $Enums.Platform
    sourcePageUrl?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type CampaignCreateWithoutPlatformsInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunCreateNestedManyWithoutCampaignInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutPlatformsInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunUncheckedCreateNestedManyWithoutCampaignInput
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutPlatformsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutPlatformsInput, CampaignUncheckedCreateWithoutPlatformsInput>
  }

  export type RunPlatformProgressCreateWithoutCampaignPlatformInput = {
    id?: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    run: RunCreateNestedOneWithoutPlatformProgressInput
  }

  export type RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput = {
    id?: string
    runId: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type RunPlatformProgressCreateOrConnectWithoutCampaignPlatformInput = {
    where: RunPlatformProgressWhereUniqueInput
    create: XOR<RunPlatformProgressCreateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput>
  }

  export type RunPlatformProgressCreateManyCampaignPlatformInputEnvelope = {
    data: RunPlatformProgressCreateManyCampaignPlatformInput | RunPlatformProgressCreateManyCampaignPlatformInput[]
  }

  export type LeadCreateWithoutCampaignPlatformInput = {
    id?: string
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    run: RunCreateNestedOneWithoutLeadsInput
    rawData?: LeadRawDataCreateNestedOneWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCampaignPlatformInput = {
    id?: string
    campaignId: string
    runId: string
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawData?: LeadRawDataUncheckedCreateNestedOneWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCampaignPlatformInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCampaignPlatformInput, LeadUncheckedCreateWithoutCampaignPlatformInput>
  }

  export type LeadCreateManyCampaignPlatformInputEnvelope = {
    data: LeadCreateManyCampaignPlatformInput | LeadCreateManyCampaignPlatformInput[]
  }

  export type CampaignUpsertWithoutPlatformsInput = {
    update: XOR<CampaignUpdateWithoutPlatformsInput, CampaignUncheckedUpdateWithoutPlatformsInput>
    create: XOR<CampaignCreateWithoutPlatformsInput, CampaignUncheckedCreateWithoutPlatformsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutPlatformsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutPlatformsInput, CampaignUncheckedUpdateWithoutPlatformsInput>
  }

  export type CampaignUpdateWithoutPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUpdateManyWithoutCampaignNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUncheckedUpdateManyWithoutCampaignNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type RunPlatformProgressUpsertWithWhereUniqueWithoutCampaignPlatformInput = {
    where: RunPlatformProgressWhereUniqueInput
    update: XOR<RunPlatformProgressUpdateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedUpdateWithoutCampaignPlatformInput>
    create: XOR<RunPlatformProgressCreateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedCreateWithoutCampaignPlatformInput>
  }

  export type RunPlatformProgressUpdateWithWhereUniqueWithoutCampaignPlatformInput = {
    where: RunPlatformProgressWhereUniqueInput
    data: XOR<RunPlatformProgressUpdateWithoutCampaignPlatformInput, RunPlatformProgressUncheckedUpdateWithoutCampaignPlatformInput>
  }

  export type RunPlatformProgressUpdateManyWithWhereWithoutCampaignPlatformInput = {
    where: RunPlatformProgressScalarWhereInput
    data: XOR<RunPlatformProgressUpdateManyMutationInput, RunPlatformProgressUncheckedUpdateManyWithoutCampaignPlatformInput>
  }

  export type RunPlatformProgressScalarWhereInput = {
    AND?: RunPlatformProgressScalarWhereInput | RunPlatformProgressScalarWhereInput[]
    OR?: RunPlatformProgressScalarWhereInput[]
    NOT?: RunPlatformProgressScalarWhereInput | RunPlatformProgressScalarWhereInput[]
    id?: StringFilter<"RunPlatformProgress"> | string
    runId?: StringFilter<"RunPlatformProgress"> | string
    campaignPlatformId?: StringFilter<"RunPlatformProgress"> | string
    status?: EnumPlatformRunStatusFilter<"RunPlatformProgress"> | $Enums.PlatformRunStatus
    pagesScraped?: IntFilter<"RunPlatformProgress"> | number
    leadsFound?: IntFilter<"RunPlatformProgress"> | number
    lastCursorUrl?: StringNullableFilter<"RunPlatformProgress"> | string | null
    startedAt?: DateTimeNullableFilter<"RunPlatformProgress"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"RunPlatformProgress"> | Date | string | null
    errorMessage?: StringNullableFilter<"RunPlatformProgress"> | string | null
  }

  export type LeadUpsertWithWhereUniqueWithoutCampaignPlatformInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCampaignPlatformInput, LeadUncheckedUpdateWithoutCampaignPlatformInput>
    create: XOR<LeadCreateWithoutCampaignPlatformInput, LeadUncheckedCreateWithoutCampaignPlatformInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCampaignPlatformInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCampaignPlatformInput, LeadUncheckedUpdateWithoutCampaignPlatformInput>
  }

  export type LeadUpdateManyWithWhereWithoutCampaignPlatformInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCampaignPlatformInput>
  }

  export type CampaignCreateWithoutRunsInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: CampaignPlatformCreateNestedManyWithoutCampaignInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutRunsInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: CampaignPlatformUncheckedCreateNestedManyWithoutCampaignInput
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutRunsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutRunsInput, CampaignUncheckedCreateWithoutRunsInput>
  }

  export type AgentStateCreateWithoutRunInput = {
    id?: string
    currentNode?: string | null
    currentPlatform?: $Enums.Platform | null
    currentPlatformIdx?: number
    lastAction?: string | null
    checkpoint?: string | null
    hitlRequired?: boolean
    hitlType?: $Enums.HitlType | null
    hitlScreenshotPath?: string | null
    hitlResolvedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type AgentStateUncheckedCreateWithoutRunInput = {
    id?: string
    currentNode?: string | null
    currentPlatform?: $Enums.Platform | null
    currentPlatformIdx?: number
    lastAction?: string | null
    checkpoint?: string | null
    hitlRequired?: boolean
    hitlType?: $Enums.HitlType | null
    hitlScreenshotPath?: string | null
    hitlResolvedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type AgentStateCreateOrConnectWithoutRunInput = {
    where: AgentStateWhereUniqueInput
    create: XOR<AgentStateCreateWithoutRunInput, AgentStateUncheckedCreateWithoutRunInput>
  }

  export type RunPlatformProgressCreateWithoutRunInput = {
    id?: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    campaignPlatform: CampaignPlatformCreateNestedOneWithoutRunsInput
  }

  export type RunPlatformProgressUncheckedCreateWithoutRunInput = {
    id?: string
    campaignPlatformId: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type RunPlatformProgressCreateOrConnectWithoutRunInput = {
    where: RunPlatformProgressWhereUniqueInput
    create: XOR<RunPlatformProgressCreateWithoutRunInput, RunPlatformProgressUncheckedCreateWithoutRunInput>
  }

  export type RunPlatformProgressCreateManyRunInputEnvelope = {
    data: RunPlatformProgressCreateManyRunInput | RunPlatformProgressCreateManyRunInput[]
  }

  export type RunEventCreateWithoutRunInput = {
    id?: string
    type: $Enums.RunEventType
    message: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RunEventUncheckedCreateWithoutRunInput = {
    id?: string
    type: $Enums.RunEventType
    message: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RunEventCreateOrConnectWithoutRunInput = {
    where: RunEventWhereUniqueInput
    create: XOR<RunEventCreateWithoutRunInput, RunEventUncheckedCreateWithoutRunInput>
  }

  export type RunEventCreateManyRunInputEnvelope = {
    data: RunEventCreateManyRunInput | RunEventCreateManyRunInput[]
  }

  export type LeadCreateWithoutRunInput = {
    id?: string
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    campaignPlatform?: CampaignPlatformCreateNestedOneWithoutLeadsInput
    rawData?: LeadRawDataCreateNestedOneWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutRunInput = {
    id?: string
    campaignId: string
    campaignPlatformId?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rawData?: LeadRawDataUncheckedCreateNestedOneWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutRunInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutRunInput, LeadUncheckedCreateWithoutRunInput>
  }

  export type LeadCreateManyRunInputEnvelope = {
    data: LeadCreateManyRunInput | LeadCreateManyRunInput[]
  }

  export type CampaignUpsertWithoutRunsInput = {
    update: XOR<CampaignUpdateWithoutRunsInput, CampaignUncheckedUpdateWithoutRunsInput>
    create: XOR<CampaignCreateWithoutRunsInput, CampaignUncheckedCreateWithoutRunsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutRunsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutRunsInput, CampaignUncheckedUpdateWithoutRunsInput>
  }

  export type CampaignUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: CampaignPlatformUpdateManyWithoutCampaignNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: CampaignPlatformUncheckedUpdateManyWithoutCampaignNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type AgentStateUpsertWithoutRunInput = {
    update: XOR<AgentStateUpdateWithoutRunInput, AgentStateUncheckedUpdateWithoutRunInput>
    create: XOR<AgentStateCreateWithoutRunInput, AgentStateUncheckedCreateWithoutRunInput>
    where?: AgentStateWhereInput
  }

  export type AgentStateUpdateToOneWithWhereWithoutRunInput = {
    where?: AgentStateWhereInput
    data: XOR<AgentStateUpdateWithoutRunInput, AgentStateUncheckedUpdateWithoutRunInput>
  }

  export type AgentStateUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    currentPlatform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    currentPlatformIdx?: IntFieldUpdateOperationsInput | number
    lastAction?: NullableStringFieldUpdateOperationsInput | string | null
    checkpoint?: NullableStringFieldUpdateOperationsInput | string | null
    hitlRequired?: BoolFieldUpdateOperationsInput | boolean
    hitlType?: NullableEnumHitlTypeFieldUpdateOperationsInput | $Enums.HitlType | null
    hitlScreenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    hitlResolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStateUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    currentPlatform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    currentPlatformIdx?: IntFieldUpdateOperationsInput | number
    lastAction?: NullableStringFieldUpdateOperationsInput | string | null
    checkpoint?: NullableStringFieldUpdateOperationsInput | string | null
    hitlRequired?: BoolFieldUpdateOperationsInput | boolean
    hitlType?: NullableEnumHitlTypeFieldUpdateOperationsInput | $Enums.HitlType | null
    hitlScreenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    hitlResolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunPlatformProgressUpsertWithWhereUniqueWithoutRunInput = {
    where: RunPlatformProgressWhereUniqueInput
    update: XOR<RunPlatformProgressUpdateWithoutRunInput, RunPlatformProgressUncheckedUpdateWithoutRunInput>
    create: XOR<RunPlatformProgressCreateWithoutRunInput, RunPlatformProgressUncheckedCreateWithoutRunInput>
  }

  export type RunPlatformProgressUpdateWithWhereUniqueWithoutRunInput = {
    where: RunPlatformProgressWhereUniqueInput
    data: XOR<RunPlatformProgressUpdateWithoutRunInput, RunPlatformProgressUncheckedUpdateWithoutRunInput>
  }

  export type RunPlatformProgressUpdateManyWithWhereWithoutRunInput = {
    where: RunPlatformProgressScalarWhereInput
    data: XOR<RunPlatformProgressUpdateManyMutationInput, RunPlatformProgressUncheckedUpdateManyWithoutRunInput>
  }

  export type RunEventUpsertWithWhereUniqueWithoutRunInput = {
    where: RunEventWhereUniqueInput
    update: XOR<RunEventUpdateWithoutRunInput, RunEventUncheckedUpdateWithoutRunInput>
    create: XOR<RunEventCreateWithoutRunInput, RunEventUncheckedCreateWithoutRunInput>
  }

  export type RunEventUpdateWithWhereUniqueWithoutRunInput = {
    where: RunEventWhereUniqueInput
    data: XOR<RunEventUpdateWithoutRunInput, RunEventUncheckedUpdateWithoutRunInput>
  }

  export type RunEventUpdateManyWithWhereWithoutRunInput = {
    where: RunEventScalarWhereInput
    data: XOR<RunEventUpdateManyMutationInput, RunEventUncheckedUpdateManyWithoutRunInput>
  }

  export type RunEventScalarWhereInput = {
    AND?: RunEventScalarWhereInput | RunEventScalarWhereInput[]
    OR?: RunEventScalarWhereInput[]
    NOT?: RunEventScalarWhereInput | RunEventScalarWhereInput[]
    id?: StringFilter<"RunEvent"> | string
    runId?: StringFilter<"RunEvent"> | string
    type?: EnumRunEventTypeFilter<"RunEvent"> | $Enums.RunEventType
    message?: StringFilter<"RunEvent"> | string
    metadata?: StringNullableFilter<"RunEvent"> | string | null
    createdAt?: DateTimeFilter<"RunEvent"> | Date | string
  }

  export type LeadUpsertWithWhereUniqueWithoutRunInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutRunInput, LeadUncheckedUpdateWithoutRunInput>
    create: XOR<LeadCreateWithoutRunInput, LeadUncheckedCreateWithoutRunInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutRunInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutRunInput, LeadUncheckedUpdateWithoutRunInput>
  }

  export type LeadUpdateManyWithWhereWithoutRunInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutRunInput>
  }

  export type RunCreateWithoutAgentStateInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    campaign: CampaignCreateNestedOneWithoutRunsInput
    platformProgress?: RunPlatformProgressCreateNestedManyWithoutRunInput
    events?: RunEventCreateNestedManyWithoutRunInput
    leads?: LeadCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutAgentStateInput = {
    id?: string
    campaignId: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    platformProgress?: RunPlatformProgressUncheckedCreateNestedManyWithoutRunInput
    events?: RunEventUncheckedCreateNestedManyWithoutRunInput
    leads?: LeadUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutAgentStateInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutAgentStateInput, RunUncheckedCreateWithoutAgentStateInput>
  }

  export type RunUpsertWithoutAgentStateInput = {
    update: XOR<RunUpdateWithoutAgentStateInput, RunUncheckedUpdateWithoutAgentStateInput>
    create: XOR<RunCreateWithoutAgentStateInput, RunUncheckedCreateWithoutAgentStateInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutAgentStateInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutAgentStateInput, RunUncheckedUpdateWithoutAgentStateInput>
  }

  export type RunUpdateWithoutAgentStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutRunsNestedInput
    platformProgress?: RunPlatformProgressUpdateManyWithoutRunNestedInput
    events?: RunEventUpdateManyWithoutRunNestedInput
    leads?: LeadUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutAgentStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    platformProgress?: RunPlatformProgressUncheckedUpdateManyWithoutRunNestedInput
    events?: RunEventUncheckedUpdateManyWithoutRunNestedInput
    leads?: LeadUncheckedUpdateManyWithoutRunNestedInput
  }

  export type RunCreateWithoutPlatformProgressInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    campaign: CampaignCreateNestedOneWithoutRunsInput
    agentState?: AgentStateCreateNestedOneWithoutRunInput
    events?: RunEventCreateNestedManyWithoutRunInput
    leads?: LeadCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutPlatformProgressInput = {
    id?: string
    campaignId: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    agentState?: AgentStateUncheckedCreateNestedOneWithoutRunInput
    events?: RunEventUncheckedCreateNestedManyWithoutRunInput
    leads?: LeadUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutPlatformProgressInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutPlatformProgressInput, RunUncheckedCreateWithoutPlatformProgressInput>
  }

  export type CampaignPlatformCreateWithoutRunsInput = {
    id?: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutPlatformsInput
    leads?: LeadCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformUncheckedCreateWithoutRunsInput = {
    id?: string
    campaignId: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformCreateOrConnectWithoutRunsInput = {
    where: CampaignPlatformWhereUniqueInput
    create: XOR<CampaignPlatformCreateWithoutRunsInput, CampaignPlatformUncheckedCreateWithoutRunsInput>
  }

  export type RunUpsertWithoutPlatformProgressInput = {
    update: XOR<RunUpdateWithoutPlatformProgressInput, RunUncheckedUpdateWithoutPlatformProgressInput>
    create: XOR<RunCreateWithoutPlatformProgressInput, RunUncheckedCreateWithoutPlatformProgressInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutPlatformProgressInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutPlatformProgressInput, RunUncheckedUpdateWithoutPlatformProgressInput>
  }

  export type RunUpdateWithoutPlatformProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutRunsNestedInput
    agentState?: AgentStateUpdateOneWithoutRunNestedInput
    events?: RunEventUpdateManyWithoutRunNestedInput
    leads?: LeadUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutPlatformProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    agentState?: AgentStateUncheckedUpdateOneWithoutRunNestedInput
    events?: RunEventUncheckedUpdateManyWithoutRunNestedInput
    leads?: LeadUncheckedUpdateManyWithoutRunNestedInput
  }

  export type CampaignPlatformUpsertWithoutRunsInput = {
    update: XOR<CampaignPlatformUpdateWithoutRunsInput, CampaignPlatformUncheckedUpdateWithoutRunsInput>
    create: XOR<CampaignPlatformCreateWithoutRunsInput, CampaignPlatformUncheckedCreateWithoutRunsInput>
    where?: CampaignPlatformWhereInput
  }

  export type CampaignPlatformUpdateToOneWithWhereWithoutRunsInput = {
    where?: CampaignPlatformWhereInput
    data: XOR<CampaignPlatformUpdateWithoutRunsInput, CampaignPlatformUncheckedUpdateWithoutRunsInput>
  }

  export type CampaignPlatformUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutPlatformsNestedInput
    leads?: LeadUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type CampaignPlatformUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type RunCreateWithoutEventsInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    campaign: CampaignCreateNestedOneWithoutRunsInput
    agentState?: AgentStateCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressCreateNestedManyWithoutRunInput
    leads?: LeadCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutEventsInput = {
    id?: string
    campaignId: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    agentState?: AgentStateUncheckedCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressUncheckedCreateNestedManyWithoutRunInput
    leads?: LeadUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutEventsInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutEventsInput, RunUncheckedCreateWithoutEventsInput>
  }

  export type RunUpsertWithoutEventsInput = {
    update: XOR<RunUpdateWithoutEventsInput, RunUncheckedUpdateWithoutEventsInput>
    create: XOR<RunCreateWithoutEventsInput, RunUncheckedCreateWithoutEventsInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutEventsInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutEventsInput, RunUncheckedUpdateWithoutEventsInput>
  }

  export type RunUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutRunsNestedInput
    agentState?: AgentStateUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUpdateManyWithoutRunNestedInput
    leads?: LeadUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    agentState?: AgentStateUncheckedUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUncheckedUpdateManyWithoutRunNestedInput
    leads?: LeadUncheckedUpdateManyWithoutRunNestedInput
  }

  export type CampaignCreateWithoutLeadsInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: CampaignPlatformCreateNestedManyWithoutCampaignInput
    runs?: RunCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    niche: string
    icp: string
    goal?: string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: CampaignPlatformUncheckedCreateNestedManyWithoutCampaignInput
    runs?: RunUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutLeadsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
  }

  export type RunCreateWithoutLeadsInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    campaign: CampaignCreateNestedOneWithoutRunsInput
    agentState?: AgentStateCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressCreateNestedManyWithoutRunInput
    events?: RunEventCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutLeadsInput = {
    id?: string
    campaignId: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
    agentState?: AgentStateUncheckedCreateNestedOneWithoutRunInput
    platformProgress?: RunPlatformProgressUncheckedCreateNestedManyWithoutRunInput
    events?: RunEventUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutLeadsInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutLeadsInput, RunUncheckedCreateWithoutLeadsInput>
  }

  export type CampaignPlatformCreateWithoutLeadsInput = {
    id?: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutPlatformsInput
    runs?: RunPlatformProgressCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformUncheckedCreateWithoutLeadsInput = {
    id?: string
    campaignId: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
    runs?: RunPlatformProgressUncheckedCreateNestedManyWithoutCampaignPlatformInput
  }

  export type CampaignPlatformCreateOrConnectWithoutLeadsInput = {
    where: CampaignPlatformWhereUniqueInput
    create: XOR<CampaignPlatformCreateWithoutLeadsInput, CampaignPlatformUncheckedCreateWithoutLeadsInput>
  }

  export type LeadRawDataCreateWithoutLeadInput = {
    id?: string
    rawHtml?: string | null
    rawMarkdown?: string | null
    llmInput?: string | null
    llmOutput?: string | null
    screenshotPath?: string | null
    scrapedAt?: Date | string
  }

  export type LeadRawDataUncheckedCreateWithoutLeadInput = {
    id?: string
    rawHtml?: string | null
    rawMarkdown?: string | null
    llmInput?: string | null
    llmOutput?: string | null
    screenshotPath?: string | null
    scrapedAt?: Date | string
  }

  export type LeadRawDataCreateOrConnectWithoutLeadInput = {
    where: LeadRawDataWhereUniqueInput
    create: XOR<LeadRawDataCreateWithoutLeadInput, LeadRawDataUncheckedCreateWithoutLeadInput>
  }

  export type CampaignUpsertWithoutLeadsInput = {
    update: XOR<CampaignUpdateWithoutLeadsInput, CampaignUncheckedUpdateWithoutLeadsInput>
    create: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutLeadsInput, CampaignUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: CampaignPlatformUpdateManyWithoutCampaignNestedInput
    runs?: RunUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    icp?: StringFieldUpdateOperationsInput | string
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: CampaignPlatformUncheckedUpdateManyWithoutCampaignNestedInput
    runs?: RunUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type RunUpsertWithoutLeadsInput = {
    update: XOR<RunUpdateWithoutLeadsInput, RunUncheckedUpdateWithoutLeadsInput>
    create: XOR<RunCreateWithoutLeadsInput, RunUncheckedCreateWithoutLeadsInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutLeadsInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutLeadsInput, RunUncheckedUpdateWithoutLeadsInput>
  }

  export type RunUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: CampaignUpdateOneRequiredWithoutRunsNestedInput
    agentState?: AgentStateUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUpdateManyWithoutRunNestedInput
    events?: RunEventUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    agentState?: AgentStateUncheckedUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUncheckedUpdateManyWithoutRunNestedInput
    events?: RunEventUncheckedUpdateManyWithoutRunNestedInput
  }

  export type CampaignPlatformUpsertWithoutLeadsInput = {
    update: XOR<CampaignPlatformUpdateWithoutLeadsInput, CampaignPlatformUncheckedUpdateWithoutLeadsInput>
    create: XOR<CampaignPlatformCreateWithoutLeadsInput, CampaignPlatformUncheckedCreateWithoutLeadsInput>
    where?: CampaignPlatformWhereInput
  }

  export type CampaignPlatformUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CampaignPlatformWhereInput
    data: XOR<CampaignPlatformUpdateWithoutLeadsInput, CampaignPlatformUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignPlatformUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutPlatformsNestedInput
    runs?: RunPlatformProgressUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type CampaignPlatformUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunPlatformProgressUncheckedUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type LeadRawDataUpsertWithoutLeadInput = {
    update: XOR<LeadRawDataUpdateWithoutLeadInput, LeadRawDataUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadRawDataCreateWithoutLeadInput, LeadRawDataUncheckedCreateWithoutLeadInput>
    where?: LeadRawDataWhereInput
  }

  export type LeadRawDataUpdateToOneWithWhereWithoutLeadInput = {
    where?: LeadRawDataWhereInput
    data: XOR<LeadRawDataUpdateWithoutLeadInput, LeadRawDataUncheckedUpdateWithoutLeadInput>
  }

  export type LeadRawDataUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    rawMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    llmInput?: NullableStringFieldUpdateOperationsInput | string | null
    llmOutput?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadRawDataUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawHtml?: NullableStringFieldUpdateOperationsInput | string | null
    rawMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    llmInput?: NullableStringFieldUpdateOperationsInput | string | null
    llmOutput?: NullableStringFieldUpdateOperationsInput | string | null
    screenshotPath?: NullableStringFieldUpdateOperationsInput | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateWithoutRawDataInput = {
    id?: string
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    run: RunCreateNestedOneWithoutLeadsInput
    campaignPlatform?: CampaignPlatformCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateWithoutRawDataInput = {
    id?: string
    campaignId: string
    runId: string
    campaignPlatformId?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadCreateOrConnectWithoutRawDataInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutRawDataInput, LeadUncheckedCreateWithoutRawDataInput>
  }

  export type LeadUpsertWithoutRawDataInput = {
    update: XOR<LeadUpdateWithoutRawDataInput, LeadUncheckedUpdateWithoutRawDataInput>
    create: XOR<LeadCreateWithoutRawDataInput, LeadUncheckedCreateWithoutRawDataInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutRawDataInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutRawDataInput, LeadUncheckedUpdateWithoutRawDataInput>
  }

  export type LeadUpdateWithoutRawDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    run?: RunUpdateOneRequiredWithoutLeadsNestedInput
    campaignPlatform?: CampaignPlatformUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutRawDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPlatformCreateManyCampaignInput = {
    id?: string
    platform: $Enums.Platform
    searchQuery?: string | null
    searchFilters?: string | null
    priority?: number
    isEnabled?: boolean
    createdAt?: Date | string
  }

  export type RunCreateManyCampaignInput = {
    id?: string
    status?: $Enums.RunStatus
    totalLeadsFound?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type LeadCreateManyCampaignInput = {
    id?: string
    runId: string
    campaignPlatformId?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignPlatformUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunPlatformProgressUpdateManyWithoutCampaignPlatformNestedInput
    leads?: LeadUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type CampaignPlatformUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunPlatformProgressUncheckedUpdateManyWithoutCampaignPlatformNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCampaignPlatformNestedInput
  }

  export type CampaignPlatformUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    searchFilters?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    agentState?: AgentStateUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUpdateManyWithoutRunNestedInput
    events?: RunEventUpdateManyWithoutRunNestedInput
    leads?: LeadUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    agentState?: AgentStateUncheckedUpdateOneWithoutRunNestedInput
    platformProgress?: RunPlatformProgressUncheckedUpdateManyWithoutRunNestedInput
    events?: RunEventUncheckedUpdateManyWithoutRunNestedInput
    leads?: LeadUncheckedUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRunStatusFieldUpdateOperationsInput | $Enums.RunStatus
    totalLeadsFound?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutLeadsNestedInput
    campaignPlatform?: CampaignPlatformUpdateOneWithoutLeadsNestedInput
    rawData?: LeadRawDataUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawData?: LeadRawDataUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunPlatformProgressCreateManyCampaignPlatformInput = {
    id?: string
    runId: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type LeadCreateManyCampaignPlatformInput = {
    id?: string
    campaignId: string
    runId: string
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RunPlatformProgressUpdateWithoutCampaignPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    run?: RunUpdateOneRequiredWithoutPlatformProgressNestedInput
  }

  export type RunPlatformProgressUncheckedUpdateWithoutCampaignPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunPlatformProgressUncheckedUpdateManyWithoutCampaignPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadUpdateWithoutCampaignPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    run?: RunUpdateOneRequiredWithoutLeadsNestedInput
    rawData?: LeadRawDataUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCampaignPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawData?: LeadRawDataUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCampaignPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunPlatformProgressCreateManyRunInput = {
    id?: string
    campaignPlatformId: string
    status?: $Enums.PlatformRunStatus
    pagesScraped?: number
    leadsFound?: number
    lastCursorUrl?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type RunEventCreateManyRunInput = {
    id?: string
    type: $Enums.RunEventType
    message: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type LeadCreateManyRunInput = {
    id?: string
    campaignId: string
    campaignPlatformId?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    jobTitle?: string | null
    company?: string | null
    companySize?: string | null
    industry?: string | null
    location?: string | null
    profileUrl?: string | null
    websiteUrl?: string | null
    linkedinUrl?: string | null
    twitterHandle?: string | null
    score?: number | null
    scoreReason?: string | null
    isVerified?: boolean
    status?: $Enums.LeadStatus
    platform: $Enums.Platform
    sourcePageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RunPlatformProgressUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    campaignPlatform?: CampaignPlatformUpdateOneRequiredWithoutRunsNestedInput
  }

  export type RunPlatformProgressUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunPlatformProgressUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: StringFieldUpdateOperationsInput | string
    status?: EnumPlatformRunStatusFieldUpdateOperationsInput | $Enums.PlatformRunStatus
    pagesScraped?: IntFieldUpdateOperationsInput | number
    leadsFound?: IntFieldUpdateOperationsInput | number
    lastCursorUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunEventUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRunEventTypeFieldUpdateOperationsInput | $Enums.RunEventType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunEventUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRunEventTypeFieldUpdateOperationsInput | $Enums.RunEventType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunEventUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRunEventTypeFieldUpdateOperationsInput | $Enums.RunEventType
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    campaignPlatform?: CampaignPlatformUpdateOneWithoutLeadsNestedInput
    rawData?: LeadRawDataUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawData?: LeadRawDataUncheckedUpdateOneWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    campaignPlatformId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    scoreReason?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    sourcePageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}