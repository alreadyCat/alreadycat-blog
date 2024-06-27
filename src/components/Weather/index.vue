<template>
    <Card>
        <div class="weather-contaienr">
            <div class="user-location">{{ weatherInfo.province + "-" + weatherInfo.city }}</div>
            <div class="weather-image">
                <SvgIcon :name="weatherInfo.name" width="90" height="90"></SvgIcon>
            </div>
            <div class="celsius">{{ weatherInfo.temperature }}℃</div>
            <div class="weather-text">{{ weatherInfo.weather }}</div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { getWeather, getUserIp } from '@/service';
import weatherConfig from './index.config'

const weatherInfo = ref({
    province: "",
    city: "",
    weather: "",
    temperature: "",
    name: ""
})
onMounted(async () => {
    const ipInfo = await getUserIp()
    const res = await getWeather(ipInfo.adcode)

    const { province, city, weather, temperature } = res?.lives?.[0]
    weatherInfo.value = {
        province,
        city,
        weather,
        temperature,
        name: weatherConfig[weather]
    }
})
</script>

<style lang="scss" scoped>
.weather-contaienr {
    width: 189px;
    height: 301px;
    box-sizing: border-box;
    padding: 27px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .user-location {
        text-align: center;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: bold;
        line-height: 25px;
        letter-spacing: 0px;
        color: #9E9E9E;
        text-wrap: nowrap;
    }

    .weather-image {}

    .celsius {
        // font-family: "Roboto", sans-serif;
        font-size: 36px;
        font-weight: 600;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0px;
        color: #000000;
    }

    .weather-text {
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: normal;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0px;
        color: #676767;
    }
}
</style>