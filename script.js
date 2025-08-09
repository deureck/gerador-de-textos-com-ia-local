document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gerarPostBtn").addEventListener("click", gerarPost);
    Buscar()
});





async function Buscar()
    {
        try{
            const response = await fetch('BuscarModels.php')
            const data = await response.json() 
            const select = document.getElementById("gerar_Models")

            data["models"].forEach(element => {
                const option = document.createElement("option");
                option.value = element.model;
                option.textContent = element.model;
                select.appendChild(option);
            });
            
        }
        catch(erro){
            resultadoDiv.textContent = 'Erro na requisição.';
            console.error('Erro:', error);
        }
        finally {
            loadingSpinner.classList.add('d-none'); // Esconde o spinner ao finalizar
        }
    }






async function gerarPost() {
    const entrada = document.getElementById('entrada').value;
    const models = document.getElementById
    const resultadoDiv = document.getElementById('resultado');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const value= document.getElementById('gerar_Models').value
    resultadoDiv.textContent = '';
    loadingSpinner.classList.remove('d-none'); // Exibe o spinner

    try {
        const response = await fetch('gerar_post.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: entrada })
        });

        const data = await response.json();

        if (data.generated_text) {
            resultadoDiv.textContent = data.generated_text;
        } else {
            resultadoDiv.textContent = 'Erro ao gerar o post.';
        }
    } catch (error) {
        resultadoDiv.textContent = 'Erro na requisição.';
        console.error('Erro:', error);
    } finally {
        loadingSpinner.classList.add('d-none'); // Esconde o spinner ao finalizar
    }
}
