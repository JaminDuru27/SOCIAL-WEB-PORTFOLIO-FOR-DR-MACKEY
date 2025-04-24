function textLayout1({to, head, main ,descr}) {
    const res = {
      getElements(txtArray, e){
        const array = []
        txtArray.forEach(arr=>{
          const style = arr[0]
          const text = arr[1]
          const span = document.createElement('span')
          span.textContent = text
          array.push(span)
          e.append(span)
          const styles = style.split(' ')
          //check if color
          styles.forEach(style=>{
            if(style[0]==='#')
            span.style.color = style
          })
        })
      },
      appendAll(){},
      load() {
        this.element = document.createElement('div')
        this.element.classList.add('textLayout1')
        this.head = document.createElement('div')
        this.main = document.createElement('div')
        this.descr = document.createElement('div')
        this.head.style.textTransform = 'capitalize'
        this.head.style.fontSize = 2.5 + 'rem'
        this.main.style.fontSize = 1.5 + 'rem'
        this.head.style.marginBottom = 2 + 'rem'
        this.main.style.marginBottom = .5 + 'rem'
        this.main.style.letterSpacing = 1 + 'px'
        let heads = this.getElements(head, this.head)
        this.appendAll(heads, this.head)
        let mains = this.getElements(main, this.main)
        this.appendAll(mains, this.main)
        let descrs = this.getElements(descr, this.descr)
        this.appendAll(descrs, this.descr)
        this.head.classList.add('head')
      this.main.classList.add('main')
      this.descr.classList.add('descr')
        this.element.append(this.head,this.main,this.descr)
        to.append(this.element)
      }
    }
    res.load()
    return res
  }


tree['textSection1'] = textLayout1