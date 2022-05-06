<template>
    <div class="top-bar">
        <div class="logo-home">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconzhuibo"></use>
            </svg>
            <span class="home-text" @click="backHome">Okabei's home</span>
        </div>
        <div class="top-item">
            <div class="router-btn" @click="toStar">My Star</div>
            <div class="router-btn" @click="toGame">Favorite Game</div>
            <div class="router-btn" @click="toCode">Code Share</div>
            <div class="router-btn" @click="toMessage">Message board</div>
            <div class="router-btn" @click="toDiary">My Diary</div>
            <div class="sign-up" @click="toMe">About Me</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        backHome() {
            this.$router.push('/')
        },

        toStar() {
            this.$router.push('/star')
        },

        toDiary() {
            this.$router.push('/diary')
        },

        toGame() {
            this.$router.push('/game')
        },

        toCode() {
            this.$router.push('/code')
        },

        toMessage() {
            this.$router.push('/message')
        },
        
        toMe() {
            this.$router.push('/me')
        }
    }
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
    .icon {
        width: 5vh;
        height: 5vh;
    }
}
</style>