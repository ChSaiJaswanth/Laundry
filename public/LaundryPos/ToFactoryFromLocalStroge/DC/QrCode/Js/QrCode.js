import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

const StartFunc = () => {
    // StartFuncFormLoadBeforeAdmin();

    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom().then(() => {
            StartFuncAddListeners();
            StartFuncAfterDomLoad();
        });
    };
};

StartFunc();