/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

export type Colors = Object;
export type Indent = (string) => string;
export type Refs = Array<any>;
export type Print = (any) => string;
export type StringOrNull = string | null;

export type Options = {|
  callToJSON: boolean,
  escapeRegex: boolean,
  highlight: boolean,
  indent: number,
  maxDepth: number,
  min: boolean,
  plugins: Plugins,
  printFunctionName: boolean,
  theme: {|
    content: string,
    prop: string,
    tag: string,
    value: string,
  |},
|};

export type Plugin = {
  print: (
    val: any,
    serialize: Print,
    indent: Indent,
    opts: Options,
    colors: Colors,
  ) => string,
  test: (any) => boolean,
};

export type Plugins = Array<Plugin>;
