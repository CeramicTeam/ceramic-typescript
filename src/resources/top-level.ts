// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface SearchResponse {
  /**
   * The request ID you provided.
   */
  id?: number;

  /**
   * JSON-RPC version. Always "2.0".
   */
  jsonrpc?: string;

  result?: SearchResponse.Result;
}

export namespace SearchResponse {
  export interface Result {
    /**
     * Array of search results.
     */
    results?: Array<Result.Result>;

    searchMetadata?: Result.SearchMetadata;

    /**
     * Total number of results returned.
     */
    totalResults?: number;
  }

  export namespace Result {
    export interface Result {
      /**
       * A text snippet from the page content.
       */
      description?: string;

      /**
       * Relevance score for the result.
       */
      score?: number;

      /**
       * The title of the web page.
       */
      title?: string;

      /**
       * The URL of the web page.
       */
      url?: string;
    }

    export interface SearchMetadata {
      /**
       * Time taken to execute the search in seconds.
       */
      executionTime?: number;
    }
  }
}

export interface SearchParams {
  /**
   * A unique identifier for the request.
   */
  id: number;

  /**
   * JSON-RPC version. Must be "2.0".
   */
  jsonrpc: '2.0';

  /**
   * The method to call. Use "query" for search.
   */
  method: 'query';

  params: SearchParams.Params;
}

export namespace SearchParams {
  export interface Params {
    /**
     * The search query in natural language.
     */
    query: string;

    /**
     * Maximum character length for result descriptions.
     */
    maxDescriptionLength?: number;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
  }
}

export declare namespace TopLevel {
  export { type SearchResponse as SearchResponse, type SearchParams as SearchParams };
}
