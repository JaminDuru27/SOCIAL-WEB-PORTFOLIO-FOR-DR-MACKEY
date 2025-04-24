function section1({to, src, main, head, descr}) {
    const res = {
      load() {
        this.element = document.createElement('div')
        this.element.classList.add('halfimg')
        this.right = document.createElement('div')
        this.right.classList.add('right')
        this.left = document.createElement('div')
        this.left.classList.add('left')
        this.element.append(this.left, this.right)
        this.right.innerHTML = `
        <img src='${src}'>
        <div class='head'>${head}</div>
        <div class='main'>${main}</div>
        <div class='descr'>${descr}</div>
        `
        to.append(this.element)
      },
    }
    res.load()
    return res
  }
tree['section1'] = section1