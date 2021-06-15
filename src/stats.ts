/**
 * @swagger
 * definitions:
 *   IHomepageStatisticsType:
 *     type: object
 *     properties:
 *       sites:
 *         description: Total number of sites (public and private) in the platform.
 *         type: number
 */
export interface IHomepageStatisticsType {
  sites: number;
}
