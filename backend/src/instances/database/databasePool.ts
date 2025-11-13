import sql from 'mssql';
import { config } from '@/config';

let pool: sql.ConnectionPool | null = null;

/**
 * @summary
 * Gets or creates a database connection pool instance
 *
 * @function getPool
 * @module instances/database
 *
 * @returns {Promise<sql.ConnectionPool>} Database connection pool
 *
 * @throws {Error} When connection fails
 *
 * @example
 * const pool = await getPool();
 * const result = await pool.request().query('SELECT * FROM table');
 */
export async function getPool(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = new sql.ConnectionPool(config.database);
    await pool.connect();
    console.log('Database connection pool created');
  }
  return pool;
}

/**
 * @summary
 * Closes the database connection pool
 *
 * @function closePool
 * @module instances/database
 *
 * @returns {Promise<void>}
 *
 * @example
 * await closePool();
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.close();
    pool = null;
    console.log('Database connection pool closed');
  }
}
