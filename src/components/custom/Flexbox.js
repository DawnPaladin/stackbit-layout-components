import { getComponent } from '../components-registry'
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import Markdown from 'markdown-to-jsx';
import { getDataAttrs } from '../../utils/get-data-attrs';

const Flexbox = (props) => {
    const styles = props.styles || {};
    const className = classNames(
        'flex', 
        'flex-item', 
        'colors-a', 
        mapMaxWidthStyles(styles?.self?.width), 
        mapFlexDirection(styles?.self?.flexDirection), 
        mapJustifyContent(styles?.self?.justifyContent), 
        mapAlignItems(styles?.self?.alignItems), 
        styles?.self?.margin && mapStyles(styles.self.margin),
        styles?.self?.padding && mapStyles(styles.self.padding),
        'm-auto' /* margin: auto */
    );
    return (
        <div className={className} {...getDataAttrs(props)}>
            {/* Markdown display adapted from https://github.com/stackbit/stackbit-components/blob/main/src/components/CtaSection/index.tsx#L95 */}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames(
                        'sb-markdown', 
                        'sm:text-lg', 
                        styles.text ? mapStyles(styles.text) : null, 
                        { 'mt-4': props.title }
                        )}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
            {props.children && childComponents(props.children)}
        </div>
    );
};

// from https://github.com/stackbit/stackbit-components/blob/main/src/components/TextSection/index.tsx
// linked from docs: https://docs.stackbit.com/reference/defining-models/field-and-component-styles/#width
function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirection(direction) {
    if (!direction) return '';
    return 'flex-' + direction;
}

function mapJustifyContent(justification) {
    if (justification == "flex-start") return "justify-start";
    if (justification == "center") return "justify-center";
    if (justification == "flex-end") return "justify-end";
    if (justification == "space-between") return "justify-between";
    if (justification == "space-around") return "justify-around";
    if (justification == "space-evenly") return "justify-evenly";
    return null;
}

function mapAlignItems(alignment) {
    if (alignment == "flex-start") return "items-start";
    if (alignment == "flex-end") return "items-end";
    if (alignment == "center") return "items-center";
    if (alignment == "baseline") return "items-baseline";
    if (alignment == "stretch") return "items-stretch";
    return null;
}

function childComponents(children) {
    return children.map((child, index) => {
        const Child = getComponent(child.type);
        return <Child key={index} {...child} data-sb-field-path={`.children.${index}`} />;
    });
}

export default Flexbox;
