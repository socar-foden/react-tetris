import React from "react";
import Next from "../Next/Next";
import Guidance from "../Guidance/Guidance";
import Panel from "../Panel/Panel";
import Score from "../Score/Score";
import S from "./App.style";
var App = function () {
    return (React.createElement(S.Main, null,
        React.createElement(S.Layout, null,
            React.createElement(S.Row, null,
                React.createElement(S.Left, null,
                    React.createElement(Panel, null)),
                React.createElement(S.Right, null,
                    React.createElement(Score, null),
                    React.createElement(Next, null))),
            React.createElement(S.Row, null,
                React.createElement(Guidance, null)),
            React.createElement(S.Label, null, "Tetris"))));
};
export default App;
//# sourceMappingURL=App.js.map