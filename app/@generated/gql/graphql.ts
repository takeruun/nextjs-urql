/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Item = {
  __typename?: 'Item';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  item?: Maybe<Items>;
  title: Scalars['String']['output'];
};

export type ItemWhere = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'Items';
  createdAt: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "items" */
export type ItemsAggregate = {
  __typename?: 'ItemsAggregate';
  aggregate?: Maybe<ItemsAggregateFields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type ItemsAggregateFields = {
  __typename?: 'ItemsAggregateFields';
  avg?: Maybe<ItemsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ItemsMaxFields>;
  min?: Maybe<ItemsMinFields>;
  stddev?: Maybe<ItemsStddevFields>;
  stddevPop?: Maybe<ItemsStddevPopFields>;
  stddevSamp?: Maybe<ItemsStddevSampFields>;
  sum?: Maybe<ItemsSumFields>;
  varPop?: Maybe<ItemsVarPopFields>;
  varSamp?: Maybe<ItemsVarSampFields>;
  variance?: Maybe<ItemsVarianceFields>;
};


/** aggregate fields of "items" */
export type ItemsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ItemsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ItemsAvgFields = {
  __typename?: 'ItemsAvgFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type ItemsBoolExp = {
  _and?: InputMaybe<Array<ItemsBoolExp>>;
  _not?: InputMaybe<ItemsBoolExp>;
  _or?: InputMaybe<Array<ItemsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "items" */
export enum ItemsConstraint {
  /** unique or primary key constraint on columns "id" */
  ItemsPkey = 'items_pkey'
}

/** input type for incrementing numeric columns in table "items" */
export type ItemsIncInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "items" */
export type ItemsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ItemsMaxFields = {
  __typename?: 'ItemsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ItemsMinFields = {
  __typename?: 'ItemsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "items" */
export type ItemsMutationResponse = {
  __typename?: 'ItemsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Items>;
};

/** on_conflict condition type for table "items" */
export type ItemsOnConflict = {
  constraint: ItemsConstraint;
  updateColumns?: Array<ItemsUpdateColumn>;
  where?: InputMaybe<ItemsBoolExp>;
};

/** Ordering options when selecting data from "items". */
export type ItemsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: items */
export type ItemsPkColumnsInput = {
  id: Scalars['Int']['input'];
};

/** select columns of table "items" */
export enum ItemsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "items" */
export type ItemsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type ItemsStddevFields = {
  __typename?: 'ItemsStddevFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type ItemsStddevPopFields = {
  __typename?: 'ItemsStddevPopFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type ItemsStddevSampFields = {
  __typename?: 'ItemsStddevSampFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "items" */
export type ItemsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ItemsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ItemsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type ItemsSumFields = {
  __typename?: 'ItemsSumFields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "items" */
export enum ItemsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ItemsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ItemsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ItemsSetInput>;
  /** filter the rows which have to be updated */
  where: ItemsBoolExp;
};

/** aggregate varPop on columns */
export type ItemsVarPopFields = {
  __typename?: 'ItemsVarPopFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type ItemsVarSampFields = {
  __typename?: 'ItemsVarSampFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ItemsVarianceFields = {
  __typename?: 'ItemsVarianceFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  _empty?: Maybe<Scalars['String']['output']>;
  createItem: Item;
  deleteItem: Scalars['String']['output'];
  /** delete data from the table: "items" */
  deleteItems?: Maybe<ItemsMutationResponse>;
  /** delete single row from the table: "items" */
  deleteItemsByPk?: Maybe<Items>;
  /** insert data into the table: "items" */
  insertItems?: Maybe<ItemsMutationResponse>;
  /** insert a single row into the table: "items" */
  insertItemsOne?: Maybe<Items>;
  updateItem: Item;
  /** update data of the table: "items" */
  updateItems?: Maybe<ItemsMutationResponse>;
  /** update single row of the table: "items" */
  updateItemsByPk?: Maybe<Items>;
  /** update multiples rows of table: "items" */
  updateItemsMany?: Maybe<Array<Maybe<ItemsMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootCreateItemArgs = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


/** mutation root */
export type Mutation_RootDeleteItemsArgs = {
  where: ItemsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteItemsByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsertItemsArgs = {
  objects: Array<ItemsInsertInput>;
  onConflict?: InputMaybe<ItemsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertItemsOneArgs = {
  object: ItemsInsertInput;
  onConflict?: InputMaybe<ItemsOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateItemArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


/** mutation root */
export type Mutation_RootUpdateItemsArgs = {
  _inc?: InputMaybe<ItemsIncInput>;
  _set?: InputMaybe<ItemsSetInput>;
  where: ItemsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateItemsByPkArgs = {
  _inc?: InputMaybe<ItemsIncInput>;
  _set?: InputMaybe<ItemsSetInput>;
  pkColumns: ItemsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateItemsManyArgs = {
  updates: Array<ItemsUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  _empty?: Maybe<Scalars['String']['output']>;
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  itemsAggregate: ItemsAggregate;
  /** fetch data from the table: "items" using primary key columns */
  itemsByPk?: Maybe<Items>;
  searchItems: Array<Item>;
};


export type Query_RootItemsArgs = {
  distinctOn?: InputMaybe<Array<ItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
  where?: InputMaybe<ItemsBoolExp>;
};


export type Query_RootItemsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
  where?: InputMaybe<ItemsBoolExp>;
};


export type Query_RootItemsByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSearchItemsArgs = {
  where?: InputMaybe<ItemWhere>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  itemsAggregate: ItemsAggregate;
  /** fetch data from the table: "items" using primary key columns */
  itemsByPk?: Maybe<Items>;
  /** fetch data from the table in a streaming manner: "items" */
  itemsStream: Array<Items>;
};


export type Subscription_RootItemsArgs = {
  distinctOn?: InputMaybe<Array<ItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
  where?: InputMaybe<ItemsBoolExp>;
};


export type Subscription_RootItemsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
  where?: InputMaybe<ItemsBoolExp>;
};


export type Subscription_RootItemsByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootItemsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ItemsStreamCursorInput>>;
  where?: InputMaybe<ItemsBoolExp>;
};

export type ItemListQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemListQuery = { __typename?: 'query_root', items: Array<{ __typename?: 'Items', id: number, title: string, description: string }> };

export type CreateItemMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type CreateItemMutation = { __typename?: 'mutation_root', createItem: { __typename?: 'Item', item?: { __typename?: 'Items', id: number, title: string, description: string } | null } };

export type UpdateItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type UpdateItemMutation = { __typename?: 'mutation_root', updateItem: { __typename?: 'Item', item?: { __typename?: 'Items', id: number, title: string, description: string } | null } };

export type SearchItemsQueryVariables = Exact<{
  where: ItemWhere;
}>;


export type SearchItemsQuery = { __typename?: 'query_root', searchItems: Array<{ __typename?: 'Item', id: string, item?: { __typename?: 'Items', title: string, description: string } | null }> };


export const ItemListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ItemList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<ItemListQuery, ItemListQueryVariables>;
export const CreateItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<CreateItemMutation, CreateItemMutationVariables>;
export const UpdateItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateItemMutation, UpdateItemMutationVariables>;
export const SearchItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemWhere"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<SearchItemsQuery, SearchItemsQueryVariables>;