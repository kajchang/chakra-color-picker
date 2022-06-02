/// <reference types="react" />
import { PlacementWithLogical, ButtonProps } from "@chakra-ui/react";
export declare const ColorPicker: ({ onChange, colors, defaultColor, color, pickerBg, placement, isDisabled, ...props }: ColorPickerProps) => JSX.Element;
interface ColorPickerProps extends Omit<ButtonProps, 'onChange'> {
    onChange: (value: string) => void;
    colors?: string[];
    defaultColor?: string;
    color?: string;
    pickerBg?: string;
    placement?: PlacementWithLogical;
    isDisabled?: boolean;
}
export {};
