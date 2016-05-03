// simulation library 

function asyncLib() {
    return {

        CallfnSyncLib: CallfnSyncLib
    }

    function CallfnSyncLib(params) {
        return new Promise(function(resolve, reject) {
            fnSyncLib(params, resolve, reject);
        });
    }
}