import { Feature, MultiPolygon } from '@turf/turf';
export interface IBoundariesData {
    boundaries: {
        name: string;
        id: string;
        parentName: string;
        area: number;
    }[];
}
export declare type IBoundariesResponse = IBoundariesData;
export declare type IBoundariesGeometryResponse = Feature<MultiPolygon>;
export interface IGeocoderLocation {
    long?: string;
    country?: string;
}
