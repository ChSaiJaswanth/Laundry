// import { StartFunc as StartFuncNavigation } from "./Navigation/EntryFile.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
// import { StartFunc as StartFuncLoginCheck } from "./LoginCheck/EntryFile.js";
import { StartFunc as StartFuncLoginCheck } from "/LaundryAdmin/Js/LoginModal/EntryFile.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FormLoad/ListenerFuncs/RefreshBSTableId/FetchFromFuncs/Entry.js";

const StartFunc = async () => {
    // StartFuncNavigation();
    StartFuncFormLoad();

    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncFetchFromFuncs });

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom();

        StartFuncAfterDomLoad();
    };
};

StartFunc();