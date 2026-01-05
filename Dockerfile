# Menggunakan base image nginx
FROM nginx:alpine

# Menyalin file html custom ke dalam container
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80