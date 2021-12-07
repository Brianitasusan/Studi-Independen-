## Specs
Buatlah sebuah halaman website menggunakan HTML yang akan menampilkan:
- `"Website Pertamaku"` menggunakan tag `h1`
- `"Ini adalah pertama kali saya membuat sebuah website menggunakan HTML"` menggunakan tag `p`
- `"tekan ini untuk pergi ke google"` menggunakan tag `a` dimana nanti ia akan membuka tab baru ketika ditekan
- menggunakan atribut `target` agar dapat membuka pada tab yang baru

> Untuk kemudahan dalam menjawab soal, kamu dapat memilih untuk menggunakan salah satu dari ketiga platform dibawah:
> - [skilvul playground](https://skilvul.com/paths/coding-di-skilvul-playground)
> - [repl](https://replit.com/)
> - [stackblitz](https://stackblitz.com/)

> Pengumpulan tugas dapat dilakukan dengan cara membagikan link pengerjaan tugas didalam `google form`
## Expected Results
![website-pertamaku](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/html-assignment-website-pertamaku.png)

## Key Learning Points
- mengimplementasikan penggunaan dari tag-tag sederhana seperti `a`,`p`, dan `h1`
- mengimplementasikan penggunaan dari attribute yang ada pada sebuah tag
- melakukan explorasi terhadap materi yang sudah diberikan, mencari atribut yang sesuai agar ketika elemen `a` ditekan maka ia akan membuka tab yang baru
- ## Specs
> Untuk kemudahan dalam menjawab soal, kamu dapat memilih untuk menggunakan salah satu dari ketiga platform dibawah:
> - [skilvul playground](https://skilvul.com/paths/coding-di-skilvul-playground)
> - [repl](https://replit.com/)
> - [stackblitz](https://stackblitz.com/)

> Pengumpulan tugas dapat dilakukan dengan cara membagikan link pengerjaan tugas didalam `google form`


1. buat jarak menggunakan tag `br` sebanyak 2 kali tepat dibawah tag `a`
2. buatlah judul dengan nama `profilku` menggunakan tag `h1`
3. masukan foto anda menggunakan elemen `img` dan pastikan atribut
    - `width` ⇒ 200px
    - `height` ⇒ 200px
    - `alt` ⇒ fotoku
4. dari website yang sudah anda buat, sekarang tambahkan informasi anda kedalamnya menggunakan list yang mana akan menampilkan informasi dibawah
    - `nama: VALUE`
    - `email: VALUE`
    - `daerah: VALUE`
    - `hobi:` untuk hobi kita anda diharapkan menuliskan 3 hal yang anda sukai, anda harus menuliskannya menggunakan tag `ol` dan `li` hal tersebut diperlukan agar hobi yang ditampilkan memliki urutan dari 1 → 2 → 3

## Expected Results
![biodata](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/html-assignment-biodata.png)

## Key Learning Points
- mengetahui scope atau ruang lingkup dari sebuah tag HTML
- membuat *nested list* menggunakan `ul` dan `li`
- dapat memasukan media berupa foto atau gambar menggunakan tag `img`

## Specs
> Untuk kemudahan dalam menjawab soal, kamu dapat memilih untuk menggunakan salah satu dari ketiga platform dibawah:
> - [skilvul playground](https://skilvul.com/paths/coding-di-skilvul-playground)
> - [repl](https://replit.com/)
> - [stackblitz](https://stackblitz.com/)

> Pengumpulan tugas dapat dilakukan dengan cara membagikan link pengerjaan tugas didalam `google form`

1. membuat jarak menggunakan tag `br` sebanyak 2x setelah elemen terakhir
2. membuat judul berupa `Film Favoritku` menggunakan tag `h1`
3. membuat sebuah table
    - terdiri dari 3 baris dan kolom
    - baris pertama berupa header (pembuatan header menggunakan tag `th`)
        - no
        - nama
        - produsen
    - baris kedua dan ketiga berisikan film favorit kalian (pembuatan content menggunakan tag `td`)
## Expected Results
![film-favoritku](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/html-assignment-film-favoritku.png)

## Key Learning Points
Mengimplementasikan penggunaan tag table beserta tag lainnya seperti tr, th, dan td


## Specs
> Untuk kemudahan dalam menjawab soal, kamu dapat memilih untuk menggunakan salah satu dari ketiga platform dibawah:
> - [skilvul playground](https://skilvul.com/paths/coding-di-skilvul-playground)
> - [repl](https://replit.com/)
> - [stackblitz](https://stackblitz.com/)

> Pengumpulan tugas dapat dilakukan dengan cara membagikan link pengerjaan tugas didalam `google form`

1. membuat jarak dengan elemen terakhir menggunakan tag `br` sebanyak 2 kali
2. membuat judul dengan isi `Get in Touch` menggunakan tag `h1`
3. membuat tag `form` dimana didalamnya terdapat
    - `label`
        - `for` ⇒ nama & email
    - `input`
        - `type` ⇒ text || email
        - `id` ⇒ nama & email
    - setiap setelah membuat tag `input` harap diberi jarak menggunakan `br`
    - pada tag `input` terakhir berijarak sebanyak 2 tag `br`
    - buat elemen `button`
        - `type` ⇒ submit

## Expected Results
![get in touch](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/html-assignment-get-in-touch.png)

## Key Learning Points
memahami kegunaan dari tag form, label, dan input

## Specs
> Untuk kemudahan dalam menjawab soal, kamu dapat memilih untuk menggunakan salah satu dari ketiga platform dibawah:
> - [skilvul playground](https://skilvul.com/paths/coding-di-skilvul-playground)
> - [repl](https://replit.com/)
> - [stackblitz](https://stackblitz.com/)

> Pengumpulan tugas dapat dilakukan dengan cara membagikan link pengerjaan tugas didalam `google form`

- mengelompokan komponen kedalam tag `section` atau `header`
- tiap kelompok akan dipisahkan oleh 2 tag `br`, jadi kita memiliki 4 bagian
- setiap tag `section` harus memiliki atribut `id` yang sesuai dengan judul-nya kecuali `website pertamaku`, dan tatacara penulisan menggunakan sistem `kebab case` ex: `Website Pertamaku` ⇒ `website-pertamaku` huruf kecil spasi digantikan dengan tanda `-`
- membuat navbar menggunakan tag `nav`
- didalam tag `nav` terdapat 4 tag `a` yang mana ia akan mengarah ke tiap-tiap `id` dari `section` yang ada
    - `#header`, `#profilku`, `#film-favoritku`, dan `#get-in-touch`

## Key Learning Points
- mampu mengelompkan tag-tag HTML kedalam bagian-bagian tertentu
- memahami lingkup dari suatu tag
- memahami penggunaan atribut HTML

## Specs
Upload website yang sudah kamu buat menggunakan layanan hosting [Netlify](https://netlify.com), kemudian kumpulkan kedalam `google form`

## Key Learning Points
Siswa dapat mengunggah file HTML-nya kedalam layanan hosting gratis yaitu netlify
