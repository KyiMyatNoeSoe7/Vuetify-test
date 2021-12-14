<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plan></home-plan>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlan from '@/components/HomePlan';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlan
    }
};
</script>