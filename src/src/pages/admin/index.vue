<template>
    <div>
        <h1>admin</h1>
        <router-view></router-view>
    </div>  
</template>

<script>
    export default {
        mounted() {
           this.pushRouter();
        },
        methods: {
            pushRouter: function() {
               this.$router.push('dashboard');
            }
        }
    }
</script>

<style>
    
</style>