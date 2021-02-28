function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('div._1awRl[data-tab="6"]');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("button._2Ujuu").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`
Boate Azul...
Doente de amor procurei remédio na vida noturna
Como uma flor da noite em uma bote aqui na zona sul
A dor do amor é com outro amor que a gente cura
Vim curar a dor deste mal de amor na boate azul
E quando a noite vai se agonizando no clarão da aurora
Os integrantes da vida noturna se foram dormir
E a dama da noite estava comigo também foi embora
Fecharam-se as portas sozinho de novo tive que sair
Sair de que jeito, se nem sei o rumo para onde vou
Muito vagamente me lembro que estou
Em uma boate aqui na zona sul
Eu bebi demais e não consigo me lembrar se quer
Qual é o nome daquela mulher
A flor da noite da boate azul
E quando a noite vai se agonizando no clarão da aurora
Os integrantes da vida noturna se foram dormir
E a dama da noite que estava comigo também foi embora
Fecharam-se as portas sozinho de novo tive que sair
Sair de que jeito, se nem sei o rumo para onde vou
Muito vagamente me lembro que estou
Em uma boate aqui na zona sul
Eu bebi demais e não consigo me lembrar se quer
Qual é o nome daquela mulher
A flor da noite da boate azul
`);