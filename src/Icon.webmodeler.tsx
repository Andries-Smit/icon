/* eslint-disable */
import { IconPreviewProps } from "../typings/IconProps";
import { SFC, createElement } from "react";


// interface PageClientAction {
//     type: "PageClientAction";
//     params: {
//         page: string; // <module>.<page>
//     };
// }

// interface MicroflowClientAction {
//     type: "MicroflowClientAction";
//     params: {
//         microflow: string; // <module>.<microflow>
//     };
// }

// interface CallNanoflowClientAction {
//     type: "CallNanoflowClientAction";
//     params: {
//         nanoflow: string; // <module>.<nanoflow>
//     };
// }
// // TODO inspect
// interface OpenLinkClientAction {
//     type: "OpenLinkClientAction";
//     params: {
//         linkType: string,
//         isDynamic: boolean,
//         value: string;
//     }
// }
// interface CreateObjectClientAction {
//     type: "CreateObjectClientAction";
//     params: {
//         objectType: string; // <module>.<entity>
//         page: string; // <module>.<page>
//     }
// }

// interface OthersClientAction {
//     type: "NoClientAction" | "SaveChangesClientAction" | "SaveChangesClientAction" | "ClosePageClientAction" | "SignOutClientAction" | "DeleteClientAction";
// }

// type Action = OthersClientAction | PageClientAction | MicroflowClientAction | CallNanoflowClientAction | OpenLinkClientAction | CreateObjectClientAction;


export const preview: SFC<IconPreviewProps> = (props) => {
    console.log(props);
    return <div className="widget-counter">20</div>;
};

export function getPreviewCss(): string {
    return ".widget-counter { color: #0F0 }";
}

// var React = require("react");

// export.preview = function() {
//     console.log(props);
//     return React.createElement("div", { className: "widget-counter" }, 20);
// };

// export.getPreviewCss = function() {
//     return ".widget-counter { color: #0FO }";
// }

// import { SFC, createElement } from "react";
// import { IconPreviewProps } from "../typings/IconProps";

// export const preview: SFC<IconPreviewProps> = ({ icon, class: clazz, style }) => (
//     <span className={clazz} style={style}>
//         <WebIcon icon={icon.value} />
//     </span>
// );

// export class preview extends Component<IconPreviewProps> {
//     render(): ReactNode {
//         return <div>Icon</div>;
//     }
// }
