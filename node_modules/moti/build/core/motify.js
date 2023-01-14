import React, { forwardRef } from 'react';
import Animated from 'react-native-reanimated';
import { useMotify } from './use-motify';
const { createAnimatedComponent } = Animated;
export default function motify(ComponentWithoutAnimation) {
    const Component = createAnimatedComponent(ComponentWithoutAnimation);
    const withAnimations = () => {
        const Motified = forwardRef(function Moti({ animate, style, from, transition, delay, state, stylePriority, onDidAnimate, exit, animateInitialState, exitTransition, ...props }, ref) {
            const animated = useMotify({
                animate,
                from,
                transition,
                delay,
                state,
                stylePriority,
                onDidAnimate,
                exit,
                exitTransition,
                animateInitialState,
            });
            return (React.createElement(Component, Object.assign({}, props, { style: style ? [style, animated.style] : animated.style, ref: ref })));
        });
        Motified.displayName = `Moti.${ComponentWithoutAnimation.displayName ||
            ComponentWithoutAnimation.name ||
            'NoName'}`;
        return Motified;
    };
    return withAnimations;
}
//# sourceMappingURL=motify.js.map