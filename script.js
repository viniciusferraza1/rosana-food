let h2List = document.querySelectorAll("#listona h2");
  let currentH2Index = 0;
  let intervalID;

  function alternarH2() {
    h2List[currentH2Index].style.display = "none";
    currentH2Index = (currentH2Index + 1) % h2List.length;
    h2List[currentH2Index].style.display = "block";

    clearInterval(intervalID);

    if (currentH2Index === h2List.length - 1) {
      setTimeout(() => {
        h2List.forEach((h2) => {
          h2.style.display = "block";
        });
        setTimeout(() => {
          intervalID = setInterval(alternarH2, 1000);
        }, 5000); // Exibir os 4 H2 simultaneamente por 5 segundos
      }, 1000); // Aguardar 1 segundo antes de exibir os 4 H2 simultaneamente
    } else {
      intervalID = setInterval(alternarH2, 1000);
    }
  }

  intervalID = setInterval(alternarH2, 4000);