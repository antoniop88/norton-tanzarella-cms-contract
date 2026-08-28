var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// src/sections/common.ts
var optionalMediaIdSchema = external_exports.preprocess(
  (val) => val === "" || val === null ? void 0 : val,
  external_exports.string().uuid().optional()
);
var ctaLinkSchema = external_exports.object({
  label: external_exports.string().max(40).describe("Etichetta"),
  to: external_exports.string().max(200).describe("Destinazione")
}).describe("Link CTA");
var optionalCtaLinkSchema = external_exports.preprocess((val) => {
  if (val == null || val === "") return void 0;
  if (typeof val !== "object" || Array.isArray(val)) return val;
  const o = val;
  const label = typeof o.label === "string" ? o.label.trim() : "";
  const to = typeof o.to === "string" ? o.to.trim() : "";
  if (!label && !to) return void 0;
  return { label, to };
}, ctaLinkSchema.optional());
var optionalIconKeySchema = external_exports.preprocess(
  (val) => val === "" || val === null ? void 0 : val,
  external_exports.string().regex(/^(mdi|tabler):[a-z0-9-]+$/).optional()
);
var featureItemSchema = external_exports.object({
  title: external_exports.string().max(80).describe("Titolo"),
  description: external_exports.string().max(300).describe("Descrizione"),
  iconKey: optionalIconKeySchema.describe("Icona")
}).describe("Elemento");

// src/sections/m1.ts
var heroContentSchema = external_exports.object({
  title: external_exports.string().max(80).describe("Titolo"),
  subtitle: external_exports.string().max(600).optional().describe("Sottotitolo"),
  cta: optionalCtaLinkSchema.describe("CTA"),
  videoMediaId: optionalMediaIdSchema.describe("Video sfondo")
});
var featuresContentSchema = external_exports.object({
  eyebrow: external_exports.string().max(40).optional().describe("Sopratitolo"),
  title: external_exports.string().max(80).optional().describe("Titolo"),
  lead: external_exports.string().max(200).optional().describe("Introduzione"),
  outro: external_exports.string().max(200).optional().describe("Chiusura"),
  items: external_exports.array(featureItemSchema).min(1).max(12).describe("Elementi")
});
var ctaContentSchema = external_exports.object({
  title: external_exports.string().max(80).describe("Frase principale"),
  description: external_exports.string().max(200).optional().describe("Didascalia"),
  button: ctaLinkSchema.describe("Pulsante"),
  mediaId: optionalMediaIdSchema.describe("Immagine sfondo"),
  imageAlt: external_exports.string().max(160).optional().describe("Alt immagine")
});
var featuredCollectionContentSchema = external_exports.object({
  collectionKey: external_exports.literal("immobili").describe("Collezione"),
  mode: external_exports.enum(["featured", "manual"]).describe("Modalit\xE0"),
  itemIds: external_exports.array(external_exports.string().uuid()).max(6).optional().describe("Elementi manuali"),
  limit: external_exports.number().int().min(1).max(6).default(6).describe("Limite"),
  title: external_exports.string().max(80).optional().describe("Titolo sezione"),
  viewAllLabel: external_exports.string().max(40).optional().describe("Etichetta \xABVedi tutti\xBB"),
  hideWhenEmpty: external_exports.boolean().default(true).describe("Nascondi se vuota")
});
var statementContentSchema = external_exports.object({
  title: external_exports.string().max(80).describe("Titolo"),
  body: external_exports.string().max(600).describe("Testo"),
  tagline: external_exports.string().max(120).optional().describe("Tagline")
});
var categoryGridItemSchema = external_exports.object({
  label: external_exports.string().max(60).describe("Etichetta categoria"),
  mediaId: optionalMediaIdSchema.describe("Immagine"),
  imageAlt: external_exports.string().max(160).optional().describe("Testo alternativo"),
  categorySlug: external_exports.string().min(1).max(80).describe("Slug categoria immobili"),
  ctaLabel: external_exports.string().max(60).optional().describe("Etichetta link (lettori schermo)")
});
var categoryGridContentSchema = external_exports.object({
  title: external_exports.string().max(80).optional().describe("Titolo sezione"),
  items: external_exports.array(categoryGridItemSchema).length(4).describe("Categorie")
});
var aboutTeaserCarouselItemSchema = external_exports.object({
  mediaId: optionalMediaIdSchema.describe("Immagine"),
  imageAlt: external_exports.string().max(160).optional().describe("Testo alternativo")
});
var aboutTeaserContentSchema = external_exports.object({
  title: external_exports.string().max(80).describe("Titolo"),
  body: external_exports.string().max(600).describe("Testo"),
  button: ctaLinkSchema.describe("Pulsante"),
  backgroundMediaId: optionalMediaIdSchema.describe("Immagine sfondo"),
  backgroundImageAlt: external_exports.string().max(160).optional().describe("Alt sfondo"),
  carouselItems: external_exports.array(aboutTeaserCarouselItemSchema).min(1).max(3).describe("Slide carousel"),
  autoplayMs: external_exports.number().int().min(0).max(12e3).optional().describe("Autoplay (ms, 0 = off)")
});

// src/sections/m2.ts
var pageHeaderContentSchema = external_exports.object({
  title: external_exports.string().max(80).describe("Titolo"),
  lead: external_exports.string().max(200).optional().describe("Introduzione")
});
var richTextContentSchema = external_exports.object({
  body: external_exports.string().max(1e4).describe("Contenuto")
});
var legalPolicyContentSchema = external_exports.object({
  source: external_exports.enum(["manual", "iubenda"]).describe("Fonte"),
  iubendaPolicyId: external_exports.string().max(40).optional().describe("ID policy Iubenda"),
  body: external_exports.string().max(5e4).optional().describe("Testo")
});
var splitContentSchema = external_exports.object({
  title: external_exports.string().max(80).describe("Titolo"),
  body: external_exports.string().max(2e3).describe("Testo"),
  mediaId: optionalMediaIdSchema.describe("Immagine"),
  imageAlt: external_exports.string().max(120).optional().describe("Testo alternativo"),
  reverse: external_exports.boolean().optional().describe("Layout invertito"),
  button: optionalCtaLinkSchema.describe("CTA")
});
var imageSlideshowItemSchema = external_exports.object({
  mediaId: optionalMediaIdSchema.describe("Immagine"),
  imageAlt: external_exports.string().max(160).optional().describe("Testo alternativo"),
  caption: external_exports.string().max(120).optional().describe("Didascalia")
});
var imageSlideshowContentSchema = external_exports.object({
  items: external_exports.array(imageSlideshowItemSchema).min(2).max(8).describe("Slide"),
  autoplayMs: external_exports.number().int().min(0).max(12e3).optional().describe("Autoplay (ms, 0 = off)")
});
var teamContentSchema = external_exports.object({
  title: external_exports.string().max(80).optional().describe("Titolo sezione"),
  name: external_exports.string().max(80).describe("Nome"),
  role: external_exports.string().max(80).describe("Ruolo"),
  bio: external_exports.string().max(500).describe("Biografia"),
  mediaId: optionalMediaIdSchema.describe("Foto")
});
var statsContentSchema = external_exports.object({
  items: external_exports.array(
    external_exports.object({
      value: external_exports.number().describe("Valore"),
      suffix: external_exports.string().max(10).optional().describe("Suffisso"),
      label: external_exports.string().max(40).describe("Etichetta")
    })
  ).min(1).max(6).describe("Statistiche")
});
var faqContentSchema = external_exports.object({
  title: external_exports.string().max(80).optional().describe("Titolo sezione"),
  items: external_exports.array(
    external_exports.object({
      question: external_exports.string().max(200).describe("Domanda"),
      answer: external_exports.string().max(1e3).describe("Risposta")
    })
  ).min(1).max(20).describe("Domande")
});
var testimonialsContentSchema = external_exports.object({
  title: external_exports.string().max(80).optional().describe("Titolo sezione"),
  items: external_exports.array(
    external_exports.object({
      quote: external_exports.string().max(500).describe("Citazione"),
      author: external_exports.string().max(80).describe("Autore"),
      role: external_exports.string().max(80).optional().describe("Ruolo")
    })
  ).min(1).max(10).describe("Testimonianze")
});
var youtubePlaylistIdSchema = external_exports.string().min(10).max(64).regex(/^UU[\w-]+$/, "ID playlist uploads YouTube (prefisso UU)");
var youtubeGalleryContentSchema = external_exports.object({
  playlistId: youtubePlaylistIdSchema.describe("ID playlist YouTube"),
  pageSize: external_exports.number().int().min(1).max(50).default(15).describe("Video per pagina"),
  columns: external_exports.number().int().min(1).max(4).default(3).describe("Colonne griglia"),
  subscribeChannelUrl: external_exports.string().url().max(500).describe("URL canale YouTube"),
  subscribeLabel: external_exports.string().max(80).describe("Testo pulsante subscribe")
});
var googleReviewsContentSchema = external_exports.object({
  title: external_exports.string().max(80).optional().describe("Titolo sezione"),
  maxItems: external_exports.number().int().min(1).max(5).default(5).describe("Recensioni da mostrare (max 5)"),
  hideWhenEmpty: external_exports.boolean().default(true).describe("Nascondi se nessuna recensione"),
  showSummary: external_exports.boolean().default(true).describe("Mostra rating e totale Google")
});

// src/sections/collectPageMediaIds.ts
function isUuid(value) {
  if (value.length !== 36) return false;
  return /^[0-9a-f-]{36}$/i.test(value);
}
function walkCollectMediaIds(value, into) {
  if (value == null) return;
  if (Array.isArray(value)) {
    for (const entry of value) walkCollectMediaIds(entry, into);
    return;
  }
  if (typeof value !== "object") return;
  for (const [key, entry] of Object.entries(value)) {
    if ((key === "mediaId" || key.startsWith("mediaId") || key.endsWith("MediaId") || key === "videoMediaId") && typeof entry === "string" && isUuid(entry)) {
      into.add(entry.toLowerCase());
    } else {
      walkCollectMediaIds(entry, into);
    }
  }
}
function collectPageMediaIds(document) {
  const ids = /* @__PURE__ */ new Set();
  if (!document || typeof document !== "object") return [];
  const sections = document.sections;
  if (!Array.isArray(sections)) return [];
  for (const section of sections) {
    walkCollectMediaIds(section?.content, ids);
  }
  return [...ids];
}

// src/sections/index.ts
var sectionContentByType = {
  hero: heroContentSchema,
  features: featuresContentSchema,
  cta: ctaContentSchema,
  featuredCollection: featuredCollectionContentSchema,
  statement: statementContentSchema,
  categoryGrid: categoryGridContentSchema,
  pageHeader: pageHeaderContentSchema,
  richText: richTextContentSchema,
  legalPolicy: legalPolicyContentSchema,
  split: splitContentSchema,
  imageSlideshow: imageSlideshowContentSchema,
  team: teamContentSchema,
  stats: statsContentSchema,
  faq: faqContentSchema,
  testimonials: testimonialsContentSchema,
  youtubeGallery: youtubeGalleryContentSchema,
  googleReviews: googleReviewsContentSchema,
  aboutTeaser: aboutTeaserContentSchema
};
var SECTION_TYPE_LABELS_IT = {
  hero: "Hero",
  features: "Caratteristiche",
  cta: "Call to action",
  featuredCollection: "Collezione in evidenza",
  statement: "Dichiarazione",
  categoryGrid: "Griglia categorie",
  pageHeader: "Intestazione pagina",
  richText: "Testo libero",
  legalPolicy: "Policy legale",
  split: "Sezione split",
  imageSlideshow: "Slideshow immagini",
  team: "Team",
  stats: "Statistiche",
  faq: "FAQ",
  testimonials: "Testimonianze",
  youtubeGallery: "Gallery YouTube",
  googleReviews: "Google Reviews",
  aboutTeaser: "About teaser"
};
function parseSectionContent(type, content) {
  const schema = sectionContentByType[type];
  if (!schema) return { success: false, error: `Unknown section type: ${type}` };
  const result = schema.safeParse(content);
  if (!result.success) {
    return { success: false, error: result.error.message };
  }
  return { success: true, data: result.data };
}

// src/settings/opening-hours.ts
var dayOfWeekSchema = external_exports.enum([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "PublicHolidays"
]);
var openingHoursSchema = external_exports.object({
  dayOfWeek: dayOfWeekSchema.describe("Giorno"),
  opens: external_exports.string().regex(/^\d{2}:\d{2}$/).describe("Apertura"),
  closes: external_exports.string().regex(/^\d{2}:\d{2}$/).describe("Chiusura"),
  description: external_exports.string().max(80).optional().describe("Nota")
}).describe("Orario di apertura");
var WEEKDAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var EDITOR_DAY_ORDER = [...WEEKDAY_ORDER, "PublicHolidays"];
function compareTime(a, b) {
  return a.localeCompare(b);
}
function sortSlots(slots) {
  return [...slots].sort((a, b) => compareTime(a.opens, b.opens));
}
function groupOpeningHoursByDay(entries) {
  const byDay = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const list = byDay.get(entry.dayOfWeek) ?? [];
    list.push(entry);
    byDay.set(entry.dayOfWeek, list);
  }
  return EDITOR_DAY_ORDER.map((dayOfWeek) => {
    const dayEntries = byDay.get(dayOfWeek) ?? [];
    if (dayEntries.length === 0) {
      return { dayOfWeek, closed: true, slots: [] };
    }
    const description = dayEntries.find((entry) => entry.description)?.description;
    const slots = sortSlots(
      dayEntries.map((entry) => ({
        opens: entry.opens,
        closes: entry.closes
      }))
    );
    return {
      dayOfWeek,
      closed: false,
      slots,
      ...description ? { description } : {}
    };
  });
}
function flattenDaySchedules(schedules) {
  const entries = [];
  for (const schedule of schedules) {
    if (schedule.closed || schedule.slots.length === 0) continue;
    const sortedSlots = sortSlots(schedule.slots);
    sortedSlots.forEach((slot, index) => {
      entries.push({
        dayOfWeek: schedule.dayOfWeek,
        opens: slot.opens,
        closes: slot.closes,
        ...index === 0 && schedule.description ? { description: schedule.description } : {}
      });
    });
  }
  return entries;
}
function scheduleSignature(schedule) {
  if (schedule.closed || schedule.slots.length === 0) return "closed";
  const slots = schedule.slots.map((slot) => `${slot.opens}-${slot.closes}`).join("|");
  return `open|${slots}|${schedule.description ?? ""}`;
}
function groupConsecutiveSchedules(schedules) {
  const byDay = new Map(schedules.map((s) => [s.dayOfWeek, s]));
  const groups = [];
  for (const day of WEEKDAY_ORDER) {
    const schedule = byDay.get(day) ?? { dayOfWeek: day, closed: true, slots: [] };
    const signature = scheduleSignature(schedule);
    const last = groups[groups.length - 1];
    if (last && last.signature === signature) {
      last.days.push(day);
      last.endDay = day;
      continue;
    }
    groups.push({
      signature,
      days: [day],
      startDay: day,
      endDay: day,
      closed: schedule.closed || schedule.slots.length === 0,
      slots: schedule.slots,
      ...schedule.description ? { description: schedule.description } : {}
    });
  }
  return groups.map(({ signature: _signature, ...group }) => group);
}
function mergeOpeningHoursNotes(sourceHours, targetHours) {
  const targetNotes = /* @__PURE__ */ new Map();
  const targetCounts = /* @__PURE__ */ new Map();
  for (const entry of targetHours) {
    const ordinal = targetCounts.get(entry.dayOfWeek) ?? 0;
    targetCounts.set(entry.dayOfWeek, ordinal + 1);
    if (entry.description) targetNotes.set(`${entry.dayOfWeek}#${ordinal}`, entry.description);
  }
  const sourceCounts = /* @__PURE__ */ new Map();
  return sourceHours.map((entry) => {
    const ordinal = sourceCounts.get(entry.dayOfWeek) ?? 0;
    sourceCounts.set(entry.dayOfWeek, ordinal + 1);
    const note = targetNotes.get(`${entry.dayOfWeek}#${ordinal}`);
    const base = {
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes
    };
    return note ? { ...base, description: note } : base;
  });
}
function validateOpeningHours(entries) {
  const issues = [];
  const byDay = /* @__PURE__ */ new Map();
  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index];
    if (!entry) continue;
    if (compareTime(entry.opens, entry.closes) >= 0) {
      issues.push({
        path: ["openingHours", index, "closes"],
        message: "La chiusura deve essere successiva all'apertura"
      });
    }
    const list = byDay.get(entry.dayOfWeek) ?? [];
    list.push(entry);
    byDay.set(entry.dayOfWeek, list);
  }
  for (const [dayOfWeek, dayEntries] of byDay) {
    if (dayEntries.length > 2) {
      issues.push({
        path: ["openingHours"],
        message: `Massimo 2 fasce per ${dayOfWeek}`
      });
      continue;
    }
    const sorted = sortSlots(
      dayEntries.map((entry) => ({ opens: entry.opens, closes: entry.closes }))
    );
    for (let index = 1; index < sorted.length; index++) {
      const previous = sorted[index - 1];
      const current = sorted[index];
      if (!previous || !current) continue;
      if (compareTime(current.opens, previous.closes) < 0) {
        issues.push({
          path: ["openingHours"],
          message: "Le fasce dello stesso giorno non possono sovrapporsi"
        });
        break;
      }
    }
  }
  return issues;
}
var DEFAULT_OPENING_HOURS_IT = [
  { dayOfWeek: "Monday", opens: "09:00", closes: "13:00" },
  { dayOfWeek: "Monday", opens: "15:00", closes: "19:00" },
  { dayOfWeek: "Tuesday", opens: "09:00", closes: "13:00" },
  { dayOfWeek: "Tuesday", opens: "15:00", closes: "19:00" },
  { dayOfWeek: "Wednesday", opens: "09:00", closes: "13:00" },
  { dayOfWeek: "Wednesday", opens: "15:00", closes: "19:00" },
  { dayOfWeek: "Thursday", opens: "09:00", closes: "13:00" },
  { dayOfWeek: "Thursday", opens: "15:00", closes: "19:00" },
  { dayOfWeek: "Friday", opens: "09:00", closes: "13:00" },
  { dayOfWeek: "Friday", opens: "15:00", closes: "19:00" },
  { dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" }
];

// src/settings/branding.ts
var hexColorSchema = external_exports.string().regex(/^#[0-9A-Fa-f]{6}$/, "Must be a hex color (#RRGGBB)");
var FONT_SANS_WHITELIST = [
  "Minion Pro",
  "Montserrat",
  "Nunito Sans",
  "Inter",
  "DM Sans"
];
var FONT_HEADING_WHITELIST = [
  "Cormorant Garamond",
  "Playfair Display",
  "Libre Baskerville",
  "Source Serif 4"
];
var FONT_WHITELIST = [
  ...FONT_SANS_WHITELIST,
  ...FONT_HEADING_WHITELIST
];
var LOGO_SLOTS = [
  "siteHeader",
  "siteFooter",
  "siteFavicon",
  "backofficeLogin",
  "backofficeSidebar",
  "backofficeSidebarCollapsed"
];
var mediaIdSchema = external_exports.string().uuid();
var logoAltSchema = external_exports.object({
  it: external_exports.string().max(120).optional(),
  en: external_exports.string().max(120).optional()
});
var logoSlotSchema = external_exports.object({
  mediaId: mediaIdSchema.optional(),
  mediaIdLight: mediaIdSchema.optional(),
  mediaIdDark: mediaIdSchema.optional(),
  alt: logoAltSchema.optional()
});
var brandingColorsSchema = external_exports.object({
  primary: hexColorSchema.describe("Colore primario"),
  secondary: hexColorSchema.describe("Colore secondario"),
  accent: hexColorSchema.describe("Accento"),
  background: hexColorSchema.describe("Sfondo"),
  foreground: hexColorSchema.describe("Testo"),
  success: hexColorSchema.describe("Successo"),
  warning: hexColorSchema.describe("Avviso"),
  error: hexColorSchema.describe("Errore")
});
var brandingTypographySchema = external_exports.object({
  fontSans: external_exports.enum(FONT_SANS_WHITELIST).describe("Font corpo"),
  fontHeading: external_exports.enum(FONT_HEADING_WHITELIST).describe("Font titoli")
});
var brandingLogosSchema = external_exports.object({
  siteHeader: logoSlotSchema.optional(),
  siteFooter: logoSlotSchema.optional(),
  siteFavicon: logoSlotSchema.optional(),
  backofficeLogin: logoSlotSchema.optional(),
  backofficeSidebar: logoSlotSchema.optional(),
  backofficeSidebarCollapsed: logoSlotSchema.optional()
});
var propertyWatermarkSchema = external_exports.object({
  enabled: external_exports.boolean().default(false),
  mediaId: mediaIdSchema.optional()
});
var DEFAULT_PROPERTY_WATERMARK = {
  enabled: false
};
var DEFAULT_BRANDING_COLORS = {
  primary: "#0A2374",
  secondary: "#B2914F",
  accent: "#B2914F",
  background: "#FCFCFD",
  foreground: "#1C1C26",
  success: "#2F9E44",
  warning: "#E67700",
  error: "#C42B2B"
};
var DEFAULT_BRANDING_TYPOGRAPHY = {
  fontSans: "Minion Pro",
  fontHeading: "Cormorant Garamond"
};
var DEFAULT_BRANDING_SCALARS = {
  themeColor: DEFAULT_BRANDING_COLORS.primary,
  backgroundColor: DEFAULT_BRANDING_COLORS.background,
  colors: { ...DEFAULT_BRANDING_COLORS },
  typography: { ...DEFAULT_BRANDING_TYPOGRAPHY },
  logos: {},
  propertyWatermark: { ...DEFAULT_PROPERTY_WATERMARK }
};
var settingsScalarsSchema = external_exports.object({
  themeColor: hexColorSchema,
  backgroundColor: hexColorSchema,
  colors: brandingColorsSchema,
  typography: brandingTypographySchema,
  logos: brandingLogosSchema.default({}),
  propertyWatermark: propertyWatermarkSchema.default({ enabled: false })
}).superRefine((data, ctx) => {
  if (data.propertyWatermark.enabled && !data.propertyWatermark.mediaId) {
    ctx.addIssue({
      code: "custom",
      path: ["propertyWatermark", "mediaId"],
      message: "mediaId is required when property watermark is enabled"
    });
  }
  if (data.themeColor !== data.colors.primary) {
    ctx.addIssue({
      code: "custom",
      path: ["themeColor"],
      message: "themeColor must match colors.primary"
    });
  }
  if (data.backgroundColor !== data.colors.background) {
    ctx.addIssue({
      code: "custom",
      path: ["backgroundColor"],
      message: "backgroundColor must match colors.background"
    });
  }
});
function normalizeSettingsScalars(raw) {
  const base = structuredClone(DEFAULT_BRANDING_SCALARS);
  if (!raw || typeof raw !== "object") {
    return settingsScalarsSchema.parse(base);
  }
  const input = raw;
  const colorsIn = input.colors && typeof input.colors === "object" ? input.colors : {};
  const typographyIn = input.typography && typeof input.typography === "object" ? input.typography : {};
  const logosIn = input.logos && typeof input.logos === "object" ? input.logos : {};
  const propertyWatermarkIn = input.propertyWatermark && typeof input.propertyWatermark === "object" ? input.propertyWatermark : {};
  const primary = typeof colorsIn.primary === "string" && colorsIn.primary || typeof input.themeColor === "string" && input.themeColor || base.colors.primary;
  const background = typeof colorsIn.background === "string" && colorsIn.background || typeof input.backgroundColor === "string" && input.backgroundColor || base.colors.background;
  const colors = {
    ...base.colors,
    ...colorsIn,
    primary,
    background
  };
  const typography = {
    ...base.typography,
    ...typographyIn
  };
  const propertyWatermark = {
    ...base.propertyWatermark,
    ...propertyWatermarkIn
  };
  if (!propertyWatermark.enabled) {
    delete propertyWatermark.mediaId;
  }
  const candidate = {
    themeColor: primary,
    backgroundColor: background,
    colors,
    typography,
    logos: { ...logosIn },
    propertyWatermark
  };
  const parsed = settingsScalarsSchema.safeParse(candidate);
  if (parsed.success) return parsed.data;
  return settingsScalarsSchema.parse(base);
}
var SERIF_BODY_FONTS = /* @__PURE__ */ new Set(["Minion Pro"]);
function fontSansCssValue(fontSans) {
  const fallback = SERIF_BODY_FONTS.has(fontSans) ? "ui-serif, Georgia, serif" : "ui-sans-serif, system-ui, sans-serif";
  return `'${fontSans}', ${fallback}`;
}
function scalarsToCssVars(scalars) {
  const { colors, typography } = scalars;
  return {
    "--brand-primary": colors.primary,
    "--brand-secondary": colors.secondary,
    "--brand-surface": colors.primary,
    "--brand-secondary-text": colors.secondary,
    "--color-primary": colors.primary,
    "--color-brand": colors.primary,
    "--color-brand-accent": colors.secondary,
    "--color-accent": colors.accent,
    "--color-background": colors.background,
    "--color-foreground": colors.foreground,
    "--color-success": colors.success,
    "--color-warning": colors.warning,
    "--color-error": colors.error,
    "--color-destructive": colors.error,
    "--font-sans": fontSansCssValue(typography.fontSans),
    "--font-display": `'${typography.fontHeading}', ui-serif, Georgia, serif`
  };
}
function cssVarsToStyleText(vars) {
  const body = Object.entries(vars).map(([key, value]) => `${key}:${value}`).join(";");
  return `:root{${body}}`;
}
function collectLogoMediaIds(logos) {
  if (!logos) return [];
  const ids = /* @__PURE__ */ new Set();
  for (const slot of LOGO_SLOTS) {
    const config = logos[slot];
    if (!config) continue;
    if (config.mediaId) ids.add(config.mediaId);
    if (config.mediaIdLight) ids.add(config.mediaIdLight);
    if (config.mediaIdDark) ids.add(config.mediaIdDark);
  }
  return [...ids];
}
function collectPropertyWatermarkMediaIds(scalars) {
  const mediaId = scalars?.propertyWatermark?.mediaId;
  return mediaId ? [mediaId] : [];
}
function collectBrandingMediaIds(scalars) {
  if (!scalars) return [];
  return [.../* @__PURE__ */ new Set([...collectLogoMediaIds(scalars.logos), ...collectPropertyWatermarkMediaIds(scalars)])];
}

// src/settings/contact.ts
var organizationSchema = external_exports.object({
  legalName: external_exports.string().max(120).describe("Ragione sociale"),
  vatNumber: external_exports.string().max(20).optional().describe("Partita IVA"),
  email: external_exports.string().email().max(320).describe("Email"),
  phone: external_exports.string().max(30).describe("Telefono"),
  address: external_exports.object({
    street: external_exports.string().max(120).describe("Indirizzo"),
    city: external_exports.string().max(80).describe("Citt\xE0"),
    postalCode: external_exports.string().max(12).describe("CAP"),
    country: external_exports.string().length(2).describe("Paese (ISO)")
  }).describe("Indirizzo"),
  geo: external_exports.object({
    latitude: external_exports.number().min(-90).max(90).describe("Latitudine"),
    longitude: external_exports.number().min(-180).max(180).describe("Longitudine")
  }).describe("Coordinate"),
  mapUrl: external_exports.string().url().max(500).optional().describe("Link mappa (es. Google Maps). Se vuoto viene generato dalle coordinate."),
  openingHours: external_exports.array(openingHoursSchema).min(1).max(14).describe("Orari")
}).describe("Organizzazione").superRefine((data, ctx) => {
  for (const issue of validateOpeningHours(data.openingHours)) {
    ctx.addIssue({
      code: "custom",
      path: issue.path,
      message: issue.message
    });
  }
});
var contactFormSchema = external_exports.object({
  enabled: external_exports.boolean().describe("Modulo attivo"),
  leadRecipientEmail: external_exports.string().email().max(320).optional().describe("Email destinatario lead"),
  privacyConsentText: external_exports.string().max(2e3).optional().describe("Testo consenso privacy (obbligatorio)"),
  privacyPolicyUrl: external_exports.string().max(500).optional().describe("Link informativa privacy (es. /privacy-policy)"),
  marketingConsentEnabled: external_exports.boolean().describe("Mostra consenso marketing (facoltativo)"),
  marketingConsentText: external_exports.string().max(2e3).optional().describe("Testo consenso marketing"),
  phoneFieldEnabled: external_exports.boolean().describe("Mostra campo telefono"),
  phoneRequired: external_exports.boolean().describe("Telefono obbligatorio"),
  subjectFieldEnabled: external_exports.boolean().describe("Mostra campo oggetto"),
  subjectOptions: external_exports.array(external_exports.object({ value: external_exports.string().max(60).describe("Opzione") })).max(20).optional().describe("Opzioni oggetto (se vuoto \xE8 un campo di testo libero)"),
  labels: external_exports.object({
    name: external_exports.string().max(40).optional().describe("Etichetta nome"),
    email: external_exports.string().max(40).optional().describe("Etichetta email"),
    phone: external_exports.string().max(40).optional().describe("Etichetta telefono"),
    subject: external_exports.string().max(40).optional().describe("Etichetta oggetto"),
    message: external_exports.string().max(40).optional().describe("Etichetta messaggio")
  }).optional().describe("Etichette campi"),
  messages: external_exports.object({
    success: external_exports.string().max(200).optional().describe("Messaggio successo"),
    error: external_exports.string().max(200).optional().describe("Messaggio errore")
  }).optional().describe("Messaggi di stato"),
  submitButtonLabel: external_exports.string().max(30).optional().describe("Etichetta pulsante invio")
}).describe("Modulo contatti").superRefine((data, ctx) => {
  if (!data.enabled) return;
  const required = [
    "leadRecipientEmail",
    "privacyConsentText",
    "submitButtonLabel"
  ];
  for (const key of required) {
    if (!data[key]) {
      ctx.addIssue({ code: "custom", path: [key], message: "Required when contact form is enabled" });
    }
  }
  if (!data.labels?.name || !data.labels?.email || !data.labels?.message) {
    ctx.addIssue({ code: "custom", path: ["labels"], message: "All labels required when enabled" });
  }
  if (data.phoneFieldEnabled && !data.labels?.phone) {
    ctx.addIssue({ code: "custom", path: ["labels", "phone"], message: "Phone label required" });
  }
  if (data.subjectFieldEnabled && !data.labels?.subject) {
    ctx.addIssue({ code: "custom", path: ["labels", "subject"], message: "Subject label required" });
  }
  if (data.marketingConsentEnabled && !data.marketingConsentText) {
    ctx.addIssue({
      code: "custom",
      path: ["marketingConsentText"],
      message: "Marketing consent text required"
    });
  }
  if (!data.messages?.success || !data.messages?.error) {
    ctx.addIssue({ code: "custom", path: ["messages"], message: "All messages required when enabled" });
  }
});
var contactSettingsSchema = external_exports.object({
  organization: organizationSchema,
  contactForm: contactFormSchema
});
function mergeSharedOrganization(targetOrg, sourceOrg) {
  return {
    ...sourceOrg,
    openingHours: mergeOpeningHoursNotes(sourceOrg.openingHours, targetOrg.openingHours)
  };
}
var DEFAULT_CONTACT_SETTINGS_IT = {
  organization: {
    legalName: "Norton Tanzarella S.r.l.",
    email: "info@nortontanzarella.it",
    phone: "+39 0831 000000",
    address: {
      street: "Corso Vittorio Emanuele 12",
      city: "Ostuni",
      postalCode: "72017",
      country: "IT"
    },
    geo: { latitude: 40.7297, longitude: 17.5778 },
    openingHours: DEFAULT_OPENING_HOURS_IT
  },
  contactForm: {
    enabled: true,
    leadRecipientEmail: "info@nortontanzarella.it",
    privacyConsentText: "Ho letto l'informativa privacy e acconsento al trattamento dei dati.",
    privacyPolicyUrl: "/privacy-policy",
    marketingConsentEnabled: true,
    marketingConsentText: "Acconsento a ricevere comunicazioni commerciali e newsletter (facoltativo).",
    phoneFieldEnabled: true,
    phoneRequired: false,
    subjectFieldEnabled: true,
    subjectOptions: [],
    labels: {
      name: "Nome",
      email: "Email",
      phone: "Telefono",
      subject: "Oggetto",
      message: "Messaggio"
    },
    messages: {
      success: "Messaggio inviato. Ti risponderemo al pi\xF9 presto.",
      error: "Invio non riuscito. Riprova pi\xF9 tardi."
    },
    submitButtonLabel: "Invia messaggio"
  }
};

// src/settings/socialPlatforms.ts
var SOCIAL_PLATFORMS = [
  {
    id: "linkedin",
    labelIt: "LinkedIn",
    simpleIconSlug: "linkedin",
    hex: "0A66C2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    id: "instagram",
    labelIt: "Instagram",
    simpleIconSlug: "instagram",
    hex: "E4405F",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
  },
  {
    id: "facebook",
    labelIt: "Facebook",
    simpleIconSlug: "facebook",
    hex: "0866FF",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374 1.036-.374 1.868v1.277h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
  },
  {
    id: "x",
    labelIt: "X",
    simpleIconSlug: "x",
    hex: "000000",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  },
  {
    id: "youtube",
    labelIt: "YouTube",
    simpleIconSlug: "youtube",
    hex: "FF0000",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  },
  {
    id: "tiktok",
    labelIt: "TikTok",
    simpleIconSlug: "tiktok",
    hex: "000000",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
  },
  {
    id: "whatsapp",
    labelIt: "WhatsApp",
    simpleIconSlug: "whatsapp",
    hex: "25D366",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
  }
];
var SOCIAL_PLATFORM_IDS = SOCIAL_PLATFORMS.map((p) => p.id);
function socialPlatformLabelIt(platform) {
  return SOCIAL_PLATFORMS.find((p) => p.id === platform)?.labelIt ?? platform;
}
function socialPlatformIconSlug(platform) {
  return SOCIAL_PLATFORMS.find((p) => p.id === platform)?.simpleIconSlug ?? platform;
}
function socialPlatformIcon(platform) {
  const entry = SOCIAL_PLATFORMS.find((p) => p.id === platform);
  return entry ? { path: entry.path, hex: entry.hex } : { path: "", hex: "000000" };
}

// src/settings/layout.ts
var MAIN_NAV_PATHS = [
  "/",
  "/about",
  "/properties",
  "/property-finder",
  "/virtual-tours",
  "/sell-with-us",
  "/contact"
];
var LEGACY_NAV_PATH_MAP = {
  "/chi-siamo": "/about",
  "/immobili": "/properties",
  "/trova-immobile": "/property-finder",
  "/tour-virtuali": "/virtual-tours",
  "/vendi-con-noi": "/sell-with-us",
  "/contatti": "/contact"
};
function normalizeNavPath(to) {
  return LEGACY_NAV_PATH_MAP[to] ?? to;
}
var LEGAL_LINK_PATHS = ["/privacy-policy", "/cookie-policy"];
var FOOTER_NAV_PATHS = [...MAIN_NAV_PATHS, ...LEGAL_LINK_PATHS];
function normalizeNavPathInput(value) {
  if (typeof value !== "string") return value;
  return normalizeNavPath(value);
}
var mainNavPathSchema = external_exports.preprocess(normalizeNavPathInput, external_exports.enum(MAIN_NAV_PATHS));
var legalLinkPathSchema = external_exports.enum(LEGAL_LINK_PATHS);
var footerNavPathSchema = external_exports.preprocess(normalizeNavPathInput, external_exports.enum(FOOTER_NAV_PATHS));
var httpsUrlSchema = external_exports.string().url().max(500).refine((value) => value.startsWith("https://"), {
  message: "URL deve usare HTTPS"
});
var cmsNavLinkSchema = external_exports.object({
  label: external_exports.string().max(40).describe("Etichetta"),
  to: external_exports.union([footerNavPathSchema, httpsUrlSchema]).describe("Destinazione"),
  external: external_exports.boolean().optional().describe("Link esterno")
}).describe("Link di navigazione");
var mainNavLinkSchema = external_exports.object({
  label: external_exports.string().max(40).describe("Etichetta"),
  to: external_exports.union([mainNavPathSchema, httpsUrlSchema]).describe("Destinazione"),
  external: external_exports.boolean().optional().describe("Link esterno")
}).describe("Link menu principale");
var legalNavLinkSchema = external_exports.object({
  label: external_exports.string().max(40).describe("Etichetta"),
  to: legalLinkPathSchema.describe("Destinazione")
}).describe("Link legale");
var brandFooterVisibilitySchema = external_exports.object({
  name: external_exports.boolean().default(true).describe("Mostra nome nel footer"),
  tagline: external_exports.boolean().default(true).describe("Mostra payoff nel footer"),
  description: external_exports.boolean().default(false).describe("Mostra descrizione nel footer")
}).describe("Visibilit\xE0 nel footer");
var DEFAULT_BRAND_FOOTER_VISIBILITY = {
  name: true,
  tagline: true,
  description: false
};
var brandSchema = external_exports.object({
  name: external_exports.string().max(60).describe("Nome"),
  tagline: external_exports.string().max(120).optional().describe("Payoff"),
  description: external_exports.string().max(200).optional().describe("Descrizione"),
  footerVisibility: brandFooterVisibilitySchema
}).describe("Brand");
var headerLinkSchema = external_exports.object({
  label: external_exports.string().max(30).describe("Etichetta"),
  to: mainNavPathSchema.describe("Destinazione")
});
var headerCtaSchema = headerLinkSchema.optional().describe("CTA header");
var headerSecondaryCtaSchema = headerLinkSchema.optional().describe("CTA secondaria header");
var footerColumnSchema = external_exports.object({
  title: external_exports.string().max(40).describe("Titolo colonna"),
  links: external_exports.array(cmsNavLinkSchema).min(1).max(8).describe("Link")
}).describe("Colonna footer");
var footerSchema = external_exports.object({
  columns: external_exports.array(footerColumnSchema).min(1).max(4).describe("Colonne")
}).describe("Footer");
var socialLinkSchema = external_exports.object({
  platform: external_exports.enum(SOCIAL_PLATFORM_IDS).describe("Piattaforma"),
  url: httpsUrlSchema.describe("URL")
}).describe("Link social");
var siteMenuSettingsSchema = external_exports.object({
  mediaId: optionalMediaIdSchema.describe("Immagine pannello menu"),
  quote: external_exports.string().min(1).max(240).describe("Frase"),
  attribution: external_exports.string().max(80).optional().describe("Attribuzione")
}).describe("Pannello menu fullscreen");
var DEFAULT_SITE_MENU_SETTINGS_IT = {
  quote: "Ogni pietra racconta una storia di luce, terra e appartenenza.",
  attribution: "\u2014 Ostuni"
};
var DEFAULT_SITE_MENU_SETTINGS_EN = {
  quote: "Every stone tells a story of light, land, and belonging.",
  attribution: "\u2014 Ostuni"
};
var layoutSettingsSchema = external_exports.object({
  brand: brandSchema,
  headerNav: external_exports.array(mainNavLinkSchema).min(1).max(8).describe("Menu principale"),
  headerCta: headerCtaSchema,
  headerSecondaryCta: headerSecondaryCtaSchema,
  footer: footerSchema,
  legalLinks: external_exports.array(legalNavLinkSchema).min(1).max(6).describe("Link legali"),
  social: external_exports.array(socialLinkSchema).max(6).default([]).describe("Social"),
  menu: siteMenuSettingsSchema.describe("Pannello menu fullscreen")
});
function collectMenuMediaIds(menu) {
  if (!menu?.mediaId) return [];
  return [menu.mediaId];
}
var DEFAULT_LAYOUT_SETTINGS_IT = {
  brand: {
    name: "Norton Tanzarella",
    tagline: "Agenzia immobiliare a Ostuni e in Valle d'Itria.",
    description: "Masserie, rustici e trulli: consulenza per acquisto e vendita in Valle d'Itria.",
    footerVisibility: DEFAULT_BRAND_FOOTER_VISIBILITY
  },
  headerNav: [
    { label: "Home", to: "/" },
    { label: "Chi siamo", to: "/about" },
    { label: "Immobili", to: "/properties" },
    { label: "Trova immobile", to: "/property-finder" },
    { label: "Tour virtuali", to: "/virtual-tours" }
  ],
  headerCta: { label: "Contattaci", to: "/contact" },
  headerSecondaryCta: { label: "Vendi con noi", to: "/sell-with-us" },
  footer: {
    columns: [
      {
        title: "Navigazione",
        links: [
          { label: "Home", to: "/" },
          { label: "Chi siamo", to: "/about" },
          { label: "Immobili", to: "/properties" },
          { label: "Trova immobile", to: "/property-finder" },
          { label: "Tour virtuali", to: "/virtual-tours" }
        ]
      },
      {
        title: "Legale",
        links: [
          { label: "Privacy policy", to: "/privacy-policy" },
          { label: "Cookie policy", to: "/cookie-policy" }
        ]
      }
    ]
  },
  legalLinks: [
    { label: "Privacy policy", to: "/privacy-policy" },
    { label: "Cookie policy", to: "/cookie-policy" }
  ],
  social: [
    { platform: "linkedin", url: "https://linkedin.com/company/norton-tanzarella" },
    { platform: "instagram", url: "https://instagram.com/norton.tanzarella" }
  ],
  menu: { ...DEFAULT_SITE_MENU_SETTINGS_IT }
};

// src/settings/site.ts
var siteSettingsSchema = contactSettingsSchema.merge(layoutSettingsSchema);
var DEFAULT_SITE_SETTINGS_IT = {
  ...DEFAULT_CONTACT_SETTINGS_IT,
  ...DEFAULT_LAYOUT_SETTINGS_IT
};
function mergeHeaderNav(stored) {
  const defaults = DEFAULT_SITE_SETTINGS_IT.headerNav;
  const excludeTo = new Set(
    [
      DEFAULT_SITE_SETTINGS_IT.headerCta?.to,
      DEFAULT_SITE_SETTINGS_IT.headerSecondaryCta?.to
    ].filter(Boolean)
  );
  if (!Array.isArray(stored) || stored.length === 0) {
    return defaults.filter((link) => !excludeTo.has(link.to));
  }
  const byTo = /* @__PURE__ */ new Map();
  for (const item of stored) {
    if (!item || typeof item !== "object") continue;
    const link = item;
    if (typeof link.to === "string" && typeof link.label === "string") {
      const to = normalizeNavPath(link.to);
      if (excludeTo.has(to)) continue;
      byTo.set(to, { ...link, to });
    }
  }
  const merged = [];
  for (const def of defaults) {
    if (excludeTo.has(def.to)) continue;
    merged.push(byTo.get(def.to) ?? def);
    byTo.delete(def.to);
  }
  for (const leftover of byTo.values()) {
    if (excludeTo.has(leftover.to)) continue;
    merged.push(leftover);
  }
  return merged.slice(0, 8);
}
function normalizeHeaderCta(value) {
  if (!value || typeof value !== "object") return void 0;
  const link = value;
  if (typeof link.label !== "string" || typeof link.to !== "string") return void 0;
  return { label: link.label, to: normalizeNavPath(link.to) };
}
function normalizeFooter(value) {
  if (!value || typeof value !== "object") return void 0;
  const footer = value;
  if (!Array.isArray(footer.columns)) return void 0;
  return {
    columns: footer.columns.map((col) => {
      const column = col;
      const title = typeof column.title === "string" ? column.title : "";
      const links = Array.isArray(column.links) ? column.links.map((item) => {
        if (!item || typeof item !== "object") return null;
        const link = item;
        if (typeof link.label !== "string" || typeof link.to !== "string") return null;
        return {
          label: link.label,
          to: normalizeNavPath(link.to),
          ...typeof link.external === "boolean" ? { external: link.external } : {}
        };
      }).filter((link) => link != null) : [];
      return { title, links };
    })
  };
}
function normalizeMenu(value) {
  const defaults = DEFAULT_SITE_MENU_SETTINGS_IT;
  if (!value || typeof value !== "object") return { ...defaults };
  const parsed = siteMenuSettingsSchema.safeParse({
    ...defaults,
    ...value,
    mediaId: value.mediaId === "" || value.mediaId === null ? void 0 : value.mediaId
  });
  if (!parsed.success) return { ...defaults };
  return parsed.data;
}
function mergeSiteSettingsDefaults(document) {
  const partial = document && typeof document === "object" ? document : {};
  const partialOrg = partial.organization ?? {};
  const partialForm = partial.contactForm ?? {};
  const blankToUndefined = (value) => value === "" ? void 0 : value;
  return siteSettingsSchema.parse({
    ...DEFAULT_SITE_SETTINGS_IT,
    ...partial,
    organization: {
      ...DEFAULT_SITE_SETTINGS_IT.organization,
      ...partialOrg,
      ..."mapUrl" in partialOrg ? { mapUrl: blankToUndefined(partialOrg.mapUrl) } : {}
    },
    contactForm: {
      ...DEFAULT_SITE_SETTINGS_IT.contactForm,
      ...partialForm,
      ..."leadRecipientEmail" in partialForm ? { leadRecipientEmail: blankToUndefined(partialForm.leadRecipientEmail) } : {},
      ..."privacyPolicyUrl" in partialForm ? { privacyPolicyUrl: blankToUndefined(partialForm.privacyPolicyUrl) } : {},
      // Deep-merge nested objects so upgrading stored settings (older shape)
      // keeps the newly added default labels (phone/subject) and messages.
      labels: {
        ...DEFAULT_SITE_SETTINGS_IT.contactForm.labels,
        ...partialForm.labels ?? void 0
      },
      messages: {
        ...DEFAULT_SITE_SETTINGS_IT.contactForm.messages,
        ...partialForm.messages ?? void 0
      }
    },
    brand: {
      ...DEFAULT_SITE_SETTINGS_IT.brand,
      ...partial.brand,
      footerVisibility: {
        ...DEFAULT_SITE_SETTINGS_IT.brand.footerVisibility,
        ...partial.brand?.footerVisibility
      }
    },
    headerNav: mergeHeaderNav(partial.headerNav),
    headerCta: normalizeHeaderCta(partial.headerCta) ?? DEFAULT_SITE_SETTINGS_IT.headerCta,
    headerSecondaryCta: normalizeHeaderCta(partial.headerSecondaryCta) ?? DEFAULT_SITE_SETTINGS_IT.headerSecondaryCta,
    footer: normalizeFooter(partial.footer) ?? DEFAULT_SITE_SETTINGS_IT.footer,
    legalLinks: partial.legalLinks ?? DEFAULT_SITE_SETTINGS_IT.legalLinks,
    social: partial.social ?? DEFAULT_SITE_SETTINGS_IT.social,
    menu: normalizeMenu(partial.menu)
  });
}

// src/pages/document.ts
var cmsSeoSchema = external_exports.object({
  title: external_exports.string().max(120).optional(),
  description: external_exports.string().max(320).optional()
});
var cmsSectionSchema = external_exports.object({
  id: external_exports.string().uuid(),
  type: external_exports.string(),
  enabled: external_exports.boolean(),
  order: external_exports.number().int().min(0),
  content: external_exports.record(external_exports.unknown())
});
var cmsPageDocumentSchema = external_exports.object({
  seo: cmsSeoSchema.optional(),
  sections: external_exports.array(cmsSectionSchema)
});

// src/pages/registry.ts
var HOME_STATEMENT_IT = {
  title: "Investire in Italia",
  body: "Investire in Italia, e in particolare in Valle d'Itria, significa scegliere un patrimonio di luce, pietra e paesaggio: case che custodiscono storia e generano valore nel tempo.",
  tagline: "ITALIA. VALLE D'ITRIA. VALORE CHE DURA."
};
var HOME_STATEMENT_EN = {
  title: "Investing in Italy",
  body: "Investing in Italy \u2014 and in the Valle d'Itria \u2014 means choosing a heritage of light, stone and landscape: homes that hold history and build lasting value.",
  tagline: "ITALY. VALLE D'ITRIA. ENDURING VALUE."
};
var HOME_CATEGORY_GRID_ITEMS_IT = [
  {
    label: "Masserie",
    imageAlt: "Masseria in Valle d'Itria",
    categorySlug: "masseria",
    ctaLabel: "Vedi gli immobili"
  },
  {
    label: "Rustici",
    imageAlt: "Rustico in campagna",
    categorySlug: "rustici",
    ctaLabel: "Vedi gli immobili"
  },
  {
    label: "Trulli",
    imageAlt: "Trulli in Valle d'Itria",
    categorySlug: "trulli",
    ctaLabel: "Vedi gli immobili"
  },
  {
    label: "Centro storico Ostuni",
    imageAlt: "Casa nel centro storico di Ostuni",
    categorySlug: "centro-storico",
    ctaLabel: "Vedi gli immobili"
  }
];
var HOME_CATEGORY_GRID_ITEMS_EN = [
  {
    label: "Masserie",
    imageAlt: "Masseria in the Valle d'Itria",
    categorySlug: "masseria",
    ctaLabel: "View properties"
  },
  {
    label: "Rustici",
    imageAlt: "Country house (rustico)",
    categorySlug: "rustici",
    ctaLabel: "View properties"
  },
  {
    label: "Trulli",
    imageAlt: "Trulli in the Valle d'Itria",
    categorySlug: "trulli",
    ctaLabel: "View properties"
  },
  {
    label: "Ostuni historic centre",
    imageAlt: "Home in Ostuni historic centre",
    categorySlug: "centro-storico",
    ctaLabel: "View properties"
  }
];
var HOME_ABOUT_TEASER_CAROUSEL_IT = [
  { imageAlt: "Ostuni al tramonto" },
  { imageAlt: "Masseria in Valle d'Itria" },
  { imageAlt: "Interior di prestigio" }
];
var HOME_ABOUT_TEASER_CAROUSEL_EN = [
  { imageAlt: "Ostuni at sunset" },
  { imageAlt: "Masseria in the Valle d'Itria" },
  { imageAlt: "Prestige interior" }
];
var HOME_DEFAULTS_IT = {
  seo: {
    title: "Norton Tanzarella",
    description: "Agenzia immobiliare a Ostuni e in Valle d'Itria \u2014 masserie, rustici e trulli."
  },
  sections: [
    {
      id: "00000000-0000-4000-8000-000000000001",
      type: "hero",
      enabled: true,
      order: 0,
      content: {
        title: "La casa dei tuoi sogni in Valle d'Itria",
        subtitle: "Masserie, rustici e case a Ostuni: consulenza personalizzata per acquisto e vendita.",
        cta: { label: "Scopri gli immobili", to: "/properties" }
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000005",
      type: "statement",
      enabled: true,
      order: 1,
      content: { ...HOME_STATEMENT_IT }
    },
    {
      id: "00000000-0000-4000-8000-000000000006",
      type: "categoryGrid",
      enabled: true,
      order: 2,
      content: {
        items: [...HOME_CATEGORY_GRID_ITEMS_IT]
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000003",
      type: "featuredCollection",
      enabled: true,
      order: 3,
      content: {
        collectionKey: "immobili",
        mode: "featured",
        limit: 6,
        title: "Immobili in evidenza",
        viewAllLabel: "Vedi tutti",
        hideWhenEmpty: true
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000002",
      type: "features",
      enabled: true,
      order: 4,
      content: {
        eyebrow: "PERCH\xC9 SCEGLIERCI",
        title: "Perch\xE9 sceglierci",
        items: [
          {
            title: "Vendita di immobili di prestigio",
            description: "Masserie, trulli, ville tra gli ulivi, dimore fronte mare e residenze di carattere.",
            iconKey: "mdi:crown-outline"
          },
          {
            title: "Valutazioni immobiliari",
            description: "Stime esperte, con conoscenza profonda del mercato locale e delle tipologiche in pietra.",
            iconKey: "mdi:file-document-outline"
          },
          {
            title: "Territorio e tipologiche",
            description: "Conosciamo il territorio: masserie, rustici, trulli, lamie e case nei borghi bianchi.",
            iconKey: "mdi:map-outline"
          },
          {
            title: "Architetture in pietra",
            description: "Volte a stella, chianche, muretti a secco e calce bianca: il linguaggio della terra di pietra.",
            iconKey: "mdi:home-city-outline"
          }
        ]
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000007",
      type: "googleReviews",
      enabled: true,
      order: 5,
      content: {
        title: "GOOGLE REVIEWS",
        maxItems: 5,
        hideWhenEmpty: true,
        showSummary: true
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000008",
      type: "aboutTeaser",
      enabled: true,
      order: 6,
      content: {
        title: "Chi siamo",
        body: "Da Norton Tanzarella accompagniamo chi sceglie di investire e vivere in Valle d'Itria \u2014 tra Ostuni, masserie e borghi bianchi. La soddisfazione di chi acquista \xE8 la nostra priorit\xE0: consulenza personalizzata dalla prima visita alla firma, per trovare la casa giusta tra rustici, trulli e dimore di carattere.",
        button: { label: "Scopri chi siamo", to: "/about" },
        backgroundImageAlt: "Paesaggio della Valle d'Itria",
        carouselItems: [...HOME_ABOUT_TEASER_CAROUSEL_IT],
        autoplayMs: 5e3
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000004",
      type: "cta",
      enabled: true,
      order: 7,
      content: {
        title: "Hai bisogno di una valutazione?",
        description: "Contattaci per un appuntamento senza impegno a Ostuni.",
        button: { label: "Contattaci", to: "/contact" }
      }
    }
  ]
};
var HOME_DEFAULTS_EN = {
  seo: {
    title: "Norton Tanzarella",
    description: "Real estate agency in Ostuni and the Valle d'Itria \u2014 masserie, rustici and trulli."
  },
  sections: [
    {
      id: "00000000-0000-4000-8000-000000000001",
      type: "hero",
      enabled: true,
      order: 0,
      content: {
        title: "Find your dream home in the Valle d'Itria",
        subtitle: "Masserie, rustici and homes in Ostuni: personalised advice for buying and selling.",
        cta: { label: "Browse properties", to: "/properties" }
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000005",
      type: "statement",
      enabled: true,
      order: 1,
      content: { ...HOME_STATEMENT_EN }
    },
    {
      id: "00000000-0000-4000-8000-000000000006",
      type: "categoryGrid",
      enabled: true,
      order: 2,
      content: {
        items: [...HOME_CATEGORY_GRID_ITEMS_EN]
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000003",
      type: "featuredCollection",
      enabled: true,
      order: 3,
      content: {
        collectionKey: "immobili",
        mode: "featured",
        limit: 6,
        title: "Featured properties",
        viewAllLabel: "View all",
        hideWhenEmpty: true
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000002",
      type: "features",
      enabled: true,
      order: 4,
      content: {
        eyebrow: "WHY CHOOSE US",
        title: "Why choose us",
        items: [
          {
            title: "Prestige Property Sales",
            description: "Masserie, trulli, olive-grove villas, seafront homes and character residences.",
            iconKey: "mdi:crown-outline"
          },
          {
            title: "Property Valuations",
            description: "Expert valuations, with deep knowledge of the local market and stone property types.",
            iconKey: "mdi:file-document-outline"
          },
          {
            title: "Territory and Property Types",
            description: "We know the territory: masserie, rustici, trulli, lamie and homes in whitewashed towns.",
            iconKey: "mdi:map-outline"
          },
          {
            title: "Stone Architecture",
            description: "Star vaults, chianche floors, dry-stone walls and whitewashed lime: the language of stone country.",
            iconKey: "mdi:home-city-outline"
          }
        ]
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000007",
      type: "googleReviews",
      enabled: true,
      order: 5,
      content: {
        title: "GOOGLE REVIEWS",
        maxItems: 5,
        hideWhenEmpty: true,
        showSummary: true
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000008",
      type: "aboutTeaser",
      enabled: true,
      order: 6,
      content: {
        title: "About us",
        body: "At Norton Tanzarella we guide international buyers investing and living in the Valle d'Itria \u2014 Ostuni, masserie and whitewashed hill towns. Client satisfaction comes first: tailored advice from first viewing to completion, to match each buyer with the right home among rustici, trulli and character properties.",
        button: { label: "Read more", to: "/about" },
        backgroundImageAlt: "Valle d'Itria landscape",
        carouselItems: [...HOME_ABOUT_TEASER_CAROUSEL_EN],
        autoplayMs: 5e3
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000004",
      type: "cta",
      enabled: true,
      order: 7,
      content: {
        title: "Need a valuation?",
        description: "Contact us for a no-obligation meeting in Ostuni.",
        button: { label: "Contact us", to: "/contact" }
      }
    }
  ]
};
var CHI_SIAMO_SLIDESHOW_ITEMS = [
  { imageAlt: "Ostuni al tramonto" },
  { imageAlt: "Masseria in Valle d'Itria" },
  { imageAlt: "Interior di prestigio" },
  { imageAlt: "Paesaggio della campagna pugliese" }
];
var CHI_SIAMO_DEFAULTS_IT = {
  seo: {
    title: "Chi siamo",
    description: "Norton Tanzarella a Ostuni e in Valle d'Itria \u2014 visione, territorio e immobiliare di prestigio."
  },
  sections: [
    {
      id: "00000000-0000-4000-8000-000000000010",
      type: "hero",
      enabled: true,
      order: 0,
      content: {
        title: "Chi siamo",
        subtitle: "Uno sguardo su Ostuni, la Valle d'Itria e l'immobiliare di prestigio ancorato a un art de vivre."
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000017",
      type: "imageSlideshow",
      enabled: true,
      order: 1,
      content: {
        items: [...CHI_SIAMO_SLIDESHOW_ITEMS],
        autoplayMs: 5e3
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000011",
      type: "split",
      enabled: true,
      order: 2,
      content: {
        title: "La nostra visione",
        body: "Offriamo un'esperienza d'acquisto eccezionale radicata a Ostuni e in Valle d'Itria. Aiutiamo a realizzare il sogno di una masseria, un rustico o una casa distintiva, rendendo il percorso entusiasmante e senza stress.\n\nServizi personalizzati, conoscenza approfondita del mercato locale e relazioni di lungo periodo: possedere qui non \xE8 solo un investimento, \xE8 una scelta di vita.",
        imageAlt: "Ostuni e la Valle d'Itria"
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000018",
      type: "split",
      enabled: true,
      order: 3,
      content: {
        title: "Una comunit\xE0 impegnata",
        body: "Da anni accompagniamo vendite e acquisizioni di prestigio in Valle d'Itria. Un approccio esigente, una strategia di valorizzazione e una rete solida di acquirenti e prescrittori ci hanno reso un punto di riferimento.\n\nOggi Norton Tanzarella \xE8 una marca e una comunit\xE0 riunita intorno all'immobiliare di prestigio e all'art de vivre che incarna.",
        imageAlt: "Incontro e consulenza immobiliare",
        reverse: true
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000019",
      type: "split",
      enabled: true,
      order: 4,
      content: {
        title: "Il territorio",
        body: "Condividiamo i luoghi che fanno la ricchezza della nostra regione: masserie, architetture notevoli, paesaggi ispiratori. Perch\xE9 l'immobiliare di prestigio \xE8 anche una questione di territorio e di stile di vita.\n\nDa Ostuni alla campagna, ogni indirizzo racconta un pezzo della Valle d'Itria.",
        imageAlt: "Masseria e paesaggio pugliese"
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000013",
      type: "team",
      enabled: true,
      order: 5,
      content: {
        title: "Chi guida l'agenzia",
        name: "Norton Tanzarella",
        role: "Fondatore",
        bio: "Una visione esigente del mercato di prestigio in Valle d'Itria, unita a una strategia di valorizzazione e a una rete solida di acquirenti e prescrittori. Al centro, le persone e i luoghi \u2014 da Ostuni alle masserie della campagna."
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000012",
      type: "stats",
      enabled: false,
      order: 6,
      content: {
        items: [
          { value: 20, suffix: "+", label: "Anni di esperienza" },
          { value: 500, suffix: "+", label: "Clienti accompagnati" },
          { value: 150, suffix: "+", label: "Immobili gestiti" },
          { value: 1, label: "Rete di fiducia" }
        ]
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000014",
      type: "cta",
      enabled: true,
      order: 7,
      content: {
        title: "Parliamone",
        description: "Accompagniamo acquisti e vendite di prestigio in Valle d'Itria con discrezione e chiarezza.",
        button: { label: "Contattaci", to: "/contact" }
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000015",
      type: "faq",
      enabled: true,
      order: 8,
      content: {
        title: "Domande frequenti",
        items: [
          {
            question: "Perch\xE9 affidarsi a Norton Tanzarella a Ostuni e in Valle d'Itria?",
            answer: "Conosciamo il territorio, le tipologiche (masserie, rustici, trulli, centro storico) e le dinamiche di prezzo. Uniamo discrezione, trasparenza e una rete di professionisti per accompagnarvi in ogni fase."
          },
          {
            question: "Cercate anche masserie, rustici e trulli?",
            answer: "S\xEC. La ricerca include masserie, rustici, trulli, casali e abitazioni nel centro storico di Ostuni, in base a esigenze e stile di vita."
          },
          {
            question: "Quali servizi offrite oltre alla ricerca immobiliare?",
            answer: "Consulenza legale e finanziaria, visite, negoziazioni, project management, gestione immobiliare e affitti turistici, assistenza post-vendita, relocation e rete di professionisti."
          },
          {
            question: "Aiutate anche dopo il rogito e per trasferirsi in Italia?",
            answer: "S\xEC. Offriamo assistenza post-vendita e servizi di trasferimento (visti, permessi di soggiorno, insediamento), oltre al collegamento con professionisti fidati."
          },
          {
            question: "Come avviene la valutazione di una propriet\xE0?",
            answer: "Consideriamo ubicazione, qualit\xE0, stato, rarit\xE0 tipologica e andamento del mercato locale in Valle d'Itria. La stima \xE8 confidenziale e calibrata sul posizionamento specifico."
          }
        ]
      }
    }
  ]
};
var CHI_SIAMO_DEFAULTS_EN = {
  seo: {
    title: "About us",
    description: "Norton Tanzarella in Ostuni and the Valle d'Itria \u2014 vision, territory and prestige real estate."
  },
  sections: [
    {
      id: "00000000-0000-4000-8000-000000000010",
      type: "hero",
      enabled: true,
      order: 0,
      content: {
        title: "About us",
        subtitle: "A gaze on Ostuni, the Valle d'Itria and prestige real estate rooted in a way of living."
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000017",
      type: "imageSlideshow",
      enabled: true,
      order: 1,
      content: {
        items: [
          { imageAlt: "Ostuni at sunset" },
          { imageAlt: "Masseria in the Valle d'Itria" },
          { imageAlt: "Prestige interior" },
          { imageAlt: "Puglian countryside landscape" }
        ],
        autoplayMs: 5e3
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000011",
      type: "split",
      enabled: true,
      order: 2,
      content: {
        title: "Our vision",
        body: "We offer an exceptional buying experience rooted in Ostuni and the Valle d'Itria. We help people achieve the dream of a masseria, rustico or distinctive home, making the journey exciting and stress-free.\n\nTailored services, deep local market knowledge and long-term relationships: owning here is not only an investment \u2014 it is a lifestyle choice.",
        imageAlt: "Ostuni and the Valle d'Itria"
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000018",
      type: "split",
      enabled: true,
      order: 3,
      content: {
        title: "An engaged community",
        body: "For years we have accompanied prestige sales and acquisitions in the Valle d'Itria. A demanding approach, a valorisation strategy and a solid network of buyers and introducers have made us a market reference.\n\nToday Norton Tanzarella is a brand and a community gathered around prestige real estate and the art of living it embodies.",
        imageAlt: "Property consultation meeting",
        reverse: true
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000019",
      type: "split",
      enabled: true,
      order: 4,
      content: {
        title: "The territory",
        body: "We share the places that enrich our region: masserie, remarkable architecture, inspiring landscapes. Prestige real estate is also a matter of territory and lifestyle.\n\nFrom Ostuni to the countryside, every address tells a piece of the Valle d'Itria.",
        imageAlt: "Masseria and Puglian landscape"
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000013",
      type: "team",
      enabled: true,
      order: 5,
      content: {
        title: "Who leads the agency",
        name: "Norton Tanzarella",
        role: "Founder",
        bio: "A demanding vision of the prestige market in the Valle d'Itria, combined with a valorisation strategy and a solid network of buyers and introducers. At the centre: people and places \u2014 from Ostuni to the masserie of the countryside."
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000012",
      type: "stats",
      enabled: false,
      order: 6,
      content: {
        items: [
          { value: 20, suffix: "+", label: "Years of experience" },
          { value: 500, suffix: "+", label: "Clients guided" },
          { value: 150, suffix: "+", label: "Properties managed" },
          { value: 1, label: "Trusted network" }
        ]
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000014",
      type: "cta",
      enabled: true,
      order: 7,
      content: {
        title: "Let's talk",
        description: "We accompany prestige purchases and sales in the Valle d'Itria with discretion and clarity.",
        button: { label: "Contact us", to: "/contact" }
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000015",
      type: "faq",
      enabled: true,
      order: 8,
      content: {
        title: "Frequently asked questions",
        items: [
          {
            question: "Why choose Norton Tanzarella in Ostuni and the Valle d'Itria?",
            answer: "We know the territory, property types (masserie, rustici, trulli, historic centre) and pricing dynamics. We combine discretion, transparency and a network of professionals at every stage."
          },
          {
            question: "Do you search for masserie, rustici and trulli?",
            answer: "Yes. Our search covers masserie, rustici, trulli, farmhouses and homes in Ostuni historic centre, matched to your needs and lifestyle."
          },
          {
            question: "What services do you offer beyond property search?",
            answer: "Legal and financial advice, viewings, negotiations, project management, property and vacation-rental management, after-sales support, relocation and a network of professionals."
          },
          {
            question: "Do you help after completion and with relocating to Italy?",
            answer: "Yes. We provide after-sales support and relocation services (visas, residency permits, settling in), plus introductions to trusted professionals."
          },
          {
            question: "How is a property valued?",
            answer: "We consider location, quality, condition, typological rarity and local market trends in the Valle d'Itria. Estimates are confidential and calibrated to each property."
          }
        ]
      }
    }
  ]
};
var PAGE_REGISTRY = {
  home: {
    allowedTypes: [
      "hero",
      "statement",
      "categoryGrid",
      "features",
      "featuredCollection",
      "googleReviews",
      "aboutTeaser",
      "cta"
    ],
    reorderable: [
      "statement",
      "categoryGrid",
      "features",
      "featuredCollection",
      "googleReviews",
      "aboutTeaser",
      "cta"
    ],
    defaults: (locale) => locale === "en" ? HOME_DEFAULTS_EN : HOME_DEFAULTS_IT,
    milestone: "M1"
  },
  "chi-siamo": {
    allowedTypes: ["hero", "imageSlideshow", "split", "team", "stats", "cta", "faq"],
    reorderable: ["imageSlideshow", "split", "team", "stats", "cta", "faq"],
    defaults: (locale) => locale === "en" ? CHI_SIAMO_DEFAULTS_EN : CHI_SIAMO_DEFAULTS_IT,
    milestone: "M2"
  },
  "immobili-index": {
    allowedTypes: ["pageHeader", "cta"],
    reorderable: ["cta"],
    defaults: (locale) => locale === "en" ? {
      seo: {
        title: "Properties",
        description: "Browse masserie, rustici and homes in Ostuni and the Valle d'Itria."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000050",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Properties",
            lead: "Find a masseria, rustico or home in Ostuni and the Valle d'Itria."
          }
        },
        {
          id: "00000000-0000-4000-8000-000000000051",
          type: "cta",
          enabled: true,
          order: 1,
          content: {
            title: "Selling Distinction",
            description: "Let us tell the story of your property",
            button: { label: "Contact our agency", to: "/sell-with-us" }
          }
        }
      ]
    } : {
      seo: {
        title: "Immobili",
        description: "Sfoglia masserie, rustici e case a Ostuni e in Valle d'Itria."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000050",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Immobili",
            lead: "Trova masseria, rustico o casa a Ostuni e in Valle d'Itria."
          }
        },
        {
          id: "00000000-0000-4000-8000-000000000051",
          type: "cta",
          enabled: true,
          order: 1,
          content: {
            title: "Vendi con distinzione",
            description: "Raccontiamo insieme la storia del tuo immobile",
            button: { label: "Contatta la nostra agenzia", to: "/sell-with-us" }
          }
        }
      ]
    },
    milestone: "M3"
  },
  contatti: {
    allowedTypes: ["pageHeader", "richText"],
    reorderable: [],
    defaults: (locale) => locale === "en" ? {
      seo: { title: "Contact", description: "Get in touch with Norton Tanzarella." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000020",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: { title: "Contact us" }
        },
        {
          id: "00000000-0000-4000-8000-000000000021",
          type: "richText",
          enabled: true,
          order: 1,
          content: { body: "Write to us for valuations, viewings or general information." }
        }
      ]
    } : {
      seo: { title: "Contatti", description: "Contatta Norton Tanzarella." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000020",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: { title: "Contattaci" }
        },
        {
          id: "00000000-0000-4000-8000-000000000021",
          type: "richText",
          enabled: true,
          order: 1,
          content: {
            body: "Scrivici per valutazioni, appuntamenti di visita o informazioni generali."
          }
        }
      ]
    },
    milestone: "M2"
  },
  "property-finder": {
    allowedTypes: ["pageHeader", "richText"],
    reorderable: [],
    defaults: (locale) => locale === "en" ? {
      seo: {
        title: "Property Finder",
        description: "Full property finder service in Italy: tailored search, viewings, negotiation, legal and tax support."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000060",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Our Comprehensive Property Finder Service",
            lead: "From the first consultation to the final purchase, we guide you every step of the way."
          }
        },
        {
          id: "00000000-0000-4000-8000-000000000061",
          type: "richText",
          enabled: true,
          order: 1,
          content: {
            body: `At our estate agency, we understand that **purchasing a property in a foreign country** can be a daunting and complex process, which is why we are committed to taking care of everything for our clients. From the *initial consultation* to the *final purchase*, we will be there every step of the way to guide you through the process and ensure that everything runs smoothly. Our team of experts will help you to **identify the right properties**, arrange viewings, **negotiate the best possible price** and manage all aspects of the purchase process, including legal and financial matters. We work with a network of trusted legal and financial advisors to ensure that all aspects of the purchase process are fully taken care of, including *title searches*, *property registration*, *tax matters* and more.

> Our goal is to provide our clients with a **stress-free and seamless experience**, allowing them to relax and enjoy the excitement of owning a property in Italy.

---

### A tailored search

To begin the process, we will craft a **customized profile** based on your specific requirements. With this information in hand, we will conduct an extensive search of all available properties in your desired areas, carefully filtering out those that do not meet your criteria and presenting only the finest options for your consideration.

### Viewings, handled for you

Once we have identified a selection of potential properties, we will work with various agencies to create a **comprehensive itinerary for viewing**. You can rest assured that we will handle all communication and coordination with these agencies, sparing you any unnecessary hassle.

During the viewing process, we will be at your side every step of the way, providing invaluable **translation services** and *expert advice* on each property that you see.

---

## Large Coverage

At our estate agency, we take pride in our **large coverage**, which extends to some of the most desirable locations throughout **Italy**. Our extensive network of local agents and partners allows us to offer our clients a wide selection of properties in popular destinations such as **Tuscany**, the **Amalfi Coast**, the **Italian Lakes**, and more. We are dedicated to providing our clients with an exceptional level of service, no matter where they are looking to buy a property in Italy. Whether you are seeking a *rustic countryside retreat* or a *chic urban apartment*, we have the expertise and resources to help you find the perfect property in the location that best suits your needs and lifestyle.`
          }
        }
      ]
    } : {
      seo: {
        title: "Trova immobile",
        description: "Servizio completo di ricerca immobili in Italia: profilo su misura, visite, negoziazione e gestione legale e fiscale."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000060",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Il nostro servizio completo di ricerca immobili",
            lead: "Dalla prima consulenza all\u2019acquisto, ti accompagniamo in ogni fase."
          }
        },
        {
          id: "00000000-0000-4000-8000-000000000061",
          type: "richText",
          enabled: true,
          order: 1,
          content: {
            body: `Nella nostra agenzia immobiliare sappiamo quanto possa risultare impegnativo e complesso **acquistare un immobile all\u2019estero**: per questo ci impegnamo a occuparci di tutto per i nostri clienti. Dalla *prima consulenza* fino all\u2019*acquisto finale*, saremo al vostro fianco in ogni fase per guidarvi nel percorso e garantire che tutto proceda senza intoppi. Il nostro team di esperti vi aiuter\xE0 a **individuare le propriet\xE0 giuste**, organizzare le visite, **negoziare il miglior prezzo possibile** e gestire tutti gli aspetti dell\u2019acquisto, comprese le questioni legali e finanziarie. Collaboriamo con una rete di consulenti legali e finanziari di fiducia per assicurarci che ogni aspetto del processo sia pienamente curato, dalle *ricerche ipotecarie* alla *registrazione dell\u2019immobile*, dalle *questioni fiscali* e oltre.

> Il nostro obiettivo \xE8 offrire un\u2019**esperienza serena e senza stress**, cos\xEC potrete godervi l\u2019emozione di possedere un immobile in Italia.

---

### Una ricerca su misura

Per iniziare, costruiremo un **profilo personalizzato** basato sulle vostre esigenze specifiche. Con queste informazioni condurremo una ricerca approfondita di tutte le propriet\xE0 disponibili nelle zone di vostro interesse, filtrando con cura quelle che non corrispondono ai criteri e presentandovi solo le opzioni migliori da valutare.

### Visite, gestite per voi

Una volta individuata una selezione di immobili potenziali, collaboreremo con varie agenzie per creare un **itinerario completo di visite**. Potrete contare sul fatto che gestiamo noi tutta la comunicazione e il coordinamento con queste agenzie, evitandovi ogni inutile complicazione.

Durante le visite saremo al vostro fianco in ogni momento, offrendo **servizi di traduzione** e *consigli esperti* su ciascuna propriet\xE0 che vedrete.

---

## Ampia copertura

Nella nostra agenzia siamo orgogliosi della nostra **ampia copertura**, che si estende ad alcune delle localit\xE0 pi\xF9 desiderabili di tutta **Italia**. La nostra vasta rete di agenti e partner locali ci consente di offrire una vasta selezione di immobili in destinazioni come la **Toscana**, la **Costiera Amalfitana**, i **laghi italiani** e oltre. Siamo dedicati a fornire un livello di servizio eccezionale, ovunque stiate cercando di acquistare in Italia. Che cerchiate un *rifugio rustico in campagna* o un *appartamento urbano raffinato*, abbiamo l\u2019esperienza e le risorse per aiutarvi a trovare la propriet\xE0 perfetta nella localit\xE0 pi\xF9 adatta alle vostre esigenze e al vostro stile di vita.`
          }
        }
      ]
    },
    milestone: "M2"
  },
  "virtual-tours": {
    allowedTypes: ["pageHeader", "youtubeGallery"],
    reorderable: [],
    defaults: (locale) => locale === "en" ? {
      seo: {
        title: "Virtual Tours",
        description: "Explore selected properties with virtual tours."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000070",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Virtual Tours",
            lead: "Explore trulli, masserie and character homes across the Valle d'Itria through our video tours \u2014 an authentic first glimpse of each property, before you travel."
          }
        },
        {
          id: "00000000-0000-4000-8000-000000000071",
          type: "youtubeGallery",
          enabled: true,
          order: 1,
          content: {
            playlistId: "UU2weLZdp6gU82cmEb2URPvA",
            pageSize: 15,
            columns: 3,
            subscribeChannelUrl: "https://www.youtube.com/@nortontanzarella98",
            subscribeLabel: "Subscribe to Our channel"
          }
        }
      ]
    } : {
      seo: {
        title: "Tour virtuali",
        description: "Esplora immobili selezionati con tour virtuali."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000070",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Tour virtuali",
            lead: "Attraversate trulli, masserie e case di charme in Valle d'Itria con i nostri tour video \u2014 un primo incontro autentico con ogni spazio, prima del vostro viaggio."
          }
        },
        {
          id: "00000000-0000-4000-8000-000000000071",
          type: "youtubeGallery",
          enabled: true,
          order: 1,
          content: {
            playlistId: "UU2weLZdp6gU82cmEb2URPvA",
            pageSize: 15,
            columns: 3,
            subscribeChannelUrl: "https://www.youtube.com/@nortontanzarella98",
            subscribeLabel: "Iscriviti al nostro canale"
          }
        }
      ]
    },
    milestone: "M2"
  },
  "sell-with-us": {
    allowedTypes: ["pageHeader"],
    reorderable: [],
    defaults: (locale) => locale === "en" ? {
      seo: {
        title: "Sell with us",
        description: "Sell your property with Norton Tanzarella."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000080",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Sell with us",
            lead: "Page under construction."
          }
        }
      ]
    } : {
      seo: {
        title: "Vendi con noi",
        description: "Vendi il tuo immobile con Norton Tanzarella."
      },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000080",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Vendi con noi",
            lead: "Pagina in costruzione."
          }
        }
      ]
    },
    milestone: "M2"
  },
  "privacy-policy": {
    allowedTypes: ["legalPolicy"],
    reorderable: [],
    defaults: (locale) => ({
      seo: { title: locale === "en" ? "Privacy policy" : "Privacy policy" },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000030",
          type: "legalPolicy",
          enabled: true,
          order: 0,
          content: {
            source: "manual",
            body: locale === "en" ? "Page under construction. The full privacy policy will be published here." : "Pagina in costruzione. La privacy policy completa sar\xE0 pubblicata qui."
          }
        }
      ]
    }),
    milestone: "M2"
  },
  "cookie-policy": {
    allowedTypes: ["legalPolicy"],
    reorderable: [],
    defaults: (locale) => ({
      seo: { title: locale === "en" ? "Cookie policy" : "Cookie policy" },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000040",
          type: "legalPolicy",
          enabled: true,
          order: 0,
          content: {
            source: "manual",
            body: locale === "en" ? "Page under construction. The full cookie policy will be published here." : "Pagina in costruzione. La cookie policy completa sar\xE0 pubblicata qui."
          }
        }
      ]
    }),
    milestone: "M2"
  }
};
var PAGE_KEYS = Object.keys(PAGE_REGISTRY);
function isPageKey(key) {
  return key in PAGE_REGISTRY;
}
function getM1PageKeys() {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === "M1");
}
function getM2PageKeys() {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === "M2");
}
function getM3PageKeys() {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === "M3");
}

// src/field-meta/enumLabelsIt.ts
var DAY_OF_WEEK_LABELS_IT = {
  Monday: "Luned\xEC",
  Tuesday: "Marted\xEC",
  Wednesday: "Mercoled\xEC",
  Thursday: "Gioved\xEC",
  Friday: "Venerd\xEC",
  Saturday: "Sabato",
  Sunday: "Domenica",
  PublicHolidays: "Festivi"
};
var SOCIAL_PLATFORM_LABELS_IT = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  youtube: "YouTube",
  tiktok: "TikTok",
  whatsapp: "WhatsApp"
};
var FEATURED_COLLECTION_MODE_LABELS_IT = {
  featured: "In evidenza",
  manual: "Manuale"
};
var LEGAL_POLICY_SOURCE_LABELS_IT = {
  manual: "Manuale",
  iubenda: "Iubenda"
};
function enumLabelIt(fieldKey, value) {
  if (fieldKey === "dayOfWeek") return DAY_OF_WEEK_LABELS_IT[value] ?? value;
  if (fieldKey === "platform") {
    return SOCIAL_PLATFORM_LABELS_IT[value] ?? socialPlatformLabelIt(value) ?? value;
  }
  if (fieldKey === "mode") return FEATURED_COLLECTION_MODE_LABELS_IT[value] ?? value;
  if (fieldKey === "source") return LEGAL_POLICY_SOURCE_LABELS_IT[value] ?? value;
  return value;
}

// src/field-meta/zodToFieldMeta.ts
var SHARED_STRING_KEYS = /* @__PURE__ */ new Set([
  "to",
  "href",
  "categorySlug",
  "iubendaPolicyId",
  "collectionKey",
  "leadRecipientEmail",
  "privacyPolicyUrl",
  "mapUrl",
  "url",
  "platform"
]);
var MARKDOWN_BODY_MIN_MAX_LENGTH = 1e4;
function resolveLocaleScope(kind, fieldKey, format) {
  if (kind === "image" || kind === "video" || kind === "icon" || kind === "boolean" || kind === "number" || kind === "enum") {
    return "shared";
  }
  if (kind === "string" && (SHARED_STRING_KEYS.has(fieldKey) || format === "email" || format === "url")) {
    return "shared";
  }
  if (kind === "object" || kind === "array") {
    return "shared";
  }
  return "i18n";
}
function humanize(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();
}
function unwrap(schema) {
  if (schema instanceof external_exports.ZodOptional || schema instanceof external_exports.ZodDefault) {
    return unwrap(schema._def.innerType);
  }
  if (schema instanceof external_exports.ZodEffects) {
    return unwrap(schema._def.schema);
  }
  return schema;
}
function getSchemaDescription(schema) {
  const direct = schema._def.description;
  if (direct) return direct;
  if (schema instanceof external_exports.ZodOptional || schema instanceof external_exports.ZodDefault) {
    return getSchemaDescription(schema._def.innerType);
  }
  if (schema instanceof external_exports.ZodEffects) {
    return getSchemaDescription(schema._def.schema);
  }
  return void 0;
}
function resolveLabel(schema, fieldKey) {
  return getSchemaDescription(schema) ?? humanize(fieldKey);
}
function getMaxLength(schema) {
  for (const check of schema._def?.checks ?? []) {
    if (check.kind === "max") return check.value;
  }
  return void 0;
}
function isEmailString(schema) {
  return schema._def?.checks?.some((c) => c.kind === "email") ?? false;
}
function isTimeString(schema) {
  const inner = unwrap(schema);
  if (!(inner instanceof external_exports.ZodString)) return false;
  return inner._def.checks?.some((check) => {
    if (check.kind !== "regex") return false;
    return check.regex.test("09:00") && check.regex.test("23:59") && !check.regex.test("9:00");
  }) ?? false;
}
function resolveStringFormat(schema, fieldKey) {
  const inner = unwrap(schema);
  if (!(inner instanceof external_exports.ZodString)) return void 0;
  if (inner._def.checks?.some((check) => check.kind === "url")) return "url";
  if (isEmailString(inner)) return "email";
  if (isTimeString(inner)) return "time";
  if (fieldKey === "body") {
    const maxLength = getMaxLength(inner);
    if (maxLength !== void 0 && maxLength >= MARKDOWN_BODY_MIN_MAX_LENGTH) return "markdown";
  }
  return void 0;
}
function resolveArrayItemMeta(itemSchema, fieldKey) {
  const inner = unwrap(itemSchema);
  if (inner instanceof external_exports.ZodObject) {
    return {
      kind: "object",
      key: `${fieldKey}Item`,
      label: resolveLabel(itemSchema, `${fieldKey}Item`),
      required: true,
      localeScope: "shared",
      fields: zodToFieldMeta(inner, `${fieldKey}Item`)
    };
  }
  return zodToFieldMeta(itemSchema, `${fieldKey}Item`)[0] ?? {
    kind: "string",
    key: "value",
    label: "Valore",
    required: true,
    localeScope: "i18n"
  };
}
function zodToFieldMeta(schema, key = "root") {
  const base = unwrap(schema);
  if (base instanceof external_exports.ZodObject) {
    const shape = base.shape;
    const fields = [];
    for (const [fieldKey, fieldSchema] of Object.entries(shape)) {
      const required = !(fieldSchema instanceof external_exports.ZodOptional || fieldSchema instanceof external_exports.ZodDefault);
      const inner = unwrap(fieldSchema);
      if (inner instanceof external_exports.ZodString) {
        const maxLength = getMaxLength(inner);
        const format = resolveStringFormat(fieldSchema, fieldKey);
        const isVideoField = fieldKey === "videoMediaId" || fieldKey.endsWith("VideoMediaId") || fieldKey.endsWith("VideoId");
        if (isVideoField && format !== "url" && format !== "email" && format !== "time" && format !== "markdown") {
          fields.push({
            kind: "video",
            key: fieldKey,
            label: resolveLabel(fieldSchema, fieldKey),
            required,
            localeScope: resolveLocaleScope("video", fieldKey)
          });
          continue;
        }
        const isImageField = fieldKey === "image" || fieldKey === "mediaId" || fieldKey.endsWith("Image") || fieldKey.endsWith("image") || fieldKey.endsWith("MediaId");
        if (isImageField && format !== "url" && format !== "email" && format !== "time" && format !== "markdown") {
          fields.push({
            kind: "image",
            key: fieldKey,
            label: resolveLabel(fieldSchema, fieldKey),
            required,
            localeScope: resolveLocaleScope("image", fieldKey)
          });
          continue;
        }
        if (fieldKey === "iconKey" || fieldKey.endsWith("IconKey")) {
          fields.push({
            kind: "icon",
            key: fieldKey,
            label: resolveLabel(fieldSchema, fieldKey),
            required,
            localeScope: resolveLocaleScope("icon", fieldKey)
          });
          continue;
        }
        fields.push({
          kind: "string",
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope("string", fieldKey, format),
          maxLength,
          multiline: format === "markdown" || format === void 0 && maxLength !== void 0 && maxLength > 200,
          format
        });
        continue;
      }
      if (inner instanceof external_exports.ZodNumber) {
        let min;
        let max;
        for (const check of inner._def.checks ?? []) {
          if (check.kind === "min") min = check.value;
          if (check.kind === "max") max = check.value;
        }
        fields.push({
          kind: "number",
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope("number", fieldKey),
          min,
          max
        });
        continue;
      }
      if (inner instanceof external_exports.ZodBoolean) {
        fields.push({
          kind: "boolean",
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope("boolean", fieldKey)
        });
        continue;
      }
      if (inner instanceof external_exports.ZodEnum) {
        fields.push({
          kind: "enum",
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope("enum", fieldKey),
          options: inner.options.map((value) => ({
            value,
            label: enumLabelIt(fieldKey, value)
          }))
        });
        continue;
      }
      if (inner instanceof external_exports.ZodLiteral) {
        fields.push({
          kind: "enum",
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope("enum", fieldKey),
          options: [{ value: String(inner.value), label: String(inner.value) }]
        });
        continue;
      }
      if (inner instanceof external_exports.ZodObject) {
        fields.push({
          kind: "object",
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope("object", fieldKey),
          fields: zodToFieldMeta(inner, fieldKey)
        });
        continue;
      }
      if (inner instanceof external_exports.ZodArray) {
        const itemSchema = inner._def.type;
        const minLength = inner._def.minLength?.value;
        const maxLength = inner._def.maxLength?.value;
        fields.push({
          kind: "array",
          key: fieldKey,
          label: resolveLabel(fieldSchema, fieldKey),
          required,
          localeScope: resolveLocaleScope("array", fieldKey),
          item: resolveArrayItemMeta(itemSchema, fieldKey),
          min: minLength,
          max: maxLength
        });
      }
    }
    return fields;
  }
  return [];
}
export {
  DAY_OF_WEEK_LABELS_IT,
  DEFAULT_BRANDING_COLORS,
  DEFAULT_BRANDING_SCALARS,
  DEFAULT_BRANDING_TYPOGRAPHY,
  DEFAULT_BRAND_FOOTER_VISIBILITY,
  DEFAULT_CONTACT_SETTINGS_IT,
  DEFAULT_LAYOUT_SETTINGS_IT,
  DEFAULT_OPENING_HOURS_IT,
  DEFAULT_PROPERTY_WATERMARK,
  DEFAULT_SITE_MENU_SETTINGS_EN,
  DEFAULT_SITE_MENU_SETTINGS_IT,
  DEFAULT_SITE_SETTINGS_IT,
  EDITOR_DAY_ORDER,
  FEATURED_COLLECTION_MODE_LABELS_IT,
  FONT_HEADING_WHITELIST,
  FONT_SANS_WHITELIST,
  FONT_WHITELIST,
  FOOTER_NAV_PATHS,
  LEGACY_NAV_PATH_MAP,
  LEGAL_LINK_PATHS,
  LEGAL_POLICY_SOURCE_LABELS_IT,
  LOGO_SLOTS,
  MAIN_NAV_PATHS,
  PAGE_KEYS,
  PAGE_REGISTRY,
  SECTION_TYPE_LABELS_IT,
  SOCIAL_PLATFORMS,
  SOCIAL_PLATFORM_IDS,
  SOCIAL_PLATFORM_LABELS_IT,
  WEEKDAY_ORDER,
  aboutTeaserCarouselItemSchema,
  aboutTeaserContentSchema,
  brandFooterVisibilitySchema,
  brandSchema,
  brandingColorsSchema,
  brandingLogosSchema,
  brandingTypographySchema,
  categoryGridContentSchema,
  categoryGridItemSchema,
  cmsNavLinkSchema,
  cmsPageDocumentSchema,
  cmsSectionSchema,
  cmsSeoSchema,
  collectBrandingMediaIds,
  collectLogoMediaIds,
  collectMenuMediaIds,
  collectPageMediaIds,
  collectPropertyWatermarkMediaIds,
  contactFormSchema,
  contactSettingsSchema,
  cssVarsToStyleText,
  ctaContentSchema,
  ctaLinkSchema,
  dayOfWeekSchema,
  enumLabelIt,
  faqContentSchema,
  featureItemSchema,
  featuredCollectionContentSchema,
  featuresContentSchema,
  flattenDaySchedules,
  fontSansCssValue,
  footerColumnSchema,
  footerSchema,
  getM1PageKeys,
  getM2PageKeys,
  getM3PageKeys,
  googleReviewsContentSchema,
  groupConsecutiveSchedules,
  groupOpeningHoursByDay,
  headerCtaSchema,
  headerSecondaryCtaSchema,
  heroContentSchema,
  hexColorSchema,
  imageSlideshowContentSchema,
  imageSlideshowItemSchema,
  isPageKey,
  layoutSettingsSchema,
  legalNavLinkSchema,
  legalPolicyContentSchema,
  logoAltSchema,
  logoSlotSchema,
  mainNavLinkSchema,
  mergeOpeningHoursNotes,
  mergeSharedOrganization,
  mergeSiteSettingsDefaults,
  normalizeNavPath,
  normalizeSettingsScalars,
  openingHoursSchema,
  optionalCtaLinkSchema,
  optionalIconKeySchema,
  optionalMediaIdSchema,
  organizationSchema,
  pageHeaderContentSchema,
  parseSectionContent,
  propertyWatermarkSchema,
  richTextContentSchema,
  scalarsToCssVars,
  sectionContentByType,
  settingsScalarsSchema,
  siteMenuSettingsSchema,
  siteSettingsSchema,
  socialLinkSchema,
  socialPlatformIcon,
  socialPlatformIconSlug,
  socialPlatformLabelIt,
  splitContentSchema,
  statementContentSchema,
  statsContentSchema,
  teamContentSchema,
  testimonialsContentSchema,
  validateOpeningHours,
  youtubeGalleryContentSchema,
  zodToFieldMeta
};
//# sourceMappingURL=index.js.map