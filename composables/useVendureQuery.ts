import { GraphQLClient } from 'graphql-request'
import { useRuntimeConfig } from '#app'

export function useVendureQuery() {
  const config = useRuntimeConfig()
  const client = new GraphQLClient(config.public.vendureApi)

  const query = async <T>(query: string, variables?: any): Promise<T> => {
    try {
      return await client.request<T>(query, variables)
    } catch (error) {
      console.error('GraphQL Query Error:', error)
      throw error
    }
  }

  return {
    query
  }
}