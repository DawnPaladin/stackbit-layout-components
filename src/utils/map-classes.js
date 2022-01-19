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
        return <Child key={index} {...child} />;
    });
}

export {
	mapMaxWidthStyles,
	mapFlexDirection,
	mapJustifyContent,
	mapAlignItems,
	childComponents
}