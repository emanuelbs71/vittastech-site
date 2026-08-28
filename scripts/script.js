// Ativando o menu mobile

function mostrarMenu(){
    $('nav#nav-esquerda ul.menu-principal').css('display', 'flex');
    
    // Removemos a animação de saída (se houver) e adicionamos a de entrada
    $('nav#nav-esquerda ul.menu-principal').removeClass('animate__fadeOutRight');
    $('nav#nav-esquerda ul.menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'none');
    $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'flex');
}

function esconderMenu(){
    // Tiramos a animação de entrada e o 'slow'
    $('nav#nav-esquerda ul.menu-principal').removeClass('animate__fadeInRight animate__slow');
    // Adicionamos a animação de saída
    $('nav#nav-esquerda ul.menu-principal').addClass('animate__fadeOutRight');

    // Trocamos o ícone do X para o Hamburguer imediatamente
    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'flex');
    $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'none');

    // Esperamos 1000 milissegundos (1 segundo) para finalmente dar o display: none
    setTimeout(function(){
        $('nav#nav-esquerda ul.menu-principal').css('display', 'none');
    }, 1000); 
}

let controle = true;

$('nav#nav-esquerda ul#icone-menu').click(function(){
    if(controle == true){
        mostrarMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
});