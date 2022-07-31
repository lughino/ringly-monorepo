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
  bigint: any;
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

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Brand table */
export type Brand = {
  __typename?: 'brand';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  cta: Array<Cta>;
  /** An aggregate relationship */
  cta_aggregate: Cta_Aggregate;
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  links: Array<Link>;
  /** An aggregate relationship */
  links_aggregate: Link_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};


/** Brand table */
export type BrandCtaArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};


/** Brand table */
export type BrandCta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};


/** Brand table */
export type BrandLinksArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


/** Brand table */
export type BrandLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};

/** aggregated selection of "brand" */
export type Brand_Aggregate = {
  __typename?: 'brand_aggregate';
  aggregate?: Maybe<Brand_Aggregate_Fields>;
  nodes: Array<Brand>;
};

/** aggregate fields of "brand" */
export type Brand_Aggregate_Fields = {
  __typename?: 'brand_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Brand_Max_Fields>;
  min?: Maybe<Brand_Min_Fields>;
};


/** aggregate fields of "brand" */
export type Brand_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Brand_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "brand" */
export type Brand_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Brand_Max_Order_By>;
  min?: InputMaybe<Brand_Min_Order_By>;
};

/** input type for inserting array relation for remote table "brand" */
export type Brand_Arr_Rel_Insert_Input = {
  data: Array<Brand_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};

/** Boolean expression to filter rows from the table "brand". All fields are combined with a logical 'AND'. */
export type Brand_Bool_Exp = {
  _and?: InputMaybe<Array<Brand_Bool_Exp>>;
  _not?: InputMaybe<Brand_Bool_Exp>;
  _or?: InputMaybe<Array<Brand_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cta?: InputMaybe<Cta_Bool_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  links?: InputMaybe<Link_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "brand" */
export enum Brand_Constraint {
  /** unique or primary key constraint on columns "id" */
  BrandPkey = 'brand_pkey'
}

/** input type for inserting data into table "brand" */
export type Brand_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cta?: InputMaybe<Cta_Arr_Rel_Insert_Input>;
  domain?: InputMaybe<Domain_Obj_Rel_Insert_Input>;
  domain_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Link_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Tenant_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Brand_Max_Fields = {
  __typename?: 'brand_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  domain_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "brand" */
export type Brand_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Brand_Min_Fields = {
  __typename?: 'brand_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  domain_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "brand" */
export type Brand_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "brand" */
export type Brand_Mutation_Response = {
  __typename?: 'brand_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Brand>;
};

/** input type for inserting object relation for remote table "brand" */
export type Brand_Obj_Rel_Insert_Input = {
  data: Brand_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};

/** on_conflict condition type for table "brand" */
export type Brand_On_Conflict = {
  constraint: Brand_Constraint;
  update_columns?: Array<Brand_Update_Column>;
  where?: InputMaybe<Brand_Bool_Exp>;
};

/** Ordering options when selecting data from "brand". */
export type Brand_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cta_aggregate?: InputMaybe<Cta_Aggregate_Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  links_aggregate?: InputMaybe<Link_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: brand */
export type Brand_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "brand" */
export enum Brand_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "brand" */
export type Brand_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  domain_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "brand" */
export enum Brand_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DomainId = 'domain_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** Call To Action Table */
export type Cta = {
  __typename?: 'cta';
  archived_at?: Maybe<Scalars['timestamptz']>;
  attributes: Scalars['jsonb'];
  /** An object relationship */
  brand: Brand;
  brand_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  kind: Kind_Cta_Enum;
  /** An object relationship */
  kindCta: Kind_Cta;
  /** An array relationship */
  links: Array<Link>;
  /** An aggregate relationship */
  links_aggregate: Link_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** Call To Action Table */
export type CtaAttributesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** Call To Action Table */
export type CtaLinksArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


/** Call To Action Table */
export type CtaLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};

/** aggregated selection of "cta" */
export type Cta_Aggregate = {
  __typename?: 'cta_aggregate';
  aggregate?: Maybe<Cta_Aggregate_Fields>;
  nodes: Array<Cta>;
};

/** aggregate fields of "cta" */
export type Cta_Aggregate_Fields = {
  __typename?: 'cta_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cta_Max_Fields>;
  min?: Maybe<Cta_Min_Fields>;
};


/** aggregate fields of "cta" */
export type Cta_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cta_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cta" */
export type Cta_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cta_Max_Order_By>;
  min?: InputMaybe<Cta_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Cta_Append_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "cta" */
export type Cta_Arr_Rel_Insert_Input = {
  data: Array<Cta_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cta_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cta". All fields are combined with a logical 'AND'. */
export type Cta_Bool_Exp = {
  _and?: InputMaybe<Array<Cta_Bool_Exp>>;
  _not?: InputMaybe<Cta_Bool_Exp>;
  _or?: InputMaybe<Array<Cta_Bool_Exp>>;
  archived_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  attributes?: InputMaybe<Jsonb_Comparison_Exp>;
  brand?: InputMaybe<Brand_Bool_Exp>;
  brand_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  kind?: InputMaybe<Kind_Cta_Enum_Comparison_Exp>;
  kindCta?: InputMaybe<Kind_Cta_Bool_Exp>;
  links?: InputMaybe<Link_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cta" */
export enum Cta_Constraint {
  /** unique or primary key constraint on columns "id" */
  CtaPkey = 'cta_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Cta_Delete_At_Path_Input = {
  attributes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Cta_Delete_Elem_Input = {
  attributes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Cta_Delete_Key_Input = {
  attributes?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "cta" */
export type Cta_Insert_Input = {
  archived_at?: InputMaybe<Scalars['timestamptz']>;
  attributes?: InputMaybe<Scalars['jsonb']>;
  brand?: InputMaybe<Brand_Obj_Rel_Insert_Input>;
  brand_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  kind?: InputMaybe<Kind_Cta_Enum>;
  kindCta?: InputMaybe<Kind_Cta_Obj_Rel_Insert_Input>;
  links?: InputMaybe<Link_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cta_Max_Fields = {
  __typename?: 'cta_max_fields';
  archived_at?: Maybe<Scalars['timestamptz']>;
  brand_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "cta" */
export type Cta_Max_Order_By = {
  archived_at?: InputMaybe<Order_By>;
  brand_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cta_Min_Fields = {
  __typename?: 'cta_min_fields';
  archived_at?: Maybe<Scalars['timestamptz']>;
  brand_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "cta" */
export type Cta_Min_Order_By = {
  archived_at?: InputMaybe<Order_By>;
  brand_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cta" */
export type Cta_Mutation_Response = {
  __typename?: 'cta_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cta>;
};

/** input type for inserting object relation for remote table "cta" */
export type Cta_Obj_Rel_Insert_Input = {
  data: Cta_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cta_On_Conflict>;
};

/** on_conflict condition type for table "cta" */
export type Cta_On_Conflict = {
  constraint: Cta_Constraint;
  update_columns?: Array<Cta_Update_Column>;
  where?: InputMaybe<Cta_Bool_Exp>;
};

/** Ordering options when selecting data from "cta". */
export type Cta_Order_By = {
  archived_at?: InputMaybe<Order_By>;
  attributes?: InputMaybe<Order_By>;
  brand?: InputMaybe<Brand_Order_By>;
  brand_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  kindCta?: InputMaybe<Kind_Cta_Order_By>;
  links_aggregate?: InputMaybe<Link_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cta */
export type Cta_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Cta_Prepend_Input = {
  attributes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "cta" */
export enum Cta_Select_Column {
  /** column name */
  ArchivedAt = 'archived_at',
  /** column name */
  Attributes = 'attributes',
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "cta" */
export type Cta_Set_Input = {
  archived_at?: InputMaybe<Scalars['timestamptz']>;
  attributes?: InputMaybe<Scalars['jsonb']>;
  brand_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  kind?: InputMaybe<Kind_Cta_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "cta" */
export enum Cta_Update_Column {
  /** column name */
  ArchivedAt = 'archived_at',
  /** column name */
  Attributes = 'attributes',
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** List of domains attached to a tenant */
export type Domain = {
  __typename?: 'domain';
  /** An array relationship */
  brands: Array<Brand>;
  /** An aggregate relationship */
  brands_aggregate: Brand_Aggregate;
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
export type DomainBrandsArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


/** List of domains attached to a tenant */
export type DomainBrands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
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
  brands?: InputMaybe<Brand_Bool_Exp>;
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
  brands?: InputMaybe<Brand_Arr_Rel_Insert_Input>;
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
  brands_aggregate?: InputMaybe<Brand_Aggregate_Order_By>;
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

/** The ENUM kind CTA Table */
export type Kind_Cta = {
  __typename?: 'kind_cta';
  /** An array relationship */
  cta: Array<Cta>;
  /** An aggregate relationship */
  cta_aggregate: Cta_Aggregate;
  description?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
};


/** The ENUM kind CTA Table */
export type Kind_CtaCtaArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};


/** The ENUM kind CTA Table */
export type Kind_CtaCta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};

/** aggregated selection of "kind_cta" */
export type Kind_Cta_Aggregate = {
  __typename?: 'kind_cta_aggregate';
  aggregate?: Maybe<Kind_Cta_Aggregate_Fields>;
  nodes: Array<Kind_Cta>;
};

/** aggregate fields of "kind_cta" */
export type Kind_Cta_Aggregate_Fields = {
  __typename?: 'kind_cta_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kind_Cta_Max_Fields>;
  min?: Maybe<Kind_Cta_Min_Fields>;
};


/** aggregate fields of "kind_cta" */
export type Kind_Cta_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kind_Cta_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "kind_cta". All fields are combined with a logical 'AND'. */
export type Kind_Cta_Bool_Exp = {
  _and?: InputMaybe<Array<Kind_Cta_Bool_Exp>>;
  _not?: InputMaybe<Kind_Cta_Bool_Exp>;
  _or?: InputMaybe<Array<Kind_Cta_Bool_Exp>>;
  cta?: InputMaybe<Cta_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kind_cta" */
export enum Kind_Cta_Constraint {
  /** unique or primary key constraint on columns "kind" */
  KindCtaPkey = 'kind_cta_pkey'
}

export enum Kind_Cta_Enum {
  /** Button CTA */
  Button = 'BUTTON',
  /** Form CTA */
  Form = 'FORM',
  /** Hidden CTA */
  Hidden = 'HIDDEN',
  /** Text CTA */
  Text = 'TEXT'
}

/** Boolean expression to compare columns of type "kind_cta_enum". All fields are combined with logical 'AND'. */
export type Kind_Cta_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Kind_Cta_Enum>;
  _in?: InputMaybe<Array<Kind_Cta_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Kind_Cta_Enum>;
  _nin?: InputMaybe<Array<Kind_Cta_Enum>>;
};

/** input type for inserting data into table "kind_cta" */
export type Kind_Cta_Insert_Input = {
  cta?: InputMaybe<Cta_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Kind_Cta_Max_Fields = {
  __typename?: 'kind_cta_max_fields';
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Kind_Cta_Min_Fields = {
  __typename?: 'kind_cta_min_fields';
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "kind_cta" */
export type Kind_Cta_Mutation_Response = {
  __typename?: 'kind_cta_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kind_Cta>;
};

/** input type for inserting object relation for remote table "kind_cta" */
export type Kind_Cta_Obj_Rel_Insert_Input = {
  data: Kind_Cta_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Kind_Cta_On_Conflict>;
};

/** on_conflict condition type for table "kind_cta" */
export type Kind_Cta_On_Conflict = {
  constraint: Kind_Cta_Constraint;
  update_columns?: Array<Kind_Cta_Update_Column>;
  where?: InputMaybe<Kind_Cta_Bool_Exp>;
};

/** Ordering options when selecting data from "kind_cta". */
export type Kind_Cta_Order_By = {
  cta_aggregate?: InputMaybe<Cta_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kind_cta */
export type Kind_Cta_Pk_Columns_Input = {
  kind: Scalars['String'];
};

/** select columns of table "kind_cta" */
export enum Kind_Cta_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Kind = 'kind'
}

/** input type for updating data in table "kind_cta" */
export type Kind_Cta_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
};

/** update columns of table "kind_cta" */
export enum Kind_Cta_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Kind = 'kind'
}

/** The ENUM kind table */
export type Kind_Link = {
  __typename?: 'kind_link';
  description?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  /** An array relationship */
  links: Array<Link>;
  /** An aggregate relationship */
  links_aggregate: Link_Aggregate;
};


/** The ENUM kind table */
export type Kind_LinkLinksArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};


/** The ENUM kind table */
export type Kind_LinkLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Link_Order_By>>;
  where?: InputMaybe<Link_Bool_Exp>;
};

/** aggregated selection of "kind_link" */
export type Kind_Link_Aggregate = {
  __typename?: 'kind_link_aggregate';
  aggregate?: Maybe<Kind_Link_Aggregate_Fields>;
  nodes: Array<Kind_Link>;
};

/** aggregate fields of "kind_link" */
export type Kind_Link_Aggregate_Fields = {
  __typename?: 'kind_link_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kind_Link_Max_Fields>;
  min?: Maybe<Kind_Link_Min_Fields>;
};


/** aggregate fields of "kind_link" */
export type Kind_Link_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kind_Link_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "kind_link". All fields are combined with a logical 'AND'. */
export type Kind_Link_Bool_Exp = {
  _and?: InputMaybe<Array<Kind_Link_Bool_Exp>>;
  _not?: InputMaybe<Kind_Link_Bool_Exp>;
  _or?: InputMaybe<Array<Kind_Link_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  links?: InputMaybe<Link_Bool_Exp>;
};

/** unique or primary key constraints on table "kind_link" */
export enum Kind_Link_Constraint {
  /** unique or primary key constraint on columns "kind" */
  KindPkey = 'kind_pkey'
}

export enum Kind_Link_Enum {
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

/** Boolean expression to compare columns of type "kind_link_enum". All fields are combined with logical 'AND'. */
export type Kind_Link_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Kind_Link_Enum>;
  _in?: InputMaybe<Array<Kind_Link_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Kind_Link_Enum>;
  _nin?: InputMaybe<Array<Kind_Link_Enum>>;
};

/** input type for inserting data into table "kind_link" */
export type Kind_Link_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Link_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Kind_Link_Max_Fields = {
  __typename?: 'kind_link_max_fields';
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Kind_Link_Min_Fields = {
  __typename?: 'kind_link_min_fields';
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "kind_link" */
export type Kind_Link_Mutation_Response = {
  __typename?: 'kind_link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kind_Link>;
};

/** input type for inserting object relation for remote table "kind_link" */
export type Kind_Link_Obj_Rel_Insert_Input = {
  data: Kind_Link_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Kind_Link_On_Conflict>;
};

/** on_conflict condition type for table "kind_link" */
export type Kind_Link_On_Conflict = {
  constraint: Kind_Link_Constraint;
  update_columns?: Array<Kind_Link_Update_Column>;
  where?: InputMaybe<Kind_Link_Bool_Exp>;
};

/** Ordering options when selecting data from "kind_link". */
export type Kind_Link_Order_By = {
  description?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  links_aggregate?: InputMaybe<Link_Aggregate_Order_By>;
};

/** primary key columns input for table: kind_link */
export type Kind_Link_Pk_Columns_Input = {
  kind: Scalars['String'];
};

/** select columns of table "kind_link" */
export enum Kind_Link_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Kind = 'kind'
}

/** input type for updating data in table "kind_link" */
export type Kind_Link_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
};

/** update columns of table "kind_link" */
export enum Kind_Link_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Kind = 'kind'
}

/** The core table of the application that stores the information related to the links */
export type Link = {
  __typename?: 'link';
  archived_at?: Maybe<Scalars['timestamptz']>;
  attributes: Scalars['jsonb'];
  /** An object relationship */
  brand?: Maybe<Brand>;
  brand_id?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  cta?: Maybe<Cta>;
  cta_id?: Maybe<Scalars['uuid']>;
  destinationLink?: Maybe<Scalars['String']>;
  /** An object relationship */
  domain?: Maybe<Domain>;
  domain_id?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  kind: Kind_Link_Enum;
  /** An object relationship */
  kindByKind: Kind_Link;
  label?: Maybe<Scalars['String']>;
  shortLink: Scalars['String'];
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
  archived_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  attributes?: InputMaybe<Jsonb_Comparison_Exp>;
  brand?: InputMaybe<Brand_Bool_Exp>;
  brand_id?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  cta?: InputMaybe<Cta_Bool_Exp>;
  cta_id?: InputMaybe<Uuid_Comparison_Exp>;
  destinationLink?: InputMaybe<String_Comparison_Exp>;
  domain?: InputMaybe<Domain_Bool_Exp>;
  domain_id?: InputMaybe<String_Comparison_Exp>;
  expireAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  kind?: InputMaybe<Kind_Link_Enum_Comparison_Exp>;
  kindByKind?: InputMaybe<Kind_Link_Bool_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  shortLink?: InputMaybe<String_Comparison_Exp>;
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
  archived_at?: InputMaybe<Scalars['timestamptz']>;
  attributes?: InputMaybe<Scalars['jsonb']>;
  brand?: InputMaybe<Brand_Obj_Rel_Insert_Input>;
  brand_id?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  cta?: InputMaybe<Cta_Obj_Rel_Insert_Input>;
  cta_id?: InputMaybe<Scalars['uuid']>;
  destinationLink?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Domain_Obj_Rel_Insert_Input>;
  domain_id?: InputMaybe<Scalars['String']>;
  expireAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  kind?: InputMaybe<Kind_Link_Enum>;
  kindByKind?: InputMaybe<Kind_Link_Obj_Rel_Insert_Input>;
  label?: InputMaybe<Scalars['String']>;
  shortLink?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  variablePassing?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Link_Max_Fields = {
  __typename?: 'link_max_fields';
  archived_at?: Maybe<Scalars['timestamptz']>;
  brand_id?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  cta_id?: Maybe<Scalars['uuid']>;
  destinationLink?: Maybe<Scalars['String']>;
  domain_id?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  shortLink?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "link" */
export type Link_Max_Order_By = {
  archived_at?: InputMaybe<Order_By>;
  brand_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  cta_id?: InputMaybe<Order_By>;
  destinationLink?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  shortLink?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Link_Min_Fields = {
  __typename?: 'link_min_fields';
  archived_at?: Maybe<Scalars['timestamptz']>;
  brand_id?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  cta_id?: Maybe<Scalars['uuid']>;
  destinationLink?: Maybe<Scalars['String']>;
  domain_id?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  shortLink?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "link" */
export type Link_Min_Order_By = {
  archived_at?: InputMaybe<Order_By>;
  brand_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  cta_id?: InputMaybe<Order_By>;
  destinationLink?: InputMaybe<Order_By>;
  domain_id?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  shortLink?: InputMaybe<Order_By>;
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
  archived_at?: InputMaybe<Order_By>;
  attributes?: InputMaybe<Order_By>;
  brand?: InputMaybe<Brand_Order_By>;
  brand_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  cta?: InputMaybe<Cta_Order_By>;
  cta_id?: InputMaybe<Order_By>;
  destinationLink?: InputMaybe<Order_By>;
  domain?: InputMaybe<Domain_Order_By>;
  domain_id?: InputMaybe<Order_By>;
  expireAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  kindByKind?: InputMaybe<Kind_Link_Order_By>;
  label?: InputMaybe<Order_By>;
  shortLink?: InputMaybe<Order_By>;
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
  ArchivedAt = 'archived_at',
  /** column name */
  Attributes = 'attributes',
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CtaId = 'cta_id',
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
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VariablePassing = 'variablePassing'
}

/** input type for updating data in table "link" */
export type Link_Set_Input = {
  archived_at?: InputMaybe<Scalars['timestamptz']>;
  attributes?: InputMaybe<Scalars['jsonb']>;
  brand_id?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  cta_id?: InputMaybe<Scalars['uuid']>;
  destinationLink?: InputMaybe<Scalars['String']>;
  domain_id?: InputMaybe<Scalars['String']>;
  expireAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  kind?: InputMaybe<Kind_Link_Enum>;
  label?: InputMaybe<Scalars['String']>;
  shortLink?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  variablePassing?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "link" */
export enum Link_Update_Column {
  /** column name */
  ArchivedAt = 'archived_at',
  /** column name */
  Attributes = 'attributes',
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CtaId = 'cta_id',
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
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VariablePassing = 'variablePassing'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "brand" */
  delete_brand?: Maybe<Brand_Mutation_Response>;
  /** delete single row from the table: "brand" */
  delete_brand_by_pk?: Maybe<Brand>;
  /** delete data from the table: "cta" */
  delete_cta?: Maybe<Cta_Mutation_Response>;
  /** delete single row from the table: "cta" */
  delete_cta_by_pk?: Maybe<Cta>;
  /** delete data from the table: "domain" */
  delete_domain?: Maybe<Domain_Mutation_Response>;
  /** delete single row from the table: "domain" */
  delete_domain_by_pk?: Maybe<Domain>;
  /** delete data from the table: "kind_cta" */
  delete_kind_cta?: Maybe<Kind_Cta_Mutation_Response>;
  /** delete single row from the table: "kind_cta" */
  delete_kind_cta_by_pk?: Maybe<Kind_Cta>;
  /** delete data from the table: "kind_link" */
  delete_kind_link?: Maybe<Kind_Link_Mutation_Response>;
  /** delete single row from the table: "kind_link" */
  delete_kind_link_by_pk?: Maybe<Kind_Link>;
  /** delete data from the table: "link" */
  delete_link?: Maybe<Link_Mutation_Response>;
  /** delete single row from the table: "link" */
  delete_link_by_pk?: Maybe<Link>;
  /** delete data from the table: "tenant" */
  delete_tenant?: Maybe<Tenant_Mutation_Response>;
  /** delete single row from the table: "tenant" */
  delete_tenant_by_pk?: Maybe<Tenant>;
  /** delete data from the table: "tenant_user" */
  delete_tenant_user?: Maybe<Tenant_User_Mutation_Response>;
  /** delete single row from the table: "tenant_user" */
  delete_tenant_user_by_pk?: Maybe<Tenant_User>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "brand" */
  insert_brand?: Maybe<Brand_Mutation_Response>;
  /** insert a single row into the table: "brand" */
  insert_brand_one?: Maybe<Brand>;
  /** insert data into the table: "cta" */
  insert_cta?: Maybe<Cta_Mutation_Response>;
  /** insert a single row into the table: "cta" */
  insert_cta_one?: Maybe<Cta>;
  /** insert data into the table: "domain" */
  insert_domain?: Maybe<Domain_Mutation_Response>;
  /** insert a single row into the table: "domain" */
  insert_domain_one?: Maybe<Domain>;
  /** insert data into the table: "kind_cta" */
  insert_kind_cta?: Maybe<Kind_Cta_Mutation_Response>;
  /** insert a single row into the table: "kind_cta" */
  insert_kind_cta_one?: Maybe<Kind_Cta>;
  /** insert data into the table: "kind_link" */
  insert_kind_link?: Maybe<Kind_Link_Mutation_Response>;
  /** insert a single row into the table: "kind_link" */
  insert_kind_link_one?: Maybe<Kind_Link>;
  /** insert data into the table: "link" */
  insert_link?: Maybe<Link_Mutation_Response>;
  /** insert a single row into the table: "link" */
  insert_link_one?: Maybe<Link>;
  /** insert data into the table: "tenant" */
  insert_tenant?: Maybe<Tenant_Mutation_Response>;
  /** insert a single row into the table: "tenant" */
  insert_tenant_one?: Maybe<Tenant>;
  /** insert data into the table: "tenant_user" */
  insert_tenant_user?: Maybe<Tenant_User_Mutation_Response>;
  /** insert a single row into the table: "tenant_user" */
  insert_tenant_user_one?: Maybe<Tenant_User>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "brand" */
  update_brand?: Maybe<Brand_Mutation_Response>;
  /** update single row of the table: "brand" */
  update_brand_by_pk?: Maybe<Brand>;
  /** update data of the table: "cta" */
  update_cta?: Maybe<Cta_Mutation_Response>;
  /** update single row of the table: "cta" */
  update_cta_by_pk?: Maybe<Cta>;
  /** update data of the table: "domain" */
  update_domain?: Maybe<Domain_Mutation_Response>;
  /** update single row of the table: "domain" */
  update_domain_by_pk?: Maybe<Domain>;
  /** update data of the table: "kind_cta" */
  update_kind_cta?: Maybe<Kind_Cta_Mutation_Response>;
  /** update single row of the table: "kind_cta" */
  update_kind_cta_by_pk?: Maybe<Kind_Cta>;
  /** update data of the table: "kind_link" */
  update_kind_link?: Maybe<Kind_Link_Mutation_Response>;
  /** update single row of the table: "kind_link" */
  update_kind_link_by_pk?: Maybe<Kind_Link>;
  /** update data of the table: "link" */
  update_link?: Maybe<Link_Mutation_Response>;
  /** update single row of the table: "link" */
  update_link_by_pk?: Maybe<Link>;
  /** update data of the table: "tenant" */
  update_tenant?: Maybe<Tenant_Mutation_Response>;
  /** update single row of the table: "tenant" */
  update_tenant_by_pk?: Maybe<Tenant>;
  /** update data of the table: "tenant_user" */
  update_tenant_user?: Maybe<Tenant_User_Mutation_Response>;
  /** update single row of the table: "tenant_user" */
  update_tenant_user_by_pk?: Maybe<Tenant_User>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_BrandArgs = {
  where: Brand_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Brand_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CtaArgs = {
  where: Cta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cta_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_Kind_CtaArgs = {
  where: Kind_Cta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kind_Cta_By_PkArgs = {
  kind: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Kind_LinkArgs = {
  where: Kind_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kind_Link_By_PkArgs = {
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
export type Mutation_RootDelete_Tenant_UserArgs = {
  where: Tenant_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_User_By_PkArgs = {
  id: Scalars['bigint'];
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
export type Mutation_RootInsert_BrandArgs = {
  objects: Array<Brand_Insert_Input>;
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Brand_OneArgs = {
  object: Brand_Insert_Input;
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CtaArgs = {
  objects: Array<Cta_Insert_Input>;
  on_conflict?: InputMaybe<Cta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cta_OneArgs = {
  object: Cta_Insert_Input;
  on_conflict?: InputMaybe<Cta_On_Conflict>;
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
export type Mutation_RootInsert_Kind_CtaArgs = {
  objects: Array<Kind_Cta_Insert_Input>;
  on_conflict?: InputMaybe<Kind_Cta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kind_Cta_OneArgs = {
  object: Kind_Cta_Insert_Input;
  on_conflict?: InputMaybe<Kind_Cta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kind_LinkArgs = {
  objects: Array<Kind_Link_Insert_Input>;
  on_conflict?: InputMaybe<Kind_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kind_Link_OneArgs = {
  object: Kind_Link_Insert_Input;
  on_conflict?: InputMaybe<Kind_Link_On_Conflict>;
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
export type Mutation_RootInsert_Tenant_UserArgs = {
  objects: Array<Tenant_User_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_User_OneArgs = {
  object: Tenant_User_Insert_Input;
  on_conflict?: InputMaybe<Tenant_User_On_Conflict>;
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
export type Mutation_RootUpdate_BrandArgs = {
  _set?: InputMaybe<Brand_Set_Input>;
  where: Brand_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Brand_By_PkArgs = {
  _set?: InputMaybe<Brand_Set_Input>;
  pk_columns: Brand_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CtaArgs = {
  _append?: InputMaybe<Cta_Append_Input>;
  _delete_at_path?: InputMaybe<Cta_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Cta_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Cta_Delete_Key_Input>;
  _prepend?: InputMaybe<Cta_Prepend_Input>;
  _set?: InputMaybe<Cta_Set_Input>;
  where: Cta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cta_By_PkArgs = {
  _append?: InputMaybe<Cta_Append_Input>;
  _delete_at_path?: InputMaybe<Cta_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Cta_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Cta_Delete_Key_Input>;
  _prepend?: InputMaybe<Cta_Prepend_Input>;
  _set?: InputMaybe<Cta_Set_Input>;
  pk_columns: Cta_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Kind_CtaArgs = {
  _set?: InputMaybe<Kind_Cta_Set_Input>;
  where: Kind_Cta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kind_Cta_By_PkArgs = {
  _set?: InputMaybe<Kind_Cta_Set_Input>;
  pk_columns: Kind_Cta_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kind_LinkArgs = {
  _set?: InputMaybe<Kind_Link_Set_Input>;
  where: Kind_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kind_Link_By_PkArgs = {
  _set?: InputMaybe<Kind_Link_Set_Input>;
  pk_columns: Kind_Link_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Tenant_UserArgs = {
  _inc?: InputMaybe<Tenant_User_Inc_Input>;
  _set?: InputMaybe<Tenant_User_Set_Input>;
  where: Tenant_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_User_By_PkArgs = {
  _inc?: InputMaybe<Tenant_User_Inc_Input>;
  _set?: InputMaybe<Tenant_User_Set_Input>;
  pk_columns: Tenant_User_Pk_Columns_Input;
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
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
  /** An array relationship */
  cta: Array<Cta>;
  /** An aggregate relationship */
  cta_aggregate: Cta_Aggregate;
  /** fetch data from the table: "cta" using primary key columns */
  cta_by_pk?: Maybe<Cta>;
  /** fetch data from the table: "domain" */
  domain: Array<Domain>;
  /** fetch aggregated fields from the table: "domain" */
  domain_aggregate: Domain_Aggregate;
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>;
  /** fetch data from the table: "kind_cta" */
  kind_cta: Array<Kind_Cta>;
  /** fetch aggregated fields from the table: "kind_cta" */
  kind_cta_aggregate: Kind_Cta_Aggregate;
  /** fetch data from the table: "kind_cta" using primary key columns */
  kind_cta_by_pk?: Maybe<Kind_Cta>;
  /** fetch data from the table: "kind_link" */
  kind_link: Array<Kind_Link>;
  /** fetch aggregated fields from the table: "kind_link" */
  kind_link_aggregate: Kind_Link_Aggregate;
  /** fetch data from the table: "kind_link" using primary key columns */
  kind_link_by_pk?: Maybe<Kind_Link>;
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
  /** fetch data from the table: "tenant_user" */
  tenant_user: Array<Tenant_User>;
  /** fetch aggregated fields from the table: "tenant_user" */
  tenant_user_aggregate: Tenant_User_Aggregate;
  /** fetch data from the table: "tenant_user" using primary key columns */
  tenant_user_by_pk?: Maybe<Tenant_User>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootBrandArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Query_RootBrand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Query_RootBrand_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCtaArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};


export type Query_RootCta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};


export type Query_RootCta_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Query_RootKind_CtaArgs = {
  distinct_on?: InputMaybe<Array<Kind_Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Cta_Order_By>>;
  where?: InputMaybe<Kind_Cta_Bool_Exp>;
};


export type Query_RootKind_Cta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kind_Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Cta_Order_By>>;
  where?: InputMaybe<Kind_Cta_Bool_Exp>;
};


export type Query_RootKind_Cta_By_PkArgs = {
  kind: Scalars['String'];
};


export type Query_RootKind_LinkArgs = {
  distinct_on?: InputMaybe<Array<Kind_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Link_Order_By>>;
  where?: InputMaybe<Kind_Link_Bool_Exp>;
};


export type Query_RootKind_Link_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kind_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Link_Order_By>>;
  where?: InputMaybe<Kind_Link_Bool_Exp>;
};


export type Query_RootKind_Link_By_PkArgs = {
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


export type Query_RootTenant_UserArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
};


export type Query_RootTenant_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
};


export type Query_RootTenant_User_By_PkArgs = {
  id: Scalars['bigint'];
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
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
  /** An array relationship */
  cta: Array<Cta>;
  /** An aggregate relationship */
  cta_aggregate: Cta_Aggregate;
  /** fetch data from the table: "cta" using primary key columns */
  cta_by_pk?: Maybe<Cta>;
  /** fetch data from the table: "domain" */
  domain: Array<Domain>;
  /** fetch aggregated fields from the table: "domain" */
  domain_aggregate: Domain_Aggregate;
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>;
  /** fetch data from the table: "kind_cta" */
  kind_cta: Array<Kind_Cta>;
  /** fetch aggregated fields from the table: "kind_cta" */
  kind_cta_aggregate: Kind_Cta_Aggregate;
  /** fetch data from the table: "kind_cta" using primary key columns */
  kind_cta_by_pk?: Maybe<Kind_Cta>;
  /** fetch data from the table: "kind_link" */
  kind_link: Array<Kind_Link>;
  /** fetch aggregated fields from the table: "kind_link" */
  kind_link_aggregate: Kind_Link_Aggregate;
  /** fetch data from the table: "kind_link" using primary key columns */
  kind_link_by_pk?: Maybe<Kind_Link>;
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
  /** fetch data from the table: "tenant_user" */
  tenant_user: Array<Tenant_User>;
  /** fetch aggregated fields from the table: "tenant_user" */
  tenant_user_aggregate: Tenant_User_Aggregate;
  /** fetch data from the table: "tenant_user" using primary key columns */
  tenant_user_by_pk?: Maybe<Tenant_User>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootBrandArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Subscription_RootBrand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Subscription_RootBrand_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCtaArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};


export type Subscription_RootCta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cta_Order_By>>;
  where?: InputMaybe<Cta_Bool_Exp>;
};


export type Subscription_RootCta_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootKind_CtaArgs = {
  distinct_on?: InputMaybe<Array<Kind_Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Cta_Order_By>>;
  where?: InputMaybe<Kind_Cta_Bool_Exp>;
};


export type Subscription_RootKind_Cta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kind_Cta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Cta_Order_By>>;
  where?: InputMaybe<Kind_Cta_Bool_Exp>;
};


export type Subscription_RootKind_Cta_By_PkArgs = {
  kind: Scalars['String'];
};


export type Subscription_RootKind_LinkArgs = {
  distinct_on?: InputMaybe<Array<Kind_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Link_Order_By>>;
  where?: InputMaybe<Kind_Link_Bool_Exp>;
};


export type Subscription_RootKind_Link_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kind_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kind_Link_Order_By>>;
  where?: InputMaybe<Kind_Link_Bool_Exp>;
};


export type Subscription_RootKind_Link_By_PkArgs = {
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


export type Subscription_RootTenant_UserArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
};


export type Subscription_RootTenant_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
};


export type Subscription_RootTenant_User_By_PkArgs = {
  id: Scalars['bigint'];
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
  /** An array relationship */
  brands: Array<Brand>;
  /** An aggregate relationship */
  brands_aggregate: Brand_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  domains: Array<Domain>;
  /** An aggregate relationship */
  domains_aggregate: Domain_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<Tenant_User>;
  /** An aggregate relationship */
  users_aggregate: Tenant_User_Aggregate;
};


/** The Tenant table */
export type TenantBrandsArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


/** The Tenant table */
export type TenantBrands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
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
export type TenantUsersArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
};


/** The Tenant table */
export type TenantUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
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
  brands?: InputMaybe<Brand_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  domains?: InputMaybe<Domain_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Tenant_User_Bool_Exp>;
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
  brands?: InputMaybe<Brand_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  domains?: InputMaybe<Domain_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  users?: InputMaybe<Tenant_User_Arr_Rel_Insert_Input>;
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
  brands_aggregate?: InputMaybe<Brand_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domains_aggregate?: InputMaybe<Domain_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Tenant_User_Aggregate_Order_By>;
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

/** A join table for tenant and user */
export type Tenant_User = {
  __typename?: 'tenant_user';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "tenant_user" */
export type Tenant_User_Aggregate = {
  __typename?: 'tenant_user_aggregate';
  aggregate?: Maybe<Tenant_User_Aggregate_Fields>;
  nodes: Array<Tenant_User>;
};

/** aggregate fields of "tenant_user" */
export type Tenant_User_Aggregate_Fields = {
  __typename?: 'tenant_user_aggregate_fields';
  avg?: Maybe<Tenant_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tenant_User_Max_Fields>;
  min?: Maybe<Tenant_User_Min_Fields>;
  stddev?: Maybe<Tenant_User_Stddev_Fields>;
  stddev_pop?: Maybe<Tenant_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tenant_User_Stddev_Samp_Fields>;
  sum?: Maybe<Tenant_User_Sum_Fields>;
  var_pop?: Maybe<Tenant_User_Var_Pop_Fields>;
  var_samp?: Maybe<Tenant_User_Var_Samp_Fields>;
  variance?: Maybe<Tenant_User_Variance_Fields>;
};


/** aggregate fields of "tenant_user" */
export type Tenant_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tenant_user" */
export type Tenant_User_Aggregate_Order_By = {
  avg?: InputMaybe<Tenant_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenant_User_Max_Order_By>;
  min?: InputMaybe<Tenant_User_Min_Order_By>;
  stddev?: InputMaybe<Tenant_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tenant_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tenant_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tenant_User_Sum_Order_By>;
  var_pop?: InputMaybe<Tenant_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tenant_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Tenant_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tenant_user" */
export type Tenant_User_Arr_Rel_Insert_Input = {
  data: Array<Tenant_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Tenant_User_Avg_Fields = {
  __typename?: 'tenant_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tenant_user" */
export type Tenant_User_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tenant_user". All fields are combined with a logical 'AND'. */
export type Tenant_User_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_User_Bool_Exp>>;
  _not?: InputMaybe<Tenant_User_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tenant_user" */
export enum Tenant_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  TenantUserPkey = 'tenant_user_pkey'
}

/** input type for incrementing numeric columns in table "tenant_user" */
export type Tenant_User_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "tenant_user" */
export type Tenant_User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  tenant?: InputMaybe<Tenant_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Tenant_User_Max_Fields = {
  __typename?: 'tenant_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tenant_user" */
export type Tenant_User_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tenant_User_Min_Fields = {
  __typename?: 'tenant_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  tenant_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tenant_user" */
export type Tenant_User_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tenant_user" */
export type Tenant_User_Mutation_Response = {
  __typename?: 'tenant_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant_User>;
};

/** on_conflict condition type for table "tenant_user" */
export type Tenant_User_On_Conflict = {
  constraint: Tenant_User_Constraint;
  update_columns?: Array<Tenant_User_Update_Column>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant_user". */
export type Tenant_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tenant_user */
export type Tenant_User_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "tenant_user" */
export enum Tenant_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tenant_user" */
export type Tenant_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  tenant_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Tenant_User_Stddev_Fields = {
  __typename?: 'tenant_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tenant_user" */
export type Tenant_User_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tenant_User_Stddev_Pop_Fields = {
  __typename?: 'tenant_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tenant_user" */
export type Tenant_User_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tenant_User_Stddev_Samp_Fields = {
  __typename?: 'tenant_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tenant_user" */
export type Tenant_User_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Tenant_User_Sum_Fields = {
  __typename?: 'tenant_user_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "tenant_user" */
export type Tenant_User_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "tenant_user" */
export enum Tenant_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Tenant_User_Var_Pop_Fields = {
  __typename?: 'tenant_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tenant_user" */
export type Tenant_User_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tenant_User_Var_Samp_Fields = {
  __typename?: 'tenant_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tenant_user" */
export type Tenant_User_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tenant_User_Variance_Fields = {
  __typename?: 'tenant_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tenant_user" */
export type Tenant_User_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

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
  /** An array relationship */
  tenants: Array<Tenant_User>;
  /** An aggregate relationship */
  tenants_aggregate: Tenant_User_Aggregate;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** The User's table */
export type UserTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
};


/** The User's table */
export type UserTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Order_By>>;
  where?: InputMaybe<Tenant_User_Bool_Exp>;
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

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenants?: InputMaybe<Tenant_User_Bool_Exp>;
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
  tenants?: InputMaybe<Tenant_User_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
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
  tenants_aggregate?: InputMaybe<Tenant_User_Aggregate_Order_By>;
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
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
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

export type GetCtaByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetCtaByIdQuery = { __typename?: 'query_root', cta_by_pk?: { __typename?: 'cta', archived_at?: string | null, attributes: any, created_at: string, id: string, kind: Kind_Cta_Enum, updated_at: string, brand: { __typename?: 'brand', image_url?: string | null, url: string, name: string } } | null };

export type GetLinksByPkQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type GetLinksByPkQuery = { __typename?: 'query_root', link: Array<{ __typename?: 'link', domain_id?: string | null, id: string, shortLink: string, label?: string | null }> };

export type GetLinkByShortLinkQueryVariables = Exact<{
  shortLink?: InputMaybe<Scalars['String']>;
}>;


export type GetLinkByShortLinkQuery = { __typename?: 'query_root', link: Array<{ __typename?: 'link', id: string, attributes: any, destinationLink?: string | null, domain_id?: string | null, expireAt?: string | null, kind: Kind_Link_Enum, shortLink: string, variablePassing: boolean, cta_id?: string | null }> };

export type UpdateLinkAttributesMutationVariables = Exact<{
  id: Scalars['uuid'];
  attributes?: InputMaybe<Scalars['jsonb']>;
}>;


export type UpdateLinkAttributesMutation = { __typename?: 'mutation_root', update_link_by_pk?: { __typename?: 'link', attributes: any, destinationLink?: string | null, domain_id?: string | null, expireAt?: string | null, id: string, kind: Kind_Link_Enum, createdAt: string, shortLink: string, updatedAt: string, variablePassing: boolean, label?: string | null, title?: string | null, cta_id?: string | null } | null };


export const GetCtaByIdDocument = gql`
    query getCtaById($id: uuid!) {
  cta_by_pk(id: $id) {
    archived_at
    attributes
    created_at
    id
    kind
    updated_at
    brand {
      image_url
      url
      name
    }
  }
}
    `;
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
    cta_id
  }
}
    `;
export const UpdateLinkAttributesDocument = gql`
    mutation updateLinkAttributes($id: uuid!, $attributes: jsonb) {
  update_link_by_pk(pk_columns: {id: $id}, _append: {attributes: $attributes}) {
    attributes
    destinationLink
    domain_id
    expireAt
    id
    kind
    createdAt
    shortLink
    updatedAt
    variablePassing
    label
    title
    cta_id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCtaById(variables: GetCtaByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCtaByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCtaByIdQuery>(GetCtaByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCtaById', 'query');
    },
    getLinksByPk(variables?: GetLinksByPkQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLinksByPkQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLinksByPkQuery>(GetLinksByPkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLinksByPk', 'query');
    },
    getLinkByShortLink(variables?: GetLinkByShortLinkQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLinkByShortLinkQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLinkByShortLinkQuery>(GetLinkByShortLinkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLinkByShortLink', 'query');
    },
    updateLinkAttributes(variables: UpdateLinkAttributesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateLinkAttributesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateLinkAttributesMutation>(UpdateLinkAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateLinkAttributes', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;