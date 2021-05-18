import { useEffect } from "react";
var useRAF = function (rAFId, next) {
    useEffect(function () {
        rAFId = requestAnimationFrame(next);
        return function () {
            cancelAnimationFrame(rAFId);
        };
    }, []);
};
export default useRAF;
//# sourceMappingURL=useRAF.js.map