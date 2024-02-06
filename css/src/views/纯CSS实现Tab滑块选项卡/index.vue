<template>
    <div class="container">
        <div class="tabs">
            <input type="radio" id="home" name="ground" checked>
            <input type="radio" id="user" name="ground">
            <input type="radio" id="setting" name="ground">
            <input type="radio" id="security" name="ground">
            <div class="icon">
                <label for="home"><i class="bx bx-home"></i></label>
                <label for="user"><i class="bx bx-user"></i></label>
                <label for="setting"><i class="bx bxs-cog"></i></label>
                <label for="security"><i class="bx bx-lock"></i></label>
                <div class="indicator">

                </div>
            </div>
            <div class="content">
                <div class="content-box">
                    <h2>Home</h2>
                    <p>eslint-disable import/no-extraneous-dependencies, @typescript-eslint/consistent-type-imports, prettier/prettier</p>
                </div>
                <div class="content-box">
                    <h2>User</h2>
                    <p>eslint-disable @typescript-eslint/consistent-type-imports, prettier/prettier</p>
                </div>
                <div class="content-box">
                    <h2>Setting</h2>
                    <p>eslint-disable import/no-extraneous-dependencies, /consistent-type-imports, prettier/prettier</p>
                </div>
                <div class="content-box">
                    <h2>Security</h2>
                    <p>eslint-disable import/no-extraneous-dependencies, @typescript-eslint/consistent-type-imports</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script >

</script>

<style lang="scss" scoped>

$clr: #a12db5;

.container {
    display: flex;
    align-items: center;
    width: 600px;
    height: 400px;
    .tabs {
        width: 80px;
        padding: 40px 0;
        position: relative;
        input {
            display: none;
            @for $i from 1 through 4 {
                &:nth-child(#{$i}):checked ~ .icon label:nth-child(#{$i}) {
                    opacity: 1;
                }
                &:nth-child(#{$i}):checked ~ .icon .indicator {
                    top: 25% * ($i - 1);
                }
                &:nth-child(#{$i}):checked ~ .content .content-box:nth-child(#{$i}) {
                    opacity: 1;
                }
            }
        }
        .icon {
            display: flex;
            flex-direction: column;
            position: relative;
            label {
                width: 80px;
                height: 80px;
                line-height: 80px;
                font-size: 2rem;
                color: #fff;
                text-align: center;
                opacity: 0.5;
                z-index: 2;
            }
            .indicator {
                position: absolute;
                left: 0;
                top: 0;
                width: 80px;
                height: 80px;
                background: $clr;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
                transition: 0.5s;
                &::before {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: -20px;
                    background-color: transparent;
                    width: 20px;
                    height: 20px;
                    border-bottom-right-radius: 30px;
                    box-shadow: 8px 8px 0 8px $clr;
                }
                &::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: -20px;
                    background-color: transparent;
                    width: 20px;
                    height: 20px;
                    border-top-right-radius: 30px;
                    box-shadow: 8px -8px 0 8px  $clr;
                }
            }
        }
        .content {
            position: absolute;
            width: 520px;
            height: 400px;
            top: 0;
            left: 80px;
            background: linear-gradient(90deg, $clr, #df0d54);
            border-radius: 20px;
            color: #fff;
            .content-box {
                position: absolute;
                inset: 0;
                padding: 50px;
                opacity: 0;
                transition: 0.5;
            }
        }
    }
}
</style>