$(document).ready(function(){
    setTimeout(function(){
        chrome.extension.sendRequest({}, function(response) {
            var idArray = JSON.parse(response).id, i=0;
            function triggerClick(){
                if(i < idArray.length){
                    setTimeout(function(){
                        $('#' + idArray[i].id).trigger('click');
                        console.info('#' + idArray[i].id +' trigger successfully');
                        i = i + 1;
                        triggerClick();
                    }, parseInt(idArray[i].delay));
                }

            }
            triggerClick();
        });
    }, 0)
});

