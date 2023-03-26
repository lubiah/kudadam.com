<script lang="ts">
    import type { PageData } from "./$types";

    import ClockIcon from "$icons/clock.svg?component";
    import CalendarIcon from "$icons/calendar.svg?component";

    export let data: PageData;

</script>


<main class="max-w-screen-laptop mx-auto min-w-0">
    <article>
        <h1 class="mb-12 tablet:mb-16 text-gray-800">{data.metadata.title}</h1>
        <img src={data.metadata.image} alt="" class="w-full h-auto max-h-[250px] mb-6 tablet:mb-8 !col-[1/-1]">
        <ul class="text-gray-500 mb-6 tablet:mb-8 text-xs flex flex-col tablet:flex-row gap-2 tablet:gap-x-6">
        <li class="flex items-center gap-x-1"><ClockIcon height="16" width="16"/><span>{data.metadata.readingTime.text}</span></li>
        <li class="flex items-center gap-x-1"><CalendarIcon height="16" width="16"/><time datetime={new Date(data.metadata.date).toISOString()}>{new Date(data.metadata.date).toLocaleString('en-US', { dateStyle: 'long' })}</time></li>
        </ul>
        <svelte:component this={data.component}/>
    </article>
</main>

<style type="text/postcss">
    article {
        @apply grid grid-cols-[1fr_min(65ch,calc(100%-32px))_1fr];
    }

    article :global(*) {
        @apply col-start-2 col-end-3;
    }
</style>