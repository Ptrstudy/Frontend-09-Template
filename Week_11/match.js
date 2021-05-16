// Learn from other classmate(Credit to KamikidFu)

function getElementInString(el) {
    var className = "", id = "";
    var tag = el.tagName.toLowerCase();
    if (el.id) id = "#" + el.id;
    if (el.className) className = "." + el.className.replace(" ", ".");
    return tag + id + className;
}

function getBlurIndex(arr, el) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el || arr[i].includes(el)) {
            return i;
        }
    }
    return -1;
}

function getExactMatch(element, selector){
    var tag = element.tagName.toLowerCase();
    var id = "#" + element.id;
    var classes = ("." +element.className.replace(" "," .")).split(" ")
    return tag === selector || id === selector || classes.indexOf(selector) !== -1;
}

function match(selector, element) {
    // Default checking
    if (!selector) return false;
    if (!element) return false;


    var elementTag = element.tagName;
    var elementId = "";
    var elementClasses = [];
    var elementChain = [];
    var elementChainInString = [];

    // Process element - tag, id and class
    {
        if (element.id) {
            elementId = element.id;
        }

        if (element.className) {
            element.className.split(' ').forEach(function (item, idx) {
                if (selector.includes(item)) {
                    elementClasses.push(item);
                }
            });
        }

        var currentElement = element;
        while (currentElement.tagName !== "HTML") {
            elementChain.push(currentElement);
            elementChainInString.push(getElementInString(currentElement));
            currentElement = currentElement.parentElement;
        }
        elementChain.reverse();
        elementChainInString.reverse();
    }

    // Process selector
    // Split out selectors by comma
    // Put each tag/id/class into a single selector with connectors
    var selectorsArr = [];
    {
        if (selector) {
            var selectorArr = [];
            var currentSelector = ""
            for (var c of selector) {
                if ("," === c) {
                    //, - Separate out different selector
                    selectorsArr.push(selectorArr);
                    selectorArr = [];
                } else if (">+~*".includes(c)) {
                    currentSelector = currentSelector.trim();
                    selectorArr.push(currentSelector);
                    selectorArr.push(c);
                    currentSelector = ""
                } else {
                    currentSelector += c;
                }
            }
            currentSelector.trim().includes(" ") ?
                selectorArr = selectorArr.concat(currentSelector.split(" ")) :
                selectorArr.push(currentSelector.trim());
            selectorsArr.push(selectorArr);
        }
    }

    var isMatched = true;
    // Match selector with element
    for (var selectorArr of selectorsArr) {
        var curIdx = 0;
        var preIdx = 0;
        for (var selectorIdx = 0; selectorIdx < selectorArr.length; selectorIdx++) {
            if (">+~*".includes(selectorArr[selectorIdx])) {
                var el = elementChain[curIdx];
                switch (selectorArr[selectorIdx]) {
                    case ">":
                        //> - All right elements that have direct parent - left element
                        var elChildren = el.children;
                        if (!elChildren) {
                            // Empty children
                            isMatched = false;
                        }

                        for (var child of elChildren) {
                            var elInString = getElementInString(child);
                            isMatched =  elInString.includes(selectorArr[selectorIdx + 1]) &&
                                getExactMatch(child, selectorArr[selectorIdx]) &&
                                elInString === elementChainInString[curIdx + 1];
                            if (isMatched) break;
                        }

                        break;
                    case "+":
                        //+ - Right element that is immediately placed after left element
                        var elIdx = getBlurIndex(el.parentNode.children, el);
                        var elFirstSibling = el.parentNode.children[elIdx + 1];

                        if (!elFirstSibling) {
                            isMatched = false;
                        }

                        var elInString = getElementInString(elFirstSibling);
                        isMatched = elInString.includes(selectorArr[selectorIdx + 1]) &&
                            getExactMatch(elFirstSibling, selectorArr[selectorIdx]) &&
                            elInString === elementChainInString[curIdx + 1];

                        break;
                    case "~":
                        //~ - All right elements that are placed after of left element
                        var elIdx = getBlurIndex(el.parentNode.children, el);
                        var afterElSiblings = [];

                        for(var idx = elIdx + 1; idx<el.parentNode.children.length;idx++){
                            afterElSiblings.push(el.parentNode.children[idx]);
                        }

                        if (!afterElSiblings) {
                            isMatched = false;
                        }

                        for (var sibling of afterElSiblings) {
                            var elInString = getElementInString(sibling);
                            isMatched = elInString.includes(selectorArr[selectorIdx + 1]) &&
                                getExactMatch(sibling, selectorArr[selectorIdx]) &&
                                elInString === elementChainInString[curIdx + 1];
                        }

                        break;
                    case "*":
                        //* - Everything
                        isMatched = true;
                        break;
                }
                preIdx = curIdx;
                curIdx++;
                selectorIdx++;
            } else {
                //space - All right elements that are descendant of left element
                curIdx = getBlurIndex(elementChainInString, selectorArr[selectorIdx]);
                if (curIdx === -1) {
                    // Mismatch
                    isMatched = false;
                }
                else if (curIdx - preIdx !== 1) {
                    // Mismatch in next level
                    isMatched = false;
                }
                else if(!getExactMatch(elementChain[curIdx], selectorArr[selectorIdx])){
                    isMatched = false;
                    continue;
                }
                preIdx = curIdx;
            }
        }
    }

    return isMatched;
}