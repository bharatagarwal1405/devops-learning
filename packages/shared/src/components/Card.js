import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Card = ({ title, children, className = '', ...props }) => {
    return (_jsxs("div", { className: `rounded-lg border border-gray-200 bg-white p-4 shadow-sm ${className}`, ...props, children: [title && _jsx("h3", { className: "mb-2 text-lg font-semibold", children: title }), children] }));
};
export default Card;
//# sourceMappingURL=Card.js.map