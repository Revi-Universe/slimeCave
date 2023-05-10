<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>
<h1>{data.eggs.filter(i => i.region == "volcano").map(i => i.name)}</h1>
<p>여기는 화산 입니다~!!~~!~!</p>