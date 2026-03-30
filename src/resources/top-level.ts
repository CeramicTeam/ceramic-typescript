// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface SearchResponse {
  /**
   * Server-generated request identifier (often a UUID).
   */
  requestId: string;

  result: SearchResponse.Result;
}

export namespace SearchResponse {
  export interface Result {
    /**
     * Array of search results.
     */
    results: Array<Result.Result>;

    searchMetadata: Result.SearchMetadata;

    /**
     * Total number of results returned.
     */
    totalResults: number;
  }

  export namespace Result {
    export interface Result {
      /**
       * A text snippet from the page content.
       */
      description: string;

      /**
       * Relevance score for the result.
       */
      score: number;

      /**
       * The title of the web page.
       */
      title: string;

      /**
       * The URL of the web page.
       */
      url: string;
    }

    export interface SearchMetadata {
      /**
       * Time taken to execute the search in seconds.
       */
      executionTime: number;
    }
  }
}

export interface SearchParams {
  /**
   * The search query in natural language. Must contain between 1 and 50 words (words
   * are separated by spaces; extra whitespace is ignored).
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

export declare namespace TopLevel {
  export { type SearchResponse as SearchResponse, type SearchParams as SearchParams };
}
