/**
 * @summary
 * Creates a standardized success response object
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} [metadata] - Optional metadata
 *
 * @returns {object} Standardized success response
 *
 * @example
 * res.json(successResponse(userData));
 */
export function successResponse<T>(data: T, metadata?: any): object {
  return {
    success: true,
    data,
    ...(metadata && { metadata: { ...metadata, timestamp: new Date().toISOString() } }),
  };
}

/**
 * @summary
 * Creates a standardized error response object
 *
 * @function errorResponse
 * @module utils/response
 *
 * @param {string} message - Error message
 * @param {string} [code] - Error code
 * @param {any} [details] - Additional error details
 *
 * @returns {object} Standardized error response
 *
 * @example
 * res.status(400).json(errorResponse('Invalid input'));
 */
export function errorResponse(message: string, code?: string, details?: any): object {
  return {
    success: false,
    error: {
      code: code || 'ERROR',
      message,
      ...(details && { details }),
      timestamp: new Date().toISOString(),
    },
  };
}
