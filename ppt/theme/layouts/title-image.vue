<template>
  <div class="bg-main slidev-layout">
    <div class="prose mb-4 w-full max-w-none">
      <slot />
    </div>
    <div class="grid grid-cols-2 gap-8">
      <figure class="flex flex-col justify-center">
        <img :src="$attrs.media1" class="rounded-lg shadow-lg object-cover z-10" />
        <figcaption class="mt-2 text-xs w-full">
          {{ $attrs.caption1 }}
        </figcaption>
      </figure>
      <figure class="flex flex-col justify-center">
        <img :src="$attrs.media2" class="rounded-lg shadow-lg object-cover z-10" />
        <figcaption class="mt-2 text-xs w-full">
          {{ $attrs.caption2 }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>
