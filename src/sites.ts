import { GeometryCollection, MultiPolygon, Polygon } from '@turf/turf';
import { IUserType } from './identity';
import { ITeamType } from './teams';
import { ICollectionType } from './collections';

export type ValidGeometryType = Polygon | MultiPolygon | GeometryCollection;

/**
 * @swagger
 * definitions:
 *   ISiteMemberType:
 *     type: object
 *     properties:
 *       role:
 *         type: string
 *       site:
 *         $ref: '#/definitions/ISiteType'
 *       user:
 *         $ref: '#/definitions/IUserType'
 *       team:
 *         $ref: '#/definitions/ITeamType'
 *       email:
 *         type: string
 */
export interface ISiteMemberType {
  role: string;
  site?: ISiteType;
  user?: IUserType;
  team?: ITeamType;
  email?: string;
}

/**
 * @swagger
 * definitions:
 *   ISiteVisibilityType:
 *     type: object
 *     properties:
 *       ecology:
 *         type: boolean
 *         default: false
 *       notes:
 *         type: boolean
 *         default: false
 *       photos:
 *         type: boolean
 *         default: false
 *       siteInfo:
 *         type: boolean
 *         default: false
 *       trustedTeams:
 *         type: boolean
 *         default: false
 *       uploads:
 *         type: boolean
 *         default: false
 */
export interface ISiteVisibilityType {
  /** Mark if the site is public or not */
  public: boolean;
  ecology?: boolean;
  notes?: boolean;
  photos?: boolean;
  siteInfo?: boolean;
  trustedTeams?: boolean;
  uploads?: boolean;
}

interface ISiteInfoTypes {
  title: string;
  required: boolean;
  type: 'Boolean' | 'Categorical' | 'Date' | 'Numerical' | 'Plain Text' | 'Tags';
  description?: string;
  options?: string[];
}

/**
 * @swagger
 * definitions:
 *   ISiteInfoBoolean:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         description: always 'Boolean'
 *       value:
 *         type: boolean
 */
export interface ISiteInfoBoolean extends ISiteInfoTypes {
  type: 'Boolean';
  value: boolean;
}

/**
 * @swagger
 * definitions:
 *   ISiteInfoCategorical:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         description: always 'Categorical'
 *       value:
 *         type: string
 */
export interface ISiteInfoCategorical extends ISiteInfoTypes {
  type: 'Categorical';
  value: string;
}

/**
 * @swagger
 * definitions:
 *   ISiteInfoDate:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         description: always 'Date'
 *       value:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 */
export interface ISiteInfoDate extends ISiteInfoTypes {
  type: 'Date';
  value?: Date;
}

/**
 * @swagger
 * definitions:
 *   ISiteInfoNumerical:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         description: always 'Numerical'
 *       value:
 *         type: number
 */
export interface ISiteInfoNumerical extends ISiteInfoTypes {
  type: 'Numerical';
  value?: number;
}

/**
 * @swagger
 * definitions:
 *   ISiteInfoPlainText:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         description: always 'Plain Text'
 *       value:
 *         type: string
 */
export interface ISiteInfoPlainText extends ISiteInfoTypes {
  type: 'Plain Text';
  value?: string;
}

/**
 * @swagger
 * definitions:
 *   ISiteInfoTags:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         description: always 'Tags'
 *       value:
 *         type: array
 *         items:
 *           type: string
 */
 export interface ISiteInfoTags extends ISiteInfoTypes {
  type: 'Tags';
  value: string[];
}

/**
 * @swagger
 * definitions:
 *   MetaDataType:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *       value:
 *         type: string
 */
export type MetaDataType =
  | ISiteInfoBoolean
  | ISiteInfoCategorical
  | ISiteInfoDate
  | ISiteInfoNumerical
  | ISiteInfoPlainText
  | ISiteInfoTags;

/**
 * @swagger
 * definitions:
 *   ISiteType:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       slug:
 *         type: string
 *       description:
 *         type: string
 *       metadata:
 *         type: array
 *         items:
 *           $ref: '#/definitions/MetaDataType'
 *       restorationStatus:
 *         type: boolean
 *         default: false
 *       website:
 *         type: string
 *       area:
 *         type: number
 *       geometry:
 *         type: Polygon | MultiPolygon | GeometryCollection
 *       visibility:
 *         $ref: '#/definitions/ISiteVisibilityType'
 *       createdAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       updatedAt:
 *         type: string
 *         example: 2020-11-10T00:53:20.504Z
 *       members:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ISiteMemberType'
 */
export interface ISiteType {
  id: string;
  uuid: string;
  name: string;
  slug: string;
  description: string;
  collection?: ICollectionType;
  website: string;
  area?: number;
  geometry: ValidGeometryType;
  members?: ISiteMemberType[];
  metadata?: MetaDataType[];
  restorationStatus: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  visibility?: ISiteVisibilityType;
  accessLevel?: 'viewer' | 'editor' | 'owner';
}
