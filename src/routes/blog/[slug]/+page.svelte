<script lang="ts">
    import type { PageData } from "./$types";

    import ClockIcon from "$icons/clock.svg?component";
    import CalendarIcon from "$icons/calendar.svg?component";

    export let data: PageData;

</script>


<main class="laptop:mx-10">
    <h1 class="mb-12 text-gray-800">{data.metadata.title}</h1>
        <img src={data.metadata.image} alt="" class="w-full h-[400px] object-cover mb-6">
        <ul class="text-gray-500 mb-6">
        <li class="flex items-center gap-x-1"><ClockIcon height="20" width="20"/><span>{data.metadata.readingTime.text}</span></li>
        <li class="flex items-center gap-x-1"><CalendarIcon height="20" width="20"/><time datetime={new Date(data.metadata.date).toISOString()}>{new Date(data.metadata.date).toLocaleString('en-US', { dateStyle: 'long' })}</time></li>
        </ul>
    <article class="grid grid-cols-[1fr_min(65ch,calc(100%-32px))_1fr] [&_>_*]:col-start-2 [&_>_*]:col-end-2">
        <svelte:component this={data.component}/>
    </article>
</main>