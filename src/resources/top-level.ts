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
   * The search query in keyword format. Must contain between 1 and 50 words (words
   * are separated by spaces; extra whitespace is ignored).
   */
  query: string;

  /**
   * Opaque identifier used to correlate this request with pipeline validation
   * traces. For debugging purposes only; has no effect on search results.
   */
  debugTraceId?: string;

  /**
   * Maximum character length for each result's description.
   */
  maxDescriptionLength?: number;
}

export declare namespace TopLevel {
  export { type SearchResponse as SearchResponse, type SearchParams as SearchParams };
}
