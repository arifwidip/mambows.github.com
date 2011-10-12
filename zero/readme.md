Zero
====

Zero dibuat untuk mempermudah kolaborasi antara developer dan designer. 

Zero menggunakan beberapa library open source

1. Skeleton
2. 978.gs
3. JQuery
4. jQuery Sooperfish
5. jQuery Flex Slider


Struktur Direktori
------------------

Struktur direktori zero mengikuti struktur direktori worpress theme colorlabs.
Ini dilakukan untuk mempermudah workflow.

	/root
	- index.html
	- single.html
	- images
	- includes
	`-- css
	  `-- semua library css kecuali style.css disimpan di sini 
	`-- js
	  `-- semua library javascript disimpan di sini

Naming Convention
-----------------

Untuk tata cara penamaan class, mohon mengikuti file template zero. Tapi jika 
ingin menambahkan class baru, jangan gunakan camelcase atau underscore dan 
gunakan lower case, contoh

	x divContainer
	x div_container
	x DIVCONTAINER
	o div-container

Using Colorlabs CSS Framework
-----------------------------

Zero menggunakan framework modifikasi Skeleton dan 978.gs, file ini berada 
pada direktori includes/css/ . Zero menggunakan grid dengan 12 column. 
Setiap element yang memiliki grid harus di beri class column, contoh:
	
	<div class="column col12"></div>

Element yang memiliki nested element, harus di beri class columns, contoh:

	<div class="columns col12">
		<div class="column col6"></div>
		<div class="column col6"></div>
	</div>

Framework tidak harus selalu di gunakan, disesuaikain dengan desain saja. Tapi 
untuk penamaan element mohon untuk di ikuti. Agar mempermudah perkerjaan kita.

