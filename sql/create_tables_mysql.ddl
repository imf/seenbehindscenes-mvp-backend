CREATE TABLE 'videos' (
  'id' binary(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
  'name' varchar(255) DEFAULT NULL,
  'description' text,
  'thumbnail_url' varchar(255) DEFAULT NULL,
  'video_url' varchar(255) DEFAULT NULL,
  'duration' int DEFAULT NULL,
  'created_at' timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 


CREATE TABLE 'users' (
  'id' binary(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
  'login' varchar(255) DEFAULT NULL,
  'password_hash' binary(32) DEFAULT NULL,
  'created_at' timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ('id'),
  UNIQUE KEY 'unique_login' ('login')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 


CREATE TABLE 'roles' (
  'id' int NOT NULL AUTO_INCREMENT,
  'name' varchar(255) NOT NULL,
  'created_at' timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ('id')
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 

CREATE TABLE 'users_in_roles' (
  'id' int NOT NULL AUTO_INCREMENT,
  'user_id' binary(16) NOT NULL,
  'role_id' int NOT NULL,
  'created_at' timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ('id'),
  UNIQUE KEY 'user_in_role' ('user_id','role_id')
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 


