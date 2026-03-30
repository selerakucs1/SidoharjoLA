let cart=[]

async function tambah(){
  const kode = barcode.value

  const res = await api("getProduk",{kode})

  cart.push({
    kode,
    nama: res.data.nama,
    harga: res.data.harga,
    qty:1
  })

  render()
}

function render(){
  let html="", total=0

  cart.forEach(i=>{
    const sub=i.qty*i.harga
    total+=sub
    html+=`<tr><td>${i.nama}</td><td>${i.qty}</td><td>${sub}</td></tr>`
  })

  document.getElementById("cart").innerHTML=html
  document.getElementById("total").innerText=total
}

async function bayar(){
  await api("penjualan",{items:cart})
  cart=[]
  render()
}
