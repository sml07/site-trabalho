sessionStorage.descricao = document.getElementById('descricao')
sessionStorage.valor = document.getElementById('valor')

var resumo = document.getElementById('descricao1')
resumo.innerHTML = `<p><strong>Produto: </strong></p>${sessionStorage.descricao}`
