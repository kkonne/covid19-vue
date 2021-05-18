<template>
    <div id="nav">
        <nav class="nav-container" role="navigation">
            <p class="nav-link">😷</p>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
nav {
    width: 100vw;
    padding: 20px 0;
    background-color: #353535;
}

.nav-link {
    display: inline;
    text-decoration: none;
    color: #f1f1f1;
    margin-left: 30px;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 1px;
}

.nav-link:hover {
    color: #c7c7c7;
}
</style>