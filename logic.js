function openTab(tab) {
  document.querySelectorAll('.tabContent').forEach(t => t.classList.remove('active'));
  document.getElementById(tab).classList.add('active');

  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

function openSubTab(id) {
  document.querySelectorAll('.subContent').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

let tickets = [];

function raiseTicket() {
  const issue = document.getElementById("issue").value;
  if(issue){
    tickets.push(issue);
    document.getElementById("ticketList").innerHTML =
      tickets.map(t => `<li>${t}</li>`).join("");
    document.getElementById("issue").value="";
  }
}
