import { StartFunc as StartFuncToUrl } from "./ToUrl.js";
import { StartFunc as StartFuncAddCustomer } from "./AddCustomer/StartFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "ScanId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;

    let jVarLocalArray = jVarLocalScanIdValue.split(":");

    let jVarLocalCustomerName = jVarLocalArray[0].trim();
    let jVarLocalCustomerMobile = "";

    if (jVarLocalCustomerName.length > 1) {
        jVarLocalCustomerMobile = jVarLocalArray[1].trim()
    };

    StartFuncAddCustomer({
        inCustomerName: jVarLocalCustomerName,
        inCustomerMobile: jVarLocalCustomerMobile
    });

    StartFuncToUrl({
        inCustomerName: jVarLocalCustomerName,
        inCustomerMobile: jVarLocalCustomerMobile,
    });
};

export { StartFunc };