function textLayout1({to, head, main ,descr}) {
    const res = {
      appendAll(){},
      load() {
        this.element = document.createElement('div')
        this.element.classList.add('textLayout1')
        this.element.classList.add('heightSpread')
        this.element.innerHTML += `
        <div class="head">${head}</div>
        <div class="main">${main}</div>
        <div class="descr">${descr}</div>
        `
        to.append(this.element)
      }
    }
    res.load()
    return res
  }
  tree['textLayout1'] = textLayout1 