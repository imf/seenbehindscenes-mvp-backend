CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'; 
CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  login varchar(255) DEFAULT NULL,
  password_hash bytea DEFAULT NULL,
  identity_token varchar(255) DEFAULT NULL,
  created_at timestamp NOT NULL DEFAULT NOW());
  CREATE UNIQUE INDEX unique_login on users (login);



CREATE TABLE IF NOT EXISTS videos (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name varchar(255) DEFAULT NULL,
  description text DEFAULT NULL,
  thumbnail_url varchar(255) DEFAULT NULL,
  video_url varchar(255) DEFAULT NULL,
  duration int DEFAULT NULL,
  created_at timestamp NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS roles (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT NOW()
) ;


CREATE TABLE IF NOT EXISTS users_in_roles (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL references users(id),
  role_id uuid NOT NULL references roles(id),
  created_at timestamp NOT NULL DEFAULT NOW()
);
  CREATE UNIQUE INDEX user_in_role on users_in_roles (user_id, role_id); 

