import client from "./client.ts";

// NON USATO
async function run() {
  await client.execute(`
    create table regions (
      id bigint unsigned not null auto_increment primary key,
      name varchar(255) not null
    ) default character set utf8mb4 collate 'utf8mb4_unicode_ci',
  `);

  await client.execute(
    `alter table regions add unique regions_name_unique(name)`,
  );

  await client.execute(
    `create table provinces (
      id bigint unsigned not null auto_increment primary key, 
      name varchar(255) not null, 
      sigla varchar(255) not null, 
      region_id bigint unsigned null
    ) default character set utf8mb4 collate 'utf8mb4_unicode_ci'`,
  );

  await client.execute(`
    alter table provinces add constraint provinces_region_id_foreign foreign key (region_id) references regions (id)
  `);

  await client.execute(`
    alter table provinces add unique provinces_name_unique(name)
  `);

  await client.execute(`
    alter table provinces add unique provinces_sigla_unique(sigla)
  `);

  await client.execute(`
    create table cities (
      id bigint unsigned not null auto_increment primary key, 
      name varchar(255) not null,
      cap varchar(5) not null,
      cc varchar(4) not null, 
      province_id bigint unsigned null
    ) default character set utf8mb4 collate 'utf8mb4_unicode_ci'
  `);

  await client.execute(`
    alter table cities add constraint cities_province_id_foreign foreign key (province_id) references provinces (id)
  `);

  await client.execute(`
    alter table cities add unique cities_name_cap_unique(name, cap)
  `);

  // await client.execute(`
  //   alter table cities add unique cities_cc_unique(cc)
  // `);
}
