chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if(request.id){
            localStorage['idArray'] = JSON.stringify(request);
            sendResponse();
        } else {
            sendResponse(localStorage['idArray']);
        }
    });
