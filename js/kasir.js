let cart = []

async function tambah(){
  const kode = document.getElementById("barcode").value

  const res = await api("getProduk", { kode })

  if(!res.data) return alert("Barang tidak ada")

  cart.push({
    kode,
    nama: res.data.nama,
    harga: res.data.harga,
    qty: 1
  })

  render()
}

function render(){
  let html = ""
  let total = 0

  cart.forEach((item,i)=>{
    const sub = item.qty * item.harga
    total += sub

    html += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.qty}</td>
        <td>${sub}</td>
      </tr>
    `
  })

  document.getElementById("cart").innerHTML = html
  document.getElementById("total").innerText = total
}

async function bayar(){
  await api("penjualan", { items: cart })

  alert("Transaksi sukses")
  cart = []
  render()
}
