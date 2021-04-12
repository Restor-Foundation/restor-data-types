import { IUserType } from './identity';
import { ICollectionMemberType } from './collections';
import { ISiteMemberType } from './sites';

/**
 * @swagger
 * definitions:
 *   ITeamTypeMinimal:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       slug:
 *         type: string
 *       adminCount:
 *         type: number
 *         description: the number of admins for this team
 *       createdAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       updatedAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 */
export interface ITeamTypeMinimal {
  id: string;
  name: string;
  slug: string;
  adminCount: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @swagger
 * definitions:
 *   ITeamType:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       slug:
 *         type: string
 *       adminCount:
 *         type: number
 *         description: the number of admins for this team
 *       createdAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       updatedAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 */
export interface ITeamType {
  id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  members?: ITeamMemberType[];
  adminCount: number;
  collections?: ICollectionMemberType[];
  sites?: ISiteMemberType[];
  siteCount: number;
}

/**
 * @swagger
 * definitions:
 *   ITeamMemberType:
 *     type: object
 *     properties:
 *       role:
 *         type: string
 *         example: admin
 *       team:
 *         $ref: '#/definitions/ITeamType'
 *         required: false
 *       user:
 *         $ref: '#/definitions/IUserType'
 *         required: false
 */
export interface ITeamMemberType {
  team?: ITeamType;
  user?: IUserType;
  role: string;
}

/**
 * @swagger
 * definitions:
 *   ITeamInviteType:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *       team:
 *         $ref: '#/definitions/ITeamType'
 *         required: false
 *       email:
 *         type: string
 *       role:
 *         type: string
 *         example: member
 *       createdAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       updatedAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       acceptedAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 */
export interface ITeamInviteType {
  id: number;
  team?: ITeamType;
  email?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  acceptedAt: Date;
}
