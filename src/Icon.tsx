import { SFC, createElement } from "react";
import { IconContainerProps } from "../typings/IconProps";
import { Icon as WebIcon } from "mendix/components/web/Icon";

const Icon: SFC<IconContainerProps> = ({ icon, class: clazz, style }) => (
    <span className={clazz} style={style}>
        <WebIcon icon={icon.value} />
    </span>
);

Icon.displayName = "Icon";

export default Icon;
