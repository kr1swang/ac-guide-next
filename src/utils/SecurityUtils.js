import { keccak256 } from 'js-sha3'
import { hexToBytes } from './NumberUtils'

const Keccak256 = {
  fromString: (obj) => {
    return keccak256(obj.toString())
  },
  fromHex: (hex) => {
    const bytes = hexToBytes(hex)
    return keccak256(bytes)
  }
}

const Base64 = {
  encodeString: (obj) => {
    return Buffer.from(obj.toString()).toString('base64')
  },
  encodeBytes: (bytes) => {
    return Buffer.from(bytes).toString('base64')
  },
  decodeToBytes: (b64) => {
    return Buffer.from(b64, 'base64')
  },
  encodeHex: function (hex) {
    return Buffer.from(hex, 'hex').toString('base64')
  },
  decodeToString: (b64) => {
    return Buffer.from(b64, 'base64').toString()
  }
}

const secretTokenBuilder = (seed) => {
  const run = function run(hex, times) {
    if (times === 0) {
      return hex
    } else {
      return run(Keccak256.fromHex(hex), times - 1)
    }
  }

  const replace = (str, charMap) => {
    let result = str

    for (const [key, value] of Object.entries(charMap)) {
      const regexp = new RegExp(`[${key}]`, 'g')
      result = result.replace(regexp, value)
    }

    return result
  }

  const init = Keccak256.fromString(seed)
  const strong = run(init, 10)
  const b64 = Base64.encodeHex(strong)

  return replace(b64, {
    '+': '!',
    '/': '?',
    '=': '&'
  })
}

export { Keccak256, Base64, secretTokenBuilder }
