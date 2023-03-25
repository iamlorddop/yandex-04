function solution(entryPoint) {
    const entry = document.querySelector(entryPoint)
    const entryChildren = entry.children
    let entryChildrenHasAttr = []
    let entryChildrenChildrenHasAttr = []
    let entryChildrenChildren = []
    const copyN = (el, n) => {
        for (let i = 0; i < n; i++) {
            el.parentNode = document.createElement('el')
        }

    }
    const removeN = (el, n) => {
        for (let i = 0; i < n; i++) {
            // if(el.parentNode.hasChildNodes()) {
            //     el = document.removeChild(el.nextSibling)
            // }
            el = document.removeChild(el.nextSibling)
        }
    }
    const removeChildrenN = (el, n) => {
        for (let i = 0; i < n; i++) {
            el.parentNode = document.removeChild(el)
        }

    }
    const switchN = (el, n) => {
        el.parentNode.insertBefore(el, el[n])
    }

    // создаем массив элементов с атрибутом
    for (let i = 0; i < entryChildren.length; i++) {
        entryChildrenChildren[i] = entryChildren[i].childNodes

        if (entryChildren[i].hasAttribute('x-make')) {
            entryChildrenHasAttr[i] = entryChildren[i]
        }
    }

    for(let i = 0; i < entryChildrenChildren.length; i++) {
        for(let j = 0; j < entryChildrenChildren[i].length; j++) {
            if (entryChildrenChildren[i][j].hasAttribute?.('x-make')) {
                entryChildrenChildrenHasAttr.push(entryChildrenChildren[i][j])
            }
        }
    }

    // узнаем значения в атрибуте и выполняем функции
    for (let i = 0; i < entryChildrenHasAttr.length; i++) {
        let attrValue = entryChildrenHasAttr[i].getAttribute('x-make').split(':')

        if (attrValue[0] === 'copy') {
            copyN(entryChildrenHasAttr[i], attrValue[1])
        } else if (attrValue[0] === 'remove') {
            // removeN(entryChildrenHasAttr[i], attrValue[1])
        } else if (attrValue[0] === 'removeChildren') {
            removeChildrenN(entryChildrenHasAttr[i], attrValue[1])
        } else {
            switchN(entryChildrenHasAttr[i], attrValue[1])
        }
    }

    for (let i = 0; i < entryChildrenChildrenHasAttr.length; i++) {
        let attrValue = entryChildrenChildrenHasAttr[i].getAttribute('x-make').split(':')

        if (attrValue[0] === 'copy') {
            copyN(entryChildrenChildrenHasAttr[i], attrValue[1])
        } else if (attrValue[0] === 'remove') {
            removeN(entryChildrenChildrenHasAttr[i], attrValue[1])
        } else if (attrValue[0] === 'removeChildren') {
            removeChildrenN(entryChildrenChildrenHasAttr[i], attrValue[1])
        } else {
            switchN(entryChildrenChildrenHasAttr[i], attrValue[1])
        }
    }
}

solution('section')