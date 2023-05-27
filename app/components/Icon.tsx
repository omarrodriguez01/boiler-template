import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { icon } from '@fortawesome/fontawesome-svg-core';


type Props = {
	name: IconName,
};

const Icon = ({ name }: Props) => {
	const iconHTML = icon({ iconName: name }).html;
    
    return (
    	<span dangerouslySetInnerHTML={{ __html: iconHTML[0] }} />
    );
};

export default Icon;