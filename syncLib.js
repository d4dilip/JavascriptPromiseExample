// simulation library 

function fnSyncLib(params, onSuccess, onError) {

    function fnTry(fn) {
        try {
            return fn();
        } catch (ex) {

            console.log(ex.message + "\r\n\r\n" + ex.stack);
            fnOnError(ex);
        }
    }

    function fnOnError(error) {
        console.log("fnSyncLib error: " + error.message);
        onError(error);
    }

    function fnSimulateRemoteCall() {

        var startdate = new Date().getTime();
        //hang on for a while
        sleepFor(5000);

        var endDate = new Date().getTime();
        console.log(startdate);
        console.log(endDate);
        var response = "It took me 5 seconds";
        onSuccess(response);
    }
    function sleepFor(sleepDuration) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
    }

    // initialize function here
    fnTry(fnSimulateRemoteCall);

}