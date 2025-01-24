"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Avatar as ChakraAvatar, Group } from "@chakra-ui/react";
import * as React from "react";
export const Avatar = React.forwardRef(function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props;
    return (_jsxs(ChakraAvatar.Root, { ref: ref, ...rest, children: [_jsx(AvatarFallback, { name: name, icon: icon, children: fallback }), _jsx(ChakraAvatar.Image, { src: src, srcSet: srcSet, loading: loading }), children] }));
});
const AvatarFallback = React.forwardRef(function AvatarFallback(props, ref) {
    const { name, icon, children, ...rest } = props;
    return (_jsxs(ChakraAvatar.Fallback, { ref: ref, ...rest, children: [children, name != null && children == null && _jsx(_Fragment, { children: getInitials(name) }), name == null && children == null && (_jsx(ChakraAvatar.Icon, { asChild: !!icon, children: icon }))] }));
});
function getInitials(name) {
    const names = name.trim().split(" ");
    const firstName = names[0] != null ? names[0] : "";
    const lastName = names.length > 1 ? names[names.length - 1] : "";
    return firstName && lastName
        ? `${firstName.charAt(0)}${lastName.charAt(0)}`
        : firstName.charAt(0);
}
export const AvatarGroup = React.forwardRef(function AvatarGroup(props, ref) {
    const { size, variant, borderless, ...rest } = props;
    return (_jsx(ChakraAvatar.PropsProvider, { value: { size, variant, borderless }, children: _jsx(Group, { gap: "0", spaceX: "-3", ref: ref, ...rest }) }));
});
