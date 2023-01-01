$('.costomer-conteiner-title').click(function() {
    const curretTurget = $(this)
    const type = curretTurget.data('type')

    const tab = $(`#${type}`)
    $('.costomer-box-ride').each(function () {
        $(this).addClass('hide')
    })
    tab.removeClass('hide') 
})
