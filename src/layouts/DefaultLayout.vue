<template>
    <div>
        <header class="header">
            <div class="title-foodaneo">
                <a class="cart" href="#Cart">
                    <img src="../assets/img/cart.svg" alt="">
                </a>
            </div>
        </header>
        <main class="main-context">
            <slot></slot>
            <div class="navigation-space"></div>
        </main>
    </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
