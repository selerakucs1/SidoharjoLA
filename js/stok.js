async function load(){
  const res = await api("laporanHarian")

  document.getElementById("hasil").innerText =
    "Total: " + res.total
}
