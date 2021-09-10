import { IAbstractInsightBrickResponse, ICalculationResponse, IInsightMapElement, IInsightTextElement, IInsightTitleElement } from './insights';
import { ValidGeometryType } from './sites';
export interface IShareImage {
    url: string;
    title: string;
    checksums: {
        [calculationId: string]: string;
    };
    calculationIds: string[];
}
/** Data interface used when rendering share images */
export interface IShareRenderData {
    area: {
        name: string;
        organization?: string;
        organizationImage?: string;
        slug?: string;
        geometry?: ValidGeometryType;
    };
    brick: {
        data: {
            [calculationId: string]: ICalculationResponse;
        };
        definition: (IAbstractInsightBrickResponse | IInsightTextElement | IInsightTitleElement | IInsightMapElement)[];
    };
}
