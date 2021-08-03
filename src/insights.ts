import { ValidGeometryType } from './sites';

export interface SpeciesInfo {
  label: string;
  metadata?: {
    propertyName: string;
    value: string | number | Record<string, unknown>;
  }[];
  value?: number;
}

export enum VisualizationType {
  Text = 'text',
  BarChart = 'barchart',
  CategoricalBarChart = 'categoricalbarchart',
  VerticalBarChart = 'verticalbarchart',
  SpeciesChart = 'specieschart',
  HorizontalBoxChart = 'horizontalboxchart',
  Alert = 'alert',
  LineChart = 'linechart'
}

/** A reference pointing to an area */
export interface IAreaReference {
  /** Geojson geometry */
  geometry?: ValidGeometryType;
  /** Admin boundary id */
  boundaryId?: string;
  /** Site id */
  siteId?: string;
  /** Site UUID */
  siteUUID?: string;
}
export interface IInsightsResponse {
  chapters: IInsightChapterDefinition[];
}

/** Request data for requesting calculation results */
export interface ICalculationRequestData extends IAreaReference {
  calculations?: string[];
  calculationOptions: {
    [calculation: string]: {
      [key: string]: unknown;
    };
  };
}

/** Response object for calculation results */
export interface ICalculationResponse {
  [calculation: string]: IAbstractCalculationBrickType['response'];
}

/**
 * Definition of a data insights chapter
 */
export interface IInsightChapterDefinition {
  /** Title of the chapter */
  title: string;

  /** The actual elements shown inside the chapter */
  elements: (
    | IAbstractInsightBrickResponse
    | IInsightTextElement
    | IInsightTitleElement
    | IInsightMapElement
  )[];
}

/**
 * Definition of a brick in the insights panel.
 */
export interface IAbstractInsightBrickResponse
  extends IInsightsElementDefinition {
  type: 'brick';

  visualizationType: VisualizationType;

  /** The title of the brick */
  title: string;
  /** A description of the brick shown in the UI */
  description: string;

  /** The property index to modify upon interaction, if any */
  interactPropertyIndex?: number;
  calculationId: string;
  dataLayerId?: string;
  source: { name: string; url?: string }[];
}

/**
 * Insights brick with specific brick type
 */
export type IInsightsBrickResponse<
  BrickType extends IAbstractCalculationBrickType
> = IAbstractInsightBrickResponse & BrickType['options'];

interface IInsightsElementDefinition {
  type: string;
}

export interface IInsightTextElement extends IInsightsElementDefinition {
  type: 'text';
  text: string;
}

export interface IInsightTitleElement extends IInsightsElementDefinition {
  type: 'title';
  title: string;
}

export interface IInsightMapElement extends IInsightsElementDefinition {
  type: 'map';
  title: string;
}

export interface IAbstractCalculationBrickType {
  type: VisualizationType;
  response: {
    unit?: string | string[];
    value?: number | number[];
    values?: number | number[];
    total?: number | number[];
    contextualAlerts?: string[];
  };
  options: Record<string, unknown>;
}

/** Text Insight Definition */
export interface ITextInsight extends IAbstractCalculationBrickType {
  type: VisualizationType.Text;
  response: {
    text?: string | string[];
    color?: string | string[];
    value?: number | number[];
    unit?: string | string[];
  };
}
/** Bar Chart Definition */
export interface IBarChart extends IAbstractCalculationBrickType {
  type: VisualizationType.BarChart;
  options: {
    showConfidence?: boolean;
  };
  response: {
    value: number;
    total: number;
    unit: string;
    color?: string;
  };
}

/** Line Chart Definition */
export interface ILineChart extends IAbstractCalculationBrickType {
  type: VisualizationType.LineChart;
  response: {
    unit?: string;
    lines: {
      label: string;
      color: string;
      yValues: number[];
      xValues: number[];
    }[];
  };
}

/** Alert Definitioin */
export interface IAlert extends IAbstractCalculationBrickType {
  type: VisualizationType.Alert;
  response: {
    shouldDisplay: 1 | 0;
    alertTitle: string;
    alertTextContent?: string;
    source?: string;
    unit?: string;
  };
}

/** Categorical Bar Chart Definition */
export interface ICategoricalBarChart extends IAbstractCalculationBrickType {
  type: VisualizationType.CategoricalBarChart;
  response: {
    // values: { percent: number; label: string; color?: string; code: string }[];
    values: number[];
    total: number;
    unit: string;
    labels: string[];
    colors: string[];
    codes: string[];
  };
}

/** Vertical Bar Chart Definition */
export interface IVerticalBarChart extends IAbstractCalculationBrickType {
  type: VisualizationType.VerticalBarChart;
  options: {
    showConfidence?: boolean;
  };
  response: {
    xvalues: (number | string)[];
    values: number[];
    unit: string;
    total?: number;
    color: string;
  };
}

/** Horizontal Box Chart Definition */
export interface IHorizontalBoxChart extends IAbstractCalculationBrickType {
  type: VisualizationType.HorizontalBoxChart;
  response: {
    rangeMin: number;
    rangeMax: number;
    boxRangeMin: number;
    boxRangeMax: number;
    meanValue?: number;

    unit?: string;

    rangeMinLabel?: string;
    rangeMaxLabel?: string;
    boxMinLabel?: string;
    boxMaxLabel?: string;
    meanLabel?: string;
  };
}

/** Species Chart Definition */
export interface ISpeciesChart extends IAbstractCalculationBrickType {
  type: VisualizationType.SpeciesChart;
  options: {
    showConfidence?: boolean;
  };
  response: {
    unit?: string;
    species: SpeciesInfo[];
  };
  speciesCalculationResponse: {
    countries: string[];
    species: SpeciesInfo[];
    jointSpeciesList: SpeciesInfo[];
    speciesInCountries: SpeciesInfo[];
  };
}

/** Calculation errors */

export enum CalculationErrorCode {
  NO_DATA = 'NO_DATA',
  AREA_TOO_LARGE = 'AREA_TOO_LARGE',
  ERROR_IN_MAP = 'ERROR_IN_MAP',
  UNKNOWN_EARTHENGINE_ERROR = 'UNKNOWN_EARTHENGINE_ERROR'
}

export interface ICalculationErrorResult {
  error_code: CalculationErrorCode;
  message: string;
  mapIndex?: number;
}

export function isCalculationError(
  test: unknown | unknown[]
): test is ICalculationErrorResult {
  return !Array.isArray(test) && !!(test as ICalculationErrorResult).error_code;
}
