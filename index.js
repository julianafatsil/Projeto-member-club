
async function fetchClientById(id) {
    try {
      if(!id){
        alert("Digite o id do cliente");
        return false;
      }
      const response = await fetch(`http://localhost:3000/clients/${id}`);
      const data = await response.json()
      createDataClient(data);

  } catch (error) {
    alert("Cliente não encontrado!")
  }
}

const cartId = document.getElementById("id-cart");

addEventListener("submit", (event) => {
  event.preventDefault()
fetchClientById(cartId.value)
});

function createDataClient(data){
  const main = document.getElementById("data-client");
  console.log(data);
  const divPerfilClient = document.createElement('div');
  divPerfilClient.className = "perfil-client";
  const divInfoClient = document.createElement('div');
  divInfoClient.className = "info-client";
  const h1InfoClientName = document.createElement('h1');
  h1InfoClientName.innerText = data.name;
  const pInfoClientDate = document.createElement("p");
  pInfoClientDate.innerText = (`Cliente desde ${data.clientSince}`)
  divInfoClient.appendChild(h1InfoClientName);
  divInfoClient.appendChild(pInfoClientDate);
  divPerfilClient.appendChild(divInfoClient);

  main.appendChild(divPerfilClient);

  const divHistoryClient = document.createElement("div");
  divHistoryClient.className = "history-client";
  const divHistoryClientSubtitle = document.createElement("div");
  divHistoryClientSubtitle.className = "history-client-subtitle";
  const spanHistoryClientsubtitle = document.createElement("span");
  spanHistoryClientsubtitle.className = "subtitle-sm";
  spanHistoryClientsubtitle.innerText = "histórico";
  const spanHistoryClientCortes = document.createElement("span");
  spanHistoryClientCortes.className = "text-xs";
  spanHistoryClientCortes.innerText = `${data.loyaltyCard.totalCuts} cortes`;
  divHistoryClientSubtitle.appendChild(spanHistoryClientsubtitle);
  divHistoryClientSubtitle.appendChild(spanHistoryClientCortes);
  divHistoryClient.appendChild(divHistoryClientSubtitle);

  main.appendChild(divHistoryClient);
}
