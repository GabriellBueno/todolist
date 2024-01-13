$(document).ready(function () {
    $('form').on('submit', function (refresh_off) {
        refresh_off.preventDefault()

        let input_item = $('.input-afazeres').val()
        let input_descricao = $('.input-descricao').val()

        let novo_item = $(`<li style="display: none"></li>`)

        $(`
        <div class="container">
            <div class="task" id="box">
            <button class="okay" id="botao-verde" type="button"><img class="okay" src="images/Okay.png"></button>
            <h2 class="titulo-tarefa">${input_item}</h3>
            <p class="titulo-tarefa">${input_descricao}</p>
            <button class="excluir" id="botao-excluir" type="button"><img class="excluir" src="images/Trash bin.png"></button>
            </div>`).appendTo(novo_item)

        $(novo_item).appendTo('ul')
        $(novo_item).fadeIn(500)

        $('.input-afazeres').val('')
        $('.input-descricao').val('')
    })
    $('ul').on('click', '#botao-excluir', function () {
        $(this).closest('li').fadeOut(function () {
            $(this).remove()
        })
    })
    $('ul').on('click', '#botao-verde', function () {
        $(this).closest('li').fadeIn(function () {
            $('.task').css("background-color", "#1ed687")
        })
    })
})