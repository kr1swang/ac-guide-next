const hexToBytes = (hexString) => {
  return Uint8Array.from(Buffer.from(hexString, 'hex'))
}

export { hexToBytes }
