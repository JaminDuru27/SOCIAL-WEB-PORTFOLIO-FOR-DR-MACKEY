function gridLayout({orientation, to, boxOrientation}){
    const res = {
        getRowColNumber(){
            const info = {}
            const split = orientation.trim().split(' ')
            info.col = Math.max(...split.map(l=>l.length)) -1
            const removed = []
            split.forEach((l, x)=>{
                if(l.length > 0)removed.push(l)
            })
            info.row =removed.length

            this.clearOr = removed
            return info
        },
        getHeads(){
            const info = {}
            const split = this.clearOr
            //getheads
            const heads = {}
            const headspos = {}
            split.forEach((word, i)=>{
                for(x in word){
                    if(!heads[word[x]]) heads[word[x]] = []
                }
            })
            
            for(i in heads){
                split.forEach((s, y)=>{
                    let arr = []
                    for(x in s)if(s[x] === i)arr.push(s[x])
                    if(arr.length > 0){
                        heads[i].push(arr)
                        arr = []
                    }
                })
            }
            
            split.forEach((s, y)=>{
                for(x in s){
                    x = +(x)
                    headspos[s[x]] = {x, y}
                    headspos[s[x]].x -= heads[s[x]][0].length-1
                    
                }
            })
            info['headspos'] = headspos
            info['heads'] = heads
            return info
        },
        parseHeads(heads, pos){
            for(let x in heads){
                const col = `${pos[x].y + 1 - heads[x].length + 1 } / ${heads[x][0].length}`
            }
             
        },
        load(){
            this.element = document.createElement(`div`)
            this.element.classList.add(`gridLayout`)
            this.element.style.display = `grid`
            const temp = this.getRowColNumber()
            this.element.style.gridTemplateColumns = `repeat(1fr, ${temp.col})`
            this.element.style.gridTemplateRows =  `repeat(1fr, ${temp.row})`
            to.append(this.element)
            const heads = this.getHeads()
            this.parseHeads(heads.heads, heads.headspos)
        }
    }
    res.load()
    return res
}
tree['gridLayout'] = gridLayout

//{
//orientation:'
// 11111000
// 33300222
// 88888444
// 88888666']
//boxArrangement :[['']]}