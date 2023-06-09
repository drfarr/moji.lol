import * as E from "fp-ts/lib/Either";
import * as R from "fp-ts/lib/Record";
import * as A from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";

type EitherObject<K extends string | number | symbol, V> = E.Either<
  Error,
  Record<K, V>
>;

function mergeEitherObjects<K extends string | number | symbol, V>(
  objects: EitherObject<K, V>[]
) {
  return pipe(
    objects,
    A.reduce<EitherObject<K, V>, Record<K, V>>(
      {} as Record<K, V>,
      (acc, object) =>
        pipe(
          object,
          E.match(
            () => acc,
            (value) => ({ ...acc, ...value })
          )
        )
    )
  );
}

function getObjectKeys<K extends string | number | symbol, V>(
  object: Record<K, V>
) {
  return R.keys(object);
}
import { type Result } from "./files";

function getTranslationKeyUnionTypes(keys: string[]) {
  return pipe(
    keys,
    A.reduce("", (acc, key) => acc + `\t| "${key}"\n`)
  );
}

function getTranslationKeyTypeFileText(keys: string[]) {
  return `/* eslint-disable */
    // @ts-ignore
    export {};
    declare global {
      type TransltaionKeys =
      ${getTranslationKeyUnionTypes(keys)}
    }
  `;
}

function generateKeyUnionTextFromFiles(readFileResults: Result) {
  return pipe(
    readFileResults,
    mergeEitherObjects,
    getObjectKeys,
    getTranslationKeyTypeFileText
  );
}

export { generateKeyUnionTextFromFiles };
