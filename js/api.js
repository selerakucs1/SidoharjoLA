const API = window.CONFIG.API_URL

async function api(action, data = {}) {
  const res = await fetch(API, {
    method: "POST",
    body: JSON.stringify({ action, ...data })
  })

  return res.json()
}
