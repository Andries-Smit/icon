/**
 * This file was generated from Icon.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { pages } from "mendixmodelsdk";
import { ActionValue, DynamicValue, EditableValue, WebIcon, WebImage } from "mendix";

interface CommonProps {
    id: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type EnumerationEnum = "left" | "center" | "right";

export interface IconContainerProps extends CommonProps {
    action: ActionValue;
    attribute: EditableValue<BigJs.Big | string>;
    boolean: boolean;
    enumeration: EnumerationEnum;
    expression: DynamicValue<BigJs.Big>;
    icon: DynamicValue<WebIcon>;
    image: DynamicValue<WebImage>;
    integer: number;
    string: string;
    textTemplate: DynamicValue<string>;
}

export interface IconPreviewProps extends CommonProps {
    action: pages.ClientAction;
    attribute: string;
    boolean: boolean;
    enumeration: EnumerationEnum;
    expression: BigJs.Big;
    icon: WebIcon;
    image: WebImage;
    integer: number;
    string: string;
    textTemplate: string;
}

export interface VisibilityMap {
    action: boolean;
    attribute: boolean;
    boolean: boolean;
    enumeration: boolean;
    expression: boolean;
    icon: boolean;
    image: boolean;
    integer: boolean;
    string: boolean;
    textTemplate: boolean;
}
