  /** sa se li code sajesunlock databaz la .
    nou komanse pa kree table you avan apres nou insert data nan yo

    kreye premye table a ki rele phones k'ap gen nom tout telephone yo **/

CREATE TABLE phones (id SERIAL PRiMARY KEY ,
                      name VARCHAR(60) NOT NULL);
    /** an nou tou insert data nan base done sa . **/
insert into phones (name) VALUES ('Samsung');
insert into phones (name) VALUES ('ZTE');
insert into phones (name) VALUES ('HTC');
insert into phones (name) VALUES ('LG');
insert into phones (name) VALUES ('IPHONE');


    /** n'ap kreye dezyem table ki rele carriers k'ap gen tout carriers ,
    yo epi peyi yo**/

CREATE TABLE carriers (id SERIAL PRiMARY KEY,
                        carrier VARCHAR(100) NOT NULL);
    /** an nou tou insert data nan base done sa . **/
insert into carriers (carrier) VALUES ('AT&T - USA');
insert into carriers (carrier) VALUES ('CRICKET - USA');
insert into carriers (carrier) VALUES ('METRO-PCS - USA');
insert into carriers (carrier) VALUES ('T-MOBILE - USA');
insert into carriers (carrier) VALUES ('VERIZON - USA');

  /** twazyem table a ki se table models tout telephone yo e
    table sa ap relye avek 2 premye table yo **/
CREATE TABLE models (id SERIAL PRiMARY KEY ,
                      model varchar(60) NOT NULL,
                      phone_id INTEGER REFERENCES phones,
                      carrier_id INTEGER REFERENCES carriers);

  /** reket pou table sa select name , models e carrier selman
   SELECT name , model , carrier FROM phones JOIN models ON phones.id = models.phone_id
                JOIN carriers ON carriers.id = models.carrier_id;

    select tout table a
    SELECT * FROM phones JOIN models ON phones.id = models.phone_id
                JOIN carriers ON carriers.id = models.carrier_id;

   an nou met data yo ladann . **/
INSERT INTO models (model , phone_id, carrier_id) VALUES ('S7 EDGE - SM-G935A','1','1');
INSERT INTO models (model , phone_id, carrier_id) VALUES ('Overture 3 - Z851M','2','2');
INSERT INTO models (model , phone_id, carrier_id) VALUES (' J3 - SM-J327T1','1','3');
INSERT INTO models (model , phone_id, carrier_id) VALUES ('  - ',' ',' ');


 /** nou pral kreye table history kote les user fin fe order la tout infomation yo
  stocke nan table sa  **/

CREATE TABLE histories (id SERIAL PRiMARY KEY,
                          phone VARCHAR NOT NULL,
                          model VARCHAR NOT NULL,
                          imei  BIGINT NOT NULL,
                          carrier VARCHAR NOT NULL,
                          price INTEGER NOT NULL,
                          date TIMESTAMP,
                        );
