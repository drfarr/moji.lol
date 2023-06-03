import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Moji = {
  __typename?: 'Moji';
  id: Scalars['ID'];
  tags: Array<Tag>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  mojis: Array<Moji>;
  tags: Array<Tag>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  mojis: Array<Moji>;
  title: Scalars['String'];
};

export type GetMojisQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMojisQuery = { __typename?: 'Query', mojis: Array<{ __typename?: 'Moji', id: string, title: string, tags: Array<{ __typename?: 'Tag', title: string }> }> };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', title: string, mojis: Array<{ __typename?: 'Moji', id: string, title: string }> }> };


export const GetMojisDocument = gql`
    query getMojis {
  mojis {
    id
    title
    tags {
      title
    }
  }
}
    `;

/**
 * __useGetMojisQuery__
 *
 * To run a query within a React component, call `useGetMojisQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMojisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMojisQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMojisQuery(baseOptions?: Apollo.QueryHookOptions<GetMojisQuery, GetMojisQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMojisQuery, GetMojisQueryVariables>(GetMojisDocument, options);
      }
export function useGetMojisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMojisQuery, GetMojisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMojisQuery, GetMojisQueryVariables>(GetMojisDocument, options);
        }
export type GetMojisQueryHookResult = ReturnType<typeof useGetMojisQuery>;
export type GetMojisLazyQueryHookResult = ReturnType<typeof useGetMojisLazyQuery>;
export type GetMojisQueryResult = Apollo.QueryResult<GetMojisQuery, GetMojisQueryVariables>;
export const GetTagsDocument = gql`
    query getTags {
  tags {
    title
    mojis {
      id
      title
    }
  }
}
    `;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
      }
export function useGetTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;