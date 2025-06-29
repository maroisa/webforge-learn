---
layout: layout.njk
title: "Padding"
---

# Padding
Setelah kalian mempelajari margin, seharusnya tidak susah untuk mempelajari padding.
Jika margin berfungsi untuk memberi jarak bagian luar, padding berfungsi untuk memberi jarak bagian dalam atau dari dalam elemen itu sendiri.

## Gambaran

Perhatikan kotak di bawah:
<div class="kotak">ini teks di dalam elemen div</div>

Teks di dalam elemen terlihat sangat mepet kan? Untuk memberikan jarak di dalam kita bisa berikan padding, dan akan menjadi seperti ini:

<div class="kotak padding">ini teks di dalam elemen div</div>

Lebih nyaman dilihat bukan?

## Cara Menggunakan

Cara menggunakan padding sama persis dengan margin. Jadi ada yang sisi spesifik:
<pre>
padding-top
padding-right
padding-bottom
padding-left
</pre>

dan yang umum `padding`. Aturan penggunaannya juga persis dengan properti `margin`.


<style>
    .kotak {
        width: 120px;
        height: 120px;
        background-color: rgb(46, 46, 53);
    }

    .padding {
        padding: 1rem;
    }


</style>