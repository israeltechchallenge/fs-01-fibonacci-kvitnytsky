let number = document.getElementById("xuy").value;
server = `http://localhost:5050/fibonacci/${number}`
function fetchServer() {
  fetch(server).then((response) => {
    response
      .json()
      .then(
        (data) => {docuemnt.getElementById("pizda").innerHTML = data.result}
      );
  });
}