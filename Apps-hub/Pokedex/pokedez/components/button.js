const button = (id, text, callBack) => `
<button type="button" id=${id} onclick=${callBack()}>${text}</button>`;
