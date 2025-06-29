---
layout: layout.njk
title: "Margin"
---

# Margin
Kita akan mempelajari margin terlebih dahulu. <br>
Margin adalah properti CSS yang berfungsi untuk memberikan jarak di sekitarnya

## Gambaran
Perhatikan dua kotak di bawah ini:

<div class="kotak kuning"></div>
<div class="kotak putih"></div>

Bagaimana jika kita ingin memberikan jarak di antara kotaknya? <br>
Jawabannya bisa dengan memberikan margin pada salah satu kotak. 

Dan nantinya akan menjadi seperti ini:

<div class="kotak kuning kanan"></div>
<div class="kotak putih"></div>

Jadi bagaimana caranya? 

Caranya pertama coba kalian praktikan membuat dua kotak. <br>
Berikut HTML nya:

```html
<div class="kotak kuning"></div>
<div class="kotak putih"></div>
```

dan berikut CSS nya

```css
.kotak {
    display: inline-block; /* Ini hanya untuk membuat kotaknya bersebelahan */
    width: 120px;
    height: 120px;
}

.kuning {
    border: 6px solid rgb(236, 255, 69);
    background-color: rgba(236, 255, 69, 0.2);
}

.putih {
    border: 6px solid white;
    background-color: rgba(255, 255, 255, 0.2);
}
```

dari kode berikut, seharusnya kalian sudah membuat dua kotak persis seperti di atas.

Lalu kita bisa tambahkan properti yang namanya `margin-right` 
pada class `kuning` yang sudah kalian buat sebelumnya

```css{4}
.kuning {
    border: 6px solid rgb(236, 255, 69);
    background-color: rgba(236, 255, 69, 0.2);
    margin-right: 40px;
}

```
dan seharusnya kotak kalian sudah memiliki jarak di antaranya.

## Cara Menggunakan
Setelah kalian paham gambaran tentang margin, mari kita bahas cara menggunakannya. <br>
Ada dua cara penulisan untuk memberikan aturan margin. <br>

### 1. Margin sisi spesifik
Yang pertama bisa memberikan margin pada sisi spesifik. Yaitu antara sisi atas, kanan, bawah atau kiri
```css
/* Untuk memberi margin pada sisi atas */
margin-top: UKURAN;

/* Untuk memberi margin pada sisi kanan */
margin-right: UKURAN;

/* Untuk memberi margin pada sisi bawah */
margin-down: UKURAN;

/* Untuk memberi margin pada sisi kiri */
margin-left: UKURAN;
```

### 2. Menggunakan properti `margin`

properti `margin` sendiri ada beberapa aturannya. <br>

Jika `margin` hanya diberikan satu nilai, seperti:
```css
margin: 20px;
```
Maka dia akan memberikan margin sebesar `20px` pada semua sisi.

Jika `margin` diberikan dua nilai, seperti:
```css
margin: 20px 10px;
```
Maka dia akan memberikan margin sebesar `20px` pada vertikal (atas dan bawah) dan sebesar `10px` pada horizontal (kanan dan kiri).

Dan terakhir jika `margin` diberi empat nilai, seperti:
```css
margin: 10px 20px 30px 40px;
```
Maka dia akan memberikan margin secara spesifik pada semua sisi, yaitu <br>
sebesar `10px` pada sisi atas, <br>
sebesar `20px` pada sisi kanan, <br>
sebesar `30px` pada sisi bawah, dan <br>
sebesar `40px` pada sisi kiri

Jadi daripada kita menulis:
```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;
```
Lebih baik ditulis saja dengan:
```css
margin: 10px 20px 30px 40px;
```
Dan jika kalian lupa urutan sisinya, kalian tinggal ingat dari atas, lalu berputar searah jarum jam.

<style scoped>

    .kotak {
        display: inline-block;
        width: 120px;
        height: 120px;
    }

    .kuning {
        border: 6px solid rgb(236, 255, 69);
        background-color: rgba(236, 255, 69, 0.2);
    }

    .putih {
        border: 6px solid white;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .kanan {
        margin-right: 40px;
    }

</style>