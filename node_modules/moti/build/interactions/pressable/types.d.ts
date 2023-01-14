import type { ComponentProps } from 'react';
import type { ViewStyle, Insets, PressableProps } from 'react-native';
import type Animated from 'react-native-reanimated';
import { DerivedValue } from 'react-native-reanimated';
import type { MotiView } from '../../components';
import type { MotiAnimationProp, MotiTransition } from '../../core';
export declare type MotiPressableInteractionState = {
    hovered: boolean;
    pressed: boolean;
};
export declare type AnimateProp = MotiAnimationProp<ViewStyle>;
declare type Interactable<T> = (interaction: MotiPressableInteractionState) => NonNullable<T>;
declare type InteractableProp<T> = Interactable<T> | T;
export declare type MotiPressableInteractionProp = Interactable<AnimateProp>;
export declare type MotiPressableTransitionProp = InteractableProp<MotiTransition>;
export declare type MotiPressableProp = InteractableProp<AnimateProp>;
export declare type MotiPressableProps = {
    onFocus?: () => void;
    onBlur?: () => void;
    transition?: MotiPressableTransitionProp;
    animate?: MotiPressableProp;
    state?: never;
    onPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    onHoverIn?: () => void;
    onHoverOut?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
    onLongPress?: () => void;
    hitSlop?: Insets;
    id?: string;
    disabled?: boolean;
    containerStyle?: ViewStyle;
    dangerouslySilenceDuplicateIdsWarning?: boolean;
    pressedValue?: Animated.SharedValue<boolean>;
    hoveredValue?: Animated.SharedValue<boolean>;
    /**
     * `onLayout` for the container component.
     */
    onContainerLayout?: PressableProps['onLayout'];
    href?: string;
    children?: React.ReactNode | ((interaction: DerivedValue<MotiPressableInteractionState>) => React.ReactNode);
} & Pick<ComponentProps<typeof MotiView>, 'exit' | 'from' | 'exitTransition' | 'style' | 'onLayout'> & Pick<PressableProps, 'accessibilityActions' | 'accessibilityElementsHidden' | 'accessibilityHint' | 'accessibilityIgnoresInvertColors' | 'accessibilityLabel' | 'accessibilityLiveRegion' | 'accessibilityRole' | 'accessibilityState' | 'accessibilityValue' | 'accessibilityViewIsModal' | 'accessible' | 'onAccessibilityTap' | 'onAccessibilityAction' | 'onAccessibilityEscape' | 'importantForAccessibility'>;
export {};
