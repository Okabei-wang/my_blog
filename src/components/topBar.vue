<template>
    <div class="top-bar">
        <div class="logo-home">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconzhuibo"></use>
            </svg>
            <span class="home-text" @click="backHome">Okabei's home</span>
        </div>
        <div class="top-item" v-if="!isMobile">
            <div class="router-btn" @click="toStar">My Star</div>
            <div class="router-btn" @click="toGame">Favorite Game</div>
            <div class="router-btn" @click="toCode">Code Share</div>
            <div class="router-btn" @click="toMessage">Message board</div>
            <div class="router-btn" @click="toDiary">My Diary</div>
            <div class="sign-up" @click="toMe">About Me</div>
        </div>
        <div class="top-item-mobile" v-if="isMobile">
            <svg class="icon" aria-hidden="true" @click="handleMenuDown">
                <use xlink:href="#iconcategory"></use>
            </svg>
            <div class="menu-down" v-show="isShowMenu">
                <div class="router-btn" @click="toStar">My Star</div>
                <div class="router-btn" @click="toStar">Favorite Game</div>
                <div class="router-btn" @click="toStar">Code Share</div>
                <div class="router-btn" @click="toStar">Message board</div>
                <div class="router-btn" @click="toDiary">My Diary</div>
                <div class="sign-up" @click="toMe">About Me</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
const props = defineProps({
    isMobile: {
        type: Boolean,
        default: false
    }
})

onBeforeMount(() => {
    console.log(props.isMobile)
})

const isShowMenu = ref(false)

const handleMenuDown = () => {
    isShowMenu.value = !isShowMenu.value
}

const backHome = () => {
    this.$router.push('/')
}

const toStar = () => {
    this.$router.push('/star')
}

const toDiary = () => {
    this.$router.push('/diary')
}

const toGame = () => {
    this.$router.push('/game')
}

const toCode = () => {
    this.$router.push('/code')
}

const toMessage = () => {
    this.$router.push('/message')
}

const toMe = () => {
    this.$router.push('/me')
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.top-bar {
    padding: 10px 20px;
    border-radius: 15px;
    height: 8vh;
    position: relative;

    .logo-home {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 20px;
        height: 8vh;
        vertical-align: middle;

        &:hover {
            cursor: pointer;
            color: $text-hover-color;
        }
        
        .home-text {
            margin-left: 10px;
        }
    }

    .top-item {
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        
        .router-btn {
            margin-right: 3vw;

            &:hover {
                cursor: pointer;
                color: $text-hover-color;
            }
        }

        .sign-up {
            padding: 1vw 2vw;
            border: 1px solid white;
            border-radius: 10vw;
            margin-right: 20px;

            &:hover {
                cursor: pointer;
                background-color: $btn-hover-color;
                color: #0a0c16;
            }
        }
    }

    .top-item-mobile {
        position: absolute;
        right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;

        .menu-down {
            animation: anim 1s;
            border-radius: 15px;
            padding: 10px;
            position: fixed;
            right: 0;
            top: 60px;
            border: 1px solid white;
            width: 120px;
            background-color: #0a0c16;
        }
    }
    .icon {
        width: 5vh;
        height: 5vh;
    }
}

@keyframes anim {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
</style>