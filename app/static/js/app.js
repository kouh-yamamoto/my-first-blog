// ���̓t�H�[���Ń��^�[���L�[�������ɑ��M�����Ȃ�
$('#myform').on('sumbit', function (e) {
    e.preventDefault();
})

// �A�����M�h�~
$('.save').on('click', function (e) {
    $('.save').addClass('disabled');
    $('#myform').submit();
})

// [����������] �̕\������
conditions = $('#filter').serializeArray();
$.each(conditions, function(){
    if(this.value){
        $('.filtered').css('visibility','visible')
    }
})

// �y�[�W�l�[�V�����̃��X�|���V�u�Ή�
// https://auxiliary.github.io/rpage/
$(".pagination").rPage();
