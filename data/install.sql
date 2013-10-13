drop table if exists app
;
drop table if exists users
;
drop table if exists modules
;
drop table if exists user_modules
;
drop table if exists types
;
drop table if exists user_tyes
;
create table app(db_key text primary key, name text not null, version real not null)
;
create table app_status(last_user_id text, last_update_datetime text, auto_login integer)
;
create table users(id integer primary key autoincrement, username text not null, password text not null, email text not null, status integer not null)
;
create table modules(id integer primary key autoincrement, name text not null, nav_id text not null, displayname text, version text, author text, dependencies text)
;
create table user_modules(id integer primary key autoincrement, user_id integer not null, module_id integer not null, status integer not null)
;
create table types(id integer primary key, type text not null)
;
create table user_tyes(id integer primary key autoincrement, user_id integer not null, type_id integer not null)
;
