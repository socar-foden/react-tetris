import { useEffect } from "react";
var useKeyboard = function (type, listener) {
    useEffect(function () {
        document.addEventListener(type, listener);
        return function () {
            document.removeEventListener(type, listener);
        };
    }, []);
};
export default useKeyboard;
//# sourceMappingURL=useKeyboard.js.map