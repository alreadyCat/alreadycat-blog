/*
* px to vw or vh
* */

export default function px2viewport(px: number, type: 'vw' | 'vh' = 'vw'): string {
    return `${px / (1440 / 100)}${type}`
}