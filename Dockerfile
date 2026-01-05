FROM nginx:alpine

# Tanda titik pertama (.) artinya: "Ambil SEMUA file di folder laptop ini"
# Tanda path kedua artinya: "Taruh ke dalam folder html si container"
COPY . /usr/share/nginx/html

EXPOSE 80