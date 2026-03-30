async function simpan(){
  const member = document.getElementById("member").value
  const jenis = document.getElementById("jenis").value
  const jumlah = document.getElementById("jumlah").value

  await api("simpanan", { member, jenis, jumlah })

  alert("Sukses")
}
