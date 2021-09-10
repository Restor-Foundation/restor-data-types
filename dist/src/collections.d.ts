import { ISiteType, ITeamType, IUserType } from './';
/**
 * @swagger
 * definitions:
 *   ICollectionMemberType:
 *     type: object
 *     properties:
 *       role:
 *         type: string
 *       collection:
 *         $ref: '#/definitions/ICollectionType'
 *       user:
 *         $ref: '#/definitions/IUserType'
 *       team:
 *         $ref: '#/definitions/ITeamType'
 *       email:
 *         type: string
 */
export interface ICollectionMemberType {
    role: string;
    collection?: ICollectionType;
    user?: IUserType;
    team?: ITeamType;
    email?: string;
}
/**
 * @swagger
 * definitions:
 *   ICollectionMemberByUserType:
 *     type: object
 *     properties:
 *       role:
 *         type: string
 *       collection:
 *         $ref: '#/definitions/ICollectionType'
 *       user:
 *         $ref: '#/definitions/IUserType'
 *       team:
 *         $ref: '#/definitions/ITeamType'
 *       email:
 *         type: string
 */
export interface ICollectionMemberByUserType {
    user: IUserType;
    role: string;
    collection?: ICollectionType;
    team?: ITeamType;
    email?: string;
}
/**
 * @swagger
 * definitions:
 *   ICollectionMemberByTeamType:
 *     type: object
 *     properties:
 *       role:
 *         type: string
 *       collection:
 *         $ref: '#/definitions/ICollectionType'
 *       user:
 *         $ref: '#/definitions/IUserType'
 *       team:
 *         $ref: '#/definitions/ITeamType'
 *       email:
 *         type: string
 */
export interface ICollectionMemberByTeamType {
    team: ITeamType;
    role: string;
    user?: IUserType;
    collection?: ICollectionType;
    email?: string;
}
/**
 * @swagger
 * definitions:
 *   ICollectionOwnerType:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *       user:
 *         $ref: '#/definitions/IUserTypeMinimal'
 *       team:
 *         $ref: '#/definitions/ITeamTypeMinimal'
 */
export interface ICollectionOwnerType {
    type: 'User' | 'Team';
    user?: IUserType;
    team?: ITeamType;
}
/**
 * @swagger
 * definitions:
 *   ICollectionType:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       owner:
 *         $ref: '#/definitions/ICollectionOwnerType'
 *       name:
 *         type: string
 *       slug:
 *         type: string
 *       description:
 *         type: string
 *       website:
 *         type: string
 *       image:
 *         type: string
 *       createdAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       updatedAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       members:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ICollectionMemberType'
 *       sites:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ISiteType'
 */
export interface ICollectionType {
    id: string;
    name: string;
    slug: string;
    description: string;
    owner?: ICollectionOwnerType;
    image?: string;
    website?: string;
    photo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    members?: ICollectionMemberType[];
    sites?: ISiteType[];
}
