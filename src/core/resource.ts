// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Ceramic } from '../client';

export abstract class APIResource {
  protected _client: Ceramic;

  constructor(client: Ceramic) {
    this._client = client;
  }
}
