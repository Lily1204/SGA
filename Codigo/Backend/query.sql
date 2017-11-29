#Solo para ver las sintaxis de instrucciones SQL 

USE nombreBD;

ALTER TABLE nombreTabla ADD nuevaColumna VARCHAR(12) # Agregar una nueva columna
ALTER TABLE nombreTabla DROP COLUMN nombreColumna # Eliminar una columna 
DROP TABLE nombreTabla # Elimina una tabla de la BD
ALTER TABLE nombreTabla CHANGE COLUMN nombreColumno nuevoNombre VARCHAR(12) # Renomnbra columna en una tabla

RENAME TABLE nombreTabla TO nuevoNombreTabla # Renombrar una tabla en la BD


# RENOMBRADO DE TABLAS EN SGA

RENAME TABLE alumnos TO students
RENAME TABLE grupos TO groups
RENAME TABLE profesores TO professors
RENAME TABLE materias TO subjects
RENAME TABLE aulas TO classrooms
RENAME TABLE alumnogrupo TO student_group
RENAME TABLE aulagrupo TO classroom_group
RENAME TABLE profegrupo TO professor_group
RENAME TABLE materiagrupo TO subject_group

# Renombrando columnas de alumnos

ALTER TABLE students CHANGE COLUMN apellidopaterno lastname VARCHAR(20)
ALTER TABLE students CHANGE COLUMN apellidomaterno s_lastname VARCHAR(20)
ALTER TABLE students CHANGE COLUMN nombre name VARCHAR(25)
ALTER TABLE students CHANGE COLUMN fechanaci birthdate VARCHAR(8)
ALTER TABLE students CHANGE COLUMN tiposangre bloodtype VARCHAR(12)
ALTER TABLE students CHANGE COLUMN edocivil status VARCHAR(5)
ALTER TABLE students CHANGE COLUMN semestre semester INT 


# Renombrando columnas de maestros

ALTER TABLE professors CHANGE COLUMN apellidopaterno lastname VARCHAR(20)
ALTER TABLE professors CHANGE COLUMN apellidomaterno s_lastname VARCHAR(20)
ALTER TABLE professors CHANGE COLUMN nombre name VARCHAR(25)
ALTER TABLE professors CHANGE COLUMN antiguedad antiquity VARCHAR(10)
ALTER TABLE professors CHANGE COLUMN fechanaci birthdate VARCHAR(8)
ALTER TABLE professors CHANGE COLUMN tiposangre bloodtype VARCHAR(12)
ALTER TABLE professors CHANGE COLUMN edocivil status VARCHAR(5)
ALTER TABLE professors CHANGE COLUMN carrera career VARCHAR(5)
ALTER TABLE professors CHANGE COLUMN sueldo salary VARCHAR(5)
 
# Renombrando aulas

 ALTER TABLE classrooms CHANGE COLUMN capacidad capacity INT

#Renombrando grupos

 ALTER TABLE groups CHANGE COLUMN hora hour VARCHAR(12) 

# Renombrando materias

ALTER TABLE subjects CHANGE COLUMN nombre name VARCHAR(25) 
ALTER TABLE subjects CHANGE COLUMN departamento department VARCHAR(30) 


