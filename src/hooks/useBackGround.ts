import night from '@/assets/images/night.jpg';
import day from '@/assets/images/day.jpg';
import sunset from '@/assets/images/sunset.jpg';


const imageMap = {
    day: day,
    night: night,
    sunset: sunset
}
export default function useSetBackGround(selector: string) {


    // 判断当前时间是白天、日落、夜晚
    function getTime() {
        const date = new Date();
        const hour = date.getHours();
        if (hour >= 6 && hour < 16) {
            return 'day';
        } else if (hour >= 16 && hour < 21) {
            return 'sunset';
        } else {
            return 'night';
        }
    }
    function setImage(el: HTMLElement) {
        if (!el) return

        const timeStr = getTime();
        // (document.querySelector(selector) as HTMLElement).style.background = `url(/src/assets/images/${getTime()}.jpg) no-repeat`
        el.style.background = `url(${imageMap[timeStr]}) no-repeat`
    }
    onMounted(() => {
        const el = (document.querySelector(selector) as HTMLElement)
        setImage(el)
        setInterval(setImage, 1000 * 60)
    })
}