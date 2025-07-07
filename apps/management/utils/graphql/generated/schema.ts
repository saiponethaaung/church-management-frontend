import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String']['output'];
};

/** churchAddress */
export type ChurchAdress = {
  __typename?: 'ChurchAdress';
  street: Scalars['String']['output'];
};

/** churchPagination */
export type ChurchPaginationResponse = {
  __typename?: 'ChurchPaginationResponse';
  data: Array<ChurchResponse>;
  pagination: PaginationResponse;
};

/** church */
export type ChurchResponse = {
  __typename?: 'ChurchResponse';
  address: ChurchAdress;
  countryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

/** createChurch */
export type CreateChurchData = {
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChurch: ChurchResponse;
  login: AccessToken;
  register: UserResponse;
};


export type MutationCreateChurchArgs = {
  createChurch: CreateChurchData;
};


export type MutationLoginArgs = {
  loginData: UserLoginDto;
};


export type MutationRegisterArgs = {
  registerData: UserRegisterDto;
};

/** paginationResponse */
export type PaginationResponse = {
  __typename?: 'PaginationResponse';
  currentPage: Scalars['Float']['output'];
  limit: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
  totalPage: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getChurch: ChurchResponse;
  getChurchs: ChurchPaginationResponse;
  getProfile: UserResponse;
};


export type QueryGetChurchArgs = {
  id: Scalars['String']['input'];
};

export type UserLoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserRegisterDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** user */
export type UserResponse = {
  __typename?: 'UserResponse';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  verified: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessToken: ResolverTypeWrapper<AccessToken>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ChurchAdress: ResolverTypeWrapper<ChurchAdress>;
  ChurchPaginationResponse: ResolverTypeWrapper<ChurchPaginationResponse>;
  ChurchResponse: ResolverTypeWrapper<ChurchResponse>;
  CreateChurchData: CreateChurchData;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationResponse: ResolverTypeWrapper<PaginationResponse>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserLoginDTO: UserLoginDto;
  UserRegisterDTO: UserRegisterDto;
  UserResponse: ResolverTypeWrapper<UserResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessToken: AccessToken;
  Boolean: Scalars['Boolean']['output'];
  ChurchAdress: ChurchAdress;
  ChurchPaginationResponse: ChurchPaginationResponse;
  ChurchResponse: ChurchResponse;
  CreateChurchData: CreateChurchData;
  DateTime: Scalars['DateTime']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  PaginationResponse: PaginationResponse;
  Query: {};
  String: Scalars['String']['output'];
  UserLoginDTO: UserLoginDto;
  UserRegisterDTO: UserRegisterDto;
  UserResponse: UserResponse;
};

export type AccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessToken'] = ResolversParentTypes['AccessToken']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChurchAdressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChurchAdress'] = ResolversParentTypes['ChurchAdress']> = {
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChurchPaginationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChurchPaginationResponse'] = ResolversParentTypes['ChurchPaginationResponse']> = {
  data?: Resolver<Array<ResolversTypes['ChurchResponse']>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['PaginationResponse'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChurchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChurchResponse'] = ResolversParentTypes['ChurchResponse']> = {
  address?: Resolver<ResolversTypes['ChurchAdress'], ParentType, ContextType>;
  countryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createChurch?: Resolver<ResolversTypes['ChurchResponse'], ParentType, ContextType, RequireFields<MutationCreateChurchArgs, 'createChurch'>>;
  login?: Resolver<ResolversTypes['AccessToken'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'loginData'>>;
  register?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'registerData'>>;
};

export type PaginationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationResponse'] = ResolversParentTypes['PaginationResponse']> = {
  currentPage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalPage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getChurch?: Resolver<ResolversTypes['ChurchResponse'], ParentType, ContextType, RequireFields<QueryGetChurchArgs, 'id'>>;
  getChurchs?: Resolver<ResolversTypes['ChurchPaginationResponse'], ParentType, ContextType>;
  getProfile?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType>;
};

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessToken?: AccessTokenResolvers<ContextType>;
  ChurchAdress?: ChurchAdressResolvers<ContextType>;
  ChurchPaginationResponse?: ChurchPaginationResponseResolvers<ContextType>;
  ChurchResponse?: ChurchResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PaginationResponse?: PaginationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
};


export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessToken', accessToken: string } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'UserResponse', id: string, name: string, email: string, verified: boolean, createdAt: any, createdBy?: string | null, updatedAt: any, updatedBy?: string | null } };

export type CreateChurchMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateChurchMutation = { __typename?: 'Mutation', createChurch: { __typename?: 'ChurchResponse', countryId: string, id: string, logo: string, name: string, verified: boolean, address: { __typename?: 'ChurchAdress', street: string } } };

export type GetChurchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChurchesQuery = { __typename?: 'Query', getChurchs: { __typename?: 'ChurchPaginationResponse', data: Array<{ __typename?: 'ChurchResponse', countryId: string, id: string, logo: string, name: string, verified: boolean, address: { __typename?: 'ChurchAdress', street: string } }>, pagination: { __typename?: 'PaginationResponse', currentPage: number, limit: number, totalCount: number, totalPage: number } } };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(loginData: {email: $email, password: $password}) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ProfileDocument = gql`
    query Profile {
  getProfile {
    id
    name
    email
    verified
    createdAt
    createdBy
    updatedAt
    updatedBy
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const CreateChurchDocument = gql`
    mutation CreateChurch($name: String!) {
  createChurch(createChurch: {name: $name}) {
    countryId
    id
    logo
    name
    verified
    address {
      street
    }
  }
}
    `;
export type CreateChurchMutationFn = Apollo.MutationFunction<CreateChurchMutation, CreateChurchMutationVariables>;

/**
 * __useCreateChurchMutation__
 *
 * To run a mutation, you first call `useCreateChurchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChurchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChurchMutation, { data, loading, error }] = useCreateChurchMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateChurchMutation(baseOptions?: Apollo.MutationHookOptions<CreateChurchMutation, CreateChurchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChurchMutation, CreateChurchMutationVariables>(CreateChurchDocument, options);
      }
export type CreateChurchMutationHookResult = ReturnType<typeof useCreateChurchMutation>;
export type CreateChurchMutationResult = Apollo.MutationResult<CreateChurchMutation>;
export type CreateChurchMutationOptions = Apollo.BaseMutationOptions<CreateChurchMutation, CreateChurchMutationVariables>;
export const GetChurchesDocument = gql`
    query GetChurches {
  getChurchs {
    data {
      countryId
      id
      logo
      name
      verified
      address {
        street
      }
    }
    pagination {
      currentPage
      limit
      totalCount
      totalPage
    }
  }
}
    `;

/**
 * __useGetChurchesQuery__
 *
 * To run a query within a React component, call `useGetChurchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChurchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChurchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChurchesQuery(baseOptions?: Apollo.QueryHookOptions<GetChurchesQuery, GetChurchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChurchesQuery, GetChurchesQueryVariables>(GetChurchesDocument, options);
      }
export function useGetChurchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChurchesQuery, GetChurchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChurchesQuery, GetChurchesQueryVariables>(GetChurchesDocument, options);
        }
export function useGetChurchesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChurchesQuery, GetChurchesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChurchesQuery, GetChurchesQueryVariables>(GetChurchesDocument, options);
        }
export type GetChurchesQueryHookResult = ReturnType<typeof useGetChurchesQuery>;
export type GetChurchesLazyQueryHookResult = ReturnType<typeof useGetChurchesLazyQuery>;
export type GetChurchesSuspenseQueryHookResult = ReturnType<typeof useGetChurchesSuspenseQuery>;
export type GetChurchesQueryResult = Apollo.QueryResult<GetChurchesQuery, GetChurchesQueryVariables>;