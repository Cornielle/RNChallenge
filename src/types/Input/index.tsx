import { ChangeEvent } from "react";

export type InputProps = {
    value: string;
    placeholder: string;
    label: string;
    error: string | boolean | undefined;
    errorMessage: string | undefined;
    onChangeText:(e: string | ChangeEvent<any>) => void;
    password?: boolean;
    onBlur:(e: string | ChangeEvent<any>) => void;
};