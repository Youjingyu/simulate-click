var $tab = $('#popup_tab');
var tr = '<tr>'+
    '<td><input id=""></td>'+
    '<td><input id=""></td>'+
    '<td><i class="icon-delete"></i></td>' +
    '</tr>';
$tab.on('click', '.icon-add', function(){
    $tab.find('tbody').append(tr);
}).on('click', '.icon-delete', function(){
    $(this).parents('tr').remove();
});
$('#confirm').click(function(){
    var idArray = [], inputArr, id, delay;
    $tab.find('tbody>tr').each(function(){
        inputArr = $(this).find('input');
        id = inputArr.eq(0).val();
        delay = inputArr.eq(1).val();
        if(id != '' && delay != ''){
            idArray.push({
                id: inputArr.eq(0).val(),
                delay: inputArr.eq(1).val()
            });
        }
    });
    if(idArray.length > 0){
        chrome.extension.sendRequest({id: idArray}, function(response) {
            $('#info').show();
        });
    }
});