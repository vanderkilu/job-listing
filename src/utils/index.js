function formatTime(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

function extractLink(input) {
  const expression = /<a [^>]+>([^<]+)<\/a>/i;
  const match = expression.exec(input);
  if (match) return match[1]
  return ''
}

function isOld(date) {
  const oneDay = 24 * 60 * 60 * 1000
  const createdAt = new Date(date)
  const now = Date.now()
  return (now - createdAt) > oneDay 
}
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = `${corsProxyUrl}https://jobs.github.com/positions.json`

export {
    formatTime,
    baseUrl,
    isOld,
    extractLink
}