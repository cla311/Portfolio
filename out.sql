PGDMP     .    &                y        	   portfolio    13.4    13.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16483 	   portfolio    DATABASE     m   CREATE DATABASE portfolio WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE portfolio;
                postgres    false            �            1259    16484    projects    TABLE     N  CREATE TABLE public.projects (
    title character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    tags character varying(255) NOT NULL,
    css_tags character varying(255) NOT NULL,
    start_date character varying(255) NOT NULL,
    end_date character varying(255),
    link character varying(255) NOT NULL
);
    DROP TABLE public.projects;
       public         heap    postgres    false            �          0    16484    projects 
   TABLE DATA           \   COPY public.projects (title, image, tags, css_tags, start_date, end_date, link) FROM stdin;
    public          postgres    false    200   ?       "           2606    16491    projects projects_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (link);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    200            �   �   x�u�=�0E��W�ɭ|��*�A���Ĕ�D����Tu:79/��k|��p�Cش\r���8�\���Tp�B��K�Gw��eI�9b_��:%�d1�=��d������q�S ��o��-2�tЈ	ն�	��j5��]�W!�Qf�H$X���[�M?���-���#�J���Yg     