import { Polygon } from '@turf/turf';
import { IAreaReference } from './insights';
export interface IDataLayerImageOptions {
    [key: string]: unknown;
}
export interface IDataLayerCategory {
    color: string;
    name: string;
    code?: string;
}
/** Represents a property that displays as a range slider */
export interface IDataLayerPropertyRange {
    type: 'range';
    propertyKey: string;
    /** Title of property */
    title: string;
    /** Minimum value of range */
    min: number;
    /** Maximum value of range */
    max: number;
    /** Unit of value (eg. % or km²) */
    unit: string;
    /** (Optional) step size in range */
    step?: number;
    /** (Optional) Make range interactive by user */
    interactive?: {
        /** Make min value interactive */
        min?: boolean;
        /** Make max value interactive */
        max?: boolean;
    } | boolean;
    /** (Optional) List of palette colors to display in color range.
     * Colors should start with # */
    palette?: string[];
    /** (Optional) Uniform to modify if shader is present */
    shaderUniform?: boolean;
}
/** presents a time property that displays as a range slider and in timeline */
export interface IDataLayerPropertyTime {
    type: 'time';
    propertyKey: string;
    /** Title of property */
    title: string;
    /** Set to true if property should be handled by shader */
    shaderUniform?: boolean;
    range?: boolean;
    /** (Optional) List of palette colors to display in color range.
     * Colors should start with # */
    palette?: string[];
    /** (Optional) what unit the time should be represented in. Default is epoch ms */
    unit?: 'epoch' | 'year';
    /** Minimum value of range */
    min?: number;
    /** Maximum value of range */
    max?: number;
}
export interface IDataLayerPropertySwitch {
    type: 'switch';
    title: string;
    label: string;
    propertyKey: string;
    shaderUniform?: boolean;
    initialValue?: boolean;
}
export interface IDataLayerPropertyCategories {
    type: 'categories';
    title: string;
    categories: IDataLayerCategory[];
    propertyKey: string;
    shaderUniform?: boolean;
    interactive?: boolean;
}
/** Types of data layer properties that are available */
export declare type IDataLayerProperty = IDataLayerPropertyRange | IDataLayerPropertyTime | IDataLayerPropertySwitch | IDataLayerPropertyCategories;
/** Types of datalayers that are available */
export declare enum DatalayerType {
    TILESET = "tileset",
    SHADER_TILESET = "shader_tileset",
    FILMSTRIP_OVERLAY = "filmstrip"
}
/** Response of datalayer call,
 *  containing the definition of the datalayer metadata */
export interface IDataLayerResponse extends IDataLayerMetadata {
    code: string;
    type: 'tileset' | 'shader_tileset' | 'filmstrip';
    properties: IDataLayerProperty[];
}
/** Datalayer metadata object */
export interface IDataLayerMetadata {
    /** Name of the data layer to be displayed in the UI */
    name: string;
    /** Longer description of the datalayer */
    description?: string;
    collection?: string;
    /** Text describing the resolution of the datalayer */
    resolution?: string;
    /** Optional url pointing to the source of the data layer asset */
    sourceUrl?: string;
    /** Name of the source of the data layer */
    sourceName?: string;
}
/** Request data for datalayer content */
export interface IDataLayerContentRequestBody {
    imageOptions?: IDataLayerImageOptions;
    area?: IAreaReference;
}
/**
 * Abstract datalayer content response object.
 * Responses will always be one of the extended types
 */
export interface IDataLayerContent {
    type: DatalayerType;
    minZoom?: number;
    maxZoom?: number;
    checksum?: string;
    error?: boolean;
}
/** Datalayer response for a basic tileset datalayer */
export interface IDataLayerTilesetContent extends IDataLayerContent {
    type: DatalayerType.TILESET;
    mapId?: string;
    token?: string;
    bucket?: string;
    path?: string;
    suffix?: string;
}
/** Datalayer response for a tileset datalayer that should be rendered with shaders */
export interface IDataLayerShaderTilesetContent extends IDataLayerContent {
    type: DatalayerType.SHADER_TILESET;
    mapId?: string;
    shader: string;
    token?: string;
    timestamps?: [number, number?][];
    bucket?: string;
    path?: string;
    suffix?: string;
}
/** Datalayer response for datalayers that contain filmstrips for a specific bound */
export interface IDataLayerFilmstripContent extends IDataLayerContent {
    type: DatalayerType.FILMSTRIP_OVERLAY;
    /** URL of the filmstrip */
    imageUrl: string;
    /** Array of timestamps of each frame */
    timestamps: [number, number?][];
    /** The geographic bounds of the image */
    bounds: Polygon;
}
export interface IDataLayerErrorContent extends IDataLayerContent {
    error: boolean;
    message?: string;
}
