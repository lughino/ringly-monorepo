import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** List of domains attached to a tenant */
export type Domain = {
  __typename?: 'domain';
  createdAt: Scalars['timestamptz'];
  domain: Scalars['String'];
  /** An array relationship */
  links: Array<Link>;
  /** An aggregate relationship */
  links_aggregate: Link_Aggregate;
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};


/** List of domains attached to a tenant */
export type DomainLinksArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


/** List of domains attached to a tenant */
export type DomainLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};

/** aggregated selection of "domain" */
export type Domain_Aggregate = {
  __typename?: 'domain_aggregate';
  aggregate?: Maybe<Domain_Aggregate_Fields>;
  nodes: Array<Domain>;
};

/** aggregate fields of "domain" */
export type Domain_Aggregate_Fields = {
  __typename?: 'domain_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Domain_Max_Fields>;
  min?: Maybe<Domain_Min_Fields>;
};


/** aggregate fields of "domain" */
export type Domain_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Domain_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "domain" */
export type Domain_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Domain_Max_Order_By>;
  min?: InputMaybe<Domain_Min_Order_By>;
};

/** input type for inserting array relation for remote table "domain" */
export type Domain_Arr_Rel_Insert_Input = {
  data: Array<Domain_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Domain_On_Conflict>;
};

/** Boolean expression to filter rows from the table "domain". All fields are combined with a logical 'AND'. */
export type Domain_Bool_Exp = {
  _and?: InputMaybe<Array<Domain_Bool_Exp>>;
  _not?: InputMaybe<Domain_Bool_Exp>;
  _or?: InputMaybe<Array<Domain_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  links?: InputMaybe<Link_Bool_Exp>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "domain" */
export enum Domain_Constraint {
  /** unique or primary key constraint on columns "domain" */
  DomainPkey = 'domain_pkey'
}

/** input type for inserting data into table "domain" */
export type Domain_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  domain?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Link_Arr_Rel_Insert_Input>;
  tenant?: InputMaybe<Tenant_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Domain_Max_Fields = {
  __typename?: 'domain_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "domain" */
export type Domain_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Domain_Min_Fields = {
  __typename?: 'domain_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "domain" */
export type Domain_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "domain" */
export type Domain_Mutation_Response = {
  __typename?: 'domain_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Domain>;
};

/** input type for inserting object relation for remote table "domain" */
export type Domain_Obj_Rel_Insert_Input = {
  data: Domain_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Domain_On_Conflict>;
};

/** on_conflict condition type for table "domain" */
export type Domain_On_Conflict = {
  constraint: Domain_Constraint;
  update_columns?: Array<Domain_Update_Column>;
  where?: InputMaybe<Domain_Bool_Exp>;
};

/** Ordering options when selecting data from "domain". */
export type Domain_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  links_aggregate?: InputMaybe<Link_Aggregate_Order_By>;
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: domain */
export type Domain_Pk_Columns_Input = {
  domain: Scalars['String'];
};

/** select columns of table "domain" */
export enum Domain_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Domain = 'domain',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "domain" */
export type Domain_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  domain?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "domain" */
export enum Domain_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Domain = 'domain',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** The ENUM kind table */
export type Kind = {
  __typename?: 'kind';
  description?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
};

/** aggregated selection of "kind" */
export type Kind_Aggregate = {
  __typename?: 'kind_aggregate';
  aggregate?: Maybe<Kind_Aggregate_Fields>;
  nodes: Array<Kind>;
};

/** aggregate fields of "kind" */
export type Kind_Aggregate_Fields = {
  __typename?: 'kind_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kind_Max_Fields>;
  min?: Maybe<Kind_Min_Fields>;
};


/** aggregate fields of "kind" */
export type Kind_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kind_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "kind". All fields are combined with a logical 'AND'. */
export type Kind_Bool_Exp = {
  _and?: InputMaybe<Array<Kind_Bool_Exp>>;
  _not?: InputMaybe<Kind_Bool_Exp>;
  _or?: InputMaybe<Array<Kind_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kind" */
export enum Kind_Constraint {
  /** unique or primary key constraint on columns "kind" */
  KindPkey = 'kind_pkey'
}

export enum Kind_Enum {
  /** Call to action */
  Cta = 'CTA',
  /** Mobile deep link */
  DeepLink = 'DEEP_LINK',
  /** Dynamic url */
  Dynamic = 'DYNAMIC',
  /** Link in bio */
  LinkInBio = 'LINK_IN_BIO',
  /** Permanent redirect */
  PermRedirect = 'PERM_REDIRECT',
  /** Temp redirect */
  TempRedirect = 'TEMP_REDIRECT'
}

/** Boolean expression to compare columns of type "kind_enum". All fields are combined with logical 'AND'. */
export type Kind_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Kind_Enum>;
  _in?: InputMaybe<Array<Kind_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Kind_Enum>;
  _nin?: InputMaybe<Array<Kind_Enum>>;
};

/** input type for inserting data into table "kind" */
export type Kind_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Kind_Max_Fields = {
  __typename?: 'kind_max_fields';
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Kind_Min_Fields = {
  __typename?: 'kind_min_fields';
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "kind" */
export type Kind_Mutation_Response = {
  __typename?: 'kind_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kind>;
};

/** input type for inserting object relation for remote table "kind" */
export type Kind_Obj_Rel_Insert_Input = {
  data: Kind_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Kind_On_Conflict>;
};

/** on_conflict condition type for table "kind" */
export type Kind_On_Conflict = {
  constraint: Kind_Constraint;
  update_columns?: Array<Kind_Update_Column>;
  where?: InputMaybe<Kind_Bool_Exp>;
};

/** Ordering options when selecting data from "kind". */
export type Kind_Order_By = {
  description?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kind */
export type Kind_Pk_Columns_Input = {
  kind: Scalars['String'];
};

/** select columns of table "kind" */
export enum Kind_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Kind = 'kind'
}

/** input type for updating data in table "kind" */
export type Kind_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
};

/** update columns of table "kind" */
export enum Kind_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Kind = 'kind'
}

/** The core table of the application that stores the information related to the links */
export type Link = {
  __typename?: 'link';
  attributes: Scalars['jsonb'];
  createdAt: Scalars['timestamptz'];
  destinationLink?: Maybe<Scalars['String']>;
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  kind: Kind_Enum;
  /** An object relationship */
  kindByKind: Kind;
  label?: Maybe<Scalars['String']>;
  shortLink: Scalars['String'];
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  variablePassing: Scalars['Boolean'];
};


/** The core table of the application that stores the information related to the links */
export type LinkAttributesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "link" */
export type Link_Aggregate = {
  __typename?: 'link_aggregate';
  aggregate?: Maybe<Link_Aggregate_Fields>;
  nodes: Array<Link>;
};

/** aggregate fields of "link" */
export type Link_Aggregate_Fields = {
  __typename?: 'link_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Link_Max_Fields>;
  min?: Maybe<Link_Min_Fields>;
};


/** aggregate fields of "link" */
export type Link_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Link_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "link" */
export type Link_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Link_Max_Order_By>;
  min?: InputMaybe<Link_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Link_Append_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "link" */
export type Link_Arr_Rel_Insert_Input = {
  data: Array<Link_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Link_On_Conflict>;
};

/** Boolean expression to filter rows from the table "link". All fields are combined with a logical 'AND'. */
export type Link_Bool_Exp = {
  _and?: InputMaybe<Array<Link_Bool_Exp>>;
  _not?: InputMaybe<Link_Bool_Exp>;
  _or?: InputMaybe<Array<Link_Bool_Exp>>;
  attributes?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  destinationLink?: InputMaybe<String_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  expireAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  kind?: InputMaybe<Kind_Enum_Comparison_Exp>;
  kindByKind?: InputMaybe<Kind_Bool_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  shortLink?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  variablePassing?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "link" */
export enum Link_Constraint {
  /** unique or primary key constraint on columns "id" */
  LinkPkey = 'link_pkey',
  /** unique or primary key constraint on columns "domain_id", "short_link" */
  LinkShortLinkDomainIdKey = 'link_short_link_domain_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Link_Delete_At_Path_Input = {
  attributes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Link_Delete_Elem_Input = {
  attributes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Link_Delete_Key_Input = {
  attributes?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "link" */
export type Link_Insert_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  destinationLink?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Domain_Obj_Rel_Insert_Input>;
  domain_id?: InputMaybe<Scalars['String']>;
  expireAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  kind?: InputMaybe<Kind_Enum>;
  kindByKind?: InputMaybe<Kind_Obj_Rel_Insert_Input>;
  label?: InputMaybe<Scalars['String']>;
  shortLink?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Tenant_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  variablePassing?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Link_Max_Fields = {
  __typename?: 'link_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  destinationLink?: Maybe<Scalars['String']>;
  domain_id?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  shortLink?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "link" */
export type Link_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  destinationLink?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  shortLink?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Link_Min_Fields = {
  __typename?: 'link_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  destinationLink?: Maybe<Scalars['String']>;
  domain_id?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  shortLink?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "link" */
export type Link_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  destinationLink?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  shortLink?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "link" */
export type Link_Mutation_Response = {
  __typename?: 'link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Link>;
};

/** on_conflict condition type for table "link" */
export type Link_On_Conflict = {
  constraint: Link_Constraint;
  update_columns?: Array<Link_Update_Column>;
  where?: InputMaybe<Link_Bool_Exp>;
};

/** Ordering options when selecting data from "link". */
export type Link_Order_By = {
  attributes?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  destinationLink?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  kindByKind?: InputMaybe<Kind_Order_By>;
  label?: InputMaybe<Order_By>;
  shortLink?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  variablePassing?: InputMaybe<Order_By>;
};

/** primary key columns input for table: link */
export type Link_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Link_Prepend_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "link" */
export enum Link_Select_Column {
  /** column name */
  Attributes = 'attributes',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DestinationLink = 'destinationLink',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  ExpireAt = 'expireAt',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  Label = 'label',
  /** column name */
  ShortLink = 'shortLink',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VariablePassing = 'variablePassing'
}

/** input type for updating data in table "link" */
export type Link_Set_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  destinationLink?: InputMaybe<Scalars['String']>;
  domain_id?: InputMaybe<Scalars['String']>;
  expireAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  kind?: InputMaybe<Kind_Enum>;
  label?: InputMaybe<Scalars['String']>;
  shortLink?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  variablePassing?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "link" */
export enum Link_Update_Column {
  /** column name */
  Attributes = 'attributes',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DestinationLink = 'destinationLink',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  ExpireAt = 'expireAt',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  Label = 'label',
  /** column name */
  ShortLink = 'shortLink',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VariablePassing = 'variablePassing'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "domain" */
  delete_domain?: Maybe<Domain_Mutation_Response>;
  /** delete single row from the table: "domain" */
  delete_domain_by_pk?: Maybe<Domain>;
  /** delete data from the table: "kind" */
  delete_kind?: Maybe<Kind_Mutation_Response>;
  /** delete single row from the table: "kind" */
  delete_kind_by_pk?: Maybe<Kind>;
  /** delete data from the table: "link" */
  delete_link?: Maybe<Link_Mutation_Response>;
  /** delete single row from the table: "link" */
  delete_link_by_pk?: Maybe<Link>;
  /** delete data from the table: "tenant" */
  delete_tenant?: Maybe<Tenant_Mutation_Response>;
  /** delete single row from the table: "tenant" */
  delete_tenant_by_pk?: Maybe<Tenant>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "domain" */
  insert_domain?: Maybe<Domain_Mutation_Response>;
  /** insert a single row into the table: "domain" */
  insert_domain_one?: Maybe<Domain>;
  /** insert data into the table: "kind" */
  insert_kind?: Maybe<Kind_Mutation_Response>;
  /** insert a single row into the table: "kind" */
  insert_kind_one?: Maybe<Kind>;
  /** insert data into the table: "link" */
  insert_link?: Maybe<Link_Mutation_Response>;
  /** insert a single row into the table: "link" */
  insert_link_one?: Maybe<Link>;
  /** insert data into the table: "tenant" */
  insert_tenant?: Maybe<Tenant_Mutation_Response>;
  /** insert a single row into the table: "tenant" */
  insert_tenant_one?: Maybe<Tenant>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "domain" */
  update_domain?: Maybe<Domain_Mutation_Response>;
  /** update single row of the table: "domain" */
  update_domain_by_pk?: Maybe<Domain>;
  /** update data of the table: "kind" */
  update_kind?: Maybe<Kind_Mutation_Response>;
  /** update single row of the table: "kind" */
  update_kind_by_pk?: Maybe<Kind>;
  /** update data of the table: "link" */
  update_link?: Maybe<Link_Mutation_Response>;
  /** update single row of the table: "link" */
  update_link_by_pk?: Maybe<Link>;
  /** update data of the table: "tenant" */
  update_tenant?: Maybe<Tenant_Mutation_Response>;
  /** update single row of the table: "tenant" */
  update_tenant_by_pk?: Maybe<Tenant>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_DomainArgs = {
  where: Domain_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Domain_By_PkArgs = {
  domain: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_KindArgs = {
  where: Kind_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kind_By_PkArgs = {
  kind: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LinkArgs = {
  where: Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Link_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TenantArgs = {
  where: Tenant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_DomainArgs = {
  objects: Array<Domain_Insert_Input>;
  on_conflict?: InputMaybe<Domain_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Domain_OneArgs = {
  object: Domain_Insert_Input;
  on_conflict?: InputMaybe<Domain_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_KindArgs = {
  objects: Array<Kind_Insert_Input>;
  on_conflict?: InputMaybe<Kind_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kind_OneArgs = {
  object: Kind_Insert_Input;
  on_conflict?: InputMaybe<Kind_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LinkArgs = {
  objects: Array<Link_Insert_Input>;
  on_conflict?: InputMaybe<Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Link_OneArgs = {
  object: Link_Insert_Input;
  on_conflict?: InputMaybe<Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TenantArgs = {
  objects: Array<Tenant_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_OneArgs = {
  object: Tenant_Insert_Input;
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DomainArgs = {
  _set?: InputMaybe<Domain_Set_Input>;
  where: Domain_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Domain_By_PkArgs = {
  _set?: InputMaybe<Domain_Set_Input>;
  pk_columns: Domain_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_KindArgs = {
  _set?: InputMaybe<Kind_Set_Input>;
  where: Kind_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kind_By_PkArgs = {
  _set?: InputMaybe<Kind_Set_Input>;
  pk_columns: Kind_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LinkArgs = {
  _append?: InputMaybe<Link_Append_Input>;
  _delete_at_path?: InputMaybe<Link_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Link_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Link_Delete_Key_Input>;
  _prepend?: InputMaybe<Link_Prepend_Input>;
  _set?: InputMaybe<Link_Set_Input>;
  where: Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Link_By_PkArgs = {
  _append?: InputMaybe<Link_Append_Input>;
  _delete_at_path?: InputMaybe<Link_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Link_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Link_Delete_Key_Input>;
  _prepend?: InputMaybe<Link_Prepend_Input>;
  _set?: InputMaybe<Link_Set_Input>;
  pk_columns: Link_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TenantArgs = {
  _set?: InputMaybe<Tenant_Set_Input>;
  where: Tenant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_By_PkArgs = {
  _set?: InputMaybe<Tenant_Set_Input>;
  pk_columns: Tenant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "domain" */
  domain: Array<Domain>;
  /** fetch aggregated fields from the table: "domain" */
  domain_aggregate: Domain_Aggregate;
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>;
  /** fetch data from the table: "kind" */
  kind: Array<Kind>;
  /** fetch aggregated fields from the table: "kind" */
  kind_aggregate: Kind_Aggregate;
  /** fetch data from the table: "kind" using primary key columns */
  kind_by_pk?: Maybe<Kind>;
  /** fetch data from the table: "link" */
  link: Array<Link>;
  /** fetch aggregated fields from the table: "link" */
  link_aggregate: Link_Aggregate;
  /** fetch data from the table: "link" using primary key columns */
  link_by_pk?: Maybe<Link>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch aggregated fields from the table: "tenant" */
  tenant_aggregate: Tenant_Aggregate;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk?: Maybe<Tenant>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootDomainArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Query_RootDomain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Query_RootDomain_By_PkArgs = {
  domain: Scalars['String'];
};


export type Query_RootKindArgs = {
  distinct_on?: InputMaybe<Array<Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Order_By>>;
  where?: InputMaybe<Kind_Bool_Exp>;
};


export type Query_RootKind_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Order_By>>;
  where?: InputMaybe<Kind_Bool_Exp>;
};


export type Query_RootKind_By_PkArgs = {
  kind: Scalars['String'];
};


export type Query_RootLinkArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Query_RootLink_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Query_RootLink_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Query_RootTenant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Query_RootTenant_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "domain" */
  domain: Array<Domain>;
  /** fetch aggregated fields from the table: "domain" */
  domain_aggregate: Domain_Aggregate;
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>;
  /** fetch data from the table: "kind" */
  kind: Array<Kind>;
  /** fetch aggregated fields from the table: "kind" */
  kind_aggregate: Kind_Aggregate;
  /** fetch data from the table: "kind" using primary key columns */
  kind_by_pk?: Maybe<Kind>;
  /** fetch data from the table: "link" */
  link: Array<Link>;
  /** fetch aggregated fields from the table: "link" */
  link_aggregate: Link_Aggregate;
  /** fetch data from the table: "link" using primary key columns */
  link_by_pk?: Maybe<Link>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch aggregated fields from the table: "tenant" */
  tenant_aggregate: Tenant_Aggregate;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk?: Maybe<Tenant>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootDomainArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Subscription_RootDomain_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


export type Subscription_RootDomain_By_PkArgs = {
  domain: Scalars['String'];
};


export type Subscription_RootKindArgs = {
  distinct_on?: InputMaybe<Array<Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Order_By>>;
  where?: InputMaybe<Kind_Bool_Exp>;
};


export type Subscription_RootKind_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kind_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Order_By>>;
  where?: InputMaybe<Kind_Bool_Exp>;
};


export type Subscription_RootKind_By_PkArgs = {
  kind: Scalars['String'];
};


export type Subscription_RootLinkArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Subscription_RootLink_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


export type Subscription_RootLink_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** The Tenant table */
export type Tenant = {
  __typename?: 'tenant';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  domains: Array<Domain>;
  /** An aggregate relationship */
  domains_aggregate: Domain_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  links: Array<Link>;
  /** An aggregate relationship */
  links_aggregate: Link_Aggregate;
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};


/** The Tenant table */
export type TenantDomainsArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


/** The Tenant table */
export type TenantDomains_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Domain_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Domain_Order_By>>;
  where?: InputMaybe<Domain_Bool_Exp>;
};


/** The Tenant table */
export type TenantLinksArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


/** The Tenant table */
export type TenantLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


/** The Tenant table */
export type TenantUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** The Tenant table */
export type TenantUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "tenant" */
export type Tenant_Aggregate = {
  __typename?: 'tenant_aggregate';
  aggregate?: Maybe<Tenant_Aggregate_Fields>;
  nodes: Array<Tenant>;
};

/** aggregate fields of "tenant" */
export type Tenant_Aggregate_Fields = {
  __typename?: 'tenant_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tenant_Max_Fields>;
  min?: Maybe<Tenant_Min_Fields>;
};


/** aggregate fields of "tenant" */
export type Tenant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tenant". All fields are combined with a logical 'AND'. */
export type Tenant_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  domains?: InputMaybe<Domain_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  links?: InputMaybe<Link_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "tenant" */
export enum Tenant_Constraint {
  /** unique or primary key constraint on columns "name" */
  TenantNameKey = 'tenant_name_key',
  /** unique or primary key constraint on columns "id" */
  TenantPkey = 'tenant_pkey'
}

/** input type for inserting data into table "tenant" */
export type Tenant_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  domains?: InputMaybe<Domain_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  links?: InputMaybe<Link_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  users?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tenant_Max_Fields = {
  __typename?: 'tenant_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Tenant_Min_Fields = {
  __typename?: 'tenant_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tenant" */
export type Tenant_Mutation_Response = {
  __typename?: 'tenant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant>;
};

/** input type for inserting object relation for remote table "tenant" */
export type Tenant_Obj_Rel_Insert_Input = {
  data: Tenant_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};

/** on_conflict condition type for table "tenant" */
export type Tenant_On_Conflict = {
  constraint: Tenant_Constraint;
  update_columns?: Array<Tenant_Update_Column>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant". */
export type Tenant_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  domains_aggregate?: InputMaybe<Domain_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  links_aggregate?: InputMaybe<Link_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: tenant */
export type Tenant_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tenant" */
export enum Tenant_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "tenant" */
export type Tenant_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "tenant" */
export enum Tenant_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** The User's table */
export type User = {
  __typename?: 'user';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Tenant_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetLinksByPkQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type GetLinksByPkQuery = { __typename?: 'query_root', link: Array<{ __typename?: 'link', domain_id?: string | null, id: string, shortLink: string, label?: string | null }> };

export type GetLinkByShortLinkQueryVariables = Exact<{
  shortLink?: InputMaybe<Scalars['String']>;
}>;


export type GetLinkByShortLinkQuery = { __typename?: 'query_root', link: Array<{ __typename?: 'link', id: string, attributes: any, destinationLink?: string | null, domain_id?: string | null, expireAt?: string | null, kind: Kind_Enum, shortLink: string, variablePassing: boolean, tenant_id: string }> };


export const GetLinksByPkDocument = gql`
    query getLinksByPk($ids: [uuid!]) {
  link(where: {id: {_in: $ids}}) {
    domain_id
    id
    shortLink
    label
  }
}
    `;
export const GetLinkByShortLinkDocument = gql`
    query getLinkByShortLink($shortLink: String) {
  link(where: {shortLink: {_eq: $shortLink}}) {
    id
    attributes
    destinationLink
    domain_id
    expireAt
    kind
    shortLink
    variablePassing
    tenant_id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getLinksByPk(variables?: GetLinksByPkQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLinksByPkQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLinksByPkQuery>(GetLinksByPkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLinksByPk', 'query');
    },
    getLinkByShortLink(variables?: GetLinkByShortLinkQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLinkByShortLinkQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLinkByShortLinkQuery>(GetLinkByShortLinkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLinkByShortLink', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;