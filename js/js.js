$(function(){
    var $list,$submitform;
    $list=$('ul');
    $submitform=$('#submitform');

    $submitform.on('submit', function (e){
        e.preventDefault();
        var text = $('input:text').val();

        if (text==''){
            alert("insert task");
        }else{
            $list.append('<li class="list-group-item">'+text+'</li>');
            $('input:text').val('');
        }
    });

    $list.on('click','li',function () {
        var $this=$(this);
        $this.remove();
    })
});