
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Etat
 * 
 */
export type Etat = $Result.DefaultSelection<Prisma.$EtatPayload>
/**
 * Model Crisis
 * 
 */
export type Crisis = $Result.DefaultSelection<Prisma.$CrisisPayload>
/**
 * Model TimelineEntry
 * 
 */
export type TimelineEntry = $Result.DefaultSelection<Prisma.$TimelineEntryPayload>
/**
 * Model Measure
 * 
 */
export type Measure = $Result.DefaultSelection<Prisma.$MeasurePayload>
/**
 * Model MapMarker
 * 
 */
export type MapMarker = $Result.DefaultSelection<Prisma.$MapMarkerPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const MarkerType: {
  RADIUS: 'RADIUS',
  SHELTER: 'SHELTER'
};

export type MarkerType = (typeof MarkerType)[keyof typeof MarkerType]

}

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type MarkerType = $Enums.MarkerType

export const MarkerType: typeof $Enums.MarkerType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etat`: Exposes CRUD operations for the **Etat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etats
    * const etats = await prisma.etat.findMany()
    * ```
    */
  get etat(): Prisma.EtatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crisis`: Exposes CRUD operations for the **Crisis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crises
    * const crises = await prisma.crisis.findMany()
    * ```
    */
  get crisis(): Prisma.CrisisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timelineEntry`: Exposes CRUD operations for the **TimelineEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimelineEntries
    * const timelineEntries = await prisma.timelineEntry.findMany()
    * ```
    */
  get timelineEntry(): Prisma.TimelineEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measure`: Exposes CRUD operations for the **Measure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measures
    * const measures = await prisma.measure.findMany()
    * ```
    */
  get measure(): Prisma.MeasureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapMarker`: Exposes CRUD operations for the **MapMarker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapMarkers
    * const mapMarkers = await prisma.mapMarker.findMany()
    * ```
    */
  get mapMarker(): Prisma.MapMarkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Post: 'Post',
    User: 'User',
    Etat: 'Etat',
    Crisis: 'Crisis',
    TimelineEntry: 'TimelineEntry',
    Measure: 'Measure',
    MapMarker: 'MapMarker',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "user" | "etat" | "crisis" | "timelineEntry" | "measure" | "mapMarker" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Etat: {
        payload: Prisma.$EtatPayload<ExtArgs>
        fields: Prisma.EtatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>
          }
          findFirst: {
            args: Prisma.EtatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>
          }
          findMany: {
            args: Prisma.EtatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>[]
          }
          create: {
            args: Prisma.EtatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>
          }
          createMany: {
            args: Prisma.EtatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>[]
          }
          delete: {
            args: Prisma.EtatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>
          }
          update: {
            args: Prisma.EtatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>
          }
          deleteMany: {
            args: Prisma.EtatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>[]
          }
          upsert: {
            args: Prisma.EtatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtatPayload>
          }
          aggregate: {
            args: Prisma.EtatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtat>
          }
          groupBy: {
            args: Prisma.EtatGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtatGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtatCountArgs<ExtArgs>
            result: $Utils.Optional<EtatCountAggregateOutputType> | number
          }
        }
      }
      Crisis: {
        payload: Prisma.$CrisisPayload<ExtArgs>
        fields: Prisma.CrisisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrisisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrisisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          findFirst: {
            args: Prisma.CrisisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrisisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          findMany: {
            args: Prisma.CrisisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>[]
          }
          create: {
            args: Prisma.CrisisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          createMany: {
            args: Prisma.CrisisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrisisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>[]
          }
          delete: {
            args: Prisma.CrisisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          update: {
            args: Prisma.CrisisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          deleteMany: {
            args: Prisma.CrisisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrisisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrisisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>[]
          }
          upsert: {
            args: Prisma.CrisisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrisisPayload>
          }
          aggregate: {
            args: Prisma.CrisisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrisis>
          }
          groupBy: {
            args: Prisma.CrisisGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrisisGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrisisCountArgs<ExtArgs>
            result: $Utils.Optional<CrisisCountAggregateOutputType> | number
          }
        }
      }
      TimelineEntry: {
        payload: Prisma.$TimelineEntryPayload<ExtArgs>
        fields: Prisma.TimelineEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          findFirst: {
            args: Prisma.TimelineEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          findMany: {
            args: Prisma.TimelineEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>[]
          }
          create: {
            args: Prisma.TimelineEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          createMany: {
            args: Prisma.TimelineEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>[]
          }
          delete: {
            args: Prisma.TimelineEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          update: {
            args: Prisma.TimelineEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimelineEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimelineEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>[]
          }
          upsert: {
            args: Prisma.TimelineEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          aggregate: {
            args: Prisma.TimelineEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimelineEntry>
          }
          groupBy: {
            args: Prisma.TimelineEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineEntryCountAggregateOutputType> | number
          }
        }
      }
      Measure: {
        payload: Prisma.$MeasurePayload<ExtArgs>
        fields: Prisma.MeasureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>
          }
          findFirst: {
            args: Prisma.MeasureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>
          }
          findMany: {
            args: Prisma.MeasureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>[]
          }
          create: {
            args: Prisma.MeasureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>
          }
          createMany: {
            args: Prisma.MeasureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>[]
          }
          delete: {
            args: Prisma.MeasureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>
          }
          update: {
            args: Prisma.MeasureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>
          }
          deleteMany: {
            args: Prisma.MeasureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeasureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>[]
          }
          upsert: {
            args: Prisma.MeasureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurePayload>
          }
          aggregate: {
            args: Prisma.MeasureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasure>
          }
          groupBy: {
            args: Prisma.MeasureGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasureGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasureCountArgs<ExtArgs>
            result: $Utils.Optional<MeasureCountAggregateOutputType> | number
          }
        }
      }
      MapMarker: {
        payload: Prisma.$MapMarkerPayload<ExtArgs>
        fields: Prisma.MapMarkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapMarkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapMarkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          findFirst: {
            args: Prisma.MapMarkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapMarkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          findMany: {
            args: Prisma.MapMarkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>[]
          }
          create: {
            args: Prisma.MapMarkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          createMany: {
            args: Prisma.MapMarkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapMarkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>[]
          }
          delete: {
            args: Prisma.MapMarkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          update: {
            args: Prisma.MapMarkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          deleteMany: {
            args: Prisma.MapMarkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapMarkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapMarkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>[]
          }
          upsert: {
            args: Prisma.MapMarkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapMarkerPayload>
          }
          aggregate: {
            args: Prisma.MapMarkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapMarker>
          }
          groupBy: {
            args: Prisma.MapMarkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapMarkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapMarkerCountArgs<ExtArgs>
            result: $Utils.Optional<MapMarkerCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    user?: UserOmit
    etat?: EtatOmit
    crisis?: CrisisOmit
    timelineEntry?: TimelineEntryOmit
    measure?: MeasureOmit
    mapMarker?: MapMarkerOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    posts: number
    crises: number
    timelineEntries: number
    measures: number
    mapMarkers: number
    etater: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    crises?: boolean | UserCountOutputTypeCountCrisesArgs
    timelineEntries?: boolean | UserCountOutputTypeCountTimelineEntriesArgs
    measures?: boolean | UserCountOutputTypeCountMeasuresArgs
    mapMarkers?: boolean | UserCountOutputTypeCountMapMarkersArgs
    etater?: boolean | UserCountOutputTypeCountEtaterArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCrisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrisisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimelineEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeasuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasureWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMapMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapMarkerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEtaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtatWhereInput
  }


  /**
   * Count Type EtatCountOutputType
   */

  export type EtatCountOutputType = {
    users: number
    crises: number
    timelineEntries: number
    measures: number
    mapMarkers: number
  }

  export type EtatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | EtatCountOutputTypeCountUsersArgs
    crises?: boolean | EtatCountOutputTypeCountCrisesArgs
    timelineEntries?: boolean | EtatCountOutputTypeCountTimelineEntriesArgs
    measures?: boolean | EtatCountOutputTypeCountMeasuresArgs
    mapMarkers?: boolean | EtatCountOutputTypeCountMapMarkersArgs
  }

  // Custom InputTypes
  /**
   * EtatCountOutputType without action
   */
  export type EtatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtatCountOutputType
     */
    select?: EtatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtatCountOutputType without action
   */
  export type EtatCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * EtatCountOutputType without action
   */
  export type EtatCountOutputTypeCountCrisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrisisWhereInput
  }

  /**
   * EtatCountOutputType without action
   */
  export type EtatCountOutputTypeCountTimelineEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEntryWhereInput
  }

  /**
   * EtatCountOutputType without action
   */
  export type EtatCountOutputTypeCountMeasuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasureWhereInput
  }

  /**
   * EtatCountOutputType without action
   */
  export type EtatCountOutputTypeCountMapMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapMarkerWhereInput
  }


  /**
   * Count Type CrisisCountOutputType
   */

  export type CrisisCountOutputType = {
    allowedEtater: number
    timelineEntries: number
    measures: number
    mapMarkers: number
  }

  export type CrisisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allowedEtater?: boolean | CrisisCountOutputTypeCountAllowedEtaterArgs
    timelineEntries?: boolean | CrisisCountOutputTypeCountTimelineEntriesArgs
    measures?: boolean | CrisisCountOutputTypeCountMeasuresArgs
    mapMarkers?: boolean | CrisisCountOutputTypeCountMapMarkersArgs
  }

  // Custom InputTypes
  /**
   * CrisisCountOutputType without action
   */
  export type CrisisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrisisCountOutputType
     */
    select?: CrisisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrisisCountOutputType without action
   */
  export type CrisisCountOutputTypeCountAllowedEtaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtatWhereInput
  }

  /**
   * CrisisCountOutputType without action
   */
  export type CrisisCountOutputTypeCountTimelineEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEntryWhereInput
  }

  /**
   * CrisisCountOutputType without action
   */
  export type CrisisCountOutputTypeCountMeasuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasureWhereInput
  }

  /**
   * CrisisCountOutputType without action
   */
  export type CrisisCountOutputTypeCountMapMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapMarkerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    isVerified: boolean | null
    isAdmin: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    isVerified: boolean | null
    isAdmin: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    isVerified: number
    isAdmin: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    isVerified?: true
    isAdmin?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    isVerified?: true
    isAdmin?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    isVerified?: true
    isAdmin?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    isVerified: boolean
    isAdmin: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    crises?: boolean | User$crisesArgs<ExtArgs>
    timelineEntries?: boolean | User$timelineEntriesArgs<ExtArgs>
    measures?: boolean | User$measuresArgs<ExtArgs>
    mapMarkers?: boolean | User$mapMarkersArgs<ExtArgs>
    etater?: boolean | User$etaterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "isVerified" | "isAdmin" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    crises?: boolean | User$crisesArgs<ExtArgs>
    timelineEntries?: boolean | User$timelineEntriesArgs<ExtArgs>
    measures?: boolean | User$measuresArgs<ExtArgs>
    mapMarkers?: boolean | User$mapMarkersArgs<ExtArgs>
    etater?: boolean | User$etaterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      crises: Prisma.$CrisisPayload<ExtArgs>[]
      timelineEntries: Prisma.$TimelineEntryPayload<ExtArgs>[]
      measures: Prisma.$MeasurePayload<ExtArgs>[]
      mapMarkers: Prisma.$MapMarkerPayload<ExtArgs>[]
      etater: Prisma.$EtatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      isVerified: boolean
      isAdmin: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crises<T extends User$crisesArgs<ExtArgs> = {}>(args?: Subset<T, User$crisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timelineEntries<T extends User$timelineEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$timelineEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    measures<T extends User$measuresArgs<ExtArgs> = {}>(args?: Subset<T, User$measuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapMarkers<T extends User$mapMarkersArgs<ExtArgs> = {}>(args?: Subset<T, User$mapMarkersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etater<T extends User$etaterArgs<ExtArgs> = {}>(args?: Subset<T, User$etaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.crises
   */
  export type User$crisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    where?: CrisisWhereInput
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    cursor?: CrisisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * User.timelineEntries
   */
  export type User$timelineEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    where?: TimelineEntryWhereInput
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    cursor?: TimelineEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * User.measures
   */
  export type User$measuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    where?: MeasureWhereInput
    orderBy?: MeasureOrderByWithRelationInput | MeasureOrderByWithRelationInput[]
    cursor?: MeasureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasureScalarFieldEnum | MeasureScalarFieldEnum[]
  }

  /**
   * User.mapMarkers
   */
  export type User$mapMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    where?: MapMarkerWhereInput
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    cursor?: MapMarkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * User.etater
   */
  export type User$etaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    where?: EtatWhereInput
    orderBy?: EtatOrderByWithRelationInput | EtatOrderByWithRelationInput[]
    cursor?: EtatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtatScalarFieldEnum | EtatScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Etat
   */

  export type AggregateEtat = {
    _count: EtatCountAggregateOutputType | null
    _min: EtatMinAggregateOutputType | null
    _max: EtatMaxAggregateOutputType | null
  }

  export type EtatMinAggregateOutputType = {
    id: string | null
    title: string | null
    contactPhone: string | null
    contactEmail: string | null
    themeColor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EtatMaxAggregateOutputType = {
    id: string | null
    title: string | null
    contactPhone: string | null
    contactEmail: string | null
    themeColor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EtatCountAggregateOutputType = {
    id: number
    title: number
    contactPhone: number
    contactEmail: number
    themeColor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EtatMinAggregateInputType = {
    id?: true
    title?: true
    contactPhone?: true
    contactEmail?: true
    themeColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EtatMaxAggregateInputType = {
    id?: true
    title?: true
    contactPhone?: true
    contactEmail?: true
    themeColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EtatCountAggregateInputType = {
    id?: true
    title?: true
    contactPhone?: true
    contactEmail?: true
    themeColor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EtatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etat to aggregate.
     */
    where?: EtatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etats to fetch.
     */
    orderBy?: EtatOrderByWithRelationInput | EtatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etats
    **/
    _count?: true | EtatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtatMaxAggregateInputType
  }

  export type GetEtatAggregateType<T extends EtatAggregateArgs> = {
        [P in keyof T & keyof AggregateEtat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtat[P]>
      : GetScalarType<T[P], AggregateEtat[P]>
  }




  export type EtatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtatWhereInput
    orderBy?: EtatOrderByWithAggregationInput | EtatOrderByWithAggregationInput[]
    by: EtatScalarFieldEnum[] | EtatScalarFieldEnum
    having?: EtatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtatCountAggregateInputType | true
    _min?: EtatMinAggregateInputType
    _max?: EtatMaxAggregateInputType
  }

  export type EtatGroupByOutputType = {
    id: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt: Date
    updatedAt: Date
    _count: EtatCountAggregateOutputType | null
    _min: EtatMinAggregateOutputType | null
    _max: EtatMaxAggregateOutputType | null
  }

  type GetEtatGroupByPayload<T extends EtatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtatGroupByOutputType[P]>
            : GetScalarType<T[P], EtatGroupByOutputType[P]>
        }
      >
    >


  export type EtatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    themeColor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Etat$usersArgs<ExtArgs>
    crises?: boolean | Etat$crisesArgs<ExtArgs>
    timelineEntries?: boolean | Etat$timelineEntriesArgs<ExtArgs>
    measures?: boolean | Etat$measuresArgs<ExtArgs>
    mapMarkers?: boolean | Etat$mapMarkersArgs<ExtArgs>
    _count?: boolean | EtatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etat"]>

  export type EtatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    themeColor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["etat"]>

  export type EtatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    themeColor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["etat"]>

  export type EtatSelectScalar = {
    id?: boolean
    title?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    themeColor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EtatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "contactPhone" | "contactEmail" | "themeColor" | "createdAt" | "updatedAt", ExtArgs["result"]["etat"]>
  export type EtatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Etat$usersArgs<ExtArgs>
    crises?: boolean | Etat$crisesArgs<ExtArgs>
    timelineEntries?: boolean | Etat$timelineEntriesArgs<ExtArgs>
    measures?: boolean | Etat$measuresArgs<ExtArgs>
    mapMarkers?: boolean | Etat$mapMarkersArgs<ExtArgs>
    _count?: boolean | EtatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EtatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EtatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EtatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etat"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      crises: Prisma.$CrisisPayload<ExtArgs>[]
      timelineEntries: Prisma.$TimelineEntryPayload<ExtArgs>[]
      measures: Prisma.$MeasurePayload<ExtArgs>[]
      mapMarkers: Prisma.$MapMarkerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      contactPhone: string
      contactEmail: string
      themeColor: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["etat"]>
    composites: {}
  }

  type EtatGetPayload<S extends boolean | null | undefined | EtatDefaultArgs> = $Result.GetResult<Prisma.$EtatPayload, S>

  type EtatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtatCountAggregateInputType | true
    }

  export interface EtatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etat'], meta: { name: 'Etat' } }
    /**
     * Find zero or one Etat that matches the filter.
     * @param {EtatFindUniqueArgs} args - Arguments to find a Etat
     * @example
     * // Get one Etat
     * const etat = await prisma.etat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtatFindUniqueArgs>(args: SelectSubset<T, EtatFindUniqueArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtatFindUniqueOrThrowArgs} args - Arguments to find a Etat
     * @example
     * // Get one Etat
     * const etat = await prisma.etat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtatFindUniqueOrThrowArgs>(args: SelectSubset<T, EtatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatFindFirstArgs} args - Arguments to find a Etat
     * @example
     * // Get one Etat
     * const etat = await prisma.etat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtatFindFirstArgs>(args?: SelectSubset<T, EtatFindFirstArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatFindFirstOrThrowArgs} args - Arguments to find a Etat
     * @example
     * // Get one Etat
     * const etat = await prisma.etat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtatFindFirstOrThrowArgs>(args?: SelectSubset<T, EtatFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etats
     * const etats = await prisma.etat.findMany()
     * 
     * // Get first 10 Etats
     * const etats = await prisma.etat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etatWithIdOnly = await prisma.etat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtatFindManyArgs>(args?: SelectSubset<T, EtatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etat.
     * @param {EtatCreateArgs} args - Arguments to create a Etat.
     * @example
     * // Create one Etat
     * const Etat = await prisma.etat.create({
     *   data: {
     *     // ... data to create a Etat
     *   }
     * })
     * 
     */
    create<T extends EtatCreateArgs>(args: SelectSubset<T, EtatCreateArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etats.
     * @param {EtatCreateManyArgs} args - Arguments to create many Etats.
     * @example
     * // Create many Etats
     * const etat = await prisma.etat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtatCreateManyArgs>(args?: SelectSubset<T, EtatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etats and returns the data saved in the database.
     * @param {EtatCreateManyAndReturnArgs} args - Arguments to create many Etats.
     * @example
     * // Create many Etats
     * const etat = await prisma.etat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etats and only return the `id`
     * const etatWithIdOnly = await prisma.etat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtatCreateManyAndReturnArgs>(args?: SelectSubset<T, EtatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etat.
     * @param {EtatDeleteArgs} args - Arguments to delete one Etat.
     * @example
     * // Delete one Etat
     * const Etat = await prisma.etat.delete({
     *   where: {
     *     // ... filter to delete one Etat
     *   }
     * })
     * 
     */
    delete<T extends EtatDeleteArgs>(args: SelectSubset<T, EtatDeleteArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etat.
     * @param {EtatUpdateArgs} args - Arguments to update one Etat.
     * @example
     * // Update one Etat
     * const etat = await prisma.etat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtatUpdateArgs>(args: SelectSubset<T, EtatUpdateArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etats.
     * @param {EtatDeleteManyArgs} args - Arguments to filter Etats to delete.
     * @example
     * // Delete a few Etats
     * const { count } = await prisma.etat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtatDeleteManyArgs>(args?: SelectSubset<T, EtatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etats
     * const etat = await prisma.etat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtatUpdateManyArgs>(args: SelectSubset<T, EtatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etats and returns the data updated in the database.
     * @param {EtatUpdateManyAndReturnArgs} args - Arguments to update many Etats.
     * @example
     * // Update many Etats
     * const etat = await prisma.etat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etats and only return the `id`
     * const etatWithIdOnly = await prisma.etat.updateManyAndReturn({
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
    updateManyAndReturn<T extends EtatUpdateManyAndReturnArgs>(args: SelectSubset<T, EtatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etat.
     * @param {EtatUpsertArgs} args - Arguments to update or create a Etat.
     * @example
     * // Update or create a Etat
     * const etat = await prisma.etat.upsert({
     *   create: {
     *     // ... data to create a Etat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etat we want to update
     *   }
     * })
     */
    upsert<T extends EtatUpsertArgs>(args: SelectSubset<T, EtatUpsertArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatCountArgs} args - Arguments to filter Etats to count.
     * @example
     * // Count the number of Etats
     * const count = await prisma.etat.count({
     *   where: {
     *     // ... the filter for the Etats we want to count
     *   }
     * })
    **/
    count<T extends EtatCountArgs>(
      args?: Subset<T, EtatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtatAggregateArgs>(args: Subset<T, EtatAggregateArgs>): Prisma.PrismaPromise<GetEtatAggregateType<T>>

    /**
     * Group by Etat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtatGroupByArgs} args - Group by arguments.
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
      T extends EtatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtatGroupByArgs['orderBy'] }
        : { orderBy?: EtatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etat model
   */
  readonly fields: EtatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Etat$usersArgs<ExtArgs> = {}>(args?: Subset<T, Etat$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crises<T extends Etat$crisesArgs<ExtArgs> = {}>(args?: Subset<T, Etat$crisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timelineEntries<T extends Etat$timelineEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Etat$timelineEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    measures<T extends Etat$measuresArgs<ExtArgs> = {}>(args?: Subset<T, Etat$measuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapMarkers<T extends Etat$mapMarkersArgs<ExtArgs> = {}>(args?: Subset<T, Etat$mapMarkersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Etat model
   */
  interface EtatFieldRefs {
    readonly id: FieldRef<"Etat", 'String'>
    readonly title: FieldRef<"Etat", 'String'>
    readonly contactPhone: FieldRef<"Etat", 'String'>
    readonly contactEmail: FieldRef<"Etat", 'String'>
    readonly themeColor: FieldRef<"Etat", 'String'>
    readonly createdAt: FieldRef<"Etat", 'DateTime'>
    readonly updatedAt: FieldRef<"Etat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Etat findUnique
   */
  export type EtatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * Filter, which Etat to fetch.
     */
    where: EtatWhereUniqueInput
  }

  /**
   * Etat findUniqueOrThrow
   */
  export type EtatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * Filter, which Etat to fetch.
     */
    where: EtatWhereUniqueInput
  }

  /**
   * Etat findFirst
   */
  export type EtatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * Filter, which Etat to fetch.
     */
    where?: EtatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etats to fetch.
     */
    orderBy?: EtatOrderByWithRelationInput | EtatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etats.
     */
    cursor?: EtatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etats.
     */
    distinct?: EtatScalarFieldEnum | EtatScalarFieldEnum[]
  }

  /**
   * Etat findFirstOrThrow
   */
  export type EtatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * Filter, which Etat to fetch.
     */
    where?: EtatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etats to fetch.
     */
    orderBy?: EtatOrderByWithRelationInput | EtatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etats.
     */
    cursor?: EtatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etats.
     */
    distinct?: EtatScalarFieldEnum | EtatScalarFieldEnum[]
  }

  /**
   * Etat findMany
   */
  export type EtatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * Filter, which Etats to fetch.
     */
    where?: EtatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etats to fetch.
     */
    orderBy?: EtatOrderByWithRelationInput | EtatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etats.
     */
    cursor?: EtatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etats.
     */
    skip?: number
    distinct?: EtatScalarFieldEnum | EtatScalarFieldEnum[]
  }

  /**
   * Etat create
   */
  export type EtatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * The data needed to create a Etat.
     */
    data: XOR<EtatCreateInput, EtatUncheckedCreateInput>
  }

  /**
   * Etat createMany
   */
  export type EtatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etats.
     */
    data: EtatCreateManyInput | EtatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etat createManyAndReturn
   */
  export type EtatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * The data used to create many Etats.
     */
    data: EtatCreateManyInput | EtatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etat update
   */
  export type EtatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * The data needed to update a Etat.
     */
    data: XOR<EtatUpdateInput, EtatUncheckedUpdateInput>
    /**
     * Choose, which Etat to update.
     */
    where: EtatWhereUniqueInput
  }

  /**
   * Etat updateMany
   */
  export type EtatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etats.
     */
    data: XOR<EtatUpdateManyMutationInput, EtatUncheckedUpdateManyInput>
    /**
     * Filter which Etats to update
     */
    where?: EtatWhereInput
    /**
     * Limit how many Etats to update.
     */
    limit?: number
  }

  /**
   * Etat updateManyAndReturn
   */
  export type EtatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * The data used to update Etats.
     */
    data: XOR<EtatUpdateManyMutationInput, EtatUncheckedUpdateManyInput>
    /**
     * Filter which Etats to update
     */
    where?: EtatWhereInput
    /**
     * Limit how many Etats to update.
     */
    limit?: number
  }

  /**
   * Etat upsert
   */
  export type EtatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * The filter to search for the Etat to update in case it exists.
     */
    where: EtatWhereUniqueInput
    /**
     * In case the Etat found by the `where` argument doesn't exist, create a new Etat with this data.
     */
    create: XOR<EtatCreateInput, EtatUncheckedCreateInput>
    /**
     * In case the Etat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtatUpdateInput, EtatUncheckedUpdateInput>
  }

  /**
   * Etat delete
   */
  export type EtatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    /**
     * Filter which Etat to delete.
     */
    where: EtatWhereUniqueInput
  }

  /**
   * Etat deleteMany
   */
  export type EtatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etats to delete
     */
    where?: EtatWhereInput
    /**
     * Limit how many Etats to delete.
     */
    limit?: number
  }

  /**
   * Etat.users
   */
  export type Etat$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Etat.crises
   */
  export type Etat$crisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    where?: CrisisWhereInput
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    cursor?: CrisisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * Etat.timelineEntries
   */
  export type Etat$timelineEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    where?: TimelineEntryWhereInput
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    cursor?: TimelineEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * Etat.measures
   */
  export type Etat$measuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    where?: MeasureWhereInput
    orderBy?: MeasureOrderByWithRelationInput | MeasureOrderByWithRelationInput[]
    cursor?: MeasureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasureScalarFieldEnum | MeasureScalarFieldEnum[]
  }

  /**
   * Etat.mapMarkers
   */
  export type Etat$mapMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    where?: MapMarkerWhereInput
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    cursor?: MapMarkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * Etat without action
   */
  export type EtatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
  }


  /**
   * Model Crisis
   */

  export type AggregateCrisis = {
    _count: CrisisCountAggregateOutputType | null
    _min: CrisisMinAggregateOutputType | null
    _max: CrisisMaxAggregateOutputType | null
  }

  export type CrisisMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    what: string | null
    how: string | null
    when: Date | null
    severity: $Enums.Severity | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrisisMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    what: string | null
    how: string | null
    when: Date | null
    severity: $Enums.Severity | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrisisCountAggregateOutputType = {
    id: number
    title: number
    description: number
    what: number
    how: number
    when: number
    severity: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrisisMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    what?: true
    how?: true
    when?: true
    severity?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrisisMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    what?: true
    how?: true
    when?: true
    severity?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrisisCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    what?: true
    how?: true
    when?: true
    severity?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrisisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crisis to aggregate.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crises
    **/
    _count?: true | CrisisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrisisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrisisMaxAggregateInputType
  }

  export type GetCrisisAggregateType<T extends CrisisAggregateArgs> = {
        [P in keyof T & keyof AggregateCrisis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrisis[P]>
      : GetScalarType<T[P], AggregateCrisis[P]>
  }




  export type CrisisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrisisWhereInput
    orderBy?: CrisisOrderByWithAggregationInput | CrisisOrderByWithAggregationInput[]
    by: CrisisScalarFieldEnum[] | CrisisScalarFieldEnum
    having?: CrisisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrisisCountAggregateInputType | true
    _min?: CrisisMinAggregateInputType
    _max?: CrisisMaxAggregateInputType
  }

  export type CrisisGroupByOutputType = {
    id: string
    title: string
    description: string
    what: string
    how: string
    when: Date
    severity: $Enums.Severity
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: CrisisCountAggregateOutputType | null
    _min: CrisisMinAggregateOutputType | null
    _max: CrisisMaxAggregateOutputType | null
  }

  type GetCrisisGroupByPayload<T extends CrisisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrisisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrisisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrisisGroupByOutputType[P]>
            : GetScalarType<T[P], CrisisGroupByOutputType[P]>
        }
      >
    >


  export type CrisisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    what?: boolean
    how?: boolean
    when?: boolean
    severity?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    allowedEtater?: boolean | Crisis$allowedEtaterArgs<ExtArgs>
    timelineEntries?: boolean | Crisis$timelineEntriesArgs<ExtArgs>
    measures?: boolean | Crisis$measuresArgs<ExtArgs>
    mapMarkers?: boolean | Crisis$mapMarkersArgs<ExtArgs>
    _count?: boolean | CrisisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crisis"]>

  export type CrisisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    what?: boolean
    how?: boolean
    when?: boolean
    severity?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crisis"]>

  export type CrisisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    what?: boolean
    how?: boolean
    when?: boolean
    severity?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crisis"]>

  export type CrisisSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    what?: boolean
    how?: boolean
    when?: boolean
    severity?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrisisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "what" | "how" | "when" | "severity" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["crisis"]>
  export type CrisisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    allowedEtater?: boolean | Crisis$allowedEtaterArgs<ExtArgs>
    timelineEntries?: boolean | Crisis$timelineEntriesArgs<ExtArgs>
    measures?: boolean | Crisis$measuresArgs<ExtArgs>
    mapMarkers?: boolean | Crisis$mapMarkersArgs<ExtArgs>
    _count?: boolean | CrisisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrisisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CrisisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CrisisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crisis"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      allowedEtater: Prisma.$EtatPayload<ExtArgs>[]
      timelineEntries: Prisma.$TimelineEntryPayload<ExtArgs>[]
      measures: Prisma.$MeasurePayload<ExtArgs>[]
      mapMarkers: Prisma.$MapMarkerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      what: string
      how: string
      when: Date
      severity: $Enums.Severity
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crisis"]>
    composites: {}
  }

  type CrisisGetPayload<S extends boolean | null | undefined | CrisisDefaultArgs> = $Result.GetResult<Prisma.$CrisisPayload, S>

  type CrisisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrisisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrisisCountAggregateInputType | true
    }

  export interface CrisisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crisis'], meta: { name: 'Crisis' } }
    /**
     * Find zero or one Crisis that matches the filter.
     * @param {CrisisFindUniqueArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrisisFindUniqueArgs>(args: SelectSubset<T, CrisisFindUniqueArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crisis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrisisFindUniqueOrThrowArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrisisFindUniqueOrThrowArgs>(args: SelectSubset<T, CrisisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crisis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisFindFirstArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrisisFindFirstArgs>(args?: SelectSubset<T, CrisisFindFirstArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crisis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisFindFirstOrThrowArgs} args - Arguments to find a Crisis
     * @example
     * // Get one Crisis
     * const crisis = await prisma.crisis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrisisFindFirstOrThrowArgs>(args?: SelectSubset<T, CrisisFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crises
     * const crises = await prisma.crisis.findMany()
     * 
     * // Get first 10 Crises
     * const crises = await prisma.crisis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crisisWithIdOnly = await prisma.crisis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrisisFindManyArgs>(args?: SelectSubset<T, CrisisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crisis.
     * @param {CrisisCreateArgs} args - Arguments to create a Crisis.
     * @example
     * // Create one Crisis
     * const Crisis = await prisma.crisis.create({
     *   data: {
     *     // ... data to create a Crisis
     *   }
     * })
     * 
     */
    create<T extends CrisisCreateArgs>(args: SelectSubset<T, CrisisCreateArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crises.
     * @param {CrisisCreateManyArgs} args - Arguments to create many Crises.
     * @example
     * // Create many Crises
     * const crisis = await prisma.crisis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrisisCreateManyArgs>(args?: SelectSubset<T, CrisisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crises and returns the data saved in the database.
     * @param {CrisisCreateManyAndReturnArgs} args - Arguments to create many Crises.
     * @example
     * // Create many Crises
     * const crisis = await prisma.crisis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crises and only return the `id`
     * const crisisWithIdOnly = await prisma.crisis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrisisCreateManyAndReturnArgs>(args?: SelectSubset<T, CrisisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crisis.
     * @param {CrisisDeleteArgs} args - Arguments to delete one Crisis.
     * @example
     * // Delete one Crisis
     * const Crisis = await prisma.crisis.delete({
     *   where: {
     *     // ... filter to delete one Crisis
     *   }
     * })
     * 
     */
    delete<T extends CrisisDeleteArgs>(args: SelectSubset<T, CrisisDeleteArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crisis.
     * @param {CrisisUpdateArgs} args - Arguments to update one Crisis.
     * @example
     * // Update one Crisis
     * const crisis = await prisma.crisis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrisisUpdateArgs>(args: SelectSubset<T, CrisisUpdateArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crises.
     * @param {CrisisDeleteManyArgs} args - Arguments to filter Crises to delete.
     * @example
     * // Delete a few Crises
     * const { count } = await prisma.crisis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrisisDeleteManyArgs>(args?: SelectSubset<T, CrisisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crises
     * const crisis = await prisma.crisis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrisisUpdateManyArgs>(args: SelectSubset<T, CrisisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crises and returns the data updated in the database.
     * @param {CrisisUpdateManyAndReturnArgs} args - Arguments to update many Crises.
     * @example
     * // Update many Crises
     * const crisis = await prisma.crisis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crises and only return the `id`
     * const crisisWithIdOnly = await prisma.crisis.updateManyAndReturn({
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
    updateManyAndReturn<T extends CrisisUpdateManyAndReturnArgs>(args: SelectSubset<T, CrisisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crisis.
     * @param {CrisisUpsertArgs} args - Arguments to update or create a Crisis.
     * @example
     * // Update or create a Crisis
     * const crisis = await prisma.crisis.upsert({
     *   create: {
     *     // ... data to create a Crisis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crisis we want to update
     *   }
     * })
     */
    upsert<T extends CrisisUpsertArgs>(args: SelectSubset<T, CrisisUpsertArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisCountArgs} args - Arguments to filter Crises to count.
     * @example
     * // Count the number of Crises
     * const count = await prisma.crisis.count({
     *   where: {
     *     // ... the filter for the Crises we want to count
     *   }
     * })
    **/
    count<T extends CrisisCountArgs>(
      args?: Subset<T, CrisisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrisisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrisisAggregateArgs>(args: Subset<T, CrisisAggregateArgs>): Prisma.PrismaPromise<GetCrisisAggregateType<T>>

    /**
     * Group by Crisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrisisGroupByArgs} args - Group by arguments.
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
      T extends CrisisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrisisGroupByArgs['orderBy'] }
        : { orderBy?: CrisisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrisisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrisisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crisis model
   */
  readonly fields: CrisisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crisis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrisisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    allowedEtater<T extends Crisis$allowedEtaterArgs<ExtArgs> = {}>(args?: Subset<T, Crisis$allowedEtaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timelineEntries<T extends Crisis$timelineEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Crisis$timelineEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    measures<T extends Crisis$measuresArgs<ExtArgs> = {}>(args?: Subset<T, Crisis$measuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapMarkers<T extends Crisis$mapMarkersArgs<ExtArgs> = {}>(args?: Subset<T, Crisis$mapMarkersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Crisis model
   */
  interface CrisisFieldRefs {
    readonly id: FieldRef<"Crisis", 'String'>
    readonly title: FieldRef<"Crisis", 'String'>
    readonly description: FieldRef<"Crisis", 'String'>
    readonly what: FieldRef<"Crisis", 'String'>
    readonly how: FieldRef<"Crisis", 'String'>
    readonly when: FieldRef<"Crisis", 'DateTime'>
    readonly severity: FieldRef<"Crisis", 'Severity'>
    readonly createdById: FieldRef<"Crisis", 'String'>
    readonly createdAt: FieldRef<"Crisis", 'DateTime'>
    readonly updatedAt: FieldRef<"Crisis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crisis findUnique
   */
  export type CrisisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis findUniqueOrThrow
   */
  export type CrisisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis findFirst
   */
  export type CrisisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crises.
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crises.
     */
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * Crisis findFirstOrThrow
   */
  export type CrisisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crisis to fetch.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crises.
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crises.
     */
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * Crisis findMany
   */
  export type CrisisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter, which Crises to fetch.
     */
    where?: CrisisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crises to fetch.
     */
    orderBy?: CrisisOrderByWithRelationInput | CrisisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crises.
     */
    cursor?: CrisisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crises.
     */
    skip?: number
    distinct?: CrisisScalarFieldEnum | CrisisScalarFieldEnum[]
  }

  /**
   * Crisis create
   */
  export type CrisisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * The data needed to create a Crisis.
     */
    data: XOR<CrisisCreateInput, CrisisUncheckedCreateInput>
  }

  /**
   * Crisis createMany
   */
  export type CrisisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crises.
     */
    data: CrisisCreateManyInput | CrisisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crisis createManyAndReturn
   */
  export type CrisisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * The data used to create many Crises.
     */
    data: CrisisCreateManyInput | CrisisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crisis update
   */
  export type CrisisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * The data needed to update a Crisis.
     */
    data: XOR<CrisisUpdateInput, CrisisUncheckedUpdateInput>
    /**
     * Choose, which Crisis to update.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis updateMany
   */
  export type CrisisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crises.
     */
    data: XOR<CrisisUpdateManyMutationInput, CrisisUncheckedUpdateManyInput>
    /**
     * Filter which Crises to update
     */
    where?: CrisisWhereInput
    /**
     * Limit how many Crises to update.
     */
    limit?: number
  }

  /**
   * Crisis updateManyAndReturn
   */
  export type CrisisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * The data used to update Crises.
     */
    data: XOR<CrisisUpdateManyMutationInput, CrisisUncheckedUpdateManyInput>
    /**
     * Filter which Crises to update
     */
    where?: CrisisWhereInput
    /**
     * Limit how many Crises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crisis upsert
   */
  export type CrisisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * The filter to search for the Crisis to update in case it exists.
     */
    where: CrisisWhereUniqueInput
    /**
     * In case the Crisis found by the `where` argument doesn't exist, create a new Crisis with this data.
     */
    create: XOR<CrisisCreateInput, CrisisUncheckedCreateInput>
    /**
     * In case the Crisis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrisisUpdateInput, CrisisUncheckedUpdateInput>
  }

  /**
   * Crisis delete
   */
  export type CrisisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
    /**
     * Filter which Crisis to delete.
     */
    where: CrisisWhereUniqueInput
  }

  /**
   * Crisis deleteMany
   */
  export type CrisisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crises to delete
     */
    where?: CrisisWhereInput
    /**
     * Limit how many Crises to delete.
     */
    limit?: number
  }

  /**
   * Crisis.allowedEtater
   */
  export type Crisis$allowedEtaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etat
     */
    select?: EtatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etat
     */
    omit?: EtatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtatInclude<ExtArgs> | null
    where?: EtatWhereInput
    orderBy?: EtatOrderByWithRelationInput | EtatOrderByWithRelationInput[]
    cursor?: EtatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtatScalarFieldEnum | EtatScalarFieldEnum[]
  }

  /**
   * Crisis.timelineEntries
   */
  export type Crisis$timelineEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    where?: TimelineEntryWhereInput
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    cursor?: TimelineEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * Crisis.measures
   */
  export type Crisis$measuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    where?: MeasureWhereInput
    orderBy?: MeasureOrderByWithRelationInput | MeasureOrderByWithRelationInput[]
    cursor?: MeasureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasureScalarFieldEnum | MeasureScalarFieldEnum[]
  }

  /**
   * Crisis.mapMarkers
   */
  export type Crisis$mapMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    where?: MapMarkerWhereInput
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    cursor?: MapMarkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * Crisis without action
   */
  export type CrisisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crisis
     */
    select?: CrisisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crisis
     */
    omit?: CrisisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrisisInclude<ExtArgs> | null
  }


  /**
   * Model TimelineEntry
   */

  export type AggregateTimelineEntry = {
    _count: TimelineEntryCountAggregateOutputType | null
    _min: TimelineEntryMinAggregateOutputType | null
    _max: TimelineEntryMaxAggregateOutputType | null
  }

  export type TimelineEntryMinAggregateOutputType = {
    id: string | null
    text: string | null
    crisisId: string | null
    etatId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type TimelineEntryMaxAggregateOutputType = {
    id: string | null
    text: string | null
    crisisId: string | null
    etatId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type TimelineEntryCountAggregateOutputType = {
    id: number
    text: number
    crisisId: number
    etatId: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type TimelineEntryMinAggregateInputType = {
    id?: true
    text?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
  }

  export type TimelineEntryMaxAggregateInputType = {
    id?: true
    text?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
  }

  export type TimelineEntryCountAggregateInputType = {
    id?: true
    text?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type TimelineEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEntry to aggregate.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimelineEntries
    **/
    _count?: true | TimelineEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineEntryMaxAggregateInputType
  }

  export type GetTimelineEntryAggregateType<T extends TimelineEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimelineEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimelineEntry[P]>
      : GetScalarType<T[P], AggregateTimelineEntry[P]>
  }




  export type TimelineEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEntryWhereInput
    orderBy?: TimelineEntryOrderByWithAggregationInput | TimelineEntryOrderByWithAggregationInput[]
    by: TimelineEntryScalarFieldEnum[] | TimelineEntryScalarFieldEnum
    having?: TimelineEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineEntryCountAggregateInputType | true
    _min?: TimelineEntryMinAggregateInputType
    _max?: TimelineEntryMaxAggregateInputType
  }

  export type TimelineEntryGroupByOutputType = {
    id: string
    text: string
    crisisId: string
    etatId: string
    createdById: string
    createdAt: Date
    _count: TimelineEntryCountAggregateOutputType | null
    _min: TimelineEntryMinAggregateOutputType | null
    _max: TimelineEntryMaxAggregateOutputType | null
  }

  type GetTimelineEntryGroupByPayload<T extends TimelineEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimelineEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEntry"]>

  export type TimelineEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEntry"]>

  export type TimelineEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEntry"]>

  export type TimelineEntrySelectScalar = {
    id?: boolean
    text?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type TimelineEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "crisisId" | "etatId" | "createdById" | "createdAt", ExtArgs["result"]["timelineEntry"]>
  export type TimelineEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimelineEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimelineEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimelineEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimelineEntry"
    objects: {
      crisis: Prisma.$CrisisPayload<ExtArgs>
      etat: Prisma.$EtatPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      crisisId: string
      etatId: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["timelineEntry"]>
    composites: {}
  }

  type TimelineEntryGetPayload<S extends boolean | null | undefined | TimelineEntryDefaultArgs> = $Result.GetResult<Prisma.$TimelineEntryPayload, S>

  type TimelineEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimelineEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimelineEntryCountAggregateInputType | true
    }

  export interface TimelineEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimelineEntry'], meta: { name: 'TimelineEntry' } }
    /**
     * Find zero or one TimelineEntry that matches the filter.
     * @param {TimelineEntryFindUniqueArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineEntryFindUniqueArgs>(args: SelectSubset<T, TimelineEntryFindUniqueArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimelineEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimelineEntryFindUniqueOrThrowArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryFindFirstArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineEntryFindFirstArgs>(args?: SelectSubset<T, TimelineEntryFindFirstArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryFindFirstOrThrowArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimelineEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimelineEntries
     * const timelineEntries = await prisma.timelineEntry.findMany()
     * 
     * // Get first 10 TimelineEntries
     * const timelineEntries = await prisma.timelineEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineEntryWithIdOnly = await prisma.timelineEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineEntryFindManyArgs>(args?: SelectSubset<T, TimelineEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimelineEntry.
     * @param {TimelineEntryCreateArgs} args - Arguments to create a TimelineEntry.
     * @example
     * // Create one TimelineEntry
     * const TimelineEntry = await prisma.timelineEntry.create({
     *   data: {
     *     // ... data to create a TimelineEntry
     *   }
     * })
     * 
     */
    create<T extends TimelineEntryCreateArgs>(args: SelectSubset<T, TimelineEntryCreateArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimelineEntries.
     * @param {TimelineEntryCreateManyArgs} args - Arguments to create many TimelineEntries.
     * @example
     * // Create many TimelineEntries
     * const timelineEntry = await prisma.timelineEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineEntryCreateManyArgs>(args?: SelectSubset<T, TimelineEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimelineEntries and returns the data saved in the database.
     * @param {TimelineEntryCreateManyAndReturnArgs} args - Arguments to create many TimelineEntries.
     * @example
     * // Create many TimelineEntries
     * const timelineEntry = await prisma.timelineEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimelineEntries and only return the `id`
     * const timelineEntryWithIdOnly = await prisma.timelineEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimelineEntry.
     * @param {TimelineEntryDeleteArgs} args - Arguments to delete one TimelineEntry.
     * @example
     * // Delete one TimelineEntry
     * const TimelineEntry = await prisma.timelineEntry.delete({
     *   where: {
     *     // ... filter to delete one TimelineEntry
     *   }
     * })
     * 
     */
    delete<T extends TimelineEntryDeleteArgs>(args: SelectSubset<T, TimelineEntryDeleteArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimelineEntry.
     * @param {TimelineEntryUpdateArgs} args - Arguments to update one TimelineEntry.
     * @example
     * // Update one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineEntryUpdateArgs>(args: SelectSubset<T, TimelineEntryUpdateArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimelineEntries.
     * @param {TimelineEntryDeleteManyArgs} args - Arguments to filter TimelineEntries to delete.
     * @example
     * // Delete a few TimelineEntries
     * const { count } = await prisma.timelineEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineEntryDeleteManyArgs>(args?: SelectSubset<T, TimelineEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimelineEntries
     * const timelineEntry = await prisma.timelineEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineEntryUpdateManyArgs>(args: SelectSubset<T, TimelineEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineEntries and returns the data updated in the database.
     * @param {TimelineEntryUpdateManyAndReturnArgs} args - Arguments to update many TimelineEntries.
     * @example
     * // Update many TimelineEntries
     * const timelineEntry = await prisma.timelineEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimelineEntries and only return the `id`
     * const timelineEntryWithIdOnly = await prisma.timelineEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimelineEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, TimelineEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimelineEntry.
     * @param {TimelineEntryUpsertArgs} args - Arguments to update or create a TimelineEntry.
     * @example
     * // Update or create a TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.upsert({
     *   create: {
     *     // ... data to create a TimelineEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimelineEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimelineEntryUpsertArgs>(args: SelectSubset<T, TimelineEntryUpsertArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimelineEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryCountArgs} args - Arguments to filter TimelineEntries to count.
     * @example
     * // Count the number of TimelineEntries
     * const count = await prisma.timelineEntry.count({
     *   where: {
     *     // ... the filter for the TimelineEntries we want to count
     *   }
     * })
    **/
    count<T extends TimelineEntryCountArgs>(
      args?: Subset<T, TimelineEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimelineEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineEntryAggregateArgs>(args: Subset<T, TimelineEntryAggregateArgs>): Prisma.PrismaPromise<GetTimelineEntryAggregateType<T>>

    /**
     * Group by TimelineEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryGroupByArgs} args - Group by arguments.
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
      T extends TimelineEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimelineEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimelineEntry model
   */
  readonly fields: TimelineEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimelineEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crisis<T extends CrisisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrisisDefaultArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etat<T extends EtatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtatDefaultArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TimelineEntry model
   */
  interface TimelineEntryFieldRefs {
    readonly id: FieldRef<"TimelineEntry", 'String'>
    readonly text: FieldRef<"TimelineEntry", 'String'>
    readonly crisisId: FieldRef<"TimelineEntry", 'String'>
    readonly etatId: FieldRef<"TimelineEntry", 'String'>
    readonly createdById: FieldRef<"TimelineEntry", 'String'>
    readonly createdAt: FieldRef<"TimelineEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimelineEntry findUnique
   */
  export type TimelineEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry findUniqueOrThrow
   */
  export type TimelineEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry findFirst
   */
  export type TimelineEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineEntries.
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineEntries.
     */
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * TimelineEntry findFirstOrThrow
   */
  export type TimelineEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineEntries.
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineEntries.
     */
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * TimelineEntry findMany
   */
  export type TimelineEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntries to fetch.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimelineEntries.
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * TimelineEntry create
   */
  export type TimelineEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TimelineEntry.
     */
    data: XOR<TimelineEntryCreateInput, TimelineEntryUncheckedCreateInput>
  }

  /**
   * TimelineEntry createMany
   */
  export type TimelineEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimelineEntries.
     */
    data: TimelineEntryCreateManyInput | TimelineEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimelineEntry createManyAndReturn
   */
  export type TimelineEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * The data used to create many TimelineEntries.
     */
    data: TimelineEntryCreateManyInput | TimelineEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimelineEntry update
   */
  export type TimelineEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TimelineEntry.
     */
    data: XOR<TimelineEntryUpdateInput, TimelineEntryUncheckedUpdateInput>
    /**
     * Choose, which TimelineEntry to update.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry updateMany
   */
  export type TimelineEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimelineEntries.
     */
    data: XOR<TimelineEntryUpdateManyMutationInput, TimelineEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimelineEntries to update
     */
    where?: TimelineEntryWhereInput
    /**
     * Limit how many TimelineEntries to update.
     */
    limit?: number
  }

  /**
   * TimelineEntry updateManyAndReturn
   */
  export type TimelineEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * The data used to update TimelineEntries.
     */
    data: XOR<TimelineEntryUpdateManyMutationInput, TimelineEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimelineEntries to update
     */
    where?: TimelineEntryWhereInput
    /**
     * Limit how many TimelineEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimelineEntry upsert
   */
  export type TimelineEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TimelineEntry to update in case it exists.
     */
    where: TimelineEntryWhereUniqueInput
    /**
     * In case the TimelineEntry found by the `where` argument doesn't exist, create a new TimelineEntry with this data.
     */
    create: XOR<TimelineEntryCreateInput, TimelineEntryUncheckedCreateInput>
    /**
     * In case the TimelineEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineEntryUpdateInput, TimelineEntryUncheckedUpdateInput>
  }

  /**
   * TimelineEntry delete
   */
  export type TimelineEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter which TimelineEntry to delete.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry deleteMany
   */
  export type TimelineEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEntries to delete
     */
    where?: TimelineEntryWhereInput
    /**
     * Limit how many TimelineEntries to delete.
     */
    limit?: number
  }

  /**
   * TimelineEntry without action
   */
  export type TimelineEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineEntry
     */
    omit?: TimelineEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
  }


  /**
   * Model Measure
   */

  export type AggregateMeasure = {
    _count: MeasureCountAggregateOutputType | null
    _min: MeasureMinAggregateOutputType | null
    _max: MeasureMaxAggregateOutputType | null
  }

  export type MeasureMinAggregateOutputType = {
    id: string | null
    text: string | null
    severity: $Enums.Severity | null
    crisisId: string | null
    etatId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type MeasureMaxAggregateOutputType = {
    id: string | null
    text: string | null
    severity: $Enums.Severity | null
    crisisId: string | null
    etatId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type MeasureCountAggregateOutputType = {
    id: number
    text: number
    severity: number
    crisisId: number
    etatId: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type MeasureMinAggregateInputType = {
    id?: true
    text?: true
    severity?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
  }

  export type MeasureMaxAggregateInputType = {
    id?: true
    text?: true
    severity?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
  }

  export type MeasureCountAggregateInputType = {
    id?: true
    text?: true
    severity?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type MeasureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measure to aggregate.
     */
    where?: MeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measures to fetch.
     */
    orderBy?: MeasureOrderByWithRelationInput | MeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Measures
    **/
    _count?: true | MeasureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasureMaxAggregateInputType
  }

  export type GetMeasureAggregateType<T extends MeasureAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasure[P]>
      : GetScalarType<T[P], AggregateMeasure[P]>
  }




  export type MeasureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasureWhereInput
    orderBy?: MeasureOrderByWithAggregationInput | MeasureOrderByWithAggregationInput[]
    by: MeasureScalarFieldEnum[] | MeasureScalarFieldEnum
    having?: MeasureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasureCountAggregateInputType | true
    _min?: MeasureMinAggregateInputType
    _max?: MeasureMaxAggregateInputType
  }

  export type MeasureGroupByOutputType = {
    id: string
    text: string
    severity: $Enums.Severity
    crisisId: string
    etatId: string
    createdById: string
    createdAt: Date
    _count: MeasureCountAggregateOutputType | null
    _min: MeasureMinAggregateOutputType | null
    _max: MeasureMaxAggregateOutputType | null
  }

  type GetMeasureGroupByPayload<T extends MeasureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasureGroupByOutputType[P]>
            : GetScalarType<T[P], MeasureGroupByOutputType[P]>
        }
      >
    >


  export type MeasureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    severity?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measure"]>

  export type MeasureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    severity?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measure"]>

  export type MeasureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    severity?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measure"]>

  export type MeasureSelectScalar = {
    id?: boolean
    text?: boolean
    severity?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type MeasureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "severity" | "crisisId" | "etatId" | "createdById" | "createdAt", ExtArgs["result"]["measure"]>
  export type MeasureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeasureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeasureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeasurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Measure"
    objects: {
      crisis: Prisma.$CrisisPayload<ExtArgs>
      etat: Prisma.$EtatPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      severity: $Enums.Severity
      crisisId: string
      etatId: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["measure"]>
    composites: {}
  }

  type MeasureGetPayload<S extends boolean | null | undefined | MeasureDefaultArgs> = $Result.GetResult<Prisma.$MeasurePayload, S>

  type MeasureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeasureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasureCountAggregateInputType | true
    }

  export interface MeasureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Measure'], meta: { name: 'Measure' } }
    /**
     * Find zero or one Measure that matches the filter.
     * @param {MeasureFindUniqueArgs} args - Arguments to find a Measure
     * @example
     * // Get one Measure
     * const measure = await prisma.measure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasureFindUniqueArgs>(args: SelectSubset<T, MeasureFindUniqueArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Measure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeasureFindUniqueOrThrowArgs} args - Arguments to find a Measure
     * @example
     * // Get one Measure
     * const measure = await prisma.measure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasureFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasureFindFirstArgs} args - Arguments to find a Measure
     * @example
     * // Get one Measure
     * const measure = await prisma.measure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasureFindFirstArgs>(args?: SelectSubset<T, MeasureFindFirstArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasureFindFirstOrThrowArgs} args - Arguments to find a Measure
     * @example
     * // Get one Measure
     * const measure = await prisma.measure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasureFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasureFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Measures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measures
     * const measures = await prisma.measure.findMany()
     * 
     * // Get first 10 Measures
     * const measures = await prisma.measure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measureWithIdOnly = await prisma.measure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasureFindManyArgs>(args?: SelectSubset<T, MeasureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Measure.
     * @param {MeasureCreateArgs} args - Arguments to create a Measure.
     * @example
     * // Create one Measure
     * const Measure = await prisma.measure.create({
     *   data: {
     *     // ... data to create a Measure
     *   }
     * })
     * 
     */
    create<T extends MeasureCreateArgs>(args: SelectSubset<T, MeasureCreateArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Measures.
     * @param {MeasureCreateManyArgs} args - Arguments to create many Measures.
     * @example
     * // Create many Measures
     * const measure = await prisma.measure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasureCreateManyArgs>(args?: SelectSubset<T, MeasureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measures and returns the data saved in the database.
     * @param {MeasureCreateManyAndReturnArgs} args - Arguments to create many Measures.
     * @example
     * // Create many Measures
     * const measure = await prisma.measure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measures and only return the `id`
     * const measureWithIdOnly = await prisma.measure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasureCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Measure.
     * @param {MeasureDeleteArgs} args - Arguments to delete one Measure.
     * @example
     * // Delete one Measure
     * const Measure = await prisma.measure.delete({
     *   where: {
     *     // ... filter to delete one Measure
     *   }
     * })
     * 
     */
    delete<T extends MeasureDeleteArgs>(args: SelectSubset<T, MeasureDeleteArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Measure.
     * @param {MeasureUpdateArgs} args - Arguments to update one Measure.
     * @example
     * // Update one Measure
     * const measure = await prisma.measure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasureUpdateArgs>(args: SelectSubset<T, MeasureUpdateArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Measures.
     * @param {MeasureDeleteManyArgs} args - Arguments to filter Measures to delete.
     * @example
     * // Delete a few Measures
     * const { count } = await prisma.measure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasureDeleteManyArgs>(args?: SelectSubset<T, MeasureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measures
     * const measure = await prisma.measure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasureUpdateManyArgs>(args: SelectSubset<T, MeasureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measures and returns the data updated in the database.
     * @param {MeasureUpdateManyAndReturnArgs} args - Arguments to update many Measures.
     * @example
     * // Update many Measures
     * const measure = await prisma.measure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measures and only return the `id`
     * const measureWithIdOnly = await prisma.measure.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeasureUpdateManyAndReturnArgs>(args: SelectSubset<T, MeasureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Measure.
     * @param {MeasureUpsertArgs} args - Arguments to update or create a Measure.
     * @example
     * // Update or create a Measure
     * const measure = await prisma.measure.upsert({
     *   create: {
     *     // ... data to create a Measure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measure we want to update
     *   }
     * })
     */
    upsert<T extends MeasureUpsertArgs>(args: SelectSubset<T, MeasureUpsertArgs<ExtArgs>>): Prisma__MeasureClient<$Result.GetResult<Prisma.$MeasurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Measures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasureCountArgs} args - Arguments to filter Measures to count.
     * @example
     * // Count the number of Measures
     * const count = await prisma.measure.count({
     *   where: {
     *     // ... the filter for the Measures we want to count
     *   }
     * })
    **/
    count<T extends MeasureCountArgs>(
      args?: Subset<T, MeasureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeasureAggregateArgs>(args: Subset<T, MeasureAggregateArgs>): Prisma.PrismaPromise<GetMeasureAggregateType<T>>

    /**
     * Group by Measure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasureGroupByArgs} args - Group by arguments.
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
      T extends MeasureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasureGroupByArgs['orderBy'] }
        : { orderBy?: MeasureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeasureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Measure model
   */
  readonly fields: MeasureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Measure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crisis<T extends CrisisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrisisDefaultArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etat<T extends EtatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtatDefaultArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Measure model
   */
  interface MeasureFieldRefs {
    readonly id: FieldRef<"Measure", 'String'>
    readonly text: FieldRef<"Measure", 'String'>
    readonly severity: FieldRef<"Measure", 'Severity'>
    readonly crisisId: FieldRef<"Measure", 'String'>
    readonly etatId: FieldRef<"Measure", 'String'>
    readonly createdById: FieldRef<"Measure", 'String'>
    readonly createdAt: FieldRef<"Measure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Measure findUnique
   */
  export type MeasureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * Filter, which Measure to fetch.
     */
    where: MeasureWhereUniqueInput
  }

  /**
   * Measure findUniqueOrThrow
   */
  export type MeasureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * Filter, which Measure to fetch.
     */
    where: MeasureWhereUniqueInput
  }

  /**
   * Measure findFirst
   */
  export type MeasureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * Filter, which Measure to fetch.
     */
    where?: MeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measures to fetch.
     */
    orderBy?: MeasureOrderByWithRelationInput | MeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measures.
     */
    cursor?: MeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measures.
     */
    distinct?: MeasureScalarFieldEnum | MeasureScalarFieldEnum[]
  }

  /**
   * Measure findFirstOrThrow
   */
  export type MeasureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * Filter, which Measure to fetch.
     */
    where?: MeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measures to fetch.
     */
    orderBy?: MeasureOrderByWithRelationInput | MeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measures.
     */
    cursor?: MeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measures.
     */
    distinct?: MeasureScalarFieldEnum | MeasureScalarFieldEnum[]
  }

  /**
   * Measure findMany
   */
  export type MeasureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * Filter, which Measures to fetch.
     */
    where?: MeasureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measures to fetch.
     */
    orderBy?: MeasureOrderByWithRelationInput | MeasureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Measures.
     */
    cursor?: MeasureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measures.
     */
    skip?: number
    distinct?: MeasureScalarFieldEnum | MeasureScalarFieldEnum[]
  }

  /**
   * Measure create
   */
  export type MeasureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * The data needed to create a Measure.
     */
    data: XOR<MeasureCreateInput, MeasureUncheckedCreateInput>
  }

  /**
   * Measure createMany
   */
  export type MeasureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Measures.
     */
    data: MeasureCreateManyInput | MeasureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Measure createManyAndReturn
   */
  export type MeasureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * The data used to create many Measures.
     */
    data: MeasureCreateManyInput | MeasureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measure update
   */
  export type MeasureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * The data needed to update a Measure.
     */
    data: XOR<MeasureUpdateInput, MeasureUncheckedUpdateInput>
    /**
     * Choose, which Measure to update.
     */
    where: MeasureWhereUniqueInput
  }

  /**
   * Measure updateMany
   */
  export type MeasureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Measures.
     */
    data: XOR<MeasureUpdateManyMutationInput, MeasureUncheckedUpdateManyInput>
    /**
     * Filter which Measures to update
     */
    where?: MeasureWhereInput
    /**
     * Limit how many Measures to update.
     */
    limit?: number
  }

  /**
   * Measure updateManyAndReturn
   */
  export type MeasureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * The data used to update Measures.
     */
    data: XOR<MeasureUpdateManyMutationInput, MeasureUncheckedUpdateManyInput>
    /**
     * Filter which Measures to update
     */
    where?: MeasureWhereInput
    /**
     * Limit how many Measures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measure upsert
   */
  export type MeasureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * The filter to search for the Measure to update in case it exists.
     */
    where: MeasureWhereUniqueInput
    /**
     * In case the Measure found by the `where` argument doesn't exist, create a new Measure with this data.
     */
    create: XOR<MeasureCreateInput, MeasureUncheckedCreateInput>
    /**
     * In case the Measure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasureUpdateInput, MeasureUncheckedUpdateInput>
  }

  /**
   * Measure delete
   */
  export type MeasureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
    /**
     * Filter which Measure to delete.
     */
    where: MeasureWhereUniqueInput
  }

  /**
   * Measure deleteMany
   */
  export type MeasureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measures to delete
     */
    where?: MeasureWhereInput
    /**
     * Limit how many Measures to delete.
     */
    limit?: number
  }

  /**
   * Measure without action
   */
  export type MeasureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measure
     */
    select?: MeasureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measure
     */
    omit?: MeasureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasureInclude<ExtArgs> | null
  }


  /**
   * Model MapMarker
   */

  export type AggregateMapMarker = {
    _count: MapMarkerCountAggregateOutputType | null
    _avg: MapMarkerAvgAggregateOutputType | null
    _sum: MapMarkerSumAggregateOutputType | null
    _min: MapMarkerMinAggregateOutputType | null
    _max: MapMarkerMaxAggregateOutputType | null
  }

  export type MapMarkerAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    radius: number | null
  }

  export type MapMarkerSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    radius: number | null
  }

  export type MapMarkerMinAggregateOutputType = {
    id: string | null
    type: $Enums.MarkerType | null
    label: string | null
    lat: number | null
    lng: number | null
    radius: number | null
    crisisId: string | null
    etatId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type MapMarkerMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MarkerType | null
    label: string | null
    lat: number | null
    lng: number | null
    radius: number | null
    crisisId: string | null
    etatId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type MapMarkerCountAggregateOutputType = {
    id: number
    type: number
    label: number
    lat: number
    lng: number
    radius: number
    crisisId: number
    etatId: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type MapMarkerAvgAggregateInputType = {
    lat?: true
    lng?: true
    radius?: true
  }

  export type MapMarkerSumAggregateInputType = {
    lat?: true
    lng?: true
    radius?: true
  }

  export type MapMarkerMinAggregateInputType = {
    id?: true
    type?: true
    label?: true
    lat?: true
    lng?: true
    radius?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
  }

  export type MapMarkerMaxAggregateInputType = {
    id?: true
    type?: true
    label?: true
    lat?: true
    lng?: true
    radius?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
  }

  export type MapMarkerCountAggregateInputType = {
    id?: true
    type?: true
    label?: true
    lat?: true
    lng?: true
    radius?: true
    crisisId?: true
    etatId?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type MapMarkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapMarker to aggregate.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapMarkers
    **/
    _count?: true | MapMarkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapMarkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapMarkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapMarkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapMarkerMaxAggregateInputType
  }

  export type GetMapMarkerAggregateType<T extends MapMarkerAggregateArgs> = {
        [P in keyof T & keyof AggregateMapMarker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapMarker[P]>
      : GetScalarType<T[P], AggregateMapMarker[P]>
  }




  export type MapMarkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapMarkerWhereInput
    orderBy?: MapMarkerOrderByWithAggregationInput | MapMarkerOrderByWithAggregationInput[]
    by: MapMarkerScalarFieldEnum[] | MapMarkerScalarFieldEnum
    having?: MapMarkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapMarkerCountAggregateInputType | true
    _avg?: MapMarkerAvgAggregateInputType
    _sum?: MapMarkerSumAggregateInputType
    _min?: MapMarkerMinAggregateInputType
    _max?: MapMarkerMaxAggregateInputType
  }

  export type MapMarkerGroupByOutputType = {
    id: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius: number | null
    crisisId: string
    etatId: string
    createdById: string
    createdAt: Date
    _count: MapMarkerCountAggregateOutputType | null
    _avg: MapMarkerAvgAggregateOutputType | null
    _sum: MapMarkerSumAggregateOutputType | null
    _min: MapMarkerMinAggregateOutputType | null
    _max: MapMarkerMaxAggregateOutputType | null
  }

  type GetMapMarkerGroupByPayload<T extends MapMarkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapMarkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapMarkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapMarkerGroupByOutputType[P]>
            : GetScalarType<T[P], MapMarkerGroupByOutputType[P]>
        }
      >
    >


  export type MapMarkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    radius?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapMarker"]>

  export type MapMarkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    radius?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapMarker"]>

  export type MapMarkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    radius?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapMarker"]>

  export type MapMarkerSelectScalar = {
    id?: boolean
    type?: boolean
    label?: boolean
    lat?: boolean
    lng?: boolean
    radius?: boolean
    crisisId?: boolean
    etatId?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type MapMarkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "label" | "lat" | "lng" | "radius" | "crisisId" | "etatId" | "createdById" | "createdAt", ExtArgs["result"]["mapMarker"]>
  export type MapMarkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MapMarkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MapMarkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crisis?: boolean | CrisisDefaultArgs<ExtArgs>
    etat?: boolean | EtatDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MapMarkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapMarker"
    objects: {
      crisis: Prisma.$CrisisPayload<ExtArgs>
      etat: Prisma.$EtatPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MarkerType
      label: string
      lat: number
      lng: number
      radius: number | null
      crisisId: string
      etatId: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["mapMarker"]>
    composites: {}
  }

  type MapMarkerGetPayload<S extends boolean | null | undefined | MapMarkerDefaultArgs> = $Result.GetResult<Prisma.$MapMarkerPayload, S>

  type MapMarkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapMarkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapMarkerCountAggregateInputType | true
    }

  export interface MapMarkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapMarker'], meta: { name: 'MapMarker' } }
    /**
     * Find zero or one MapMarker that matches the filter.
     * @param {MapMarkerFindUniqueArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapMarkerFindUniqueArgs>(args: SelectSubset<T, MapMarkerFindUniqueArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapMarker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapMarkerFindUniqueOrThrowArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapMarkerFindUniqueOrThrowArgs>(args: SelectSubset<T, MapMarkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapMarker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerFindFirstArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapMarkerFindFirstArgs>(args?: SelectSubset<T, MapMarkerFindFirstArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapMarker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerFindFirstOrThrowArgs} args - Arguments to find a MapMarker
     * @example
     * // Get one MapMarker
     * const mapMarker = await prisma.mapMarker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapMarkerFindFirstOrThrowArgs>(args?: SelectSubset<T, MapMarkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapMarkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapMarkers
     * const mapMarkers = await prisma.mapMarker.findMany()
     * 
     * // Get first 10 MapMarkers
     * const mapMarkers = await prisma.mapMarker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapMarkerWithIdOnly = await prisma.mapMarker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapMarkerFindManyArgs>(args?: SelectSubset<T, MapMarkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapMarker.
     * @param {MapMarkerCreateArgs} args - Arguments to create a MapMarker.
     * @example
     * // Create one MapMarker
     * const MapMarker = await prisma.mapMarker.create({
     *   data: {
     *     // ... data to create a MapMarker
     *   }
     * })
     * 
     */
    create<T extends MapMarkerCreateArgs>(args: SelectSubset<T, MapMarkerCreateArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapMarkers.
     * @param {MapMarkerCreateManyArgs} args - Arguments to create many MapMarkers.
     * @example
     * // Create many MapMarkers
     * const mapMarker = await prisma.mapMarker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapMarkerCreateManyArgs>(args?: SelectSubset<T, MapMarkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapMarkers and returns the data saved in the database.
     * @param {MapMarkerCreateManyAndReturnArgs} args - Arguments to create many MapMarkers.
     * @example
     * // Create many MapMarkers
     * const mapMarker = await prisma.mapMarker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapMarkers and only return the `id`
     * const mapMarkerWithIdOnly = await prisma.mapMarker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapMarkerCreateManyAndReturnArgs>(args?: SelectSubset<T, MapMarkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapMarker.
     * @param {MapMarkerDeleteArgs} args - Arguments to delete one MapMarker.
     * @example
     * // Delete one MapMarker
     * const MapMarker = await prisma.mapMarker.delete({
     *   where: {
     *     // ... filter to delete one MapMarker
     *   }
     * })
     * 
     */
    delete<T extends MapMarkerDeleteArgs>(args: SelectSubset<T, MapMarkerDeleteArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapMarker.
     * @param {MapMarkerUpdateArgs} args - Arguments to update one MapMarker.
     * @example
     * // Update one MapMarker
     * const mapMarker = await prisma.mapMarker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapMarkerUpdateArgs>(args: SelectSubset<T, MapMarkerUpdateArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapMarkers.
     * @param {MapMarkerDeleteManyArgs} args - Arguments to filter MapMarkers to delete.
     * @example
     * // Delete a few MapMarkers
     * const { count } = await prisma.mapMarker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapMarkerDeleteManyArgs>(args?: SelectSubset<T, MapMarkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapMarkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapMarkers
     * const mapMarker = await prisma.mapMarker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapMarkerUpdateManyArgs>(args: SelectSubset<T, MapMarkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapMarkers and returns the data updated in the database.
     * @param {MapMarkerUpdateManyAndReturnArgs} args - Arguments to update many MapMarkers.
     * @example
     * // Update many MapMarkers
     * const mapMarker = await prisma.mapMarker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapMarkers and only return the `id`
     * const mapMarkerWithIdOnly = await prisma.mapMarker.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapMarkerUpdateManyAndReturnArgs>(args: SelectSubset<T, MapMarkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapMarker.
     * @param {MapMarkerUpsertArgs} args - Arguments to update or create a MapMarker.
     * @example
     * // Update or create a MapMarker
     * const mapMarker = await prisma.mapMarker.upsert({
     *   create: {
     *     // ... data to create a MapMarker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapMarker we want to update
     *   }
     * })
     */
    upsert<T extends MapMarkerUpsertArgs>(args: SelectSubset<T, MapMarkerUpsertArgs<ExtArgs>>): Prisma__MapMarkerClient<$Result.GetResult<Prisma.$MapMarkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapMarkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerCountArgs} args - Arguments to filter MapMarkers to count.
     * @example
     * // Count the number of MapMarkers
     * const count = await prisma.mapMarker.count({
     *   where: {
     *     // ... the filter for the MapMarkers we want to count
     *   }
     * })
    **/
    count<T extends MapMarkerCountArgs>(
      args?: Subset<T, MapMarkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapMarkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapMarker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapMarkerAggregateArgs>(args: Subset<T, MapMarkerAggregateArgs>): Prisma.PrismaPromise<GetMapMarkerAggregateType<T>>

    /**
     * Group by MapMarker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapMarkerGroupByArgs} args - Group by arguments.
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
      T extends MapMarkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapMarkerGroupByArgs['orderBy'] }
        : { orderBy?: MapMarkerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapMarkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapMarkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapMarker model
   */
  readonly fields: MapMarkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapMarker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapMarkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crisis<T extends CrisisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrisisDefaultArgs<ExtArgs>>): Prisma__CrisisClient<$Result.GetResult<Prisma.$CrisisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etat<T extends EtatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtatDefaultArgs<ExtArgs>>): Prisma__EtatClient<$Result.GetResult<Prisma.$EtatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MapMarker model
   */
  interface MapMarkerFieldRefs {
    readonly id: FieldRef<"MapMarker", 'String'>
    readonly type: FieldRef<"MapMarker", 'MarkerType'>
    readonly label: FieldRef<"MapMarker", 'String'>
    readonly lat: FieldRef<"MapMarker", 'Float'>
    readonly lng: FieldRef<"MapMarker", 'Float'>
    readonly radius: FieldRef<"MapMarker", 'Int'>
    readonly crisisId: FieldRef<"MapMarker", 'String'>
    readonly etatId: FieldRef<"MapMarker", 'String'>
    readonly createdById: FieldRef<"MapMarker", 'String'>
    readonly createdAt: FieldRef<"MapMarker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MapMarker findUnique
   */
  export type MapMarkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker findUniqueOrThrow
   */
  export type MapMarkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker findFirst
   */
  export type MapMarkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapMarkers.
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapMarkers.
     */
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * MapMarker findFirstOrThrow
   */
  export type MapMarkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarker to fetch.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapMarkers.
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapMarkers.
     */
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * MapMarker findMany
   */
  export type MapMarkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter, which MapMarkers to fetch.
     */
    where?: MapMarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapMarkers to fetch.
     */
    orderBy?: MapMarkerOrderByWithRelationInput | MapMarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapMarkers.
     */
    cursor?: MapMarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapMarkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapMarkers.
     */
    skip?: number
    distinct?: MapMarkerScalarFieldEnum | MapMarkerScalarFieldEnum[]
  }

  /**
   * MapMarker create
   */
  export type MapMarkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * The data needed to create a MapMarker.
     */
    data: XOR<MapMarkerCreateInput, MapMarkerUncheckedCreateInput>
  }

  /**
   * MapMarker createMany
   */
  export type MapMarkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapMarkers.
     */
    data: MapMarkerCreateManyInput | MapMarkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapMarker createManyAndReturn
   */
  export type MapMarkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * The data used to create many MapMarkers.
     */
    data: MapMarkerCreateManyInput | MapMarkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapMarker update
   */
  export type MapMarkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * The data needed to update a MapMarker.
     */
    data: XOR<MapMarkerUpdateInput, MapMarkerUncheckedUpdateInput>
    /**
     * Choose, which MapMarker to update.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker updateMany
   */
  export type MapMarkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapMarkers.
     */
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyInput>
    /**
     * Filter which MapMarkers to update
     */
    where?: MapMarkerWhereInput
    /**
     * Limit how many MapMarkers to update.
     */
    limit?: number
  }

  /**
   * MapMarker updateManyAndReturn
   */
  export type MapMarkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * The data used to update MapMarkers.
     */
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyInput>
    /**
     * Filter which MapMarkers to update
     */
    where?: MapMarkerWhereInput
    /**
     * Limit how many MapMarkers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapMarker upsert
   */
  export type MapMarkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * The filter to search for the MapMarker to update in case it exists.
     */
    where: MapMarkerWhereUniqueInput
    /**
     * In case the MapMarker found by the `where` argument doesn't exist, create a new MapMarker with this data.
     */
    create: XOR<MapMarkerCreateInput, MapMarkerUncheckedCreateInput>
    /**
     * In case the MapMarker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapMarkerUpdateInput, MapMarkerUncheckedUpdateInput>
  }

  /**
   * MapMarker delete
   */
  export type MapMarkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
    /**
     * Filter which MapMarker to delete.
     */
    where: MapMarkerWhereUniqueInput
  }

  /**
   * MapMarker deleteMany
   */
  export type MapMarkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapMarkers to delete
     */
    where?: MapMarkerWhereInput
    /**
     * Limit how many MapMarkers to delete.
     */
    limit?: number
  }

  /**
   * MapMarker without action
   */
  export type MapMarkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapMarker
     */
    select?: MapMarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapMarker
     */
    omit?: MapMarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapMarkerInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    isVerified: 'isVerified',
    isAdmin: 'isAdmin',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EtatScalarFieldEnum: {
    id: 'id',
    title: 'title',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    themeColor: 'themeColor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EtatScalarFieldEnum = (typeof EtatScalarFieldEnum)[keyof typeof EtatScalarFieldEnum]


  export const CrisisScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    what: 'what',
    how: 'how',
    when: 'when',
    severity: 'severity',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrisisScalarFieldEnum = (typeof CrisisScalarFieldEnum)[keyof typeof CrisisScalarFieldEnum]


  export const TimelineEntryScalarFieldEnum: {
    id: 'id',
    text: 'text',
    crisisId: 'crisisId',
    etatId: 'etatId',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type TimelineEntryScalarFieldEnum = (typeof TimelineEntryScalarFieldEnum)[keyof typeof TimelineEntryScalarFieldEnum]


  export const MeasureScalarFieldEnum: {
    id: 'id',
    text: 'text',
    severity: 'severity',
    crisisId: 'crisisId',
    etatId: 'etatId',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type MeasureScalarFieldEnum = (typeof MeasureScalarFieldEnum)[keyof typeof MeasureScalarFieldEnum]


  export const MapMarkerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    label: 'label',
    lat: 'lat',
    lng: 'lng',
    radius: 'radius',
    crisisId: 'crisisId',
    etatId: 'etatId',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type MapMarkerScalarFieldEnum = (typeof MapMarkerScalarFieldEnum)[keyof typeof MapMarkerScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'MarkerType'
   */
  export type EnumMarkerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarkerType'>
    


  /**
   * Reference to a field of type 'MarkerType[]'
   */
  export type ListEnumMarkerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarkerType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    crises?: CrisisListRelationFilter
    timelineEntries?: TimelineEntryListRelationFilter
    measures?: MeasureListRelationFilter
    mapMarkers?: MapMarkerListRelationFilter
    etater?: EtatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    crises?: CrisisOrderByRelationAggregateInput
    timelineEntries?: TimelineEntryOrderByRelationAggregateInput
    measures?: MeasureOrderByRelationAggregateInput
    mapMarkers?: MapMarkerOrderByRelationAggregateInput
    etater?: EtatOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    crises?: CrisisListRelationFilter
    timelineEntries?: TimelineEntryListRelationFilter
    measures?: MeasureListRelationFilter
    mapMarkers?: MapMarkerListRelationFilter
    etater?: EtatListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EtatWhereInput = {
    AND?: EtatWhereInput | EtatWhereInput[]
    OR?: EtatWhereInput[]
    NOT?: EtatWhereInput | EtatWhereInput[]
    id?: StringFilter<"Etat"> | string
    title?: StringFilter<"Etat"> | string
    contactPhone?: StringFilter<"Etat"> | string
    contactEmail?: StringFilter<"Etat"> | string
    themeColor?: StringFilter<"Etat"> | string
    createdAt?: DateTimeFilter<"Etat"> | Date | string
    updatedAt?: DateTimeFilter<"Etat"> | Date | string
    users?: UserListRelationFilter
    crises?: CrisisListRelationFilter
    timelineEntries?: TimelineEntryListRelationFilter
    measures?: MeasureListRelationFilter
    mapMarkers?: MapMarkerListRelationFilter
  }

  export type EtatOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    themeColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    crises?: CrisisOrderByRelationAggregateInput
    timelineEntries?: TimelineEntryOrderByRelationAggregateInput
    measures?: MeasureOrderByRelationAggregateInput
    mapMarkers?: MapMarkerOrderByRelationAggregateInput
  }

  export type EtatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EtatWhereInput | EtatWhereInput[]
    OR?: EtatWhereInput[]
    NOT?: EtatWhereInput | EtatWhereInput[]
    title?: StringFilter<"Etat"> | string
    contactPhone?: StringFilter<"Etat"> | string
    contactEmail?: StringFilter<"Etat"> | string
    themeColor?: StringFilter<"Etat"> | string
    createdAt?: DateTimeFilter<"Etat"> | Date | string
    updatedAt?: DateTimeFilter<"Etat"> | Date | string
    users?: UserListRelationFilter
    crises?: CrisisListRelationFilter
    timelineEntries?: TimelineEntryListRelationFilter
    measures?: MeasureListRelationFilter
    mapMarkers?: MapMarkerListRelationFilter
  }, "id">

  export type EtatOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    themeColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EtatCountOrderByAggregateInput
    _max?: EtatMaxOrderByAggregateInput
    _min?: EtatMinOrderByAggregateInput
  }

  export type EtatScalarWhereWithAggregatesInput = {
    AND?: EtatScalarWhereWithAggregatesInput | EtatScalarWhereWithAggregatesInput[]
    OR?: EtatScalarWhereWithAggregatesInput[]
    NOT?: EtatScalarWhereWithAggregatesInput | EtatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Etat"> | string
    title?: StringWithAggregatesFilter<"Etat"> | string
    contactPhone?: StringWithAggregatesFilter<"Etat"> | string
    contactEmail?: StringWithAggregatesFilter<"Etat"> | string
    themeColor?: StringWithAggregatesFilter<"Etat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Etat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Etat"> | Date | string
  }

  export type CrisisWhereInput = {
    AND?: CrisisWhereInput | CrisisWhereInput[]
    OR?: CrisisWhereInput[]
    NOT?: CrisisWhereInput | CrisisWhereInput[]
    id?: StringFilter<"Crisis"> | string
    title?: StringFilter<"Crisis"> | string
    description?: StringFilter<"Crisis"> | string
    what?: StringFilter<"Crisis"> | string
    how?: StringFilter<"Crisis"> | string
    when?: DateTimeFilter<"Crisis"> | Date | string
    severity?: EnumSeverityFilter<"Crisis"> | $Enums.Severity
    createdById?: StringFilter<"Crisis"> | string
    createdAt?: DateTimeFilter<"Crisis"> | Date | string
    updatedAt?: DateTimeFilter<"Crisis"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    allowedEtater?: EtatListRelationFilter
    timelineEntries?: TimelineEntryListRelationFilter
    measures?: MeasureListRelationFilter
    mapMarkers?: MapMarkerListRelationFilter
  }

  export type CrisisOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    what?: SortOrder
    how?: SortOrder
    when?: SortOrder
    severity?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    allowedEtater?: EtatOrderByRelationAggregateInput
    timelineEntries?: TimelineEntryOrderByRelationAggregateInput
    measures?: MeasureOrderByRelationAggregateInput
    mapMarkers?: MapMarkerOrderByRelationAggregateInput
  }

  export type CrisisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CrisisWhereInput | CrisisWhereInput[]
    OR?: CrisisWhereInput[]
    NOT?: CrisisWhereInput | CrisisWhereInput[]
    title?: StringFilter<"Crisis"> | string
    description?: StringFilter<"Crisis"> | string
    what?: StringFilter<"Crisis"> | string
    how?: StringFilter<"Crisis"> | string
    when?: DateTimeFilter<"Crisis"> | Date | string
    severity?: EnumSeverityFilter<"Crisis"> | $Enums.Severity
    createdById?: StringFilter<"Crisis"> | string
    createdAt?: DateTimeFilter<"Crisis"> | Date | string
    updatedAt?: DateTimeFilter<"Crisis"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    allowedEtater?: EtatListRelationFilter
    timelineEntries?: TimelineEntryListRelationFilter
    measures?: MeasureListRelationFilter
    mapMarkers?: MapMarkerListRelationFilter
  }, "id">

  export type CrisisOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    what?: SortOrder
    how?: SortOrder
    when?: SortOrder
    severity?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrisisCountOrderByAggregateInput
    _max?: CrisisMaxOrderByAggregateInput
    _min?: CrisisMinOrderByAggregateInput
  }

  export type CrisisScalarWhereWithAggregatesInput = {
    AND?: CrisisScalarWhereWithAggregatesInput | CrisisScalarWhereWithAggregatesInput[]
    OR?: CrisisScalarWhereWithAggregatesInput[]
    NOT?: CrisisScalarWhereWithAggregatesInput | CrisisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Crisis"> | string
    title?: StringWithAggregatesFilter<"Crisis"> | string
    description?: StringWithAggregatesFilter<"Crisis"> | string
    what?: StringWithAggregatesFilter<"Crisis"> | string
    how?: StringWithAggregatesFilter<"Crisis"> | string
    when?: DateTimeWithAggregatesFilter<"Crisis"> | Date | string
    severity?: EnumSeverityWithAggregatesFilter<"Crisis"> | $Enums.Severity
    createdById?: StringWithAggregatesFilter<"Crisis"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Crisis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Crisis"> | Date | string
  }

  export type TimelineEntryWhereInput = {
    AND?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    OR?: TimelineEntryWhereInput[]
    NOT?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    id?: StringFilter<"TimelineEntry"> | string
    text?: StringFilter<"TimelineEntry"> | string
    crisisId?: StringFilter<"TimelineEntry"> | string
    etatId?: StringFilter<"TimelineEntry"> | string
    createdById?: StringFilter<"TimelineEntry"> | string
    createdAt?: DateTimeFilter<"TimelineEntry"> | Date | string
    crisis?: XOR<CrisisScalarRelationFilter, CrisisWhereInput>
    etat?: XOR<EtatScalarRelationFilter, EtatWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TimelineEntryOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    crisis?: CrisisOrderByWithRelationInput
    etat?: EtatOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type TimelineEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    OR?: TimelineEntryWhereInput[]
    NOT?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    text?: StringFilter<"TimelineEntry"> | string
    crisisId?: StringFilter<"TimelineEntry"> | string
    etatId?: StringFilter<"TimelineEntry"> | string
    createdById?: StringFilter<"TimelineEntry"> | string
    createdAt?: DateTimeFilter<"TimelineEntry"> | Date | string
    crisis?: XOR<CrisisScalarRelationFilter, CrisisWhereInput>
    etat?: XOR<EtatScalarRelationFilter, EtatWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TimelineEntryOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: TimelineEntryCountOrderByAggregateInput
    _max?: TimelineEntryMaxOrderByAggregateInput
    _min?: TimelineEntryMinOrderByAggregateInput
  }

  export type TimelineEntryScalarWhereWithAggregatesInput = {
    AND?: TimelineEntryScalarWhereWithAggregatesInput | TimelineEntryScalarWhereWithAggregatesInput[]
    OR?: TimelineEntryScalarWhereWithAggregatesInput[]
    NOT?: TimelineEntryScalarWhereWithAggregatesInput | TimelineEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimelineEntry"> | string
    text?: StringWithAggregatesFilter<"TimelineEntry"> | string
    crisisId?: StringWithAggregatesFilter<"TimelineEntry"> | string
    etatId?: StringWithAggregatesFilter<"TimelineEntry"> | string
    createdById?: StringWithAggregatesFilter<"TimelineEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TimelineEntry"> | Date | string
  }

  export type MeasureWhereInput = {
    AND?: MeasureWhereInput | MeasureWhereInput[]
    OR?: MeasureWhereInput[]
    NOT?: MeasureWhereInput | MeasureWhereInput[]
    id?: StringFilter<"Measure"> | string
    text?: StringFilter<"Measure"> | string
    severity?: EnumSeverityFilter<"Measure"> | $Enums.Severity
    crisisId?: StringFilter<"Measure"> | string
    etatId?: StringFilter<"Measure"> | string
    createdById?: StringFilter<"Measure"> | string
    createdAt?: DateTimeFilter<"Measure"> | Date | string
    crisis?: XOR<CrisisScalarRelationFilter, CrisisWhereInput>
    etat?: XOR<EtatScalarRelationFilter, EtatWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeasureOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    severity?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    crisis?: CrisisOrderByWithRelationInput
    etat?: EtatOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type MeasureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeasureWhereInput | MeasureWhereInput[]
    OR?: MeasureWhereInput[]
    NOT?: MeasureWhereInput | MeasureWhereInput[]
    text?: StringFilter<"Measure"> | string
    severity?: EnumSeverityFilter<"Measure"> | $Enums.Severity
    crisisId?: StringFilter<"Measure"> | string
    etatId?: StringFilter<"Measure"> | string
    createdById?: StringFilter<"Measure"> | string
    createdAt?: DateTimeFilter<"Measure"> | Date | string
    crisis?: XOR<CrisisScalarRelationFilter, CrisisWhereInput>
    etat?: XOR<EtatScalarRelationFilter, EtatWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MeasureOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    severity?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: MeasureCountOrderByAggregateInput
    _max?: MeasureMaxOrderByAggregateInput
    _min?: MeasureMinOrderByAggregateInput
  }

  export type MeasureScalarWhereWithAggregatesInput = {
    AND?: MeasureScalarWhereWithAggregatesInput | MeasureScalarWhereWithAggregatesInput[]
    OR?: MeasureScalarWhereWithAggregatesInput[]
    NOT?: MeasureScalarWhereWithAggregatesInput | MeasureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Measure"> | string
    text?: StringWithAggregatesFilter<"Measure"> | string
    severity?: EnumSeverityWithAggregatesFilter<"Measure"> | $Enums.Severity
    crisisId?: StringWithAggregatesFilter<"Measure"> | string
    etatId?: StringWithAggregatesFilter<"Measure"> | string
    createdById?: StringWithAggregatesFilter<"Measure"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Measure"> | Date | string
  }

  export type MapMarkerWhereInput = {
    AND?: MapMarkerWhereInput | MapMarkerWhereInput[]
    OR?: MapMarkerWhereInput[]
    NOT?: MapMarkerWhereInput | MapMarkerWhereInput[]
    id?: StringFilter<"MapMarker"> | string
    type?: EnumMarkerTypeFilter<"MapMarker"> | $Enums.MarkerType
    label?: StringFilter<"MapMarker"> | string
    lat?: FloatFilter<"MapMarker"> | number
    lng?: FloatFilter<"MapMarker"> | number
    radius?: IntNullableFilter<"MapMarker"> | number | null
    crisisId?: StringFilter<"MapMarker"> | string
    etatId?: StringFilter<"MapMarker"> | string
    createdById?: StringFilter<"MapMarker"> | string
    createdAt?: DateTimeFilter<"MapMarker"> | Date | string
    crisis?: XOR<CrisisScalarRelationFilter, CrisisWhereInput>
    etat?: XOR<EtatScalarRelationFilter, EtatWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MapMarkerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    radius?: SortOrderInput | SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    crisis?: CrisisOrderByWithRelationInput
    etat?: EtatOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type MapMarkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapMarkerWhereInput | MapMarkerWhereInput[]
    OR?: MapMarkerWhereInput[]
    NOT?: MapMarkerWhereInput | MapMarkerWhereInput[]
    type?: EnumMarkerTypeFilter<"MapMarker"> | $Enums.MarkerType
    label?: StringFilter<"MapMarker"> | string
    lat?: FloatFilter<"MapMarker"> | number
    lng?: FloatFilter<"MapMarker"> | number
    radius?: IntNullableFilter<"MapMarker"> | number | null
    crisisId?: StringFilter<"MapMarker"> | string
    etatId?: StringFilter<"MapMarker"> | string
    createdById?: StringFilter<"MapMarker"> | string
    createdAt?: DateTimeFilter<"MapMarker"> | Date | string
    crisis?: XOR<CrisisScalarRelationFilter, CrisisWhereInput>
    etat?: XOR<EtatScalarRelationFilter, EtatWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MapMarkerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    radius?: SortOrderInput | SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: MapMarkerCountOrderByAggregateInput
    _avg?: MapMarkerAvgOrderByAggregateInput
    _max?: MapMarkerMaxOrderByAggregateInput
    _min?: MapMarkerMinOrderByAggregateInput
    _sum?: MapMarkerSumOrderByAggregateInput
  }

  export type MapMarkerScalarWhereWithAggregatesInput = {
    AND?: MapMarkerScalarWhereWithAggregatesInput | MapMarkerScalarWhereWithAggregatesInput[]
    OR?: MapMarkerScalarWhereWithAggregatesInput[]
    NOT?: MapMarkerScalarWhereWithAggregatesInput | MapMarkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapMarker"> | string
    type?: EnumMarkerTypeWithAggregatesFilter<"MapMarker"> | $Enums.MarkerType
    label?: StringWithAggregatesFilter<"MapMarker"> | string
    lat?: FloatWithAggregatesFilter<"MapMarker"> | number
    lng?: FloatWithAggregatesFilter<"MapMarker"> | number
    radius?: IntNullableWithAggregatesFilter<"MapMarker"> | number | null
    crisisId?: StringWithAggregatesFilter<"MapMarker"> | string
    etatId?: StringWithAggregatesFilter<"MapMarker"> | string
    createdById?: StringWithAggregatesFilter<"MapMarker"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MapMarker"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtatCreateInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutEtaterInput
    crises?: CrisisCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutEtatInput
    measures?: MeasureCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutEtatInput
  }

  export type EtatUncheckedCreateInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEtaterInput
    crises?: CrisisUncheckedCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutEtatInput
    measures?: MeasureUncheckedCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutEtatInput
  }

  export type EtatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutEtatNestedInput
    measures?: MeasureUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutEtatNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutEtatNestedInput
  }

  export type EtatCreateManyInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EtatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrisisCreateInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCrisesInput
    allowedEtater?: EtatCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCrisisInput
    measures?: MeasureCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allowedEtater?: EtatUncheckedCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCrisisInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCrisesNestedInput
    allowedEtater?: EtatUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allowedEtater?: EtatUncheckedUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisCreateManyInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrisisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrisisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutTimelineEntriesInput
    etat: EtatCreateNestedOneWithoutTimelineEntriesInput
    createdBy: UserCreateNestedOneWithoutTimelineEntriesInput
  }

  export type TimelineEntryUncheckedCreateInput = {
    id?: string
    text: string
    crisisId: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type TimelineEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutTimelineEntriesNestedInput
    etat?: EtatUpdateOneRequiredWithoutTimelineEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTimelineEntriesNestedInput
  }

  export type TimelineEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryCreateManyInput = {
    id?: string
    text: string
    crisisId: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type TimelineEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureCreateInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutMeasuresInput
    etat: EtatCreateNestedOneWithoutMeasuresInput
    createdBy: UserCreateNestedOneWithoutMeasuresInput
  }

  export type MeasureUncheckedCreateInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    crisisId: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MeasureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutMeasuresNestedInput
    etat?: EtatUpdateOneRequiredWithoutMeasuresNestedInput
    createdBy?: UserUpdateOneRequiredWithoutMeasuresNestedInput
  }

  export type MeasureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureCreateManyInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    crisisId: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MeasureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerCreateInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutMapMarkersInput
    etat: EtatCreateNestedOneWithoutMapMarkersInput
    createdBy: UserCreateNestedOneWithoutMapMarkersInput
  }

  export type MapMarkerUncheckedCreateInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    crisisId: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MapMarkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutMapMarkersNestedInput
    etat?: EtatUpdateOneRequiredWithoutMapMarkersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutMapMarkersNestedInput
  }

  export type MapMarkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerCreateManyInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    crisisId: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MapMarkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CrisisListRelationFilter = {
    every?: CrisisWhereInput
    some?: CrisisWhereInput
    none?: CrisisWhereInput
  }

  export type TimelineEntryListRelationFilter = {
    every?: TimelineEntryWhereInput
    some?: TimelineEntryWhereInput
    none?: TimelineEntryWhereInput
  }

  export type MeasureListRelationFilter = {
    every?: MeasureWhereInput
    some?: MeasureWhereInput
    none?: MeasureWhereInput
  }

  export type MapMarkerListRelationFilter = {
    every?: MapMarkerWhereInput
    some?: MapMarkerWhereInput
    none?: MapMarkerWhereInput
  }

  export type EtatListRelationFilter = {
    every?: EtatWhereInput
    some?: EtatWhereInput
    none?: EtatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrisisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimelineEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeasureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapMarkerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    isVerified?: SortOrder
    isAdmin?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtatCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    themeColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtatMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    themeColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtatMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    themeColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type CrisisCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    what?: SortOrder
    how?: SortOrder
    when?: SortOrder
    severity?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrisisMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    what?: SortOrder
    how?: SortOrder
    when?: SortOrder
    severity?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrisisMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    what?: SortOrder
    how?: SortOrder
    when?: SortOrder
    severity?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type CrisisScalarRelationFilter = {
    is?: CrisisWhereInput
    isNot?: CrisisWhereInput
  }

  export type EtatScalarRelationFilter = {
    is?: EtatWhereInput
    isNot?: EtatWhereInput
  }

  export type TimelineEntryCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type TimelineEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type TimelineEntryMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type MeasureCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    severity?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type MeasureMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    severity?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type MeasureMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    severity?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMarkerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarkerTypeFilter<$PrismaModel> | $Enums.MarkerType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MapMarkerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    radius?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type MapMarkerAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    radius?: SortOrder
  }

  export type MapMarkerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    radius?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type MapMarkerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    label?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    radius?: SortOrder
    crisisId?: SortOrder
    etatId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type MapMarkerSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    radius?: SortOrder
  }

  export type EnumMarkerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarkerTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarkerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarkerTypeFilter<$PrismaModel>
    _max?: NestedEnumMarkerTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CrisisCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CrisisCreateWithoutCreatedByInput, CrisisUncheckedCreateWithoutCreatedByInput> | CrisisCreateWithoutCreatedByInput[] | CrisisUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutCreatedByInput | CrisisCreateOrConnectWithoutCreatedByInput[]
    createMany?: CrisisCreateManyCreatedByInputEnvelope
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
  }

  export type TimelineEntryCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TimelineEntryCreateWithoutCreatedByInput, TimelineEntryUncheckedCreateWithoutCreatedByInput> | TimelineEntryCreateWithoutCreatedByInput[] | TimelineEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCreatedByInput | TimelineEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: TimelineEntryCreateManyCreatedByInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type MeasureCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MeasureCreateWithoutCreatedByInput, MeasureUncheckedCreateWithoutCreatedByInput> | MeasureCreateWithoutCreatedByInput[] | MeasureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCreatedByInput | MeasureCreateOrConnectWithoutCreatedByInput[]
    createMany?: MeasureCreateManyCreatedByInputEnvelope
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
  }

  export type MapMarkerCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type EtatCreateNestedManyWithoutUsersInput = {
    create?: XOR<EtatCreateWithoutUsersInput, EtatUncheckedCreateWithoutUsersInput> | EtatCreateWithoutUsersInput[] | EtatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutUsersInput | EtatCreateOrConnectWithoutUsersInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CrisisUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CrisisCreateWithoutCreatedByInput, CrisisUncheckedCreateWithoutCreatedByInput> | CrisisCreateWithoutCreatedByInput[] | CrisisUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutCreatedByInput | CrisisCreateOrConnectWithoutCreatedByInput[]
    createMany?: CrisisCreateManyCreatedByInputEnvelope
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
  }

  export type TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TimelineEntryCreateWithoutCreatedByInput, TimelineEntryUncheckedCreateWithoutCreatedByInput> | TimelineEntryCreateWithoutCreatedByInput[] | TimelineEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCreatedByInput | TimelineEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: TimelineEntryCreateManyCreatedByInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type MeasureUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MeasureCreateWithoutCreatedByInput, MeasureUncheckedCreateWithoutCreatedByInput> | MeasureCreateWithoutCreatedByInput[] | MeasureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCreatedByInput | MeasureCreateOrConnectWithoutCreatedByInput[]
    createMany?: MeasureCreateManyCreatedByInputEnvelope
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
  }

  export type MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type EtatUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<EtatCreateWithoutUsersInput, EtatUncheckedCreateWithoutUsersInput> | EtatCreateWithoutUsersInput[] | EtatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutUsersInput | EtatCreateOrConnectWithoutUsersInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CrisisUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CrisisCreateWithoutCreatedByInput, CrisisUncheckedCreateWithoutCreatedByInput> | CrisisCreateWithoutCreatedByInput[] | CrisisUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutCreatedByInput | CrisisCreateOrConnectWithoutCreatedByInput[]
    upsert?: CrisisUpsertWithWhereUniqueWithoutCreatedByInput | CrisisUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CrisisCreateManyCreatedByInputEnvelope
    set?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    disconnect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    delete?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    update?: CrisisUpdateWithWhereUniqueWithoutCreatedByInput | CrisisUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CrisisUpdateManyWithWhereWithoutCreatedByInput | CrisisUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CrisisScalarWhereInput | CrisisScalarWhereInput[]
  }

  export type TimelineEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutCreatedByInput, TimelineEntryUncheckedCreateWithoutCreatedByInput> | TimelineEntryCreateWithoutCreatedByInput[] | TimelineEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCreatedByInput | TimelineEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutCreatedByInput | TimelineEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TimelineEntryCreateManyCreatedByInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutCreatedByInput | TimelineEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutCreatedByInput | TimelineEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type MeasureUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MeasureCreateWithoutCreatedByInput, MeasureUncheckedCreateWithoutCreatedByInput> | MeasureCreateWithoutCreatedByInput[] | MeasureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCreatedByInput | MeasureCreateOrConnectWithoutCreatedByInput[]
    upsert?: MeasureUpsertWithWhereUniqueWithoutCreatedByInput | MeasureUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MeasureCreateManyCreatedByInputEnvelope
    set?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    disconnect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    delete?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    update?: MeasureUpdateWithWhereUniqueWithoutCreatedByInput | MeasureUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MeasureUpdateManyWithWhereWithoutCreatedByInput | MeasureUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
  }

  export type MapMarkerUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput | MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput | MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCreatedByInput | MapMarkerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type EtatUpdateManyWithoutUsersNestedInput = {
    create?: XOR<EtatCreateWithoutUsersInput, EtatUncheckedCreateWithoutUsersInput> | EtatCreateWithoutUsersInput[] | EtatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutUsersInput | EtatCreateOrConnectWithoutUsersInput[]
    upsert?: EtatUpsertWithWhereUniqueWithoutUsersInput | EtatUpsertWithWhereUniqueWithoutUsersInput[]
    set?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    disconnect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    delete?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    update?: EtatUpdateWithWhereUniqueWithoutUsersInput | EtatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: EtatUpdateManyWithWhereWithoutUsersInput | EtatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: EtatScalarWhereInput | EtatScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CrisisUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CrisisCreateWithoutCreatedByInput, CrisisUncheckedCreateWithoutCreatedByInput> | CrisisCreateWithoutCreatedByInput[] | CrisisUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutCreatedByInput | CrisisCreateOrConnectWithoutCreatedByInput[]
    upsert?: CrisisUpsertWithWhereUniqueWithoutCreatedByInput | CrisisUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CrisisCreateManyCreatedByInputEnvelope
    set?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    disconnect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    delete?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    update?: CrisisUpdateWithWhereUniqueWithoutCreatedByInput | CrisisUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CrisisUpdateManyWithWhereWithoutCreatedByInput | CrisisUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CrisisScalarWhereInput | CrisisScalarWhereInput[]
  }

  export type TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutCreatedByInput, TimelineEntryUncheckedCreateWithoutCreatedByInput> | TimelineEntryCreateWithoutCreatedByInput[] | TimelineEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCreatedByInput | TimelineEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutCreatedByInput | TimelineEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TimelineEntryCreateManyCreatedByInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutCreatedByInput | TimelineEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutCreatedByInput | TimelineEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type MeasureUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MeasureCreateWithoutCreatedByInput, MeasureUncheckedCreateWithoutCreatedByInput> | MeasureCreateWithoutCreatedByInput[] | MeasureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCreatedByInput | MeasureCreateOrConnectWithoutCreatedByInput[]
    upsert?: MeasureUpsertWithWhereUniqueWithoutCreatedByInput | MeasureUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MeasureCreateManyCreatedByInputEnvelope
    set?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    disconnect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    delete?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    update?: MeasureUpdateWithWhereUniqueWithoutCreatedByInput | MeasureUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MeasureUpdateManyWithWhereWithoutCreatedByInput | MeasureUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
  }

  export type MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput> | MapMarkerCreateWithoutCreatedByInput[] | MapMarkerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCreatedByInput | MapMarkerCreateOrConnectWithoutCreatedByInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput | MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MapMarkerCreateManyCreatedByInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput | MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCreatedByInput | MapMarkerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type EtatUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<EtatCreateWithoutUsersInput, EtatUncheckedCreateWithoutUsersInput> | EtatCreateWithoutUsersInput[] | EtatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutUsersInput | EtatCreateOrConnectWithoutUsersInput[]
    upsert?: EtatUpsertWithWhereUniqueWithoutUsersInput | EtatUpsertWithWhereUniqueWithoutUsersInput[]
    set?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    disconnect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    delete?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    update?: EtatUpdateWithWhereUniqueWithoutUsersInput | EtatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: EtatUpdateManyWithWhereWithoutUsersInput | EtatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: EtatScalarWhereInput | EtatScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutEtaterInput = {
    create?: XOR<UserCreateWithoutEtaterInput, UserUncheckedCreateWithoutEtaterInput> | UserCreateWithoutEtaterInput[] | UserUncheckedCreateWithoutEtaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEtaterInput | UserCreateOrConnectWithoutEtaterInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CrisisCreateNestedManyWithoutAllowedEtaterInput = {
    create?: XOR<CrisisCreateWithoutAllowedEtaterInput, CrisisUncheckedCreateWithoutAllowedEtaterInput> | CrisisCreateWithoutAllowedEtaterInput[] | CrisisUncheckedCreateWithoutAllowedEtaterInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutAllowedEtaterInput | CrisisCreateOrConnectWithoutAllowedEtaterInput[]
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
  }

  export type TimelineEntryCreateNestedManyWithoutEtatInput = {
    create?: XOR<TimelineEntryCreateWithoutEtatInput, TimelineEntryUncheckedCreateWithoutEtatInput> | TimelineEntryCreateWithoutEtatInput[] | TimelineEntryUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutEtatInput | TimelineEntryCreateOrConnectWithoutEtatInput[]
    createMany?: TimelineEntryCreateManyEtatInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type MeasureCreateNestedManyWithoutEtatInput = {
    create?: XOR<MeasureCreateWithoutEtatInput, MeasureUncheckedCreateWithoutEtatInput> | MeasureCreateWithoutEtatInput[] | MeasureUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutEtatInput | MeasureCreateOrConnectWithoutEtatInput[]
    createMany?: MeasureCreateManyEtatInputEnvelope
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
  }

  export type MapMarkerCreateNestedManyWithoutEtatInput = {
    create?: XOR<MapMarkerCreateWithoutEtatInput, MapMarkerUncheckedCreateWithoutEtatInput> | MapMarkerCreateWithoutEtatInput[] | MapMarkerUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutEtatInput | MapMarkerCreateOrConnectWithoutEtatInput[]
    createMany?: MapMarkerCreateManyEtatInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEtaterInput = {
    create?: XOR<UserCreateWithoutEtaterInput, UserUncheckedCreateWithoutEtaterInput> | UserCreateWithoutEtaterInput[] | UserUncheckedCreateWithoutEtaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEtaterInput | UserCreateOrConnectWithoutEtaterInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CrisisUncheckedCreateNestedManyWithoutAllowedEtaterInput = {
    create?: XOR<CrisisCreateWithoutAllowedEtaterInput, CrisisUncheckedCreateWithoutAllowedEtaterInput> | CrisisCreateWithoutAllowedEtaterInput[] | CrisisUncheckedCreateWithoutAllowedEtaterInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutAllowedEtaterInput | CrisisCreateOrConnectWithoutAllowedEtaterInput[]
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
  }

  export type TimelineEntryUncheckedCreateNestedManyWithoutEtatInput = {
    create?: XOR<TimelineEntryCreateWithoutEtatInput, TimelineEntryUncheckedCreateWithoutEtatInput> | TimelineEntryCreateWithoutEtatInput[] | TimelineEntryUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutEtatInput | TimelineEntryCreateOrConnectWithoutEtatInput[]
    createMany?: TimelineEntryCreateManyEtatInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type MeasureUncheckedCreateNestedManyWithoutEtatInput = {
    create?: XOR<MeasureCreateWithoutEtatInput, MeasureUncheckedCreateWithoutEtatInput> | MeasureCreateWithoutEtatInput[] | MeasureUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutEtatInput | MeasureCreateOrConnectWithoutEtatInput[]
    createMany?: MeasureCreateManyEtatInputEnvelope
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
  }

  export type MapMarkerUncheckedCreateNestedManyWithoutEtatInput = {
    create?: XOR<MapMarkerCreateWithoutEtatInput, MapMarkerUncheckedCreateWithoutEtatInput> | MapMarkerCreateWithoutEtatInput[] | MapMarkerUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutEtatInput | MapMarkerCreateOrConnectWithoutEtatInput[]
    createMany?: MapMarkerCreateManyEtatInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutEtaterNestedInput = {
    create?: XOR<UserCreateWithoutEtaterInput, UserUncheckedCreateWithoutEtaterInput> | UserCreateWithoutEtaterInput[] | UserUncheckedCreateWithoutEtaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEtaterInput | UserCreateOrConnectWithoutEtaterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEtaterInput | UserUpsertWithWhereUniqueWithoutEtaterInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEtaterInput | UserUpdateWithWhereUniqueWithoutEtaterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEtaterInput | UserUpdateManyWithWhereWithoutEtaterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CrisisUpdateManyWithoutAllowedEtaterNestedInput = {
    create?: XOR<CrisisCreateWithoutAllowedEtaterInput, CrisisUncheckedCreateWithoutAllowedEtaterInput> | CrisisCreateWithoutAllowedEtaterInput[] | CrisisUncheckedCreateWithoutAllowedEtaterInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutAllowedEtaterInput | CrisisCreateOrConnectWithoutAllowedEtaterInput[]
    upsert?: CrisisUpsertWithWhereUniqueWithoutAllowedEtaterInput | CrisisUpsertWithWhereUniqueWithoutAllowedEtaterInput[]
    set?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    disconnect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    delete?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    update?: CrisisUpdateWithWhereUniqueWithoutAllowedEtaterInput | CrisisUpdateWithWhereUniqueWithoutAllowedEtaterInput[]
    updateMany?: CrisisUpdateManyWithWhereWithoutAllowedEtaterInput | CrisisUpdateManyWithWhereWithoutAllowedEtaterInput[]
    deleteMany?: CrisisScalarWhereInput | CrisisScalarWhereInput[]
  }

  export type TimelineEntryUpdateManyWithoutEtatNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutEtatInput, TimelineEntryUncheckedCreateWithoutEtatInput> | TimelineEntryCreateWithoutEtatInput[] | TimelineEntryUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutEtatInput | TimelineEntryCreateOrConnectWithoutEtatInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutEtatInput | TimelineEntryUpsertWithWhereUniqueWithoutEtatInput[]
    createMany?: TimelineEntryCreateManyEtatInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutEtatInput | TimelineEntryUpdateWithWhereUniqueWithoutEtatInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutEtatInput | TimelineEntryUpdateManyWithWhereWithoutEtatInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type MeasureUpdateManyWithoutEtatNestedInput = {
    create?: XOR<MeasureCreateWithoutEtatInput, MeasureUncheckedCreateWithoutEtatInput> | MeasureCreateWithoutEtatInput[] | MeasureUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutEtatInput | MeasureCreateOrConnectWithoutEtatInput[]
    upsert?: MeasureUpsertWithWhereUniqueWithoutEtatInput | MeasureUpsertWithWhereUniqueWithoutEtatInput[]
    createMany?: MeasureCreateManyEtatInputEnvelope
    set?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    disconnect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    delete?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    update?: MeasureUpdateWithWhereUniqueWithoutEtatInput | MeasureUpdateWithWhereUniqueWithoutEtatInput[]
    updateMany?: MeasureUpdateManyWithWhereWithoutEtatInput | MeasureUpdateManyWithWhereWithoutEtatInput[]
    deleteMany?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
  }

  export type MapMarkerUpdateManyWithoutEtatNestedInput = {
    create?: XOR<MapMarkerCreateWithoutEtatInput, MapMarkerUncheckedCreateWithoutEtatInput> | MapMarkerCreateWithoutEtatInput[] | MapMarkerUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutEtatInput | MapMarkerCreateOrConnectWithoutEtatInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutEtatInput | MapMarkerUpsertWithWhereUniqueWithoutEtatInput[]
    createMany?: MapMarkerCreateManyEtatInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutEtatInput | MapMarkerUpdateWithWhereUniqueWithoutEtatInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutEtatInput | MapMarkerUpdateManyWithWhereWithoutEtatInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEtaterNestedInput = {
    create?: XOR<UserCreateWithoutEtaterInput, UserUncheckedCreateWithoutEtaterInput> | UserCreateWithoutEtaterInput[] | UserUncheckedCreateWithoutEtaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEtaterInput | UserCreateOrConnectWithoutEtaterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEtaterInput | UserUpsertWithWhereUniqueWithoutEtaterInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEtaterInput | UserUpdateWithWhereUniqueWithoutEtaterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEtaterInput | UserUpdateManyWithWhereWithoutEtaterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CrisisUncheckedUpdateManyWithoutAllowedEtaterNestedInput = {
    create?: XOR<CrisisCreateWithoutAllowedEtaterInput, CrisisUncheckedCreateWithoutAllowedEtaterInput> | CrisisCreateWithoutAllowedEtaterInput[] | CrisisUncheckedCreateWithoutAllowedEtaterInput[]
    connectOrCreate?: CrisisCreateOrConnectWithoutAllowedEtaterInput | CrisisCreateOrConnectWithoutAllowedEtaterInput[]
    upsert?: CrisisUpsertWithWhereUniqueWithoutAllowedEtaterInput | CrisisUpsertWithWhereUniqueWithoutAllowedEtaterInput[]
    set?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    disconnect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    delete?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    connect?: CrisisWhereUniqueInput | CrisisWhereUniqueInput[]
    update?: CrisisUpdateWithWhereUniqueWithoutAllowedEtaterInput | CrisisUpdateWithWhereUniqueWithoutAllowedEtaterInput[]
    updateMany?: CrisisUpdateManyWithWhereWithoutAllowedEtaterInput | CrisisUpdateManyWithWhereWithoutAllowedEtaterInput[]
    deleteMany?: CrisisScalarWhereInput | CrisisScalarWhereInput[]
  }

  export type TimelineEntryUncheckedUpdateManyWithoutEtatNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutEtatInput, TimelineEntryUncheckedCreateWithoutEtatInput> | TimelineEntryCreateWithoutEtatInput[] | TimelineEntryUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutEtatInput | TimelineEntryCreateOrConnectWithoutEtatInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutEtatInput | TimelineEntryUpsertWithWhereUniqueWithoutEtatInput[]
    createMany?: TimelineEntryCreateManyEtatInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutEtatInput | TimelineEntryUpdateWithWhereUniqueWithoutEtatInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutEtatInput | TimelineEntryUpdateManyWithWhereWithoutEtatInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type MeasureUncheckedUpdateManyWithoutEtatNestedInput = {
    create?: XOR<MeasureCreateWithoutEtatInput, MeasureUncheckedCreateWithoutEtatInput> | MeasureCreateWithoutEtatInput[] | MeasureUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutEtatInput | MeasureCreateOrConnectWithoutEtatInput[]
    upsert?: MeasureUpsertWithWhereUniqueWithoutEtatInput | MeasureUpsertWithWhereUniqueWithoutEtatInput[]
    createMany?: MeasureCreateManyEtatInputEnvelope
    set?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    disconnect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    delete?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    update?: MeasureUpdateWithWhereUniqueWithoutEtatInput | MeasureUpdateWithWhereUniqueWithoutEtatInput[]
    updateMany?: MeasureUpdateManyWithWhereWithoutEtatInput | MeasureUpdateManyWithWhereWithoutEtatInput[]
    deleteMany?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
  }

  export type MapMarkerUncheckedUpdateManyWithoutEtatNestedInput = {
    create?: XOR<MapMarkerCreateWithoutEtatInput, MapMarkerUncheckedCreateWithoutEtatInput> | MapMarkerCreateWithoutEtatInput[] | MapMarkerUncheckedCreateWithoutEtatInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutEtatInput | MapMarkerCreateOrConnectWithoutEtatInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutEtatInput | MapMarkerUpsertWithWhereUniqueWithoutEtatInput[]
    createMany?: MapMarkerCreateManyEtatInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutEtatInput | MapMarkerUpdateWithWhereUniqueWithoutEtatInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutEtatInput | MapMarkerUpdateManyWithWhereWithoutEtatInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCrisesInput = {
    create?: XOR<UserCreateWithoutCrisesInput, UserUncheckedCreateWithoutCrisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCrisesInput
    connect?: UserWhereUniqueInput
  }

  export type EtatCreateNestedManyWithoutCrisesInput = {
    create?: XOR<EtatCreateWithoutCrisesInput, EtatUncheckedCreateWithoutCrisesInput> | EtatCreateWithoutCrisesInput[] | EtatUncheckedCreateWithoutCrisesInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutCrisesInput | EtatCreateOrConnectWithoutCrisesInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
  }

  export type TimelineEntryCreateNestedManyWithoutCrisisInput = {
    create?: XOR<TimelineEntryCreateWithoutCrisisInput, TimelineEntryUncheckedCreateWithoutCrisisInput> | TimelineEntryCreateWithoutCrisisInput[] | TimelineEntryUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCrisisInput | TimelineEntryCreateOrConnectWithoutCrisisInput[]
    createMany?: TimelineEntryCreateManyCrisisInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type MeasureCreateNestedManyWithoutCrisisInput = {
    create?: XOR<MeasureCreateWithoutCrisisInput, MeasureUncheckedCreateWithoutCrisisInput> | MeasureCreateWithoutCrisisInput[] | MeasureUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCrisisInput | MeasureCreateOrConnectWithoutCrisisInput[]
    createMany?: MeasureCreateManyCrisisInputEnvelope
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
  }

  export type MapMarkerCreateNestedManyWithoutCrisisInput = {
    create?: XOR<MapMarkerCreateWithoutCrisisInput, MapMarkerUncheckedCreateWithoutCrisisInput> | MapMarkerCreateWithoutCrisisInput[] | MapMarkerUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCrisisInput | MapMarkerCreateOrConnectWithoutCrisisInput[]
    createMany?: MapMarkerCreateManyCrisisInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type EtatUncheckedCreateNestedManyWithoutCrisesInput = {
    create?: XOR<EtatCreateWithoutCrisesInput, EtatUncheckedCreateWithoutCrisesInput> | EtatCreateWithoutCrisesInput[] | EtatUncheckedCreateWithoutCrisesInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutCrisesInput | EtatCreateOrConnectWithoutCrisesInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
  }

  export type TimelineEntryUncheckedCreateNestedManyWithoutCrisisInput = {
    create?: XOR<TimelineEntryCreateWithoutCrisisInput, TimelineEntryUncheckedCreateWithoutCrisisInput> | TimelineEntryCreateWithoutCrisisInput[] | TimelineEntryUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCrisisInput | TimelineEntryCreateOrConnectWithoutCrisisInput[]
    createMany?: TimelineEntryCreateManyCrisisInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type MeasureUncheckedCreateNestedManyWithoutCrisisInput = {
    create?: XOR<MeasureCreateWithoutCrisisInput, MeasureUncheckedCreateWithoutCrisisInput> | MeasureCreateWithoutCrisisInput[] | MeasureUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCrisisInput | MeasureCreateOrConnectWithoutCrisisInput[]
    createMany?: MeasureCreateManyCrisisInputEnvelope
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
  }

  export type MapMarkerUncheckedCreateNestedManyWithoutCrisisInput = {
    create?: XOR<MapMarkerCreateWithoutCrisisInput, MapMarkerUncheckedCreateWithoutCrisisInput> | MapMarkerCreateWithoutCrisisInput[] | MapMarkerUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCrisisInput | MapMarkerCreateOrConnectWithoutCrisisInput[]
    createMany?: MapMarkerCreateManyCrisisInputEnvelope
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type UserUpdateOneRequiredWithoutCrisesNestedInput = {
    create?: XOR<UserCreateWithoutCrisesInput, UserUncheckedCreateWithoutCrisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCrisesInput
    upsert?: UserUpsertWithoutCrisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCrisesInput, UserUpdateWithoutCrisesInput>, UserUncheckedUpdateWithoutCrisesInput>
  }

  export type EtatUpdateManyWithoutCrisesNestedInput = {
    create?: XOR<EtatCreateWithoutCrisesInput, EtatUncheckedCreateWithoutCrisesInput> | EtatCreateWithoutCrisesInput[] | EtatUncheckedCreateWithoutCrisesInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutCrisesInput | EtatCreateOrConnectWithoutCrisesInput[]
    upsert?: EtatUpsertWithWhereUniqueWithoutCrisesInput | EtatUpsertWithWhereUniqueWithoutCrisesInput[]
    set?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    disconnect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    delete?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    update?: EtatUpdateWithWhereUniqueWithoutCrisesInput | EtatUpdateWithWhereUniqueWithoutCrisesInput[]
    updateMany?: EtatUpdateManyWithWhereWithoutCrisesInput | EtatUpdateManyWithWhereWithoutCrisesInput[]
    deleteMany?: EtatScalarWhereInput | EtatScalarWhereInput[]
  }

  export type TimelineEntryUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutCrisisInput, TimelineEntryUncheckedCreateWithoutCrisisInput> | TimelineEntryCreateWithoutCrisisInput[] | TimelineEntryUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCrisisInput | TimelineEntryCreateOrConnectWithoutCrisisInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutCrisisInput | TimelineEntryUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: TimelineEntryCreateManyCrisisInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutCrisisInput | TimelineEntryUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutCrisisInput | TimelineEntryUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type MeasureUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<MeasureCreateWithoutCrisisInput, MeasureUncheckedCreateWithoutCrisisInput> | MeasureCreateWithoutCrisisInput[] | MeasureUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCrisisInput | MeasureCreateOrConnectWithoutCrisisInput[]
    upsert?: MeasureUpsertWithWhereUniqueWithoutCrisisInput | MeasureUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: MeasureCreateManyCrisisInputEnvelope
    set?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    disconnect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    delete?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    update?: MeasureUpdateWithWhereUniqueWithoutCrisisInput | MeasureUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: MeasureUpdateManyWithWhereWithoutCrisisInput | MeasureUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
  }

  export type MapMarkerUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCrisisInput, MapMarkerUncheckedCreateWithoutCrisisInput> | MapMarkerCreateWithoutCrisisInput[] | MapMarkerUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCrisisInput | MapMarkerCreateOrConnectWithoutCrisisInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCrisisInput | MapMarkerUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: MapMarkerCreateManyCrisisInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCrisisInput | MapMarkerUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCrisisInput | MapMarkerUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type EtatUncheckedUpdateManyWithoutCrisesNestedInput = {
    create?: XOR<EtatCreateWithoutCrisesInput, EtatUncheckedCreateWithoutCrisesInput> | EtatCreateWithoutCrisesInput[] | EtatUncheckedCreateWithoutCrisesInput[]
    connectOrCreate?: EtatCreateOrConnectWithoutCrisesInput | EtatCreateOrConnectWithoutCrisesInput[]
    upsert?: EtatUpsertWithWhereUniqueWithoutCrisesInput | EtatUpsertWithWhereUniqueWithoutCrisesInput[]
    set?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    disconnect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    delete?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    connect?: EtatWhereUniqueInput | EtatWhereUniqueInput[]
    update?: EtatUpdateWithWhereUniqueWithoutCrisesInput | EtatUpdateWithWhereUniqueWithoutCrisesInput[]
    updateMany?: EtatUpdateManyWithWhereWithoutCrisesInput | EtatUpdateManyWithWhereWithoutCrisesInput[]
    deleteMany?: EtatScalarWhereInput | EtatScalarWhereInput[]
  }

  export type TimelineEntryUncheckedUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutCrisisInput, TimelineEntryUncheckedCreateWithoutCrisisInput> | TimelineEntryCreateWithoutCrisisInput[] | TimelineEntryUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutCrisisInput | TimelineEntryCreateOrConnectWithoutCrisisInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutCrisisInput | TimelineEntryUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: TimelineEntryCreateManyCrisisInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutCrisisInput | TimelineEntryUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutCrisisInput | TimelineEntryUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type MeasureUncheckedUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<MeasureCreateWithoutCrisisInput, MeasureUncheckedCreateWithoutCrisisInput> | MeasureCreateWithoutCrisisInput[] | MeasureUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MeasureCreateOrConnectWithoutCrisisInput | MeasureCreateOrConnectWithoutCrisisInput[]
    upsert?: MeasureUpsertWithWhereUniqueWithoutCrisisInput | MeasureUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: MeasureCreateManyCrisisInputEnvelope
    set?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    disconnect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    delete?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    connect?: MeasureWhereUniqueInput | MeasureWhereUniqueInput[]
    update?: MeasureUpdateWithWhereUniqueWithoutCrisisInput | MeasureUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: MeasureUpdateManyWithWhereWithoutCrisisInput | MeasureUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
  }

  export type MapMarkerUncheckedUpdateManyWithoutCrisisNestedInput = {
    create?: XOR<MapMarkerCreateWithoutCrisisInput, MapMarkerUncheckedCreateWithoutCrisisInput> | MapMarkerCreateWithoutCrisisInput[] | MapMarkerUncheckedCreateWithoutCrisisInput[]
    connectOrCreate?: MapMarkerCreateOrConnectWithoutCrisisInput | MapMarkerCreateOrConnectWithoutCrisisInput[]
    upsert?: MapMarkerUpsertWithWhereUniqueWithoutCrisisInput | MapMarkerUpsertWithWhereUniqueWithoutCrisisInput[]
    createMany?: MapMarkerCreateManyCrisisInputEnvelope
    set?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    disconnect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    delete?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    connect?: MapMarkerWhereUniqueInput | MapMarkerWhereUniqueInput[]
    update?: MapMarkerUpdateWithWhereUniqueWithoutCrisisInput | MapMarkerUpdateWithWhereUniqueWithoutCrisisInput[]
    updateMany?: MapMarkerUpdateManyWithWhereWithoutCrisisInput | MapMarkerUpdateManyWithWhereWithoutCrisisInput[]
    deleteMany?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
  }

  export type CrisisCreateNestedOneWithoutTimelineEntriesInput = {
    create?: XOR<CrisisCreateWithoutTimelineEntriesInput, CrisisUncheckedCreateWithoutTimelineEntriesInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutTimelineEntriesInput
    connect?: CrisisWhereUniqueInput
  }

  export type EtatCreateNestedOneWithoutTimelineEntriesInput = {
    create?: XOR<EtatCreateWithoutTimelineEntriesInput, EtatUncheckedCreateWithoutTimelineEntriesInput>
    connectOrCreate?: EtatCreateOrConnectWithoutTimelineEntriesInput
    connect?: EtatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTimelineEntriesInput = {
    create?: XOR<UserCreateWithoutTimelineEntriesInput, UserUncheckedCreateWithoutTimelineEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimelineEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type CrisisUpdateOneRequiredWithoutTimelineEntriesNestedInput = {
    create?: XOR<CrisisCreateWithoutTimelineEntriesInput, CrisisUncheckedCreateWithoutTimelineEntriesInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutTimelineEntriesInput
    upsert?: CrisisUpsertWithoutTimelineEntriesInput
    connect?: CrisisWhereUniqueInput
    update?: XOR<XOR<CrisisUpdateToOneWithWhereWithoutTimelineEntriesInput, CrisisUpdateWithoutTimelineEntriesInput>, CrisisUncheckedUpdateWithoutTimelineEntriesInput>
  }

  export type EtatUpdateOneRequiredWithoutTimelineEntriesNestedInput = {
    create?: XOR<EtatCreateWithoutTimelineEntriesInput, EtatUncheckedCreateWithoutTimelineEntriesInput>
    connectOrCreate?: EtatCreateOrConnectWithoutTimelineEntriesInput
    upsert?: EtatUpsertWithoutTimelineEntriesInput
    connect?: EtatWhereUniqueInput
    update?: XOR<XOR<EtatUpdateToOneWithWhereWithoutTimelineEntriesInput, EtatUpdateWithoutTimelineEntriesInput>, EtatUncheckedUpdateWithoutTimelineEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutTimelineEntriesNestedInput = {
    create?: XOR<UserCreateWithoutTimelineEntriesInput, UserUncheckedCreateWithoutTimelineEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimelineEntriesInput
    upsert?: UserUpsertWithoutTimelineEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimelineEntriesInput, UserUpdateWithoutTimelineEntriesInput>, UserUncheckedUpdateWithoutTimelineEntriesInput>
  }

  export type CrisisCreateNestedOneWithoutMeasuresInput = {
    create?: XOR<CrisisCreateWithoutMeasuresInput, CrisisUncheckedCreateWithoutMeasuresInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutMeasuresInput
    connect?: CrisisWhereUniqueInput
  }

  export type EtatCreateNestedOneWithoutMeasuresInput = {
    create?: XOR<EtatCreateWithoutMeasuresInput, EtatUncheckedCreateWithoutMeasuresInput>
    connectOrCreate?: EtatCreateOrConnectWithoutMeasuresInput
    connect?: EtatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMeasuresInput = {
    create?: XOR<UserCreateWithoutMeasuresInput, UserUncheckedCreateWithoutMeasuresInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeasuresInput
    connect?: UserWhereUniqueInput
  }

  export type CrisisUpdateOneRequiredWithoutMeasuresNestedInput = {
    create?: XOR<CrisisCreateWithoutMeasuresInput, CrisisUncheckedCreateWithoutMeasuresInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutMeasuresInput
    upsert?: CrisisUpsertWithoutMeasuresInput
    connect?: CrisisWhereUniqueInput
    update?: XOR<XOR<CrisisUpdateToOneWithWhereWithoutMeasuresInput, CrisisUpdateWithoutMeasuresInput>, CrisisUncheckedUpdateWithoutMeasuresInput>
  }

  export type EtatUpdateOneRequiredWithoutMeasuresNestedInput = {
    create?: XOR<EtatCreateWithoutMeasuresInput, EtatUncheckedCreateWithoutMeasuresInput>
    connectOrCreate?: EtatCreateOrConnectWithoutMeasuresInput
    upsert?: EtatUpsertWithoutMeasuresInput
    connect?: EtatWhereUniqueInput
    update?: XOR<XOR<EtatUpdateToOneWithWhereWithoutMeasuresInput, EtatUpdateWithoutMeasuresInput>, EtatUncheckedUpdateWithoutMeasuresInput>
  }

  export type UserUpdateOneRequiredWithoutMeasuresNestedInput = {
    create?: XOR<UserCreateWithoutMeasuresInput, UserUncheckedCreateWithoutMeasuresInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeasuresInput
    upsert?: UserUpsertWithoutMeasuresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeasuresInput, UserUpdateWithoutMeasuresInput>, UserUncheckedUpdateWithoutMeasuresInput>
  }

  export type CrisisCreateNestedOneWithoutMapMarkersInput = {
    create?: XOR<CrisisCreateWithoutMapMarkersInput, CrisisUncheckedCreateWithoutMapMarkersInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutMapMarkersInput
    connect?: CrisisWhereUniqueInput
  }

  export type EtatCreateNestedOneWithoutMapMarkersInput = {
    create?: XOR<EtatCreateWithoutMapMarkersInput, EtatUncheckedCreateWithoutMapMarkersInput>
    connectOrCreate?: EtatCreateOrConnectWithoutMapMarkersInput
    connect?: EtatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMapMarkersInput = {
    create?: XOR<UserCreateWithoutMapMarkersInput, UserUncheckedCreateWithoutMapMarkersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMapMarkersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMarkerTypeFieldUpdateOperationsInput = {
    set?: $Enums.MarkerType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CrisisUpdateOneRequiredWithoutMapMarkersNestedInput = {
    create?: XOR<CrisisCreateWithoutMapMarkersInput, CrisisUncheckedCreateWithoutMapMarkersInput>
    connectOrCreate?: CrisisCreateOrConnectWithoutMapMarkersInput
    upsert?: CrisisUpsertWithoutMapMarkersInput
    connect?: CrisisWhereUniqueInput
    update?: XOR<XOR<CrisisUpdateToOneWithWhereWithoutMapMarkersInput, CrisisUpdateWithoutMapMarkersInput>, CrisisUncheckedUpdateWithoutMapMarkersInput>
  }

  export type EtatUpdateOneRequiredWithoutMapMarkersNestedInput = {
    create?: XOR<EtatCreateWithoutMapMarkersInput, EtatUncheckedCreateWithoutMapMarkersInput>
    connectOrCreate?: EtatCreateOrConnectWithoutMapMarkersInput
    upsert?: EtatUpsertWithoutMapMarkersInput
    connect?: EtatWhereUniqueInput
    update?: XOR<XOR<EtatUpdateToOneWithWhereWithoutMapMarkersInput, EtatUpdateWithoutMapMarkersInput>, EtatUncheckedUpdateWithoutMapMarkersInput>
  }

  export type UserUpdateOneRequiredWithoutMapMarkersNestedInput = {
    create?: XOR<UserCreateWithoutMapMarkersInput, UserUncheckedCreateWithoutMapMarkersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMapMarkersInput
    upsert?: UserUpsertWithoutMapMarkersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMapMarkersInput, UserUpdateWithoutMapMarkersInput>, UserUncheckedUpdateWithoutMapMarkersInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedEnumMarkerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarkerTypeFilter<$PrismaModel> | $Enums.MarkerType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMarkerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarkerType | EnumMarkerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarkerType[] | ListEnumMarkerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarkerTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarkerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarkerTypeFilter<$PrismaModel>
    _max?: NestedEnumMarkerTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CrisisCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    allowedEtater?: EtatCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCrisisInput
    measures?: MeasureCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    allowedEtater?: EtatUncheckedCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCrisisInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCrisisInput
  }

  export type CrisisCreateOrConnectWithoutCreatedByInput = {
    where: CrisisWhereUniqueInput
    create: XOR<CrisisCreateWithoutCreatedByInput, CrisisUncheckedCreateWithoutCreatedByInput>
  }

  export type CrisisCreateManyCreatedByInputEnvelope = {
    data: CrisisCreateManyCreatedByInput | CrisisCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TimelineEntryCreateWithoutCreatedByInput = {
    id?: string
    text: string
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutTimelineEntriesInput
    etat: EtatCreateNestedOneWithoutTimelineEntriesInput
  }

  export type TimelineEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string
    text: string
    crisisId: string
    etatId: string
    createdAt?: Date | string
  }

  export type TimelineEntryCreateOrConnectWithoutCreatedByInput = {
    where: TimelineEntryWhereUniqueInput
    create: XOR<TimelineEntryCreateWithoutCreatedByInput, TimelineEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type TimelineEntryCreateManyCreatedByInputEnvelope = {
    data: TimelineEntryCreateManyCreatedByInput | TimelineEntryCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MeasureCreateWithoutCreatedByInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutMeasuresInput
    etat: EtatCreateNestedOneWithoutMeasuresInput
  }

  export type MeasureUncheckedCreateWithoutCreatedByInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    crisisId: string
    etatId: string
    createdAt?: Date | string
  }

  export type MeasureCreateOrConnectWithoutCreatedByInput = {
    where: MeasureWhereUniqueInput
    create: XOR<MeasureCreateWithoutCreatedByInput, MeasureUncheckedCreateWithoutCreatedByInput>
  }

  export type MeasureCreateManyCreatedByInputEnvelope = {
    data: MeasureCreateManyCreatedByInput | MeasureCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type MapMarkerCreateWithoutCreatedByInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutMapMarkersInput
    etat: EtatCreateNestedOneWithoutMapMarkersInput
  }

  export type MapMarkerUncheckedCreateWithoutCreatedByInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    crisisId: string
    etatId: string
    createdAt?: Date | string
  }

  export type MapMarkerCreateOrConnectWithoutCreatedByInput = {
    where: MapMarkerWhereUniqueInput
    create: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput>
  }

  export type MapMarkerCreateManyCreatedByInputEnvelope = {
    data: MapMarkerCreateManyCreatedByInput | MapMarkerCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type EtatCreateWithoutUsersInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crises?: CrisisCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutEtatInput
    measures?: MeasureCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutEtatInput
  }

  export type EtatUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    crises?: CrisisUncheckedCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutEtatInput
    measures?: MeasureUncheckedCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutEtatInput
  }

  export type EtatCreateOrConnectWithoutUsersInput = {
    where: EtatWhereUniqueInput
    create: XOR<EtatCreateWithoutUsersInput, EtatUncheckedCreateWithoutUsersInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type CrisisUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CrisisWhereUniqueInput
    update: XOR<CrisisUpdateWithoutCreatedByInput, CrisisUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CrisisCreateWithoutCreatedByInput, CrisisUncheckedCreateWithoutCreatedByInput>
  }

  export type CrisisUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CrisisWhereUniqueInput
    data: XOR<CrisisUpdateWithoutCreatedByInput, CrisisUncheckedUpdateWithoutCreatedByInput>
  }

  export type CrisisUpdateManyWithWhereWithoutCreatedByInput = {
    where: CrisisScalarWhereInput
    data: XOR<CrisisUpdateManyMutationInput, CrisisUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CrisisScalarWhereInput = {
    AND?: CrisisScalarWhereInput | CrisisScalarWhereInput[]
    OR?: CrisisScalarWhereInput[]
    NOT?: CrisisScalarWhereInput | CrisisScalarWhereInput[]
    id?: StringFilter<"Crisis"> | string
    title?: StringFilter<"Crisis"> | string
    description?: StringFilter<"Crisis"> | string
    what?: StringFilter<"Crisis"> | string
    how?: StringFilter<"Crisis"> | string
    when?: DateTimeFilter<"Crisis"> | Date | string
    severity?: EnumSeverityFilter<"Crisis"> | $Enums.Severity
    createdById?: StringFilter<"Crisis"> | string
    createdAt?: DateTimeFilter<"Crisis"> | Date | string
    updatedAt?: DateTimeFilter<"Crisis"> | Date | string
  }

  export type TimelineEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TimelineEntryWhereUniqueInput
    update: XOR<TimelineEntryUpdateWithoutCreatedByInput, TimelineEntryUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TimelineEntryCreateWithoutCreatedByInput, TimelineEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type TimelineEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TimelineEntryWhereUniqueInput
    data: XOR<TimelineEntryUpdateWithoutCreatedByInput, TimelineEntryUncheckedUpdateWithoutCreatedByInput>
  }

  export type TimelineEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: TimelineEntryScalarWhereInput
    data: XOR<TimelineEntryUpdateManyMutationInput, TimelineEntryUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TimelineEntryScalarWhereInput = {
    AND?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
    OR?: TimelineEntryScalarWhereInput[]
    NOT?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
    id?: StringFilter<"TimelineEntry"> | string
    text?: StringFilter<"TimelineEntry"> | string
    crisisId?: StringFilter<"TimelineEntry"> | string
    etatId?: StringFilter<"TimelineEntry"> | string
    createdById?: StringFilter<"TimelineEntry"> | string
    createdAt?: DateTimeFilter<"TimelineEntry"> | Date | string
  }

  export type MeasureUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MeasureWhereUniqueInput
    update: XOR<MeasureUpdateWithoutCreatedByInput, MeasureUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MeasureCreateWithoutCreatedByInput, MeasureUncheckedCreateWithoutCreatedByInput>
  }

  export type MeasureUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MeasureWhereUniqueInput
    data: XOR<MeasureUpdateWithoutCreatedByInput, MeasureUncheckedUpdateWithoutCreatedByInput>
  }

  export type MeasureUpdateManyWithWhereWithoutCreatedByInput = {
    where: MeasureScalarWhereInput
    data: XOR<MeasureUpdateManyMutationInput, MeasureUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MeasureScalarWhereInput = {
    AND?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
    OR?: MeasureScalarWhereInput[]
    NOT?: MeasureScalarWhereInput | MeasureScalarWhereInput[]
    id?: StringFilter<"Measure"> | string
    text?: StringFilter<"Measure"> | string
    severity?: EnumSeverityFilter<"Measure"> | $Enums.Severity
    crisisId?: StringFilter<"Measure"> | string
    etatId?: StringFilter<"Measure"> | string
    createdById?: StringFilter<"Measure"> | string
    createdAt?: DateTimeFilter<"Measure"> | Date | string
  }

  export type MapMarkerUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MapMarkerWhereUniqueInput
    update: XOR<MapMarkerUpdateWithoutCreatedByInput, MapMarkerUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MapMarkerCreateWithoutCreatedByInput, MapMarkerUncheckedCreateWithoutCreatedByInput>
  }

  export type MapMarkerUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MapMarkerWhereUniqueInput
    data: XOR<MapMarkerUpdateWithoutCreatedByInput, MapMarkerUncheckedUpdateWithoutCreatedByInput>
  }

  export type MapMarkerUpdateManyWithWhereWithoutCreatedByInput = {
    where: MapMarkerScalarWhereInput
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MapMarkerScalarWhereInput = {
    AND?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
    OR?: MapMarkerScalarWhereInput[]
    NOT?: MapMarkerScalarWhereInput | MapMarkerScalarWhereInput[]
    id?: StringFilter<"MapMarker"> | string
    type?: EnumMarkerTypeFilter<"MapMarker"> | $Enums.MarkerType
    label?: StringFilter<"MapMarker"> | string
    lat?: FloatFilter<"MapMarker"> | number
    lng?: FloatFilter<"MapMarker"> | number
    radius?: IntNullableFilter<"MapMarker"> | number | null
    crisisId?: StringFilter<"MapMarker"> | string
    etatId?: StringFilter<"MapMarker"> | string
    createdById?: StringFilter<"MapMarker"> | string
    createdAt?: DateTimeFilter<"MapMarker"> | Date | string
  }

  export type EtatUpsertWithWhereUniqueWithoutUsersInput = {
    where: EtatWhereUniqueInput
    update: XOR<EtatUpdateWithoutUsersInput, EtatUncheckedUpdateWithoutUsersInput>
    create: XOR<EtatCreateWithoutUsersInput, EtatUncheckedCreateWithoutUsersInput>
  }

  export type EtatUpdateWithWhereUniqueWithoutUsersInput = {
    where: EtatWhereUniqueInput
    data: XOR<EtatUpdateWithoutUsersInput, EtatUncheckedUpdateWithoutUsersInput>
  }

  export type EtatUpdateManyWithWhereWithoutUsersInput = {
    where: EtatScalarWhereInput
    data: XOR<EtatUpdateManyMutationInput, EtatUncheckedUpdateManyWithoutUsersInput>
  }

  export type EtatScalarWhereInput = {
    AND?: EtatScalarWhereInput | EtatScalarWhereInput[]
    OR?: EtatScalarWhereInput[]
    NOT?: EtatScalarWhereInput | EtatScalarWhereInput[]
    id?: StringFilter<"Etat"> | string
    title?: StringFilter<"Etat"> | string
    contactPhone?: StringFilter<"Etat"> | string
    contactEmail?: StringFilter<"Etat"> | string
    themeColor?: StringFilter<"Etat"> | string
    createdAt?: DateTimeFilter<"Etat"> | Date | string
    updatedAt?: DateTimeFilter<"Etat"> | Date | string
  }

  export type UserCreateWithoutEtaterInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutEtaterInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutEtaterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEtaterInput, UserUncheckedCreateWithoutEtaterInput>
  }

  export type CrisisCreateWithoutAllowedEtaterInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCrisesInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCrisisInput
    measures?: MeasureCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUncheckedCreateWithoutAllowedEtaterInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCrisisInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCrisisInput
  }

  export type CrisisCreateOrConnectWithoutAllowedEtaterInput = {
    where: CrisisWhereUniqueInput
    create: XOR<CrisisCreateWithoutAllowedEtaterInput, CrisisUncheckedCreateWithoutAllowedEtaterInput>
  }

  export type TimelineEntryCreateWithoutEtatInput = {
    id?: string
    text: string
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutTimelineEntriesInput
    createdBy: UserCreateNestedOneWithoutTimelineEntriesInput
  }

  export type TimelineEntryUncheckedCreateWithoutEtatInput = {
    id?: string
    text: string
    crisisId: string
    createdById: string
    createdAt?: Date | string
  }

  export type TimelineEntryCreateOrConnectWithoutEtatInput = {
    where: TimelineEntryWhereUniqueInput
    create: XOR<TimelineEntryCreateWithoutEtatInput, TimelineEntryUncheckedCreateWithoutEtatInput>
  }

  export type TimelineEntryCreateManyEtatInputEnvelope = {
    data: TimelineEntryCreateManyEtatInput | TimelineEntryCreateManyEtatInput[]
    skipDuplicates?: boolean
  }

  export type MeasureCreateWithoutEtatInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutMeasuresInput
    createdBy: UserCreateNestedOneWithoutMeasuresInput
  }

  export type MeasureUncheckedCreateWithoutEtatInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    crisisId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MeasureCreateOrConnectWithoutEtatInput = {
    where: MeasureWhereUniqueInput
    create: XOR<MeasureCreateWithoutEtatInput, MeasureUncheckedCreateWithoutEtatInput>
  }

  export type MeasureCreateManyEtatInputEnvelope = {
    data: MeasureCreateManyEtatInput | MeasureCreateManyEtatInput[]
    skipDuplicates?: boolean
  }

  export type MapMarkerCreateWithoutEtatInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    createdAt?: Date | string
    crisis: CrisisCreateNestedOneWithoutMapMarkersInput
    createdBy: UserCreateNestedOneWithoutMapMarkersInput
  }

  export type MapMarkerUncheckedCreateWithoutEtatInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    crisisId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MapMarkerCreateOrConnectWithoutEtatInput = {
    where: MapMarkerWhereUniqueInput
    create: XOR<MapMarkerCreateWithoutEtatInput, MapMarkerUncheckedCreateWithoutEtatInput>
  }

  export type MapMarkerCreateManyEtatInputEnvelope = {
    data: MapMarkerCreateManyEtatInput | MapMarkerCreateManyEtatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutEtaterInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEtaterInput, UserUncheckedUpdateWithoutEtaterInput>
    create: XOR<UserCreateWithoutEtaterInput, UserUncheckedCreateWithoutEtaterInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEtaterInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEtaterInput, UserUncheckedUpdateWithoutEtaterInput>
  }

  export type UserUpdateManyWithWhereWithoutEtaterInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEtaterInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CrisisUpsertWithWhereUniqueWithoutAllowedEtaterInput = {
    where: CrisisWhereUniqueInput
    update: XOR<CrisisUpdateWithoutAllowedEtaterInput, CrisisUncheckedUpdateWithoutAllowedEtaterInput>
    create: XOR<CrisisCreateWithoutAllowedEtaterInput, CrisisUncheckedCreateWithoutAllowedEtaterInput>
  }

  export type CrisisUpdateWithWhereUniqueWithoutAllowedEtaterInput = {
    where: CrisisWhereUniqueInput
    data: XOR<CrisisUpdateWithoutAllowedEtaterInput, CrisisUncheckedUpdateWithoutAllowedEtaterInput>
  }

  export type CrisisUpdateManyWithWhereWithoutAllowedEtaterInput = {
    where: CrisisScalarWhereInput
    data: XOR<CrisisUpdateManyMutationInput, CrisisUncheckedUpdateManyWithoutAllowedEtaterInput>
  }

  export type TimelineEntryUpsertWithWhereUniqueWithoutEtatInput = {
    where: TimelineEntryWhereUniqueInput
    update: XOR<TimelineEntryUpdateWithoutEtatInput, TimelineEntryUncheckedUpdateWithoutEtatInput>
    create: XOR<TimelineEntryCreateWithoutEtatInput, TimelineEntryUncheckedCreateWithoutEtatInput>
  }

  export type TimelineEntryUpdateWithWhereUniqueWithoutEtatInput = {
    where: TimelineEntryWhereUniqueInput
    data: XOR<TimelineEntryUpdateWithoutEtatInput, TimelineEntryUncheckedUpdateWithoutEtatInput>
  }

  export type TimelineEntryUpdateManyWithWhereWithoutEtatInput = {
    where: TimelineEntryScalarWhereInput
    data: XOR<TimelineEntryUpdateManyMutationInput, TimelineEntryUncheckedUpdateManyWithoutEtatInput>
  }

  export type MeasureUpsertWithWhereUniqueWithoutEtatInput = {
    where: MeasureWhereUniqueInput
    update: XOR<MeasureUpdateWithoutEtatInput, MeasureUncheckedUpdateWithoutEtatInput>
    create: XOR<MeasureCreateWithoutEtatInput, MeasureUncheckedCreateWithoutEtatInput>
  }

  export type MeasureUpdateWithWhereUniqueWithoutEtatInput = {
    where: MeasureWhereUniqueInput
    data: XOR<MeasureUpdateWithoutEtatInput, MeasureUncheckedUpdateWithoutEtatInput>
  }

  export type MeasureUpdateManyWithWhereWithoutEtatInput = {
    where: MeasureScalarWhereInput
    data: XOR<MeasureUpdateManyMutationInput, MeasureUncheckedUpdateManyWithoutEtatInput>
  }

  export type MapMarkerUpsertWithWhereUniqueWithoutEtatInput = {
    where: MapMarkerWhereUniqueInput
    update: XOR<MapMarkerUpdateWithoutEtatInput, MapMarkerUncheckedUpdateWithoutEtatInput>
    create: XOR<MapMarkerCreateWithoutEtatInput, MapMarkerUncheckedCreateWithoutEtatInput>
  }

  export type MapMarkerUpdateWithWhereUniqueWithoutEtatInput = {
    where: MapMarkerWhereUniqueInput
    data: XOR<MapMarkerUpdateWithoutEtatInput, MapMarkerUncheckedUpdateWithoutEtatInput>
  }

  export type MapMarkerUpdateManyWithWhereWithoutEtatInput = {
    where: MapMarkerScalarWhereInput
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyWithoutEtatInput>
  }

  export type UserCreateWithoutCrisesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCrisesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutCrisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCrisesInput, UserUncheckedCreateWithoutCrisesInput>
  }

  export type EtatCreateWithoutCrisesInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutEtaterInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutEtatInput
    measures?: MeasureCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutEtatInput
  }

  export type EtatUncheckedCreateWithoutCrisesInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEtaterInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutEtatInput
    measures?: MeasureUncheckedCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutEtatInput
  }

  export type EtatCreateOrConnectWithoutCrisesInput = {
    where: EtatWhereUniqueInput
    create: XOR<EtatCreateWithoutCrisesInput, EtatUncheckedCreateWithoutCrisesInput>
  }

  export type TimelineEntryCreateWithoutCrisisInput = {
    id?: string
    text: string
    createdAt?: Date | string
    etat: EtatCreateNestedOneWithoutTimelineEntriesInput
    createdBy: UserCreateNestedOneWithoutTimelineEntriesInput
  }

  export type TimelineEntryUncheckedCreateWithoutCrisisInput = {
    id?: string
    text: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type TimelineEntryCreateOrConnectWithoutCrisisInput = {
    where: TimelineEntryWhereUniqueInput
    create: XOR<TimelineEntryCreateWithoutCrisisInput, TimelineEntryUncheckedCreateWithoutCrisisInput>
  }

  export type TimelineEntryCreateManyCrisisInputEnvelope = {
    data: TimelineEntryCreateManyCrisisInput | TimelineEntryCreateManyCrisisInput[]
    skipDuplicates?: boolean
  }

  export type MeasureCreateWithoutCrisisInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    createdAt?: Date | string
    etat: EtatCreateNestedOneWithoutMeasuresInput
    createdBy: UserCreateNestedOneWithoutMeasuresInput
  }

  export type MeasureUncheckedCreateWithoutCrisisInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MeasureCreateOrConnectWithoutCrisisInput = {
    where: MeasureWhereUniqueInput
    create: XOR<MeasureCreateWithoutCrisisInput, MeasureUncheckedCreateWithoutCrisisInput>
  }

  export type MeasureCreateManyCrisisInputEnvelope = {
    data: MeasureCreateManyCrisisInput | MeasureCreateManyCrisisInput[]
    skipDuplicates?: boolean
  }

  export type MapMarkerCreateWithoutCrisisInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    createdAt?: Date | string
    etat: EtatCreateNestedOneWithoutMapMarkersInput
    createdBy: UserCreateNestedOneWithoutMapMarkersInput
  }

  export type MapMarkerUncheckedCreateWithoutCrisisInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MapMarkerCreateOrConnectWithoutCrisisInput = {
    where: MapMarkerWhereUniqueInput
    create: XOR<MapMarkerCreateWithoutCrisisInput, MapMarkerUncheckedCreateWithoutCrisisInput>
  }

  export type MapMarkerCreateManyCrisisInputEnvelope = {
    data: MapMarkerCreateManyCrisisInput | MapMarkerCreateManyCrisisInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCrisesInput = {
    update: XOR<UserUpdateWithoutCrisesInput, UserUncheckedUpdateWithoutCrisesInput>
    create: XOR<UserCreateWithoutCrisesInput, UserUncheckedCreateWithoutCrisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCrisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCrisesInput, UserUncheckedUpdateWithoutCrisesInput>
  }

  export type UserUpdateWithoutCrisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCrisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type EtatUpsertWithWhereUniqueWithoutCrisesInput = {
    where: EtatWhereUniqueInput
    update: XOR<EtatUpdateWithoutCrisesInput, EtatUncheckedUpdateWithoutCrisesInput>
    create: XOR<EtatCreateWithoutCrisesInput, EtatUncheckedCreateWithoutCrisesInput>
  }

  export type EtatUpdateWithWhereUniqueWithoutCrisesInput = {
    where: EtatWhereUniqueInput
    data: XOR<EtatUpdateWithoutCrisesInput, EtatUncheckedUpdateWithoutCrisesInput>
  }

  export type EtatUpdateManyWithWhereWithoutCrisesInput = {
    where: EtatScalarWhereInput
    data: XOR<EtatUpdateManyMutationInput, EtatUncheckedUpdateManyWithoutCrisesInput>
  }

  export type TimelineEntryUpsertWithWhereUniqueWithoutCrisisInput = {
    where: TimelineEntryWhereUniqueInput
    update: XOR<TimelineEntryUpdateWithoutCrisisInput, TimelineEntryUncheckedUpdateWithoutCrisisInput>
    create: XOR<TimelineEntryCreateWithoutCrisisInput, TimelineEntryUncheckedCreateWithoutCrisisInput>
  }

  export type TimelineEntryUpdateWithWhereUniqueWithoutCrisisInput = {
    where: TimelineEntryWhereUniqueInput
    data: XOR<TimelineEntryUpdateWithoutCrisisInput, TimelineEntryUncheckedUpdateWithoutCrisisInput>
  }

  export type TimelineEntryUpdateManyWithWhereWithoutCrisisInput = {
    where: TimelineEntryScalarWhereInput
    data: XOR<TimelineEntryUpdateManyMutationInput, TimelineEntryUncheckedUpdateManyWithoutCrisisInput>
  }

  export type MeasureUpsertWithWhereUniqueWithoutCrisisInput = {
    where: MeasureWhereUniqueInput
    update: XOR<MeasureUpdateWithoutCrisisInput, MeasureUncheckedUpdateWithoutCrisisInput>
    create: XOR<MeasureCreateWithoutCrisisInput, MeasureUncheckedCreateWithoutCrisisInput>
  }

  export type MeasureUpdateWithWhereUniqueWithoutCrisisInput = {
    where: MeasureWhereUniqueInput
    data: XOR<MeasureUpdateWithoutCrisisInput, MeasureUncheckedUpdateWithoutCrisisInput>
  }

  export type MeasureUpdateManyWithWhereWithoutCrisisInput = {
    where: MeasureScalarWhereInput
    data: XOR<MeasureUpdateManyMutationInput, MeasureUncheckedUpdateManyWithoutCrisisInput>
  }

  export type MapMarkerUpsertWithWhereUniqueWithoutCrisisInput = {
    where: MapMarkerWhereUniqueInput
    update: XOR<MapMarkerUpdateWithoutCrisisInput, MapMarkerUncheckedUpdateWithoutCrisisInput>
    create: XOR<MapMarkerCreateWithoutCrisisInput, MapMarkerUncheckedCreateWithoutCrisisInput>
  }

  export type MapMarkerUpdateWithWhereUniqueWithoutCrisisInput = {
    where: MapMarkerWhereUniqueInput
    data: XOR<MapMarkerUpdateWithoutCrisisInput, MapMarkerUncheckedUpdateWithoutCrisisInput>
  }

  export type MapMarkerUpdateManyWithWhereWithoutCrisisInput = {
    where: MapMarkerScalarWhereInput
    data: XOR<MapMarkerUpdateManyMutationInput, MapMarkerUncheckedUpdateManyWithoutCrisisInput>
  }

  export type CrisisCreateWithoutTimelineEntriesInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCrisesInput
    allowedEtater?: EtatCreateNestedManyWithoutCrisesInput
    measures?: MeasureCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUncheckedCreateWithoutTimelineEntriesInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allowedEtater?: EtatUncheckedCreateNestedManyWithoutCrisesInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCrisisInput
  }

  export type CrisisCreateOrConnectWithoutTimelineEntriesInput = {
    where: CrisisWhereUniqueInput
    create: XOR<CrisisCreateWithoutTimelineEntriesInput, CrisisUncheckedCreateWithoutTimelineEntriesInput>
  }

  export type EtatCreateWithoutTimelineEntriesInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutEtaterInput
    crises?: CrisisCreateNestedManyWithoutAllowedEtaterInput
    measures?: MeasureCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutEtatInput
  }

  export type EtatUncheckedCreateWithoutTimelineEntriesInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEtaterInput
    crises?: CrisisUncheckedCreateNestedManyWithoutAllowedEtaterInput
    measures?: MeasureUncheckedCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutEtatInput
  }

  export type EtatCreateOrConnectWithoutTimelineEntriesInput = {
    where: EtatWhereUniqueInput
    create: XOR<EtatCreateWithoutTimelineEntriesInput, EtatUncheckedCreateWithoutTimelineEntriesInput>
  }

  export type UserCreateWithoutTimelineEntriesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTimelineEntriesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutTimelineEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimelineEntriesInput, UserUncheckedCreateWithoutTimelineEntriesInput>
  }

  export type CrisisUpsertWithoutTimelineEntriesInput = {
    update: XOR<CrisisUpdateWithoutTimelineEntriesInput, CrisisUncheckedUpdateWithoutTimelineEntriesInput>
    create: XOR<CrisisCreateWithoutTimelineEntriesInput, CrisisUncheckedCreateWithoutTimelineEntriesInput>
    where?: CrisisWhereInput
  }

  export type CrisisUpdateToOneWithWhereWithoutTimelineEntriesInput = {
    where?: CrisisWhereInput
    data: XOR<CrisisUpdateWithoutTimelineEntriesInput, CrisisUncheckedUpdateWithoutTimelineEntriesInput>
  }

  export type CrisisUpdateWithoutTimelineEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCrisesNestedInput
    allowedEtater?: EtatUpdateManyWithoutCrisesNestedInput
    measures?: MeasureUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateWithoutTimelineEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allowedEtater?: EtatUncheckedUpdateManyWithoutCrisesNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCrisisNestedInput
  }

  export type EtatUpsertWithoutTimelineEntriesInput = {
    update: XOR<EtatUpdateWithoutTimelineEntriesInput, EtatUncheckedUpdateWithoutTimelineEntriesInput>
    create: XOR<EtatCreateWithoutTimelineEntriesInput, EtatUncheckedCreateWithoutTimelineEntriesInput>
    where?: EtatWhereInput
  }

  export type EtatUpdateToOneWithWhereWithoutTimelineEntriesInput = {
    where?: EtatWhereInput
    data: XOR<EtatUpdateWithoutTimelineEntriesInput, EtatUncheckedUpdateWithoutTimelineEntriesInput>
  }

  export type EtatUpdateWithoutTimelineEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUpdateManyWithoutAllowedEtaterNestedInput
    measures?: MeasureUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateWithoutTimelineEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutAllowedEtaterNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutEtatNestedInput
  }

  export type UserUpsertWithoutTimelineEntriesInput = {
    update: XOR<UserUpdateWithoutTimelineEntriesInput, UserUncheckedUpdateWithoutTimelineEntriesInput>
    create: XOR<UserCreateWithoutTimelineEntriesInput, UserUncheckedCreateWithoutTimelineEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimelineEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimelineEntriesInput, UserUncheckedUpdateWithoutTimelineEntriesInput>
  }

  export type UserUpdateWithoutTimelineEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTimelineEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CrisisCreateWithoutMeasuresInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCrisesInput
    allowedEtater?: EtatCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUncheckedCreateWithoutMeasuresInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allowedEtater?: EtatUncheckedCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCrisisInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCrisisInput
  }

  export type CrisisCreateOrConnectWithoutMeasuresInput = {
    where: CrisisWhereUniqueInput
    create: XOR<CrisisCreateWithoutMeasuresInput, CrisisUncheckedCreateWithoutMeasuresInput>
  }

  export type EtatCreateWithoutMeasuresInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutEtaterInput
    crises?: CrisisCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutEtatInput
  }

  export type EtatUncheckedCreateWithoutMeasuresInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEtaterInput
    crises?: CrisisUncheckedCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutEtatInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutEtatInput
  }

  export type EtatCreateOrConnectWithoutMeasuresInput = {
    where: EtatWhereUniqueInput
    create: XOR<EtatCreateWithoutMeasuresInput, EtatUncheckedCreateWithoutMeasuresInput>
  }

  export type UserCreateWithoutMeasuresInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMeasuresInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutMeasuresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeasuresInput, UserUncheckedCreateWithoutMeasuresInput>
  }

  export type CrisisUpsertWithoutMeasuresInput = {
    update: XOR<CrisisUpdateWithoutMeasuresInput, CrisisUncheckedUpdateWithoutMeasuresInput>
    create: XOR<CrisisCreateWithoutMeasuresInput, CrisisUncheckedCreateWithoutMeasuresInput>
    where?: CrisisWhereInput
  }

  export type CrisisUpdateToOneWithWhereWithoutMeasuresInput = {
    where?: CrisisWhereInput
    data: XOR<CrisisUpdateWithoutMeasuresInput, CrisisUncheckedUpdateWithoutMeasuresInput>
  }

  export type CrisisUpdateWithoutMeasuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCrisesNestedInput
    allowedEtater?: EtatUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateWithoutMeasuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allowedEtater?: EtatUncheckedUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCrisisNestedInput
  }

  export type EtatUpsertWithoutMeasuresInput = {
    update: XOR<EtatUpdateWithoutMeasuresInput, EtatUncheckedUpdateWithoutMeasuresInput>
    create: XOR<EtatCreateWithoutMeasuresInput, EtatUncheckedCreateWithoutMeasuresInput>
    where?: EtatWhereInput
  }

  export type EtatUpdateToOneWithWhereWithoutMeasuresInput = {
    where?: EtatWhereInput
    data: XOR<EtatUpdateWithoutMeasuresInput, EtatUncheckedUpdateWithoutMeasuresInput>
  }

  export type EtatUpdateWithoutMeasuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateWithoutMeasuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutEtatNestedInput
  }

  export type UserUpsertWithoutMeasuresInput = {
    update: XOR<UserUpdateWithoutMeasuresInput, UserUncheckedUpdateWithoutMeasuresInput>
    create: XOR<UserCreateWithoutMeasuresInput, UserUncheckedCreateWithoutMeasuresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeasuresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeasuresInput, UserUncheckedUpdateWithoutMeasuresInput>
  }

  export type UserUpdateWithoutMeasuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMeasuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CrisisCreateWithoutMapMarkersInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCrisesInput
    allowedEtater?: EtatCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCrisisInput
    measures?: MeasureCreateNestedManyWithoutCrisisInput
  }

  export type CrisisUncheckedCreateWithoutMapMarkersInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    allowedEtater?: EtatUncheckedCreateNestedManyWithoutCrisesInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCrisisInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCrisisInput
  }

  export type CrisisCreateOrConnectWithoutMapMarkersInput = {
    where: CrisisWhereUniqueInput
    create: XOR<CrisisCreateWithoutMapMarkersInput, CrisisUncheckedCreateWithoutMapMarkersInput>
  }

  export type EtatCreateWithoutMapMarkersInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutEtaterInput
    crises?: CrisisCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutEtatInput
    measures?: MeasureCreateNestedManyWithoutEtatInput
  }

  export type EtatUncheckedCreateWithoutMapMarkersInput = {
    id?: string
    title: string
    contactPhone: string
    contactEmail: string
    themeColor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEtaterInput
    crises?: CrisisUncheckedCreateNestedManyWithoutAllowedEtaterInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutEtatInput
    measures?: MeasureUncheckedCreateNestedManyWithoutEtatInput
  }

  export type EtatCreateOrConnectWithoutMapMarkersInput = {
    where: EtatWhereUniqueInput
    create: XOR<EtatCreateWithoutMapMarkersInput, EtatUncheckedCreateWithoutMapMarkersInput>
  }

  export type UserCreateWithoutMapMarkersInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMapMarkersInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutMapMarkersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMapMarkersInput, UserUncheckedCreateWithoutMapMarkersInput>
  }

  export type CrisisUpsertWithoutMapMarkersInput = {
    update: XOR<CrisisUpdateWithoutMapMarkersInput, CrisisUncheckedUpdateWithoutMapMarkersInput>
    create: XOR<CrisisCreateWithoutMapMarkersInput, CrisisUncheckedCreateWithoutMapMarkersInput>
    where?: CrisisWhereInput
  }

  export type CrisisUpdateToOneWithWhereWithoutMapMarkersInput = {
    where?: CrisisWhereInput
    data: XOR<CrisisUpdateWithoutMapMarkersInput, CrisisUncheckedUpdateWithoutMapMarkersInput>
  }

  export type CrisisUpdateWithoutMapMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCrisesNestedInput
    allowedEtater?: EtatUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateWithoutMapMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allowedEtater?: EtatUncheckedUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCrisisNestedInput
  }

  export type EtatUpsertWithoutMapMarkersInput = {
    update: XOR<EtatUpdateWithoutMapMarkersInput, EtatUncheckedUpdateWithoutMapMarkersInput>
    create: XOR<EtatCreateWithoutMapMarkersInput, EtatUncheckedCreateWithoutMapMarkersInput>
    where?: EtatWhereInput
  }

  export type EtatUpdateToOneWithWhereWithoutMapMarkersInput = {
    where?: EtatWhereInput
    data: XOR<EtatUpdateWithoutMapMarkersInput, EtatUncheckedUpdateWithoutMapMarkersInput>
  }

  export type EtatUpdateWithoutMapMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutEtatNestedInput
    measures?: MeasureUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateWithoutMapMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEtaterNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutEtatNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutEtatNestedInput
  }

  export type UserUpsertWithoutMapMarkersInput = {
    update: XOR<UserUpdateWithoutMapMarkersInput, UserUncheckedUpdateWithoutMapMarkersInput>
    create: XOR<UserCreateWithoutMapMarkersInput, UserUncheckedCreateWithoutMapMarkersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMapMarkersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMapMarkersInput, UserUncheckedUpdateWithoutMapMarkersInput>
  }

  export type UserUpdateWithoutMapMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMapMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    crises?: CrisisCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryCreateNestedManyWithoutCreatedByInput
    measures?: MeasureCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerCreateNestedManyWithoutCreatedByInput
    etater?: EtatCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    isVerified?: boolean
    isAdmin?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    crises?: CrisisUncheckedCreateNestedManyWithoutCreatedByInput
    timelineEntries?: TimelineEntryUncheckedCreateNestedManyWithoutCreatedByInput
    measures?: MeasureUncheckedCreateNestedManyWithoutCreatedByInput
    mapMarkers?: MapMarkerUncheckedCreateNestedManyWithoutCreatedByInput
    etater?: EtatUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
    etater?: EtatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrisisCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    what: string
    how: string
    when: Date | string
    severity?: $Enums.Severity
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineEntryCreateManyCreatedByInput = {
    id?: string
    text: string
    crisisId: string
    etatId: string
    createdAt?: Date | string
  }

  export type MeasureCreateManyCreatedByInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    crisisId: string
    etatId: string
    createdAt?: Date | string
  }

  export type MapMarkerCreateManyCreatedByInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    crisisId: string
    etatId: string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrisisUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allowedEtater?: EtatUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allowedEtater?: EtatUncheckedUpdateManyWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutTimelineEntriesNestedInput
    etat?: EtatUpdateOneRequiredWithoutTimelineEntriesNestedInput
  }

  export type TimelineEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutMeasuresNestedInput
    etat?: EtatUpdateOneRequiredWithoutMeasuresNestedInput
  }

  export type MeasureUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutMapMarkersNestedInput
    etat?: EtatUpdateOneRequiredWithoutMapMarkersNestedInput
  }

  export type MapMarkerUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    crisisId?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtatUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crises?: CrisisUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutEtatNestedInput
    measures?: MeasureUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crises?: CrisisUncheckedUpdateManyWithoutAllowedEtaterNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutEtatNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryCreateManyEtatInput = {
    id?: string
    text: string
    crisisId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MeasureCreateManyEtatInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    crisisId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MapMarkerCreateManyEtatInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    crisisId: string
    createdById: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutEtaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEtaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    crises?: CrisisUncheckedUpdateManyWithoutCreatedByNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCreatedByNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEtaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrisisUpdateWithoutAllowedEtaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCrisesNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateWithoutAllowedEtaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutCrisisNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutCrisisNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutCrisisNestedInput
  }

  export type CrisisUncheckedUpdateManyWithoutAllowedEtaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    what?: StringFieldUpdateOperationsInput | string
    how?: StringFieldUpdateOperationsInput | string
    when?: DateTimeFieldUpdateOperationsInput | Date | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryUpdateWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutTimelineEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTimelineEntriesNestedInput
  }

  export type TimelineEntryUncheckedUpdateWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    crisisId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryUncheckedUpdateManyWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    crisisId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureUpdateWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutMeasuresNestedInput
    createdBy?: UserUpdateOneRequiredWithoutMeasuresNestedInput
  }

  export type MeasureUncheckedUpdateWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    crisisId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureUncheckedUpdateManyWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    crisisId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUpdateWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crisis?: CrisisUpdateOneRequiredWithoutMapMarkersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutMapMarkersNestedInput
  }

  export type MapMarkerUncheckedUpdateWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    crisisId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUncheckedUpdateManyWithoutEtatInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    crisisId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryCreateManyCrisisInput = {
    id?: string
    text: string
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MeasureCreateManyCrisisInput = {
    id?: string
    text: string
    severity: $Enums.Severity
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type MapMarkerCreateManyCrisisInput = {
    id?: string
    type: $Enums.MarkerType
    label: string
    lat: number
    lng: number
    radius?: number | null
    etatId: string
    createdById: string
    createdAt?: Date | string
  }

  export type EtatUpdateWithoutCrisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEtaterNestedInput
    timelineEntries?: TimelineEntryUpdateManyWithoutEtatNestedInput
    measures?: MeasureUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateWithoutCrisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEtaterNestedInput
    timelineEntries?: TimelineEntryUncheckedUpdateManyWithoutEtatNestedInput
    measures?: MeasureUncheckedUpdateManyWithoutEtatNestedInput
    mapMarkers?: MapMarkerUncheckedUpdateManyWithoutEtatNestedInput
  }

  export type EtatUncheckedUpdateManyWithoutCrisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    themeColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryUpdateWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etat?: EtatUpdateOneRequiredWithoutTimelineEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTimelineEntriesNestedInput
  }

  export type TimelineEntryUncheckedUpdateWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineEntryUncheckedUpdateManyWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureUpdateWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etat?: EtatUpdateOneRequiredWithoutMeasuresNestedInput
    createdBy?: UserUpdateOneRequiredWithoutMeasuresNestedInput
  }

  export type MeasureUncheckedUpdateWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasureUncheckedUpdateManyWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUpdateWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etat?: EtatUpdateOneRequiredWithoutMapMarkersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutMapMarkersNestedInput
  }

  export type MapMarkerUncheckedUpdateWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapMarkerUncheckedUpdateManyWithoutCrisisInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMarkerTypeFieldUpdateOperationsInput | $Enums.MarkerType
    label?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    radius?: NullableIntFieldUpdateOperationsInput | number | null
    etatId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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