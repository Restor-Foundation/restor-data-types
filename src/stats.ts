/**
 * @swagger
 * definitions:
 *   IHomepageStatisticsType:
 *     type: object
 *     properties:
 *       teams:
 *         description: Total number of teams registered in the platform.
 *         type: number
 *       sites:
 *         description: Total number of sites created in the platform.
 *         type: number
 *       area:
 *         description: Sum of the area (in km2) of all the sites created in the platform.
 *         type: number
 */
export interface IHomepageStatisticsType {
  teams: number;
  sites: number;
  area: number;
}
