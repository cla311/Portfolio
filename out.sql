PGDMP     
    *                y        	   portfolio    13.4    13.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
       public            postgres    false    200            �   6  x����n�0E��W̪;��Je�R^R����8����]����!]U�����&0w�m!++AB�!��dW���_Jo�����r�M|������� �0��)�����P��x~��>Gﯼ
�&��&��Kj3�!����J�����&Pl�C�Y��k2�E|�):_/1�	��<I[�n'FcQᔨ�PT��T�kaт��c�k#E9ZV�fE�z���4^��M����ϝ�]�ܴ��͏�k�kma�]+Sa��˵��a�UM�5p���/Q>X#���p����8I��,?'Zv�(����     