export default function useTyped(strArr: string[], selector: string) {
    let rId: string | number | NodeJS.Timeout | undefined;
    onMounted(() => {
        const el = document.querySelector(selector) as HTMLElement

        if (!el) return
        const style = document.createElement('style')
        style.textContent = `
        ${selector} {
            position: relative;
            display: inline-block;
            height:1em;
            
        }
        ${selector}::after {
            content: '';
            position: absolute;
            top: -50%;
            transform: translateY(53%);
            right: -7px;
            width: 3px;
            height: 30px;
            background-color: rgba(255, 255, 255, 1);
            animation: blink .5s infinite;
        }
        @keyframes blink {
            0%,100% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
        }
    `
        document.head.appendChild(style)


        let arrIndex = 0;
        let straight = true;
        let preTime = Date.now();
        let strEndIndex = 0

        function type(t: number) {

            const gap = t - preTime

            if (straight && (gap < 300) || !straight && gap < 80) {
                rId = requestAnimationFrame(() => type(Date.now()))
                return
            }

            if (arrIndex === strArr.length) {
                arrIndex = 0;
            }
            const content = strArr[arrIndex]


            if (straight) {
                if (strEndIndex < strArr[arrIndex].length) {
                    el.textContent = content.slice(0, ++strEndIndex)
                } else {
                    straight = false;
                }
            } else {
                if (strEndIndex > 0) {
                    el.textContent = content.slice(0, --strEndIndex)
                } else {
                    straight = true;
                    arrIndex++;
                }
            }
            preTime = t
            rId = requestAnimationFrame(() => type(Date.now()))
        }

        type(Date.now())


    })

    onUnmounted(() => {
        clearInterval(rId)
    })
}
