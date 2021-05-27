import admin from 'firebase-admin';

import { ISiteMemberType } from './sites';
import { ITeamInviteType, ITeamMemberType, ITeamType } from './teams';
import { ICollectionMemberType } from './collections';

import UserRecord = admin.auth.UserRecord;

/**
 * @swagger
 * definitions:
 *   IUserType:
 *     type: object
 *     properties:
 *       uid:
 *         type: string
 *         example: 4sfdfgNdlfc9ZByDndfgoOErrsua
 *       displayName:
 *         type: string
 *         example: Lisa Smith
 *       email:
 *         type: string
 *         example: example@email.com
 *       photoURL:
 *         type: string
 *       sites:
 *         type: array
 *         required: false
 *         items:
 *           $ref: '#/definitions/ISiteType'
 *       teams:
 *         type: array
 *         required: false
 *         items:
 *           $ref: '#/definitions/ITeamType'
 *       openTeamInvites:
 *         type: array
 *         required: false
 *         items:
 *           $ref: '#/definitions/ITeamInviteType'
 */
export interface IUserType {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  sites?: ISiteMemberType[];
  teams?: ITeamMemberType[];
  openTeamInvites?: ITeamInviteType[];
  collections?: ICollectionMemberType[];
}

/**
 * @swagger
 * definitions:
 *   IUserTypeMinimal:
 *     type: object
 *     properties:
 *       uid:
 *         type: string
 *         example: 4sfdfgNdlfc9ZByDndfgoOErrsua
 *       displayName:
 *         type: string
 *         example: Lisa Smith
 *       photoURL:
 *         type: string
 */
export interface IUserTypeMinimal {
  uid: string;
  displayName: string;
  photoURL: string;
}

/**
 * @swagger
 * definitions:
 *   IIAMUserType:
 *     allOf:
 *     - $ref: '#/definitions/IUserType'
 *     - type: object
 *       properties:
 *         email:
 *           type: string
 *         displayName:
 *           type: string
 */
export interface IIAMUserType extends UserRecord {
  sites?: ISiteMemberType[];
  teams?: ITeamMemberType[];
  openTeamInvites?: ITeamInviteType[];
  collections?: ICollectionMemberType[];
}

/**
 * @swagger
 * definitions:
 *   IMemberType:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *       user:
 *         $ref: '#/definitions/IUserTypeMinimal'
 *       team:
 *         $ref: '#/definitions/ITeamTypeMinimal'
 */
export interface IMemberType {
  type: 'User' | 'Team';
  user?: IUserType;
  team?: ITeamType;
}
