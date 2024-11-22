
CREATE TABLE articulos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10, 2),
    cantidad_en_stock INT
);


INSERT INTO articulos (nombre, descripcion, precio, stock) VALUES
('Laptop Gaming', 'Laptop de alta gama para juegos', 1200.99, 10),
('Smartphone XPro', 'Smartphone con camara de 108 MP', 999.99, 25),
('Auriculares Bluetooth', 'Auriculares inalambricos con cancelación de ruido', 120.50, 50),
('Reloj inteligente', 'Reloj con monitoreo de actividad y notificaciones', 150.00, 100),
('Cámara DSLR', 'Camara profesional con lente intercambiable', 850.75, 15),
('Teclado mecánico', 'Teclado con switches mecanicos para gaming', 90.99, 40),
('Silla ergonómica', 'Silla cómoda para largas horas de trabajo o estudio', 220.45, 30),
('Mouse óptico', 'Mouse con sensor optico de alta precisión', 45.60, 60),
('Monitor 4K', 'Monitor con resolución 4K y pantalla curva', 350.00, 20),
('Cargador solar', 'Cargador portatil a base de energia solar', 25.99, 80),
('Tablet 10"', 'Tablet de 10 pulgadas con Android 11', 200.00, 35),
('Bocina Bluetooth', 'Bocina portátil resistente al agua', 55.25, 120),
('Disco duro externo 1TB', 'Disco duro externo para almacenar grandes archivos', 60.00, 50),
('Cámara de seguridad', 'Cámara de vigilancia inalambrica con visión nocturna', 70.99, 10),
('Ropa deportiva', 'Conjunto de ropa deportiva para entrenamientos', 35.50, 200),
('Mochila para laptop', 'Mochila con compartimiento para laptop de hasta 15"', 40.00, 75),
('Teclado para tablet', 'Teclado Bluetooth para tablet', 60.00, 45),
('Adaptador HDMI', 'Adaptador para conectar dispositivos a TV o monitor', 15.99, 150),
('Batería externa', 'Batería portátil para cargar dispositivos móviles', 40.75, 60),
('Cámara GoPro', 'Cámara deportiva GoPro resistente al agua y golpes', 399.00, 25);
