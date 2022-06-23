# Next.js OpenJira App

* Para correr localmente, se necesita la base de datos.
```
  docker-compose up -d
```

* Crear un env en la raiz con estas variables
```
  MONGO_URL
```

* MongoDB URL Local:
```
  mongodb://localhost:27017/entriesdb
```

# Llenar la base de datos con informacion de pruebas
Llamar api:
```
  http://localhost:3000/api/seed
```


