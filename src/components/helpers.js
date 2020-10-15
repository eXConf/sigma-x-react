export const copyToClipboard = (text) => {
  let dummy = document.createElement('textarea')
  document.body.appendChild(dummy)
  dummy.setAttribute('id', 'dummy')
  document.getElementById('dummy').value = text
  dummy.select()
  dummy.setSelectionRange(0, 99999)
  document.execCommand("copy")
  document.body.removeChild(dummy)
}