const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'
export function mediaUrl(path) {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${API.replace('/api', '')}${path}`
}
export async function getData(endpoint) {
  const response = await fetch(`${API}${endpoint}`)
  if (!response.ok) throw new Error(`Request failed: ${response.status}`)
  return response.json()
}
export async function postData(endpoint, payload) {
  const response = await fetch(`${API}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.detail || Object.values(data).flat().join(' ') || 'Unable to submit.')
  return data
}
