
async function fetchClientById(id) {
    try {
      if(!id){
        alert("Digite o id do cliente");
        return false;
      }
      const response = await fetch(`http://localhost:3000/clients/${id}`);
      const data = await response.json()
      console.log(data)

  } catch (error) {
    alert("Cliente não encontrado!")
  }
}

const cartId = document.getElementById("id-cart");

addEventListener("submit", (event) => {
  event.preventDefault()
fetchClientById(cartId.value)
})