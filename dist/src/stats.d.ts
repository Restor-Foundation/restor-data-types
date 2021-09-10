/**
 * @swagger
 * definitions:
 *   IHomepageStatisticsType:
 *     type: object
 *     properties:
 *       sites:
 *         description: Total number of sites (public and private) in the platform.
 *         type: number
 *       privateSites:
 *         description: Total number of private sites in the platform.
 *         type: number
 *       publicSites:
 *         description: Total number of public sites in the platform.
 *         type: number
 */
export interface IHomepageStatisticsType {
    sites: number;
    privateSites: number;
    publicSites: number;
}
