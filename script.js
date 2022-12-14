pizzaJson.map((item, index ) => {
    //console.log(item)
    let card = document.querySelector('.cards .card').cloneNode(true)
    //console.log(pizzaItem)
    document.querySelector('.pizza-area').append(card)

    // preencher os dados de cada pizza
    card.querySelector('.pizza-item--img img').src = item.img
    card.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    card.querySelector('.pizza-item--name').innerHTML = item.name
    card.querySelector('.pizza-item--desc').innerHTML = item.description

    // pizza clicada
    card.querySelector('.buy a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou na pizza')

        // abrir janela modal
        document.querySelector('.pizzaWindowArea').style.display = 'flex'

        // preenchimento dos dados
        document.querySelector('.pizzaBig img').src = item.img
        document.querySelector('.pizzaInfo h1').innerHTML = item.name
        document.querySelector('.pizzaInfo--desc').innerHTML = item.description
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`

    })

    document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })

    document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })

})
