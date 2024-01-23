$(document).ready(function(){
    $('form').on('submit', function (refresh_off) {
        refresh_off.preventDefault()

        let afazeres = $('.input-afazeres').val()
        let descricao = $('.input-descricao').val()

        let novo_afazer = $('<li style="display: none"></li>')

        $(`
                <div class="task" id="box">
                <button type="button" class="okay" id="botao-okay"><img class="okay" src="images/Okay.png" alt=""></button>
                <h2 class="titulo-tarefa">${afazeres}</h2>
                <p class="titulo-tarefa">${descricao}</p>
                <button type="button" class="excluir" id="botao-excluir"><img class="excluir" src="images/Trash bin.png" alt=""></button>
                </div>
        `).appendTo(novo_afazer)

        $(novo_afazer).appendTo('ul')
        $(novo_afazer).fadeIn(500)

        $('.input-afazeres').val('')
        $('.input-descricao').val('')
    })
    $('ul').on('click', '#botao-okay', function(){
        $(this).closest('li').find('#box').css('background-color' , '#1ed687')
        $(this).closest('li').find('#box').css('text-decoration' , 'line-through')
    })
    $('ul').on('click', '#botao-excluir', function(){
        $(this).closest('li').fadeOut(500)
    })
})